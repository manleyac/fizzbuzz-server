# fizzbuzz-server
### An Express server with a fizzbuzz route

This server has the following route:

GET /fizzbuzz/:num

Route /fizzbuzz/ accepts a positive integer up to five digits and returns a number or string according to the rules of FizzBuzz.
This route returns the result in the following JSON format:

```
{
   result: "FizzBuzz"
}
```

The route will return the following response if a value passed isn't the correct type:

```
{
   message: "Value must be a positive integer less than 100,000"
}
```

Run the following command to start the server:

`npm run start`

Server will start listening on port 3000, or another if a PORT environment variable is declared.


## Prime Factors Branch

This branch adds the following route:

GET /primefactors/:num

Route /primefactors/ accepts a positive integer up to five digits and returns an array with the prime factors for that number.
This route returns the result in the following JSON format:

```
//Ex. for primefactors/12
{
   result: [2, 2, 3]
}
```