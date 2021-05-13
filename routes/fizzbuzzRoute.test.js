const request = require("supertest");
const app = require("../app.js");
const assert = require("assert");

describe("Test Get /fizzbuzz", () => {
  test("Passes 1, Expects 1", async (done) => {
    const response = await request(app)
      .get("/fizzbuzz/1")
      .expect(200)
      .then((response) => {
        expect(response.body.result).toBe(1);
        done();
      })
      .catch((err) => done(err));
  });

  test("Passes 3, Expects Fizz", async (done) => {
    const response = await request(app)
      .get("/fizzbuzz/3")
      .expect(200)
      .then((response) => {
        expect(response.body.result).toBe("Fizz");
        done();
      })
      .catch((err) => done(err));
  });

  test("Passes 5, Expects Buzz", async (done) => {
    const response = await request(app)
      .get("/fizzbuzz/5")
      .expect(200)
      .then((response) => {
        expect(response.body.result).toBe("Buzz");
        done();
      })
      .catch((err) => done(err));
  });

  test("Passes 75, Expects FizzBuzz", async (done) => {
    const response = await request(app)
      .get("/fizzbuzz/75")
      .expect(200)
      .then((response) => {
        expect(response.body.result).toBe("FizzBuzz");
        done();
      })
      .catch((err) => done(err));
  });

  test("Passes char to fizzbuzz", async (done) => {
    const response = await request(app)
      .get("/fizzbuzz/a")
      .expect(500)
      .then((response) => {
        done();
      })
      .catch((err) => done(err));
  });
});
