## Bank Tech Test

```
As a User
So that i can store my money
I want to be able to desposit some in my account

As a User 
So that i can access my money
I want to be able to withdraw some from my account

As a User
So that i can see all my ingoings & outgoings
I want to be able to print my bank statement
```


## Setup

Clone the repo

## Run the tests
```
open SpecRunner.html
```
## Run the code and interact with the program
```
open index.html
```
and open the Chrome Developer tools, then go to the console tab. 
A shortcut to opening this console is Cmd-Option-i or Command-alt-i (for Mac)

Next, you need to create a new account, in the console, type:
```
let account = new Account;
```
Note: You can name 'account' whatever you want (e.g. adams_account), but you need to use this name for all of the commands listed below.

Now that your bank account is up and running, you can interact with your code using these commands:

To deposit money, you must provide an amount and a date:
```
account.deposit(200, 12-01-2020)
```
To withdraw money:
```
account.withdraw(20, 13-01-2020)
```
To see your balance:
```
account.balance
```
To print your bank statement:
```
account.statement();
```

Your functioning program should look something like this:

<img width="266" alt="Screenshot 2021-04-07 at 11 58 43" src="https://user-images.githubusercontent.com/76166627/113856097-b2788c80-9798-11eb-84cd-0bf046ba349e.png">

## My Approach to this project.

1. TDD
    Following the red, green, refactor approach, working one feature at a time and writing the tests first.
    I've used Jasmine as the testing framework.
2. Code Structure
    SRP: Having one JS function for each feature, that way it becomes easier for the user to interact with the program & test the features, and it makes the code easier to read for other developers.
    I used an array of hashes to record the transactions, stored in one variable (called 'this.transactions'), because it kept the code readable when iterating over the array, and it was easy to access each value.
    I used a constructor function to set up the balance variable and the transactions record automatically when the class instance was created.
3. Project
    I've included setup instructions and a list of commands, including a screenshot of what an interaction with this program might look like. 
    I've included an 'index.html' file, which makes it easier to run the code, using one command, and instructions on where to find the console.