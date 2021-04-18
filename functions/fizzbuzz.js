
//accepts a positive integer, returns Fizz if number divisible by 3, Buzz if divisible by 5, or FizzBuzz if both,
//otherwise it returns number passed in
function fizzbuzz(num) {
   if(num % 3 === 0 && num % 5 === 0) {
      return "FizzBuzz";
   } else if (num % 3 == 0) {
      return "Fizz";
   } else if (num % 5 == 0) {
      return "Buzz";
   } else {
      return num;
   }
}

module.exports = fizzbuzz;