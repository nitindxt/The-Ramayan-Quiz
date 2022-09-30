import readline from 'readline-sync'
import chalk from 'chalk'

const log = console.log;
let score = 0;


const userName = readline.question(chalk.bgRed.bold.black("Hi there, What's your good name?\n"));

log(chalk.blue.bold.italic("\nGlad to have you here '" + userName + "'."));

log(chalk.greenBright.bold("\nLet’s see how good your Ramayan knowledge is. 😉\n"))
log(chalk.greenBright.bold("\n|| Jay Shree Ram ||\n"))

log(chalk.inverse('\nEnter 1, 2, 3 or 4 to answer\n'))

const questions = [
  {
    question: `\n${chalk.underline("Question 1")} : ${chalk.magentaBright.bold("What was the name of Shiva’s bow that was used in Sita’s swayamvar?")}  
    \n 1. Agneyasthra 
    \n 2. Pinak 
    \n 3. Pasha 
    \n 4. Anjalika 
    \n`,
    answer: 2
  },
  {
    question: `\n${chalk.underline("Question 2")} : ${chalk.yellowBright.bold("Ram also had a sister. What was her name?")}
    \n 1. Aishwarya 
    \n 2. Durga 
    \n 3. Nandini 
    \n 4. Shanta 
    \n`,
    answer: 4
  },
  {
    question: `\n${chalk.underline("Question 3")} : ${chalk.greenBright.bold('Before being killed by Ram, only one other character managed to defeat Ravan in combat. Who?')} 
    \n 1. Shiva 
    \n 2. Bali
    \n 3. Kumbhkaran
    \n 4. Vibhishan
    \n`,
    answer: 2
  },
  {
    question: `\n${chalk.underline("Question 4")} : ${chalk.cyanBright.bold("Who didn’t want to fight Ram but did so reluctantly?")} 
    \n 1. Indrajit 
    \n 2. Kuber 
    \n 3. Kumbhkaran 
    \n 4. Ahiravan 
    \n`,
    answer: 3
  },
  {
    question: `\n${chalk.underline("Question 5")} : ${chalk.blackBright.bold("Which demon from this list did Ram NOT kill during his exile?")} 
    \n 1. Mareech 
    \n 2. Viradha
    \n 3. Subahu
    \n 4. Kabandha 
    \n`,
    answer: 3
  }
]

const play = (question, answer) => {
  let userAnswer = readline.question(question);

  if (userAnswer == answer) {
    log(chalk.green.bold("\n✨✨✨ Hurray! you got it right 🎉🎉🎉."));
    score = score + 1;
  } else {
    log(chalk.red("\n❌❌❌ OOPS! try harder next time 🙂🙂🙂."));
    log("\nCorrect answer is: " + chalk.bgBlack.greenBright.bold(answer));
  }
  log("\nCurrent score: " + chalk.bgBlack.blue.bold(score));
  log("--------------------------------------");
}



const main = () => {
  for (let i = 0; i < questions.length; i++) {
    play(questions[i].question, questions[i].answer)
  }
}

main();
if (score === 5) {
  log(chalk.bgGreen.black.bold("\nCongratulations! Your total score is: " + score + '/5. You are among the toppers 🎉🎉🎉'))
}
else {
  log(chalk.bgGreen.black.bold("\nYour total score is: " + score))
}
