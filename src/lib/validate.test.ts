import { describe, it } from "node:test";
import assert from "node:assert";
import { validateOrder, validateCatering, validateClubSignup } from "./validate";

describe("validateOrder", () => {
  it("rejects empty dog", () => {
    const r = validateOrder({ dog: "", toppings: [], qty: 1, name: "Sam", phone: "312-555-0100", pickupTime: "18:00" });
    assert.equal(r.ok, false);
  });
  it("rejects bad phone", () => {
    const r = validateOrder({ dog: "classic", toppings: [], qty: 1, name: "Sam", phone: "abc", pickupTime: "18:00" });
    assert.equal(r.ok, false);
  });
  it("rejects qty 0 and 100", () => {
    assert.equal(validateOrder({ dog: "classic", toppings: [], qty: 0, name: "Sam", phone: "312-555-0100", pickupTime: "18:00" }).ok, false);
    assert.equal(validateOrder({ dog: "classic", toppings: [], qty: 100, name: "Sam", phone: "312-555-0100", pickupTime: "18:00" }).ok, false);
  });
  it("accepts valid order", () => {
    const r = validateOrder({ dog: "classic", toppings: ["mustard"], qty: 2, name: "Sam", phone: "312-555-0100", pickupTime: "18:00" });
    assert.equal(r.ok, true);
  });
});

describe("validateCatering", () => {
  it("rejects past date", () => {
    const r = validateCatering({ name: "A", email: "a@b.com", date: "2000-01-01", headcount: 20, message: "hi" });
    assert.equal(r.ok, false);
  });
  it("rejects bad email", () => {
    const r = validateCatering({ name: "A", email: "not-an-email", date: "2030-01-01", headcount: 20, message: "hi" });
    assert.equal(r.ok, false);
  });
  it("accepts valid request", () => {
    const r = validateCatering({ name: "A", email: "a@b.com", date: "2030-01-01", headcount: 20, message: "hi" });
    assert.equal(r.ok, true);
  });
});

describe("validateClubSignup", () => {
  it("rejects bad phone", () => {
    const r = validateClubSignup({ name: "Sam", phone: "abc" });
    assert.equal(r.ok, false);
  });
  it("rejects empty name", () => {
    const r = validateClubSignup({ name: "  ", phone: "312-555-0100" });
    assert.equal(r.ok, false);
  });
  it("accepts valid signup", () => {
    const r = validateClubSignup({ name: "Sam", phone: "312-555-0100" });
    assert.equal(r.ok, true);
  });
});
