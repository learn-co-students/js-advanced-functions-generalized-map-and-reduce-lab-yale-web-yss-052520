// Add your functions here

function map(array, fn) {
  for (let i = 0; i < array.length; i++) {
    array[i] = fn(array[i])
  }
  return array
}

function reduce(array, fn, startingPoint) {
  let memo = new Number(0)
  if (startingPoint) {
    memo = startingPoint
  }
  for (let i = 0; i < array.length; i++) {
    memo = fn(array[i], memo)
  }
  return memo
}