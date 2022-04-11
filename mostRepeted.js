const mostRepeted = (arr) => {
    const elementsObj = arr.reduce((acc, el) => {
      acc[el] ? acc[el] ++ : acc[el] = 1
        return acc
    }, {})


    return Object.keys(elementsObj).reduce((acc, el)=>{
        if(elementsObj[el] > elementsObj[acc]){
            acc = el
        }
        return acc
    })
}


console.log("Log:::mostRepeted(['a','a','b',''b','b']):::",mostRepeted(['a','a','b','b','b']))