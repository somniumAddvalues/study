import requests
from bs4 import BeautifulSoup
from datetime import datetime
from dateutil.relativedelta import relativedelta
import json
import csv
# 반복1: 기사번호를 변경시키면서 데이터 수집을 반복하기
# 1 ~ 100까지 10단위로 반복(1, 11, ..., 91)

class naver:
    

    @staticmethod
    def blog(keyword, start_date, end_date, num):
        data_list = []
        # start_date = datetime.now() - relativedelta(months=1)
        # end_date = datetime.today().strftime("%Y.%m.%d")
        # keyword = '\"사회공헌\"'
        data_list = naver.create_article(keyword, start_date, end_date, num)
        return data_list

    @staticmethod
    def create_article(keyword,start_date, end_date,num):
        cnt = 0
        url = "https://search.naver.com/search.naver?where=post&query={}&ds={}&de={}&start=".format(
            keyword, start_date, end_date)
        data_list = [["주소", "제목"]]
        for n in range(1,num, 10):
            raw = requests.get(url+str(n), headers={'User-Agent': 'Mozilla/5.0'})
            html = BeautifulSoup(raw.text, "html.parser")
            articles = html.select("ul.type01 > li > dl > dt")
        # 반복2: 기사에 대해서 반복하면 세부 정보 수집하기
        # 리스트를 사용한 반복문으로 모든 기사에 대해서 제목/언론사 출력
            for i, ar in enumerate(articles):
                cnt += 1
                href = ar.select_one("a")["href"]
                title = ar.select_one("a")["title"]
                #source = ar.select_one("span._sp_each_source").text
                data = [href, title]
                data_list.append(data)
        return data_list

    @staticmethod
    def create_csv(data_list):
        with open('/Users/imtaebin/Downloads/sample_test.csv', 'w', newline='', encoding="euc-kr") as f:
            makewrite = csv.writer(f)
            for value in data_list:
                try:
                    makewrite.writerow(value)
                except:
                    pass

class insta:
    @staticmethod
    def main1():
        print(1)


    

