// Add your functions here
function map(arr, func){
    let output = []
    for (const element of arr){
        output.push(func(element))
    }
    return output
}

function reduce(arr, func, start){
    let output
    if (start){
        output = start
        for (const element of arr){
            output = func(element, output)
        }
    }
    else {
        output = arr[0]
        for (let i = 1; i < arr.length; i ++){
            output = func(arr[i], output)
        }
    }

    return output
}