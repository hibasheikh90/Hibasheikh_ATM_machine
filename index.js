#! /usr/bin/env node
import inquirer from "inquirer";
// balance and pin code
let myBalance = 10000;
let myPin = 2211;
// welcome message
console.log("Welcome to Hiba sheikh ATM Machine");
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your pin code:"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("Pin is Correct, Login Successfully!");
    let operationAnswer = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "Select an operation",
            choices: ["Withdraw Amount", "Check Balance"]
        }
    ]);
    if (operationAnswer.operation === "Withdraw Amount") {
        let withdrawAnswer = await inquirer.prompt([
            {
                name: "withdrawMethod",
                type: "list",
                message: "Select a withdrawal methode:",
                choices: ["Fast Cash", "Enter Amount"]
            }
        ]);
        if (withdrawAnswer.withdrawMethod === "Fast Cash") {
            let fastcashAnswer = await inquirer.prompt([
                {
                    name: "fastCash",
                    type: "list",
                    message: "Select Amount",
                    choices: [1000, 2000, 3000, 5000, 10000, 15000, 20000]
                }
            ]);
            if (fastcashAnswer.fastCash > myBalance) {
                console.log("Insufficient Balance");
            }
            else {
                myBalance -= fastcashAnswer.fastCash;
                console.log(`${fastcashAnswer.fastCash} withdraw successfully`);
                console.log(`Your Remaining Balance is ${myBalance}`);
            }
        }
        else if (withdrawAnswer.withdrawMethod === "Enter Amount") {
            let amountAnswer = await inquirer.prompt([
                {
                    name: "amount",
                    type: "number",
                    message: "Enter the amount to withdraw:"
                }
            ]);
            if (amountAnswer.amount > myBalance) {
                console.log("Insufficient Balance");
            }
            else {
                myBalance -= amountAnswer.amount;
                console.log(` ${amountAnswer.amount} Withdraw Successfully!`);
                console.log(`Your Remaining Balance is ${myBalance}`);
            }
        }
    }
    else if (operationAnswer.operation === "Check Balance") {
        console.log(`Your Account Balance is ${myBalance}`);
    }
}
else {
    console.log("Pin is Incorrect, Try Again");
}
