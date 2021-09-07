import { generateEntry } from '../src/client/js/formHandler.js';

describe("Testing the submit functionality", () => {
    test("Testing the generateEntry() function", () => {
        expect(generateEntry).toBeTruthy();
    })
});
