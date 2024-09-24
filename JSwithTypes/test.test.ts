import { it, expect } from 'vitest';
import { handleFormData } from './exercises';
import { concatName } from './exercises';
import { concatName4 } from './exercises';
import { Expect, Equal } from "@total-typescript/helpers";

it("Should handle a form submit", () => {

    const form = document.createElement("form");

    form.innerHTML = `
  <input name="name" value="John Doe"></Exercise>
  `;

    form.onsubmit = (e) => {
        const value = handleFormData(e);

        expect(value).equal({ name: "John Doe" });
    };

    form.requestSubmit();


    expect.assertions(1);

}); // Fails


it("Should return the full name", () => {
    const result = concatName({ first: "John", last: "Doe" });

    type test = Expect<Equal<typeof result, string>>;

    expect(result).toBe("John Doe");
}); //Passes


it("should return the full name", () => {
    const result = concatName4("John", "Doe");

    type test = Expect<Equal<typeof result, string>>;

    expect(result).toEqual("John Doe");
}); //Fails

it("should return the first name with default last name", () => {
    const result = concatName4("John");

    type test = Expect<Equal<typeof result, string>>;

    expect(result).toEqual("John Pocock");
}); //Fails
