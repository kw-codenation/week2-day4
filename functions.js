console.log("Week 2 Day 4 Functions")
console.log("=================================")

// Activity 1
console.log("\nActivity 1")
console.log("----------")

const factorial = (n) =>
{
    if ((n === 0) || (n === 1))
    {
        return 1
    }
    else
    {
        return (n * factorial(n-1))
    }
}

// As I don't know what the factorial of 33 is, I've used 4 & 5 instead
console.log('The factorial of 0 is ' + factorial(0))
console.log('The factorial of 1 is ' + factorial(1))
console.log('The factorial of 4 is ' + factorial(4))
console.log('The factorial of 5 is ' + factorial(5))

// Activity 2
console.log("\nActivity 2")
console.log("----------")

console.log("Welcome to McHeartAttack, can I take your order?")
let orderCount = 0

const takeOrder = (food, topping) =>
{
    orderCount++
    console.log(`${orderCount} ${food} with ${topping}`)
}

takeOrder('pizza', 'pineapple')
takeOrder('fish', 'chips')
takeOrder('hamburger', 'double cheese')

console.log("All this for one person? I'll give you the number for the local ambulance")

// Activity 3
console.log("\nActivity 3")
console.log("----------")

/*
let balance = 1000

const withdrawal = (amount) =>
{
    if (amount > balance)
    {
        console.log("You do not have enough money to withdraw $" + amount)
    }
    else if (amount == balance)
    {
        console.log("You have withdrawn all you money from your account, are you being chased by the police?")

    } else
    {
        console.log(`You have withdrawn $${amount} from your account, your balance is now $` + (balance - amount))
    }
}

let amount = 1510
console.log(`Withdraw $${amount} from my account`)
withdrawal(amount)

amount = 1000
console.log(`Withdraw $${amount} from my account`)
withdrawal(amount)

amount = 430
console.log(`Withdraw $${amount} from my account`)
withdrawal(amount)

*/

var balance = 1000

const cashMachine = (pin, operation='', amount) =>
{
    if (pin == 1234)
    {
        switch (operation.toLowerCase)
        {
            case 'b':
                    console.log(`Your balance is £${balance}`)
                break;
            case 'w':
                if (amount > balance)
                {
                    console.log("You do not have enough money to withdraw £" + amount)
                }
                else if (amount == balance)
                {
                    console.log("You have withdrawn all you money from your account, are you being chased by the police?")
        
                } 
                else
                {
                    balance -= amount
                    console.log(`You have withdrawn £${amount} from your account, your balance is now £` + balance)
                }
                break;
            case 'd': break;
            default : console.log("Please enter 'b' to show balance, 'w' to withdraw money and 'd' to deposit money")
        }
 
    }
    else
    {
        console.log("You idiot you have entered the wrong pin number")
    }
}


// scenaro 1 - wrong pin number
console.log("\nScenaro 1 - wrong pin number")
let amount = 1510
let pin = 3456
console.log(`Withdraw $${amount} from my account`)
cashMachine(pin, 'W', amount)

// scenaro 2 - withdrawing too much money
console.log("\nScenaro 2 - withdrawing too much money")
amount = 1510
pin = 1234
console.log(`Withdraw £${amount} from my account`)
cashMachine(pin, 'w', amount)

// scenaro 3 - all of the money
console.log("\nScenaro 3 - withdrawing all of the money")
amount = 1000
pin = 1234
console.log(`Withdraw £${amount} from my account`)
cashMachine(pin, 'w', amount)

// scenaro 4 - withdraw some money
// withdraw £430
console.log("\nScenaro 4 - withdraw some money")
amount = 430
pin = 1234
cashMachine(pin, 'w', 'amount')
// withdraw £200
amount = 200
pin = 1234
cashMachine(pin, 'w', amount)

// scenaro 5 - 
// withdraw £430
console.log("\nScenaro 5 - display balance")
cashMachine(pin, 'b', amount)

// scenaro 6 - entering an incorrect operation
console.log("\nScenaro 6 - entering an incorrect operation")
cashMachine(amount, pin)
cashMachine(pin,'b', amount)