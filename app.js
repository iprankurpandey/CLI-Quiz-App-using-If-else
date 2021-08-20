const chalk =require('chalk')
const readlineSync = require('readline-sync')

console.log(chalk.green.bgBlue.bold("Lets find out how well do you know me!!! 🙈"))

const inputName = readlineSync.question(chalk.cyanBright("❤ Please enter your name❤ :"))


console.log("welcome " + " " + inputName + "Get Ready for the Quiz")
console.log("added")