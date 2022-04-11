const includesSubstring = (string, substring) => {
    return string.indexOf(substring) >=0
}


console.log("Log:::includesSubstring('Hello', 'ell'):::",includesSubstring('Hello', 'ell'))
console.log("Log:::includesSubstring('Kill','lolo'):::",includesSubstring('Kill','lolo'))