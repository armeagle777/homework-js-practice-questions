const longestWord = sentence => {
    return sentence.split(' ').reduce((acc, el)=>{
        if(el.length > acc.length){
            acc = el
        }
        return acc
    })
}


console.log(longestWord('Web Development Tutorial'))