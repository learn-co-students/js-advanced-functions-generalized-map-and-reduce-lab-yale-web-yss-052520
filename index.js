// Add your functions here
//Writing our own map and reduce functions by passing a callback function as second argumnent
const map = (arr, fn) => {
    let newArr = [...arr]
    for (let i = 0; i < newArr.length; i++) {
        newArr[i] = fn(newArr[i])
    }
    return newArr 
}

const reduce = (arr, fn, memo) => {
    //Like JS built in reduce function, if no memo provided, set it to first element 
    let sliceOff = 0; 
    
    //if memo is undefined (no parameter passed)
    if (!memo) {
        memo = arr[0]
        sliceOff = 1
    }
    
    arr = arr.slice(sliceOff)
    arr.forEach(item => memo = fn(item, memo))
    return memo 
}