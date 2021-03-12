# 要求一：Python 取得網路上的資料並儲存到檔案中
# 台北市政府提供景點公開資料連線網址如下：
# https://data.taipei/api/v1/dataset/36847f3f-deff-4183-a5bb-800737591de5?scope=resourceAquire
# https://padax.github.io/taipei-day-trip-resources/taipei-attractions.json
# -*- coding: UTF-8 -*-
import json
import urllib.request as req
import ssl
ssl._create_default_https_context = ssl._create_unverified_context  
src="https://padax.github.io/taipei-day-trip-resources/taipei-attractions.json"
with req.urlopen(src) as response:
    data=json.load(response)

spotList=data["result"]["results"]
with open("data.txt","w",encoding="utf-8") as file:
    for spot in spotList:
        imglist=spot["file"].split(".jpg",1)
        img=imglist[0]+".jpg"
        file.write(spot["stitle"]+","+spot["longitude"]+","+spot["latitude"]+","+img+"\n")      