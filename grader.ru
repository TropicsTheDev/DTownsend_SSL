class Grader
    def self.gradeItem(grade)
        if grade < 60 
            return "F"
        elsif grade > 59 and grade < 70 
            return "D"
        elsif grade > 69 and grade < 80 
            return "C"
        elsif grade > 79 and grade < 90 
            return "B"
        elsif grade > 89 
            return "A"
        end
    end
end
puts "What is your name?"
name = gets
puts "Ok " + name + ". What is the name of your assignment?"
assignmentName = gets
puts "What number grade did you get on " + assignmentName
grade = gets

letterGrade = Grader.gradeItem(grade.to_i)
puts name + ", you got a(n) + " + letterGrade + " on " + assignmentName

