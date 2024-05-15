import { describe, expect, it } from "@jest/globals";
import { returnHelloWorld } from "./hello";

describe("unit tests and code side by side", () => {
  describe("when using the returnHelloWorld function", () => {
    it("returns 'hello world'", () => {
      console.log("testing returnHelloWorld()");
      expect(returnHelloWorld()).toBe("hello world");
      console.log("Done");
    });
  });
});
