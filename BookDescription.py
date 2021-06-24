import json
import os

i = 1
booksDict = {}
bookDescription = {}

for _ in os.listdir("Assets/"):
    for __ in os.listdir("Assets/"+_+"/"):
        for ___ in os.listdir("Assets/"+_+"/"+__+"/"):
            if(".jpg" in ___):
                bookDescription["title"] = __
                bookDescription["image"] = "Assets/"+_+"/"+__+"/" + ___
                bookDescription["description"] = "Description"
                bookDescription["downloadhref"] = "https://www.google.com"
                bookDescription["webviewhref"] = "https://www.google.com"
        booksDict[i] = bookDescription.copy()
        booksDescription = {}
        i += 1
print(booksDict)

with open("text.json","w") as file:
    json.dump(booksDict,file)