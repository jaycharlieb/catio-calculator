// basic math operations

const addFunc = function(num1, num2) {
    return num1 + num2
}

const subtractFunc = function(num1, num2) {
    return num1 - num2
}

const multiplyFunc = function(num1, num2) {
    return num1 * num2
}

const divideFunc = function(num1, num2) {
    return num1 / num2
}


// basic variables for math operations

let num1 = 0
let num2 = 0
let operator = ''

// perform math operation

const operate = function(num1, num2, operator) {
    if (operator === 'add') {
        return addFunc(num1, num2)
    } else if (operator === 'subtract') {
        return subtractFunc(num1, num2)
    } else if (operator === 'multiply') {
        return multiplyFunc(num1, num2)
    } else if (operator === 'divide') {
        return divideFunc(num1, num2)
    }
}


