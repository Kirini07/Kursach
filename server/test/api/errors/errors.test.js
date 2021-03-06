process.env.NODE_ENV = "test";

const expect = require("chai").expect;
const chai = require("chai");
const request = require("supertest");
const chaiHttp = require("chai-http");

const app = require("../../../App");

chai.use(chaiHttp);

describe("/Api Errors", () => {
  describe("/Auth", () => {
    describe("/Register user", () => {
      const testData = {
        firstName: "test",
        lastName: "test",
        email: "test",
        password: "test",
      };
      const testData2 = {
        firstName: "test",
        lastName: "test",
        email: "sergsugi@mail.ru",
        password: "testtesttesttes",
      };
      it('/Response should be contain fields "message" ', (done) => {
        request(app)
          .post("/auth/register")
          .send(testData)
          .then((res) => {
            const body = res.body;
            expect(body).to.contain.property("message");
            done();
          })
          .catch((err) => done(err));
      });
      it('/Field  "message" should be contain text "Something went wrong, try again" ', (done) => {
        request(app)
          .post("/auth/register")
          .send(testData2)
          .then((res) => {
            const body = res.body;
            expect(body.message).to.equal("Something went wrong, try again");
            done();
          })
          .catch((err) => done(err));
      });
      it('/Response should be contain fields "errors ', (done) => {
        request(app)
          .post("/auth/register")
          .send(testData)
          .then((res) => {
            const body = res.body;
            expect(body).to.contain.property("errors");
            done();
          })
          .catch((err) => done(err));
      });
      it("/Field message to be equal: ", (done) => {
        request(app)
          .post("/auth/register")
          .send(testData)
          .then((res) => {
            const body = res.body;
            expect(body.message).to.equal("Incorrect information!");
            done();
          })
          .catch((err) => done(err));
      });
      it("Count fields on errors to be equal 2", (done) => {
        request(app)
          .post("/auth/register")
          .send(testData)
          .then((res) => {
            const body = res.body;
            expect(body.errors.length).to.equal(2);
            done();
          })
          .catch((err) => done(err));
      });
      it('First field on errors should to be equal "Incorrect email"', (done) => {
        request(app)
          .post("/auth/register")
          .send(testData)
          .then((res) => {
            const body = res.body;
            expect(body.errors[0].msg).to.equal("Incorrect email");
            done();
          })
          .catch((err) => done(err));
      });
      it('Secon field on errors should to be equal "The minimum password length is 10 characters"', (done) => {
        request(app)
          .post("/auth/register")
          .send(testData)
          .then((res) => {
            const body = res.body;
            expect(body.errors[1].msg).to.equal(
              "The minimum password length is 10 characters"
            );
            done();
          })
          .catch((err) => done(err));
      });
    });
    describe("/Login user", () => {
      const testData = {
        email: "sergsugimail.ru",
        password: "rea7",
      };
      it('/Response should be contain fields "message" ', (done) => {
        request(app)
          .post("/auth/login")
          .send(testData)
          .then((res) => {
            const body = res.body;
            expect(body).to.contain.property("message");
            done();
          })
          .catch((err) => done(err));
      });
      it('/Response should be contain fields "errors ', (done) => {
        request(app)
          .post("/auth/login")
          .send(testData)
          .then((res) => {
            const body = res.body;
            expect(body).to.contain.property("errors");
            done();
          })
          .catch((err) => done(err));
      });
      it("/Field message to be equal: Incorrect information!", (done) => {
        request(app)
          .post("/auth/login")
          .send(testData)
          .then((res) => {
            const body = res.body;
            expect(body.message).to.equal("Incorrect information!");
            done();
          })
          .catch((err) => done(err));
      });
      it("Count fields on errors to be equal 2", (done) => {
        request(app)
          .post("/auth/login")
          .send(testData)
          .then((res) => {
            const body = res.body;
            expect(body.errors.length).to.equal(2);
            done();
          })
          .catch((err) => done(err));
      });
      it('First field on errors should to be equal "Incorrect email"', (done) => {
        request(app)
          .post("/auth/login")
          .send(testData)
          .then((res) => {
            const body = res.body;
            expect(body.errors[0].msg).to.equal("Incorrect email");
            done();
          })
          .catch((err) => done(err));
      });
      it('Secon field on errors should to be equal "The minimum password length is 6 characters"', (done) => {
        request(app)
          .post("/auth/login")
          .send(testData)
          .then((res) => {
            const body = res.body;
            expect(body.errors[1].msg).to.equal(
              "The minimum password length is 6 characters"
            );
            done();
          })
          .catch((err) => done(err));
      });
    });
    describe("/Login administrator", () => {
      const testData = {
        email: "sergsugimail.ru",
        password: "rea7",
      };
      it('/Response should be contain fields "message" ', (done) => {
        request(app)
          .post("/admin/auth/login")
          .send(testData)
          .then((res) => {
            const body = res.body;
            expect(body).to.contain.property("message");
            done();
          })
          .catch((err) => done(err));
      });
      it('/Response should be contain fields "errors ', (done) => {
        request(app)
          .post("/admin/auth/login")
          .send(testData)
          .then((res) => {
            const body = res.body;
            expect(body).to.contain.property("errors");
            done();
          })
          .catch((err) => done(err));
      });
      it("/Field message to be equal: ", (done) => {
        request(app)
          .post("/admin/auth/login")
          .send(testData)
          .then((res) => {
            const body = res.body;
            expect(body.message).to.equal("Incorrect information!");
            done();
          })
          .catch((err) => done(err));
      });
      it("Count fields on errors to be equal 2", (done) => {
        request(app)
          .post("/admin/auth/login")
          .send(testData)
          .then((res) => {
            const body = res.body;
            expect(body.errors.length).to.equal(2);
            done();
          })
          .catch((err) => done(err));
      });
      it('First field on errors should to be equal "Incorrect email"', (done) => {
        request(app)
          .post("/admin/auth/login")
          .send(testData)
          .then((res) => {
            const body = res.body;
            expect(body.errors[0].msg).to.equal("Incorrect email");
            done();
          })
          .catch((err) => done(err));
      });
      it('Secon field on errors should to be equal "The minimum password length is 10 characters"', (done) => {
        request(app)
          .post("/admin/auth/login")
          .send(testData)
          .then((res) => {
            const body = res.body;
            expect(body.errors[1].msg).to.equal(
              "The minimum password length is 10 characters"
            );
            done();
          })
          .catch((err) => done(err));
      });
    });
  });
  describe("/Courses", () => {
    const testData = {
      categoryName: "",
    };
    describe("Expect no authorization error", () => {
      it('/If request equal "/common/course/byCategory" and not jwt token response should be contain fields "message"', (done) => {
        request(app)
          .post("/common/course/byCategory")
          .send(testData)
          .then((res) => {
            const body = res.body;
            expect(body).to.contain.property("message");
            done();
          })
          .catch((err) => done(err));
      });
      it('/If request equal "/common/course/all" and not jwt token response should be contain fields "message"', (done) => {
        request(app)
          .get("/common/course/all")
          .send(testData)
          .then((res) => {
            const body = res.body;
            expect(body).to.contain.property("message");
            done();
          })
          .catch((err) => done(err));
      });
      it('/If request equal "/common/course/category" and not jwt token response should be contain fields "message"', (done) => {
        request(app)
          .get("/common/course/category")
          .send(testData)
          .then((res) => {
            const body = res.body;
            expect(body).to.contain.property("message");
            done();
          })
          .catch((err) => done(err));
      });
      it('/If request equal "/common/course/byCategory" and not jwt token fields "message" should be equal "User has no authorization"', (done) => {
        request(app)
          .post("/common/course/byCategory")
          .send(testData)
          .then((res) => {
            const body = res.body;
            expect(body.message).to.equal("User has no authorization");
            done();
          })
          .catch((err) => done(err));
      });
      it('/If request equal "/common/course/all" and not jwt token fields "message" should be equal "User has no authorization"', (done) => {
        request(app)
          .get("/common/course/all")
          .then((res) => {
            const body = res.body;
            expect(body.message).to.equal("User has no authorization");
            done();
          })
          .catch((err) => done(err));
      });
      it('/If request equal "/common/course/category" and not jwt token fields "message" should be equal "User has no authorization"', (done) => {
        request(app)
          .get("/common/course/category")
          .then((res) => {
            const body = res.body;
            expect(body.message).to.equal("User has no authorization");
            done();
          })
          .catch((err) => done(err));
      });
    });
  });
  describe("/Orders", () => {
    describe("/Orders no authorization error", () => {
      const testData = {};
      it('/If request equal "/orders/add" and not jwt token response should be contain fields "message"', (done) => {
        request(app)
          .post("/orders/add")
          .send(testData)
          .then((res) => {
            const body = res.body;
            expect(body).to.contain.property("message");
            done();
          })
          .catch((err) => done(err));
      });
      it('/If request equal "/orders/pay" and not jwt token response should be contain fields "message"', (done) => {
        request(app)
          .post("/orders/pay")
          .send(testData)
          .then((res) => {
            const body = res.body;
            expect(body).to.contain.property("message");
            done();
          })
          .catch((err) => done(err));
      });
      it('/If request equal "/orders/edit" and not jwt token response should be contain fields "message"', (done) => {
        request(app)
          .post("/orders/edit")
          .send(testData)
          .then((res) => {
            const body = res.body;
            expect(body).to.contain.property("message");
            done();
          })
          .catch((err) => done(err));
      });
      it('/If request equal "/orders/add" and not jwt token fields "message" should be equal "User has no authorization"', (done) => {
        request(app)
          .post("/orders/add")
          .send(testData)
          .then((res) => {
            const body = res.body;
            expect(body.message).to.equal("User has no authorization");
            done();
          })
          .catch((err) => done(err));
      });
      it('/If request equal "/orders/pay" and not jwt token fields "message" should be equal "User has no authorization"', (done) => {
        request(app)
          .post("/orders/pay")
          .send(testData)
          .then((res) => {
            const body = res.body;
            expect(body.message).to.equal("User has no authorization");
            done();
          })
          .catch((err) => done(err));
      });
      it('/If request equal "/orders/edit" and not jwt token fields "message" should be equal "User has no authorization"', (done) => {
        request(app)
          .post("/orders/edit")
          .send(testData)
          .then((res) => {
            const body = res.body;
            expect(body.message).to.equal("User has no authorization");
            done();
          })
          .catch((err) => done(err));
      });
    });
  });
});
