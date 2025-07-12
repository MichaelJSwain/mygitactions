import { describe, it, expect } from "vitest";
import { helloWorld } from "..";

describe("hello world", () => {
    it("should return the string 'hello world'", () => {
        const expectedValue = 'hello world!';
        
        const result = helloWorld();

        expect(result).toBe(expectedValue);
    })
})