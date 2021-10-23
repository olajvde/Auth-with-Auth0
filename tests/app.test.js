const request = require("supertest");
const app = require("../index");

// failed 🙄🙄🙄🙄😑
describe("Profile", () => {
  it("Get /user --> Object with user info from Auth0", () => {
    return request(app)
      .get("/user")
      .expect("Content-type", /json/)
      .expect(200)
      .then((res) => {
        expect(res.body).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              given_name: expect.any(String),
              family_name: expect.any(String),
              name: expect.any(String),
              picture: expect.any(String),
              locale: expect.any(String),
              email: expect.any(String),
              email_verified: expect.any(Boolean),
              sub: expect.any(String),
            }),
          ])
        );
      });
  });
});
