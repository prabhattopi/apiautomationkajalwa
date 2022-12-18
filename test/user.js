//81497ce6b76cc049ae4f8ab48a687d71f54828428cfe955ad63cdb1f5c64d161

const dotenv = require("dotenv").config();
import supertest from "supertest";
import { expect } from "chai";
const request = supertest("https://gorest.co.in/public/v2/");

describe("Users", () => {
  it("Get/users", async () => {
    // request
    //   .get(`users?access-token=${process.env.TOKEN_API}`)
    //   .end((err, res) => {
    //     expect(res.body).to.be.not.empty;
    //     done();
    //   });
    //Mocha know to wait promise to be resolve so that's why its waiting
    const res = await request.get(
      `users?access-token=${process.env.TOKEN_API}`
    );
    expect(res.body).to.be.not.empty;
  });
  it("Get/users/:id", async () => {
    const res = await request.get(
      `users/5119?access-token=${process.env.TOKEN_API}`
    );

    expect(res.body.id).to.be.equal(5119);
  });

  //filter data
});
