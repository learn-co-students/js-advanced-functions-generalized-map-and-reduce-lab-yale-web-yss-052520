// Add your functions here
function map(sourceArray, pass) {
    let newArray = []
    for(let i = 0; i < sourceArray.length; i++) {
        newArray.push(pass(sourceArray[i]))
    }
    return newArray
    // pass(sourceArray)
}

function reduce(sourceArray, pass, startingPoint) {
    let memo;
    if (startingPoint == undefined) {
        for(let i = 0; i < sourceArray.length - 1; i++) {
            if (i == 0) {
                memo = pass(sourceArray[i + 1], sourceArray[i])
            } else {
                memo = pass(sourceArray[i + 1], memo)
            }
        }
    } else {
        for(let i = 0; i < sourceArray.length; i++) {
                if (i == 0) { 
                    memo = pass(sourceArray[i], startingPoint)
                } else {
                    memo = pass(sourceArray[i], memo)
                }
        }
    }
    return memo
}