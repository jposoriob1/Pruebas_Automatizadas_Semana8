import givenSteps_jaime from "./steps/givenSteps_jaime";
import whenSteps_jaime from "./steps/whenSteps_jaime";
import { faker } from "@faker-js/faker";
import thenSteps_jaime from "./steps/thenSteps_jaime";

const sentenceLessThan115 = faker.lorem.sentence(5);
const sentenceMoreThan115 = faker.lorem.sentence(50);
const wordMoreThan115 = faker.string.alpha({length: 120});
const wordOf110 = faker.string.alpha({length: 110});

describe("Edit tier Tests", () => {
    beforeEach(() => {
        givenSteps_jaime.givenNavigateToLoginPage();
        givenSteps_jaime.givenLogin();
        givenSteps_jaime.givenNavigateToSettingsPage();
        givenSteps_jaime.givenNavigateToEditTierModal();
    });

    it("Should test Edit tier [Name Field] - sentence of less than 115 characters (positive)", () => {
        whenSteps_jaime.WhenTypeOnEditTierCard_NameField(sentenceLessThan115);
        whenSteps_jaime.WhenClickSaveButton();
        thenSteps_jaime.ThenSavedButtonExists();
    });

    it("Should test Edit tier [Name Field] - sentence of more than 115 characters (positive)", () => {
        whenSteps_jaime.WhenTypeOnEditTierCard_NameField(sentenceMoreThan115);
        whenSteps_jaime.WhenClickSaveButton();
        thenSteps_jaime.ThenSavedButtonExists();
    });

    it("Should test Edit tier [Name Field] - word of more than 115 characters (positive)", () => {
        whenSteps_jaime.WhenTypeOnEditTierCard_NameField(wordMoreThan115);
        whenSteps_jaime.WhenClickSaveButton();
        thenSteps_jaime.ThenSavedButtonExists();
    });

    it("Should test Edit tier [Name Field] - word of 110 characters (positive)", () => {
        whenSteps_jaime.WhenTypeOnEditTierCard_NameField(wordOf110);
        whenSteps_jaime.WhenClickSaveButton();
        thenSteps_jaime.ThenSavedButtonExists();
    });

    it("Should test Edit tier [Description Field] - sentence of less than 115 characters (positive)", () => {
        whenSteps_jaime.WhenTypeOnEditTierCard_Description(sentenceLessThan115);
        whenSteps_jaime.WhenClickSaveButton();
        thenSteps_jaime.ThenSavedButtonExists();
    });

    it("Should test Edit tier [Description Field] - sentence of more than 115 characters (negative)", () => {
        whenSteps_jaime.WhenTypeOnEditTierCard_Description(sentenceMoreThan115);
        whenSteps_jaime.WhenClickSaveButton();
        thenSteps_jaime.ThenSavedButtonExists();
    });

    it("Should test Edit tier [Description Field] - word of more than 115 characters (negative)", () => {
        whenSteps_jaime.WhenTypeOnEditTierCard_Description(wordMoreThan115);
        whenSteps_jaime.WhenClickSaveButton();
        thenSteps_jaime.ThenSavedButtonExists();
    });

    it("Should test Edit tier [Description Field] - word of 110 characters (negative)", () => {
        whenSteps_jaime.WhenTypeOnEditTierCard_Description(wordOf110);
        whenSteps_jaime.WhenClickSaveButton();
        thenSteps_jaime.ThenSavedButtonExists();
    });

    it("Should test Edit tier [Description Field] - Empty (negative)", () => {
        whenSteps_jaime.WhenTypeOnEditTierCard_Description(' ');
        whenSteps_jaime.WhenClickSaveButton();
    });
})