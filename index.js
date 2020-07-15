// Add your functions here
const map = (arr, fn) => {
    let copy = [...arr];
    for (let index in arr){
        copy[index] = fn(copy[index]);
    }
    return copy;
}

const reduce = (arr, fn, start = arr[0]) =>{
    var value = (start == arr[0]) ? start : fn(start, arr[0]);
    for (let val of arr.slice(1)){
        value = fn(value, val)
    }
    return value;
}