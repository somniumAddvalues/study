import twint
from bs4 import BeautifulSoup
from datetime import datetime as dt, timedelta
from dateutil.relativedelta import relativedelta
import time

c = twint.Config()
c.Limit = 50
c.Search = '코로나 OR 우한 폐렴'
c.Since = (dt.now() - relativedelta(days=7)).strftime('%Y-%m-%d')
c.Until = dt.today().strftime('%Y-%m-%d')
c.Output = 'output.csv'
c.Popular_tweets = False
c.Store_csv = True
c.Hide_output = True

print(c.Since)

twint.run.Search(c)



