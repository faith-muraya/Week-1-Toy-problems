function calculateTheGrade() {
    const marks = prompt('Enter Your Marks');

  if (isNaN(marks) || marks < 0 || marks > 100) {
    return "Invalid input. Marks must be between 0 and 100.";
  }

    
  if (marks > 79) {
    return "A ";
  } else if (marks >= 60) {
    return "B";
  } else if (marks >= 50) {
    return "C";
  } else if (marks >= 40) {
    return "D";
  } else {
    return "E";
  }
}

const grade = calculateTheGrade();
alert(`Your Grade is : ${grade}`);

