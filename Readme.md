**ATM Application** 🏧
______________________
Welcome to the ATM Application! This simple CLI ATM application allows users to perform basic banking actions such as checking their balance, making deposits, withdrawing cash, and selecting fast cash amounts. The application is written in Node.js and uses the inquirer packages for user input.
_________________
**Features:** 🌟
_________________

**PIN Verification:** Users must enter their 4-digit PIN to access the ATM. 🔒

**Actions:**

**Check Balance:** View the current account balance. 💰

**Deposit:** Add funds to the account. 💸

**Withdraw:** Withdraw funds (within available balance). 💸

**Fast Cash:** Quickly withdraw preset amounts. 💨

**Exit:** Exit the ATM application. 🚪
______________________
**Prerequisites:** 🛠️
______________________

Before running the game, ensure you have the following installed:

**Node.js:** To run the game, you’ll need Node.js installed on your system. You can download it from https://nodejs.org.

**TypeScript:** The game is written in TypeScript, so you’ll need to install TypeScript. Use the following command in your terminal:
```
npm install -g typescript
```
_____________________
**Installation:** 🚀
_____________________

Clone this repository to your local directory:

git clone Installation: 🚀

Clone this repository to your local directory:

git clone https://github.com/HasnainDevMaster/CLI-Atm-Application.git

**Note:**

Ater cloning the files, navigate to the directory in which files are cloned

Install the dependencies by running the following command in your terminal (cmd):
```
npm install
```
_____________________
**Running the Application:** ▶️
_____________________
Run the application using the command:
```
tsc && node index.js
```
_______________
**Example:** 📝
______________
```
Welcome to the ATM Application!

? Please enter your 4-digit PIN: ****

? Choose an action: (Use arrow keys)
> Check Balance
  Deposit
  Withdraw
  Fast Cash

? Choose an action: Check Balance

Your current balance: $10000

? Choose an action: Deposit

? Enter the deposit amount: 10000

Deposited $10000. New balance: $20000

? Choose an action: Withdraw

? Enter the withdrawal amount: 10000

Withdrawn $10000. New balance: $10000

? Choose an action: Fast Cash

? Select a fast cash amount: 5000

Fast cash withdrawn: $5000. New balance: $5000

? Choose an action: Exit

Thank you for using the ATM. Have a great day!
```
________________
**Conclusion:** 🎈
________________
This ATM application demonstrates a basic banking system with a user-friendly interface, utilizing the inquirer and chalk packages to create an interactive and visually appealing experience. The application provides a range of features, including PIN authentication, balance checking, depositing, withdrawing, and fast cash withdrawal.
