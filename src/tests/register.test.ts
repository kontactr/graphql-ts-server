import { request } from "graphql-request";

function sum(a: number, b: number): number {
  return a + b;
}

test("Sample jest setup to sum two values", () => {
  expect(sum(1, 2)).toBe(3);
});

test("User registered", async () => {
  let email = "c.com";
  let password = "c.com";
  let mutation = `
    mutation { 
      register(email: "${email}" , password: "${password}") 
    }
  `;
  const response = await request(process.env.NODE_TESTING_URL || "", mutation);
  expect(response).toEqual({
    register: true
  });
});
