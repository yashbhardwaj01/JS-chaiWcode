// Numbers

const score = 400
// console.log(score);

let balance = new Number(100)
// console.log(balance);

// console.log(balance.toString());
// console.log(typeof balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(4));

const otherNumber = 1123.8966
// console.log(otherNumber.toPrecision(3));

const hundreds = 1000000
// console.log(hundreds.toLocaleString());

// console.log(hundreds.toLocaleString('en-IN'));

/* Maths  */

console.log(Math);
// console.table([Math.PI , Math.abs(-4) , Math.round(9.4), Math.ceil(4.3)]);

// console.log((Math.random()*10) +1);

// statically assigning min & max (like in case of dice [1,6])

const min =10
const max =20

console.log(Math.floor(Math.random() * (max-min+1))+min);



