const map = (arr, fn) => arr.map(fn)

const reduce = (arr, fn, start) => start ? arr.reduce(fn, start) : arr.reduce(fn)