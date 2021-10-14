/* eslint-disable jest/no-standalone-expect */

describe("suite", () => {
    before(() => {
        // eslint-disable-next-line no-undef
        browser.url("http://localhost:3000/get-started/introduction");

        // eslint-disable-next-line no-undef
        expect(browser).toHaveUrl("http://localhost:3000/get-started/introduction");
        // eslint-disable-next-line no-undef
        expect(browser).toHaveTitle("Introduction | Swedbank Pay Design Guide", { containing: true });
    });

    it('find elements', () => {
        const formInputs = $$('form input');

        // make sure every form element is enabled
        // waits automatically for formInputs to have at least one element
        expect(formInputs).toBeEnabled({ wait: 5000 });

        const selectOptions = $$('form select>option');

        // make sure there is at least one option in select
        expect(selectOptions).toBeElementsArrayOfSize({ gte: 1 });
        // exact match
        expect($$('button')).toBeElementsArrayOfSize(3);
    });

    it('checks text values', () => {
        // assert certain text accurate
        const repoTitle = $('Introduction');

        expect(repoTitle).toHaveText('Introduction');
        // or ignore the case and only check that a substring is present
        expect(repoTitle).toHaveTextContaining('Introduction', { ignoreCase: true });
    });

    it('advanced', () => {
        const myInput = $('input');

        expect(myInput).toHaveElementClass('form-control', { message: 'Not a form control!', });
        expect(myInput).toHaveAttribute('class', 'form-control'); // alias toHaveAttr

        expect(myInput).toHaveValueContaining('USER');
        // or pass `containing` as an option
        expect(myInput).toHaveValue('value', 'user', { containing: true, ignoreCase: true });

        // Simply invert assertions
        expect(myInput).not.toHaveElementProperty('height', 0);
    });

    it('async mode', async () => {
        const el = await $('designGuide');

        // Jasmine users should use expectAsync instead of expect!!
        await expect(el).toBePresent(); // aliases toBeExisting or toExist
    });

});
