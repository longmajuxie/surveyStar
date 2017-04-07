import requests
import json
import pymysql
import re
from  bs4 import BeautifulSoup

#网页dom请求
def requestDom(url) :
    res = requests.get(url)
    res.encoding='utf-8'
    soup = BeautifulSoup(res.text, 'html.parser')
    return soup

#网页内容过滤
def requestData(url):
    soup = requestDom(url);
    soup = soup.find_all("table")[1]
    # soup=soup.find_all('td')[0]
    soup = soup.find_all("td", class_="style_hei_12")
    # print (soup)
    list = []
    for s in soup:
        result = {}
        if s.find('a'):
            sId=s.find('a').get('href')[s.find('a').get('href').find('=')+1:]
            result["link"] = 'http://www.zdiao.com/vtest_effect.asp?vtestid='+ sId
            s1 = requestDom(result["link"])
            questionListDom=s1.find_all('div',class_='style_hei_12_bold')
            t1= s1.find_all('table')[1]
            t1 = t1.find_all('table')
            questionDataList=[]
            for index, t2 in enumerate(t1):
                questionData={}
                questionChoicelist=[]
                t3 = t2.find_all('tr')
                if index < len(questionListDom):
                    questionData["title"] = questionListDom[index].text.strip()
                    questionData["genre"] = questionData['title'].find('多1选') > 0 and 1 or 0
                    for index1, t4 in enumerate(t3):
                        questionChoice = {}
                        questionChoice["title"] = t4.find('td', class_='style_hei_12').text
                        questionChoice["ticketNumber"] = t4.find('div', class_='style_hong_12').text
                        questionChoicelist.append(questionChoice)
                    questionData["questionChoiceList"]=questionChoicelist
                    questionDataList.append(questionData)
            result["title"] = s1.find('div', class_='style_cheng_18_bold').text.strip()
            d1=s1.find_all('div', class_='style_shenhui_12')[2]
            d1=d1.find_all('span',class_='style_hei_12')
            result["createDate"] =d1[0].text
            result["ticketNumber"]=d1[2].text
            result["genre"] = d1[-2].text
            result["author"] = d1[-1].text
            result["question"]=questionDataList
            insertSql = 'insert into '+ tableName + '(title,genre,link,question,createDate,ticketNumber,author) values ( %s, %s, %s, %s, %s, %s, %s )'
            listDic=[str(result["title"]), str(result["genre"]), str(result["link"]), str(result["question"]), str(result["createDate"]), str(result["ticketNumber"]), str(result["author"])]
            print(insertSql,listDic)
            databaseOp(str(insertSql),listDic)
            list.append(result)
    return list

#数据io操作
def ioData(list):
    list=json.dumps(list)
    file_name='newsList.json'
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
initDatabase()
list= requestData('http://www.zdiao.com/vtest.asp?kindid=1')
list1=requestData('http://www.zdiao.com/vtest.asp?kindid=2')
list2=requestData('http://www.zdiao.com/vtest.asp?kindid=3')
list3=requestData('http://www.zdiao.com/vtest.asp?kindid=4')
list4=requestData('http://www.zdiao.com/vtest.asp?kindid=5')
list5=requestData('http://www.zdiao.com/vtest.asp?kindid=6')
listAll=[list,list1,list2,list3,list4,list5]
ioData(listAll)
