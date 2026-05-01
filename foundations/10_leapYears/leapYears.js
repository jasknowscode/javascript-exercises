// leap year occurs every 4 years, 
// not divisible by 100
// except divisible by 400 - i % 4 === 0
// use if statements to check conditions - return true or false
// if year is divisible by 4 && 400 return true
// if year is divisible by 100 && 4 return false
// years defined as any integer greater than 0; i > 0

const leapYears = function(year) 
{
    if (year % 400 === 0) {
        return true;
    } if (year % 100 === 0) {
        return false;
    } if (year % 4 === 0) {
        return true;
    };
};

leapYears(2000); // is a leap year: returns true
leapYears(1985); // is not a leap year: returns false

// Do not edit below this line
module.exports = leapYears;
