// Create Class Person
/*
 *   Class Constructor
 *
 *   @param firstName - A string denoting the Person's first name.
 *   @param lastName - A string denoting the Person's last name.
 */
// Write your constructor here
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

class Student extends Person {
  constructor(firstName, lastName) {
    super(firstName, lastName);
    this.finalScore = "";
  }

  // Write your method here
  calculate(score) {
    /* calculate student final score
      if student's score >= 90 then he got 'A'
      if student's score between 80 - 89 then he got 'B'
      if student's score between 70 - 79 then he got 'C'
      if student's score under 70 then he got 'D'
      */
    if (score >= 90) return (this.finalScore = "A");
    else if (score >= 80 && score < 90) return (this.finalScore = "B");
    else if (score >= 70 && score < 80) return (this.finalScore = "C");
    else if (score < 70) return (this.finalScore = "D");
  }

  getStudentScore() {
    return `${this.firstName} ${this.lastName} with score ${this.finalScore}`;
    // return firstname lastname: finalScore
  }
}

const jhon = new Student("jhon", "doe");
jhon.calculate(80);
console.log(jhon.getStudentScore()); // jhon doe: B

const suse = new Student("suse", "nice");
jhon.calculate(69);
console.log(jhon.getStudentScore()); // suse nice: D

const anita = new Student("anita", "rown");
jhon.calculate(92);
console.log(jhon.getStudentScore()); // anita rown: A
