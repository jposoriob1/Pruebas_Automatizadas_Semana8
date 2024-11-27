import GivenSteps_jaime from "./steps/givenSteps_jaime";
import whenSteps_jaime from "./steps/whenSteps_jaime";
import { faker } from "@faker-js/faker";
import thenSteps_jaime from "./steps/thenSteps_jaime";

const sentenceLessThan115 = faker.lorem.sentence(5);
const sentenceMoreThan115 = faker.lorem.sentence(50);
const wordMoreThan115 = faker.string.alpha({length: 120});
const wordOf110 = faker.string.alpha({length: 110});

describe("Portal Settings 2 Tests", () => {
    beforeEach(() => {
        GivenSteps_jaime.givenNavigateToLoginPage();
        GivenSteps_jaime.givenLogin();
        GivenSteps_jaime.givenNavigateToSettingsPage();
        GivenSteps_jaime.givenNavigateToPortalModal();
    });

    it("Should test portal settings 2 - sentence of less than 115 characters (positive)", () => {
        whenSteps_jaime.WhenClickLookAndFeelTab();
        whenSteps_jaime.WhenTypeOnSignUpButtonText(sentenceLessThan115);
        whenSteps_jaime.WhenClickSaveButton();
        thenSteps_jaime.ThenSavedButtonExists();
    });

    it("Should test portal settings 2 - sentence of more than 115 characters (negative)", () => {
        whenSteps_jaime.WhenClickLookAndFeelTab();
        whenSteps_jaime.WhenTypeOnSignUpButtonText(sentenceMoreThan115);
        whenSteps_jaime.WhenClickSaveButton();
        thenSteps_jaime.ThenSavedButtonExists();
    });

    it("Should test portal settings 2 - word of more than 115 characters (negative)", () => {
        whenSteps_jaime.WhenClickLookAndFeelTab();
        whenSteps_jaime.WhenTypeOnSignUpButtonText(wordMoreThan115);
        whenSteps_jaime.WhenClickSaveButton();
        thenSteps_jaime.ThenSavedButtonExists();
    });

    it("Should test portal settings 2 - more than 110 characters (positive)", () => {
        whenSteps_jaime.WhenClickLookAndFeelTab();
        whenSteps_jaime.WhenTypeOnSignUpButtonText(wordOf110);
        whenSteps_jaime.WhenClickSaveButton();
        thenSteps_jaime.ThenSavedButtonExists();
    });

    it("Should test portal settings 2 - Empty field (positive)", () => {
        whenSteps_jaime.WhenClickLookAndFeelTab();
        whenSteps_jaime.WhenTypeOnSignUpButtonText(' ');
        whenSteps_jaime.WhenClickSaveButton();
        thenSteps_jaime.ThenSavedButtonExists();
    });
})