const express = require("express");

const router = express.Router();

function fizzbuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return "FizzBuzz";
  } else if (num % 3 == 0) {
    return "Fizz";
  } else if (num % 5 == 0) {
    return "Buzz";
  } else {
    return num;
  }
}

// @route   GET fizzbuzz/:num
// @param   An integer
// @desc    Takes an integer, passes it to fizzbuzz function and returns result
// @access  Public
router.get("/:num", (req, res) => {
  const input = req.params.num;
  const number = Number(input);
  const result = fizzbuzz(number);
  res.json({ result: result });
});

module.exports = router;
