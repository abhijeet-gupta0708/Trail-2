import random
num=int(input("Enter a Number Between 1-50  "))
guessw=random.randint(1,50)
count=1

def guess (num,guessw,count):
    if (num==guessw) :
        print("You Guessed the number right in " ,count," Chances")
    elif num>guessw:
         print("You Guessed a greater number \n")
         count =count+1
         newnum=int(input("Enter a Number Between 1-50  "))
         guess(newnum,guessw,count)
    elif num<guessw:
         count =count+1
         print("You Guessed a lesser number \n")
         newnum=int(input("Enter a Number Between 1-50  "))
         guess(newnum,guessw,count)
    
guess(num,guessw,count)
    
    