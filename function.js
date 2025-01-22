//Named Function add: pointer to the function

function add1(a, b){
    return a+b;
}

//Anonymous Function funtion returns pointer to the variable add

const add2 = function(c, d){
    return c+d; 
}

//Arrow Function 

const add3 = (e, f) => {
    return e+f;
}

//Function Call

console.log(add1(32,32));
console.log(add2(36,32));
console.log(add3(39,32));
