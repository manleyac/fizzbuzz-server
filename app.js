const express = require("express");

const fizzbuzzRoute = require("./routes/fizzbuzzRoute.js");
const primeFactorsRoute = require("./routes/primeFactorsRoute.js");

const app = express();


app.use("/fizzbuzz", fizzbuzzRoute);
app.use("/primefactors", primeFactorsRoute);

module.exports = app;