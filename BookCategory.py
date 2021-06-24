import json
import os

i = 1
booksDict = {}
categoryDict = {}

for _ in os.listdir("Assets/"):
    for __ in os.listdir("Assets/"+_+"/"):
        for ___ in os.listdir("Assets/"+_+"/"+__+"/"):
            if(".jpg" in ___):
                # print(_,__,___,i)
                categoryDict[i] = [__,___]
                i += 1
    booksDict[_] = categoryDict
    categoryDict = {}
print(booksDict)

with open("text.json","w") as file:
    json.dump(booksDict,file)