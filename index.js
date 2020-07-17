// Add your functions here

function map(ar, fn) {
    let newAr = []
    for (let x=0; x < ar.length; x++) { 
         newAr.push(fn(ar[x]))
    }
    return newAr
}

function reduce(ar, fn, sp) {
    let mem, xs
    if (!sp) {
        mem = ar[0]
        xs=1
    }
    else {
        mem = sp
        xs = 0
    }
    for (let x=xs; x < ar.length; x++) { 
         mem = fn(ar[x], mem)
    }
    return mem
}