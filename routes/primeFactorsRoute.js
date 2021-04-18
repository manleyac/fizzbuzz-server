const express = require("express");
const checkInteger = require("../functions/checkInteger");

const router = express.Router();

//constant sets max value function can process
const LIMIT = 100000;

// @route   GET primefactors/:num
// @param   Expects an integer
// @desc    Takes an integer, passes it to primeFactors function and returns array with result
// @access  Public
router.get("/:num", (req, res) => {
  try {
    const input = req.params.num;
    const number = Number(input);

    if (checkInteger(number) && number < LIMIT) {
      const result = number;
      res.json({ result: result });
    } else {
      res.json({ message: "Value must be a positive integer less than 100,000" });
    }
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;