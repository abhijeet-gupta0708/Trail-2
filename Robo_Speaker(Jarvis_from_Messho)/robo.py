import pyttsx3

engine=pyttsx3.init()


if __name__=='__main__' :
    print("Welcome to RObo Speakes created by Brad-Man")
    while True :
        x=input("\n TO Quit ENter 'Q' or \n Enter What you want to hear in robotic voice : ")
        if x=="Q"or x=="q" :
            print("BYe Bye Friend")
            engine.say( "by by friend")
            engine.runAndWait()
            engine.stop()
            break
        engine.say(x)
        engine.runAndWait()
        engine.stop()
