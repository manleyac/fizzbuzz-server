const express = require("express");
const checkInteger = require("../functions/checkInteger");
const primeFactors = require("../functions/primeFactors");

const router = express.Router();

//constant sets max value function can process
const LIMIT = 100000;

// @route   GET primefactors/
// @desc    Returns message when no parameter is given
router.get("/", (req, res) => {
  res.json({
    message:
      "Pass a positive integer less than 100,000 at the end of the route to see its prime factors",
  });
});

// @route   GET primefactors/:num
// @param   Expects an integer
// @desc    Takes an integer, passes it to primeFactors function and returns array with result
// @access  Public
router.get("/:num", (req, res) => {
  try {
    const input = req.params.num;
    const number = Number(input);

    if (checkInteger(number) && number < LIMIT) {
      const result = primeFactors(number);
      res.json({ result: result });
    } else {
      res.status(500).json({
        message: "Value must be a positive integer less than 100,000",
      });
    }
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
