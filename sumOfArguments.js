const sumOfArguments = (...argsArray) =>{
    return argsArray.reduce((acc, el)=>{
        return acc += el
    })
}

const multiply = (...argsArray)=>{
    return argsArray.reduce((acc, el)=>{
        return acc *= el
    })
}


console.log("Log:::sumOfArguments(1,2,3,4):::",sumOfArguments(1,2,3,4))
console.log("Log:::sumOfArguments(4,7):::",sumOfArguments(4, 7))
console.log("Log:::sumOfArguments(4):::",sumOfArguments(4))


console.log("Log:::multiply(1,2,3,4):::",multiply(1,2,3,4))
console.log("Log:::multiply(1,2,3,4):::",multiply(4,7))
console.log("Log:::multiply(1,2,3,4):::",multiply(4))
