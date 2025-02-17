import givenSteps_jaime from "./steps/givenSteps_jaime";
import whenSteps_jaime from "./steps/whenSteps_jaime";
import { faker } from "@faker-js/faker";
import thenSteps_jaime from "./steps/thenSteps_jaime";

const sentenceLessThan115 = faker.lorem.sentence(5);
const sentenceMoreThan115 = faker.lorem.sentence(50);
const wordMoreThan115 = faker.string.alpha({length: 120});
const wordOf110 = faker.string.alpha({length: 110});

describe("Portal Settings Tests 1", () => {
    beforeEach(() => {
        givenSteps_jaime.givenNavigateToLoginPage();
        givenSteps_jaime.givenLogin();
        givenSteps_jaime.givenNavigateToSettingsPage();
        givenSteps_jaime.givenNavigateToPortalModal();
    });

    it("31.) Should test portal settings 1 - sentence of less than 115 characters (positive)", () => {
        whenSteps_jaime.WhenTypeOnDisplayNoticeField(sentenceLessThan115);
        whenSteps_jaime.WhenClickSaveButton();
        thenSteps_jaime.ThenSavedButtonExists();
    });

    it("32.) Should test portal settings 1 - sentence of more than 115 characters (negative)", () => {
        whenSteps_jaime.WhenTypeOnDisplayNoticeField(sentenceMoreThan115);
        whenSteps_jaime.WhenClickSaveButton();
        thenSteps_jaime.ThenNoticeLongErrorExists();
    });

    it("33.) Should test portal settings 1 - word of more than 115 characters (negative)", () => {
        whenSteps_jaime.WhenTypeOnDisplayNoticeField(wordMoreThan115);
        whenSteps_jaime.WhenClickSaveButton();
        thenSteps_jaime.ThenNoticeLongErrorExists();
    });

    it("34.) Should test portal settings 1 - more than 110 characters (positive)", () => {
        whenSteps_jaime.WhenTypeOnDisplayNoticeField(wordOf110);
        whenSteps_jaime.WhenClickSaveButton();
        thenSteps_jaime.ThenSavedButtonExists();
    });
})