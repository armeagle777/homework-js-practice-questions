const upperCase = str => {
const arrayFromString = str.split(' ')
return arrayFromString.reduce((acc, el, i, array)=>{
    acc = i === 0 ? acc : acc + ' '+ el.replace(el[0], el[0].toUpperCase())
    return acc
}, arrayFromString[0].toUpperCase())

}
// const upperCaseOther = str => {
// let result =''
//     for(let i =0; i < str.length; i++){
//         result += i > 0 && str[i-1]!==' ' ? str[i]  : str[i].toUpperCase()
//     }
//     return result
//
// }

console.log("Log:::upperCase('i love you'):::",upperCase('i love you'))

// console.log("Log:::upperCaseOther('i love you'):::",upperCaseOther('i love you'))