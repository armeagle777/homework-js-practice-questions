let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
}

const printValues = obj =>{
    Object.keys(obj).forEach(key => {
        if(key === 'value'){
            console.log("Log:::value:::",obj[key])
        }else if(obj[key] instanceof Object){
            printValues(obj[key])
        }
    })
}



printValues(list)