const calculator = (numberOne, numberTwo, sign) => {
    let result = 0
    switch (sign) {
        case '+':
            result = numberOne + numberTwo
            break;
        case '-':
            result = numberOne - numberTwo
            break;
        case '*':
            result = numberOne * numberTwo
            break;
        default:
            result = numberOne / numberTwo

    }

    return `${numberOne} ${sign} ${numberTwo} = ${result}`
}


console.log("Log:::calculator(1,2,'+'):::", calculator(1, 3, '+'))
console.log("Log:::calculator(1,2,'-'):::", calculator(1, 2, '-'))
console.log("Log:::calculator(1,2,'*'):::", calculator(1, 2, '*'))
console.log("Log:::calculator(1,2,'/'):::", calculator(1, 2, '/'))