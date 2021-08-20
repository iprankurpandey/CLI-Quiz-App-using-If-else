 const chalk =require('chalk')
const readlineSync = require('readline-sync')

console.log(chalk.green.bgBlue.bold("Lets find out how well do you know me!!! 🙈"))

const inputName = readlineSync.question(chalk.cyanBright("❤ Please enter your name❤" +" :"))
console.log("Hi"+" " + chalk.yellowBright(inputName) + " ,"+ "How well do you know Prankur? Lets get it.")

console.log("\t")

const gameRules = readlineSync.question(chalk.magentaBright("Would you like to read the Game rules,Press 1 to read it OR press ENTER to directly play the game."))
let userInput = gameRules
if (userInput == 1){
console.log("\t")
console.log(chalk.magentaBright("Game Rules"))
console.log("\t")
  console.log("(a) for every right answer you will get "+ (chalk.green("2 Pizzas 🍕🍕."))) 
  console.log("(b) for every wrong answer you will get "+ (chalk.red("1 Pizza 🍕."))) 
  console.log(chalk.yellow("(c) this is just a game, I dont get offended you don't know me, cheers❤ !!"))
  console.log("(d)Enter 1/ 2/ 3 for each question to answer")
  
}
// else if (userInput == ENTER) {
//     console.log("PLAY THE GAME")
//     console.log("Enter 1/ 2/ 3 for each question to answer")
// }
let scoreCard  = 0;
console.log("\t")
const questionOne =console.log("1) What is my nickname?")
let questionOne_option1 = console.log("[1] Prankur")
let questionOne_option2 = console.log("[2] Ajay")
let questionOne_option3 = console.log("[3] Samved")

let answerInput_questionOne = readlineSync.question(questionOne_option1 ,questionOne_option2,questionOne_option3)
if (answerInput_questionOne == 1){
  console.log("you are right")
  scoreCard =scoreCard+2;
  console.log("you got"+" "+scoreCard+" "+"Pizza🍕🍕")
}
else if (answerInput_questionOne == 2 || 3){
  console.log("you are wrong")
  scoreCard =scoreCard-1;
  console.log("you got"+" "+scoreCard+" "+"Pizza🍕")
  
}
else{
  console.log("Invalid Input")
}
console.log("\t")
const questionTwo =console.log("1) Where do I live?")
let questionTwo_option1 = console.log("[1] Banglore")
let questionTwo_option2 = console.log("[2] Pune")
let questionTwo_option3 = console.log("[3] Satna")

let answerInput_questionTwo = readlineSync.question(questionTwo_option1 ,questionTwo_option2,questionTwo_option3)
if (answerInput_questionTwo == 3){
  console.log("you are right")
  scoreCard =scoreCard+2;
  console.log("you got"+" "+scoreCard+" "+"Pizza🍕🍕")
}
else if (answerInput_questionTwo == 2 || 3){
  console.log("you are wrong")
  scoreCard =scoreCard-1;
  console.log("you got"+" "+scoreCard+" "+"Pizza🍕")
  
}
else{
  console.log("Invalid Input")
}
console.log("\t")
const questionThree       =  console.log("3)Who is my best friend?")
let questionThree_option1 =  console.log("[1] Gajendra")
let questionThree_option2 =  console.log("[2] Prateek")
let questionThree_option3 =  console.log("[3] Anurag")

let answerInput_questionThree = readlineSync.question(questionThree_option1 ,questionThree_option2,questionThree_option3)
if (answerInput_questionThree == 1){
  console.log("you are wrong")
  scoreCard =scoreCard-1;
  console.log("you got"+" "+scoreCard+" "+"Pizza🍕")
}
else if (answerInput_questionThree == 2||3){
  console.log("you are right")
  scoreCard =scoreCard+2;
  console.log("you got"+" "+scoreCard+" "+"Pizza🍕🍕")
}
else{
  console.log("Invalid Input")
}
console.log("\t")

const questionFour =console.log("4)What do I like the most")
let questionFour_option1 = console.log("[1] Pasta")
let questionFour_option2=  console.log("[2] Pizza")
let questionFour_option3=  console.log("[3] Burger")

let answerInput_questionFour = readlineSync.question(questionFour_option1 ,questionFour_option2,questionFour_option3)
if (answerInput_questionFour == 2){
  console.log("you are right")
  scoreCard =scoreCard+2;
  console.log("you got"+" "+scoreCard+" "+"Pizza🍕🍕")
}
else if (answerInput_questionFour == 1||3){
  console.log("you are wrong")
  scoreCard =scoreCard-1;
  console.log("you got"+" "+scoreCard+" "+"Pizza🍕")
}
else{
  console.log("Invalid Input")
}
console.log("\t")

const questionFive =console.log("5)What language I can speak apart from Hindi?")
let questionFive_option1 = console.log("[1] Russian")
let questionFive_option2=  console.log("[2] English")
let questionFive_option3=  console.log("[3] Spanish")

let answerInput_questionFive = readlineSync.question(questionFive_option1 ,questionFive_option2,questionFour_option3)
if (answerInput_questionFive == 2){
  console.log("you are right")
  scoreCard =scoreCard+2;
  console.log("you got"+" "+scoreCard+" "+"Pizza🍕🍕")
}
else if (answerInput_questionFive == 1||3){
  console.log("you are wrong")
  scoreCard =scoreCard-1;
  console.log("you got"+" "+ scoreCard +" "+"Pizza🍕")
}
if (scoreCard == 10 ){
  console.log("you are best friend")
}
else if (scoreCard == 9 || 8 || 7 || 6)
{
  console.log("you are friend")
}
else if(scoreCar<= 5 ) {
  console.log("we could be friends")
}
else{
  console.log("Invalid Input")
}

console.log("\t")
