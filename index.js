const express = require("express");

const fizzbuzzRoute = require("./routes/fizzbuzzRoute.js");

const app = express();
const port = process.env.PORT || 3000;

app.use("/fizzbuzz", fizzbuzzRoute);

app.listen(port, () => console.log(`Server running on port ${port}`));