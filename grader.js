const readLine = require("readline");

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class Grader {
  static gradeItem(grade) {
    if (grade < 60) return "F";
    else if (grade > 59 && grade < 70) return "D";
    else if (grade > 69 && grade < 80) return "C";
    else if (grade > 79 && grade < 90) return "B";
    else if (grade > 89) return "A";
  }
}

rl.question("What is your name?", (name) => {
  rl.question("What is the name of your assignment?", (assignmentName) => {
    rl.question(
      "What is your number grade on " + assignmentName + "?",
      (grade) => {
        letterGrade = Grader.gradeItem(Number(grade));
        console.log(
          name + ", you received a(n) " + letterGrade + " on " + assignmentName
        );
        rl.close();
      }
    );
  });
});
