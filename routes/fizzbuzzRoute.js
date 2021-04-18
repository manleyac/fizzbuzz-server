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

//returns true or false if value passed in is a positive integer
function checkInteger(num) {
  if (typeof num === "number") {
    return Number.isInteger(num) && num > 0;
  } else {
    return false;
  }
}

// @route   GET fizzbuzz/:num
// @param   An integer
// @desc    Takes an integer, passes it to fizzbuzz function and returns result
// @access  Public
router.get("/:num", (req, res) => {
  try {
    const input = req.params.num;
    const number = Number(input);

    if (checkInteger(number)) {
      const result = fizzbuzz(number);
      res.json({ result: result });
    } else {
      res.json({
        message: "Value must be a positive integer less than 100,000",
      });
    }
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
