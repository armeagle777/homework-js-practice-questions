const removeDublicates = arr =>{
    return Array.from(new Set(arr))
}


console.log("Log:::removeDublicates([1,2,3,3,3,4,1,2]):::",removeDublicates([1,2,3,3,3,4,1,2]))