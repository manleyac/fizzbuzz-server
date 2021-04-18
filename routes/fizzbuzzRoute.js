const express = require("express");

const router = express.Router();

router.get("/:num", (req, res) => {
  const input = req.params.num;
  const number = Number(input);
  res.json({ result: number });
});

module.exports = router;
