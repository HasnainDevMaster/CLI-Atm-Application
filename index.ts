#! /usr/bin/env node

// npm install inquirer
import inquirer from "inquirer";

// Initial account balance
let balance = 10000;
const userPin = "9595";

// Configure inquirer prompts
const prompt = inquirer.createPromptModule();

async function main() {
  console.log("Welcome to the ATM Application!");

  // Ask the user to enter their PIN
  const { enteredPin } = await prompt({
    type: "password",
    name: "enteredPin",
    message: "Please enter your 4-digit PIN:",
    mask: "*", // Hide the entered PIN
    validate: (input) => {
      if (input.length !== 4) {
        // Check if the input PIN has a length of 4 digits
        return "Please enter a 4-digit PIN.";
      }
      return true;
    },
  });

  // If the entered PIN does not match the user's PIN, exit the ATM application
  if (enteredPin !== userPin) {
    console.log("Incorrect PIN. Exiting the ATM application.");
    return;
  }

  // Main loop for ATM actions
  while (true) {
    const { action } = await prompt({
      type: "list",
      name: "action",
      message: "Choose an action:",
      choices: ["Check Balance", "Deposit", "Withdraw", "Fast Cash", "Exit"],
    });

    switch (action) {
      case "Check Balance":
        console.log(`Your current balance: $${balance}`);
        break;
      case "Deposit":
        // Prompt user for deposit amount and validate input
        const { depositAmount } = await prompt({
          type: "input",
          name: "depositAmount",
          message: "Enter the deposit amount:",
          validate: (input) => {
            const parsedInput = parseFloat(input);
            if (isNaN(parsedInput) || parsedInput <= 0) {
              return "Please enter a valid positive amount.";
            }
            return true;
          },
        });

        // Update balance after deposit
        balance += parseFloat(depositAmount);
        console.log(`Deposited $${depositAmount}. New balance: $${balance}`);
        break;
      case "Withdraw":
        // Prompt user for withdrawal amount and validate input
        const { withdrawAmount } = await prompt({
          type: "input",
          name: "withdrawAmount",
          message: "Enter the withdrawal amount:",
          validate: (input) => {
            const parsedInput = parseFloat(input);
            if (
              isNaN(parsedInput) ||
              parsedInput <= 0 ||
              parsedInput > balance
            ) {
              return "Please enter a valid amount within your balance.";
            }
            return true;
          },
        });

        // Decrease the balance by the withdrawn amount
        balance -= parseFloat(withdrawAmount);
        console.log(`Withdrawn $${withdrawAmount}. New balance: $${balance}`);
        break;
      case "Fast Cash":
        // Prompt user to select a fast cash amount
        const { fastCashAmount } = await prompt({
          type: "list",
          name: "fastCashAmount",
          message: "Select a fast cash amount:",
          choices: ["100", "500", "1000", "5000"],
        });

        const amount = parseFloat(fastCashAmount);
        if (amount > balance) {
          console.log("Insufficient balance for fast cash.");
        } else {
          // Decrease the balance by the fast cash amount
          balance -= amount;
          console.log(
            `Fast cash withdrawn: $${amount}. New balance: $${balance}`
          );
        }
        break;
      case "Exit":
        console.log("Thank you for using the ATM. Have a great day!");
        return;
    }
  }
}
// Call the main function to start the ATM application
main();
