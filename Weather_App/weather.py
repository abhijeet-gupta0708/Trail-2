import requests
import json
import pyttsx3

# Setting up Voice Module

engine=pyttsx3.init()

api="4004c99cbda54c51950182852261802"
city=input("Enter the city : ")
url = f"http://api.weatherapi.com/v1/current.json?key=4004c99cbda54c51950182852261802&q={city}&aqi=no"

response=requests.get(url)
data=response.json()
#print(data)
#response.text
if response.status_code !=200 :
    print("Data Not Found")
else :
    print(f"The Location is : {data["location"]["name"]}")
    print(f"The Country is {data["location"]["country"]}")
    print(f"Temperature in Celcius = {data["current"]["temp_c"]} degree celcius")
    print(f"Temperature in Farenheiht = {data["current"]["temp_f"]} degree Farenheiht")





    ## Using Voice Agent to say All these thing 
    engine.say(f"The Location is {data["location"]["name"]}")
    engine.runAndWait()
    engine.say(f"The Country is {data["location"]["country"]}")
    engine.runAndWait()
    engine.say(f"Temperature in Celcius = {data["current"]["temp_c"]} degree celcius")
    engine.runAndWait()
    engine.say(f"Temperature in Farenheiht = {data["current"]["temp_f"]} degree Farenheiht")
    engine.runAndWait()
    engine.stop()
   