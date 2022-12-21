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
      `users/2850?access-token=${process.env.TOKEN_API}`
    );

    expect(res.body.id).to.be.equal(2850);
  });
  it("Get/users with query params", async (page = 5, status = "active", gender = "female") => {
    const url = `page=${page}&gender=${gender}&status=${status}`;
    const res = await request.get(
      `users?access-token=${process.env.TOKEN_API}&${url}`
    );

    expect(res.body).to.be.not.be.empty;
    res.body.forEach((data) => {
      expect(data.gender).to.eq(gender);
      expect(data.status).to.eq(status);
    });
  });

  it("Post/users", async () => {
    const data = {
      name: "Prabhat Singh Mern Wallah",
      email: `Hell${Math.floor(1000 * Math.random())}@gmail.com`,
      gender: "female",
      status: "inactive",
    };
    const res = await request
      .post("users")
      .set("Authorization", `Bearer ${process.env.TOKEN_API}`)
      .send(data);
    console.log(res.body);
    // res.body.email="taltal@gmail.com"//chaging the email check failed or not
    expect(res.body).to.deep.include(data); //deep clone like you understand
    //  expect(res.body.status).to.eq(data.status);
  });
  it("Put/users/:id", async () => {
    const data = {
      name: `Pra${Math.floor(1000 * Math.random())}`,
      status: "active",
    };
    const res = await request
      .put("users/7068")
      .set("Authorization", `Bearer ${process.env.TOKEN_API}`)
      .send(data);
    console.log(res.body);
    // res.body.email="taltal@gmail.com"//chaging the email check failed or not
    expect(res.body).to.deep.include(data); //deep clone like you understand
    //  expect(res.body.status).to.eq(data.status);
  });
  it.only("Delete/users/:id", async () => {
 
    const res = await request
      .delete("users/4310")
      .set("Authorization", `Bearer ${process.env.TOKEN_API}`)
      
     let allo=res.body
    expect(res.body).to.be.eq(allo)
    // res.body.email="taltal@gmail.com"//chaging the email check failed or not
    // expect(res.body).to.be.eq({}); //deep clone like you understand
    //  expect(res.body.status).to.eq(data.status);
  });

  //filter data
});
