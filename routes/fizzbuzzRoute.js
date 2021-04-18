const express = require("express");
const fizzbuzz = require("../functions/fizzbuzz");
const checkInteger = require("../functions/checkInteger");

//constant sets max value function can process
const LIMIT = 100000;

const router = express.Router();

// @route   GET fizzbuzz/:num
// @param   An integer
// @desc    Takes an integer, passes it to fizzbuzz function and returns result
// @access  Public
router.get("/:num", (req, res) => {
  try {
    const input = req.params.num;
    const number = Number(input);

    if (checkInteger(number) && number < LIMIT) {
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
