const request = require("supertest");
const app = require("../src/app");

describe("Enterprise DevSecOps API", () => {
  test("GET / should return application status", async () => {
    const response = await request(app).get("/");

    expect(response.statusCode).toBe(200);
    expect(response.body.application).toBe(
      "Enterprise DevSecOps Zero Downtime Pipeline"
    );
    expect(response.body.status).toBe("Running");
  });
});