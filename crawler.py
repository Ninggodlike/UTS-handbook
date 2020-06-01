#!/usr/local/bin/python
# -*- coding: utf-8 -*-

import requests
import pymongo
from bs4 import BeautifulSoup


DBHOST = 'mongodb://dbUTS:QAZwsxedc1@cluster-shard-00-00-x27mr.mongodb.net:27017,cluster-shard-00-01-x27mr.mongodb.net:27017,cluster-shard-00-02-x27mr.mongodb.net:27017/test?ssl=true&replicaSet=Cluster-shard-0&authSource=admin&retryWrites=true&w=majority'
DBNAME = 'UTSHandbook'


class Crawler():
    def __init__(self, urls=[]):
        self.urls = urls
        self.client = pymongo.MongoClient(DBHOST)
        self.mgdb = self.client[DBNAME]
        self.run()

    def run(self):
        for tablename, url in self.urls.items():
            content = requests.get(url).content
            html = BeautifulSoup(content, 'html.parser')
            if tablename.find("major") >= 0:  # 处理四个major页面
                self.deal_majors(tablename, html, url)
            elif tablename.find("subjects") >= 0:  # 处理subjects
                self.deal_subjects(tablename, html)
            else:
                self.deal_ugpg(tablename, html)
            # break
            print("\n\n\n")

    def deal_majors(self, tablename, html, url):
        major_or_submajor = tablename.split('_')[-1]  # 查找标签，不能出错
        a = html.find("a", {"id": major_or_submajor})
        iter = a.next_element
        while iter:
            if major_or_submajor.find("submajors") < 0:
                if iter.name and iter.name.startswith('h') and iter.find('a', {'id': 'submajors'}):  # 到了major的末尾
                    print("get submajors, stop")
                    break
            elif iter.name == 'div':  # 到了submajor的末尾
                break
            if iter.name == 'ul':
                lis = iter.find_all('li')
                for li in lis:
                    desp = li.text
                    atag = li.find('a')
                    name = atag.text.strip()
                    # host, _ = urllib.splithost(url)
                    href = url.split('edu.au')[0] + "edu.au" + atag.attrs['href']  # 相对路径需要转换成绝对路径
                    print(name, desp, href)
                    self.save_to_db(tablename, name, desp, href)

            iter = iter.next_element
        pass

    def deal_ugpg(self, tablename, html):
        trs = html.find_all('tr')
        for tr in trs:
            tds = tr.find_all('td')
            print(len(tds))
            if len(tds) != 2:
                print("invalid tr rows")
                continue
            atag = tds[0].find('a')
            href = atag.attrs['href']
            name = atag.text.strip()
            desp = tds[1].text.strip()
            self.save_to_db(tablename, name, desp, href)

    def deal_subjects(self, tablename, html):
        div = html.find("div", {'class': 'ie-images'})
        if div:
            ps = div.find_all("p")
            for i in range(len(ps)):
                p = ps[i]
                if not p.find("strong"):
                    continue
                # 获取到了list
                desp = p.nextSibling
                while desp != None:
                    atag = desp.nextSibling
                    if (not atag) or ('href' not in atag.attrs):
                        break
                    href = atag.attrs['href']
                    name = atag.text.strip()
                    desp = desp.strip()
                    print("name=%s desp=%s href=%s" % (name, desp, href))
                    self.save_to_db(tablename, name, desp, href)
                    desp = atag.nextSibling
                    if desp:
                        desp = desp.nextSibling

    def save_to_db(self, tablename, name, desp, href):
        try:
            table = self.mgdb[tablename]
            data = {
                'name': name,
                'despction:': desp,
                'href:':href,
                'all_data': requests.get(href).content
            }
            result = table.insert_one(data)
        except:
            pass
        pass


if __name__ == "__main__":
    # 一个页面的数据存储到一个表(集合）里
    # key是表名，value是url
    urls = {
        'ug': 'https://www.handbook.uts.edu.au/it/ug/index.html',
        'pg': 'https://www.handbook.uts.edu.au/it/pg/index.html',
        'subjects': 'https://www.handbook.uts.edu.au/it/lists/alpha.html',
        'bachelor_majors': 'https://www.handbook.uts.edu.au/it/area/ug.html#majors',
        'bachelor_submajors': 'https://www.handbook.uts.edu.au/it/area/ug.html#submajors',
        'postgraduate_majors': 'https://www.handbook.uts.edu.au/it/area/pg.html#majors',
        'postgraduate_submajors': 'https://www.handbook.uts.edu.au/it/area/pg.html#submajors',
    }
    crawler = Crawler(urls)
