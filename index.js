// Add your functions here
const map = (array, func) => array.map(func)
const reduce = (array, func, starting) => starting ? array.reduce(func, starting) : array.reduce(func) 