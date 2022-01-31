function exponent(base, exponent){
    let newBase = base;
    for (let i = 1; i < exponent; i++) {
        newBase = newBase * base;
    }
    return newBase;
}
//console.log(exponent(2,3));
