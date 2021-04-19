//accepts a positive integer and returns array of prime factors for that number
function primeFactors(num) {
  const factors = [];
  let prime = 2;
  let number = num;

  for (let i = 2; i <= number; i++) {
    for (let j = 2; j < prime; j++) {
      if (prime % j === 0) {
        prime++;
      }
    }

    while (number % prime === 0) {
      factors.push(prime);
      number = number / prime;
    }
    prime++;
  }

  return factors;
}

module.exports = primeFactors;
