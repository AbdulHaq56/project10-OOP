#! usr/bin/env node 
import inquirer from "inquirer";
import chalk from "chalk";
class student {
  name: string;
  constructor(n: string) {
    this.name = n;
  }
}
class player {
  students: student[] = [];
  addStudents(ojb: any) {
    this.students.push(ojb);
  }
}
let persons = new player();
const start = async (persons: player) => {
    console.log(chalk.red.bold`\nWelcome...\n`);
    do{
      const personAns = await inquirer.prompt({
          name: "ans",
          type: "list",
          message: "Select Who do you want to talk to or Exit ?",
          choices: ["Your Self", "Student","Exit"],
        });
  if (personAns.ans == "Your Self") {
    console.log("\nYou are talking to Yourself...");
    console.log("This is a good place for you to talk about yourself...\n");
} else if (personAns.ans == "Student") {
    const name = await inquirer.prompt({
      name: "studentName",
      type: "input",
      message: "Enter the Student Name...",
    });
    const fined = persons.students.find((val) => val.name == name.studentName);
    if (!fined) {
        const add = new student(name.studentName);
        persons.addStudents(add);
        
        console.log(chalk.green`\nNew Student Added in List\n`);
        console.log(`Hello I'm ${name.studentName} and I'm fine \n`);
        console.log(persons.students);    
    } 
    if (fined){
        console.log(`\nHello I am ${fined.name} & I am fine \n`);
        console.log(persons.students);
    }
}
else if(personAns.ans == "Exit"){
process.exit()
}
}while(true)
}
start(persons);
