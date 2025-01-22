const A = {
    "name" : "Ritik",
    roll : 123,
    design : "Aviraj", 
    11 : "MERN"
}
const B = {
    "name1" : "Ritik",
    roll1 : 123,
    design1 : "Aviraj", 
    111 : "MERN"
}

const C = Object.assign({},A,B)

const D = {...A, ...B};

console.log(C,D);


//Object.freeze(A);

//A["name"] = "MERN STACK";




//const A = 123;

//A = 321;

//console.log(A);
