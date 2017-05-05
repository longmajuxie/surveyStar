import requests
import json
import pymysql
import re
from  bs4 import BeautifulSoup

#网页dom请求
def requestDom(url) :
    res = requests.get(url)
    res.encoding='gb2312'
    soup = BeautifulSoup(res.text, 'html.parser')
    return soup

#网页内容过滤
def requestData(url):
    soup = requestDom(url);
    soup = soup.find("div", class_="main")
    soup = soup.find_all("li")
    #print (soup)
    list = []
    for s in soup:
        item={}
        item["link"] = "http://www.xzw.com"+s.find("a").get("href")
        item["title"] = s.find("h3").text
        if(s.find("img")):
            item["img"] = s.find("img").get("src")
        else:
            item["img"] ="http://img.xzw.com/150717/5309-150GGI10U42.jpg"
        item["content"] = s.find("p").text
        item["detail"] = str(requestDom(item["link"]).find("div",class_="sbody"));
        list.append(item);
    return list

#数据io操作
def ioData(list):
    list=json.dumps(list)
    file_name='measurementList.json'
    with open(file_name,'w') as f:
        f.write(list)
    f.close()
    with open(file_name, 'r') as r:
        rList=json.load(r)
    r.close()
    print(list)

databaseName='python'
tableName='news'
#数据库初始化
def initDatabase():
    conn = pymysql.connect(host='127.0.0.1', port=3306, user='root', passwd='admin')
    cur = conn.cursor()
    #创建数据库
    createDatabase='create database if not exists '+ databaseName
    createTable='CREATE TABLE IF NOT EXISTS '+ tableName + '(Id INT PRIMARY KEY AUTO_INCREMENT, title VARCHAR(255),genre VARCHAR(255),link VARCHAR(255),question TEXT,createDate DATE ,ticketNumber INT(11) ,author VARCHAR(255) )'
    cur.execute(createDatabase)
    conn.select_db(databaseName)
    cur.execute(createTable)
    conn.close()

def databaseOp(sql,listDic):
    conn = pymysql.connect(host='127.0.0.1', port=3306, user='root', passwd='admin', db=databaseName , charset='utf8')
    cur = conn.cursor()
    cur.execute(sql,listDic)
    conn.commit()
    cur.close()
    conn.close()
def requestGenreData(genre):
    n = 1
    listItemAll=[]
    url=""
    while n <= 10:
        if genre=="aiqing":
            url="http://www.xzw.com/a/xinliceshi/"+ genre + "/l_"+str(n)+".html"
        else:
            url="http://www.xzw.com/test/"+genre+"/l_"+str(n)+".html"
        print (url)
        listItemAll.append(requestData(url))
        n = n + 1
    return listItemAll

listAll=[]
#initDatabase()
listAll.append(requestGenreData("aiqing"))
listAll.append(requestGenreData("xingge"))
listAll.append(requestGenreData("quwei"))
listAll.append(requestGenreData("caifu"))
listAll.append(requestGenreData("zhishang"))
listAll.append(requestGenreData("zhiye"))
listAll.append(requestGenreData("shejiao"))
listAll.append(requestGenreData("egao"))
listAll.append(requestGenreData("zonghe"))
ioData(listAll)
