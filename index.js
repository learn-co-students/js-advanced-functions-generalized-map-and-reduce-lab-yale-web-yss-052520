const map = (arr, f) => arr.map(f)
const reduce = (arr, f, s) => s ? arr.reduce(f, s) : arr.reduce(f)