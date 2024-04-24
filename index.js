#!usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let firstName = [];
let secondName = [];
let firstNames = [];
let secondNames = [];
let finalNames = [];
let sample1 = "AEIMQUY";
let sample2 = "BFJNRVZ";
let sample3 = "CGKOSW";
let sample4 = "DHLpTX";
let responce = await inquirer.prompt([{
        name: "arr",
        type: "input",
        message: chalk.blue.bold.italic("Please enter how many words are there in your name...")
    }]);
console.log(`1 2 3 4\n`);
console.log(`A B C D\nE F G H\nI J K L\nM N O P\nQ R S T\nU V W X\nY Z\n`);
for (let i = 1; i <= responce.arr; i++) {
    let ordinal = `${i}`;
    switch (ordinal) {
        case "1" || "21" || "31":
            ordinal = `${1}st`;
            break;
        case "2" || "22" || "32":
            ordinal = `${1}nd`;
            break;
        case "3" || "23" || "33":
            ordinal = `${1}rd`;
            break;
        default:
            ordinal = `${1}th`;
            break;
    }
    const firstTurn = await inquirer.prompt([{
            name: "alpha",
            type: "number",
            message: chalk.blue.bold.italic `Enter the colum number of the ${ordinal} leter of your name....`,
            validate: (num) => {
                if (num <= 4) {
                    return true;
                }
                else {
                    return `You have selected an invalid number`;
                }
            }
        }]);
    firstName.push(firstTurn.alpha);
}
let first = ("A E I M Q U Y");
let second = ("B F J N R V Z");
let third = ("C G K O S W");
let forth = ("D H L P T X");
firstName.forEach((val) => {
    switch (val) {
        case 1:
            firstNames.push(first);
            secondNames.push(sample1);
            break;
        case 2:
            firstNames.push(second);
            secondNames.push(sample2);
            break;
        case 3:
            firstNames.push(third);
            secondNames.push(sample3);
            break;
        case 4:
            firstNames.push(forth);
            secondNames.push(sample4);
            break;
        default: return null;
    }
});
console.log(chalk.yellow.bold.italic(`\nCOULD YOU REPEAT THAT FOR THE SAVE NAME...?\n`));
console.log(`1 2 3 4 5 6 7\n`);
firstNames.forEach((alpha) => { console.log(alpha); });
console.log(`\n`);
for (let i = 1; i <= responce.arr; i++) {
    let ordinal = `${i}`;
    switch (ordinal) {
        case "1" || "21" || "31":
            ordinal = `${i}st`;
            break;
        case "2" || "22" || "32":
            ordinal = `${i}nd`;
            break;
        case "3" || "23" || "33":
            ordinal = `${i}rd`;
            break;
        default:
            ordinal = `${i}th`;
            break;
    }
    const secondTurn = await inquirer.prompt([{
            name: "letter",
            type: "input",
            message: chalk.blue.bold.italic `Enter the colum number of the ${ordinal}leter of your name...`,
            validate: (val) => {
                if (val <= 7) {
                    return true;
                }
                else {
                    return chalk.green.bold.italic `You have selected an invalid name`;
                }
            }
        }]);
    secondName.push(secondTurn.letter);
}
for (let i = 0; i < responce.arr; i++) {
    finalNames.push(secondNames[i].slice(secondName[i] - 1, secondName[i]));
}
let name = finalNames.join("");
console.log(chalk.red.bold.italic(`\nTHE NAME YOU THOUGHT OF :${name}`));
