const express = require("express");

const fizzbuzzRoute = require("./routes/fizzbuzzRoute.js");
const primeFactorsRoute = require("./routes/primeFactorsRoute.js");

const app = express();
const port = process.env.PORT || 3000;

app.use("/fizzbuzz", fizzbuzzRoute);
app.use("/primefactors", primeFactorsRoute);

app.listen(port, () => console.log(`Server running on port ${port}`));