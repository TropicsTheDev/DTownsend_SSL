import sys

name = raw_input("What is your name?")

 f = open("myfile.txt", "r")
 print(f.read())
# f.write("Here is my text " + name)
# f.close()