// Add your functions here

function map(source,func){
    const result = []
    source.forEach(element => result.push(func(element)))
    return result
}

function reduce(source, func, memo){
    let recurser = 0; 
    if (!memo) {
        memo = source[0]
        recurser = 1
    }
    source = source.slice(recurser)
    source.forEach(item => memo = func(item, memo))
    return memo 
}