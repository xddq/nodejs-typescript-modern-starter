import { describe, test } from "node:test";
import assert from "node:assert/strict";
import { returnHelloWorld } from "./hello";

describe("unit tests and code side by side", () => {
  test("returnHelloWorld() - returns 'hello world'", () => {
    assert.equal(returnHelloWorld(), "hello world");
  });
});
