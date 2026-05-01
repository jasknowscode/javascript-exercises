// create a function that takes two integers 
let sum = 0;

const sumAll = function(min, max) {
    for (let i = min; i <= max; i++) {
        sum += i;
    }
};
console.log(sumAll)

// Do not edit below this line
module.exports = sumAll;
