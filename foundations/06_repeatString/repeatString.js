const repeatString = function(num, strg) {
    let strg = 'hey';
    if (num < 0) {
        return 'ERROR'
    }
    for (let i = 0; i <3; i++) {
        strg += num;
    }
    return strg 
};

alert( strg)
// Do not edit below this line
module.exports = repeatString;
