
//returns true or false if value passed in is a positive integer
function checkInteger(num) {
   if(typeof num === "number") {
      return Number.isInteger(num) && num > 0;
   } else {
      return false;
   }
}

module.exports = checkInteger;