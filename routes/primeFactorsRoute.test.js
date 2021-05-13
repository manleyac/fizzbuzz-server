const request = require("supertest");
const app = require("../app.js");

describe("Test Get /primefactors", () => {
  test("Passes 3, Expects 3", async (done) => {
    await request(app)
      .get("/primefactors/3")
      .expect(200)
      .then((response) => {
        expect(response.body.result).toEqual([3]);
        done();
      })
      .catch((err) => done(err));
  });

  test("Passes 15, Expects [3,5]", async (done) => {
    await request(app)
      .get("/primefactors/15")
      .expect(200)
      .then((response) => {
        expect(response.body.result).toEqual([3, 5]);
        done();
      })
      .catch((err) => done(err));
  });

  test("Passes 5.5, Expects 500 status", async (done) => {
    await request(app)
      .get("/primefactors/5.5")
      .expect(500)
      .then((response) => {
        done();
      })
      .catch((err) => done(err));
  });

  test("Passes -75, Expects 500 status", async (done) => {
    await request(app)
      .get("/primefactors/-75")
      .expect(500)
      .then((response) => {
        done();
      })
      .catch((err) => done(err));
  });

  test("Passes char, Expects 500 status", async (done) => {
    await request(app)
      .get("/primefactors/a")
      .expect(500)
      .then((response) => {
        done();
      })
      .catch((err) => done(err));
  });
});
