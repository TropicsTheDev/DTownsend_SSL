class Grader:
    @staticmethod
    def grade_item(grade):
        if(grade < 60 ):
            return "F"
        elif(grade > 59 and grade < 70 ):
            return "D"
        elif(grade > 69 and grade < 80 ):
            return "C"
        elif(grade > 79 and grade < 90 ):
            return "B"
        elif(grade > 89 ):
            return "A"

name = raw_input("What is your name?")
print("thank you " + name)
assignment_name = raw_input("What is the name of your assignment?")
grade = raw_input("What is your number grade on " + assignment_name + "?")

letter_grade = Grader.grade_item(float(grade))
print(name + ", you received a(n) " + letter_grade + " on " + assignment_name )