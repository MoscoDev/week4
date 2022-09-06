// Instruction: Put in a Github Repo and ensure you select Week 4 in the submission form.

// Create a Person Object:
// ● A person should have some characteristics
// ● A person should be able to perform some functions
// ● Assuming School is a place, attribute list of persons to a school, using the concept of Inheritance.
// Solve this based on your understanding.


class Person {
  constructor(name, age, address) {
    this.name = name;
    this.age = age,
    this.address= address
  }
  eat(food){
    console.log(this.name + " is eating " + food)
    return 
  }
  read(book){
    console.log(this.name + "started reading " + book)
    setTimeout(()=>{console.log(`${this.name} is almost done with ${book}`)}, 1000)
    setTimeout(() => {
      console.log(`${this.name} has finished reading ${book}`);
    }, 1000);
  }

}

class School extends Person{
    constructor(){
        this.allStudents = [];
    } 
    enrollStudent(student){
        this.allStudents.push(student)
        return "student.name is successfully"
    }
     listStudents(){
        console.log(this.allStudents)
        return this.allStudents
     }
}


