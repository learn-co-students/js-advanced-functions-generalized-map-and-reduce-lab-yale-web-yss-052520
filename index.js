// Add your functions here
const map = (arr, fxn) => arr.map(fxn)

const reduce = (arr, fxn, start) => start ? arr.reduce(fxn, start) : arr.reduce(fxn)