import GivenSteps_jaime from "./steps/givenSteps_jaime";
import whenSteps_jaime from "./steps/whenSteps_jaime";
import { faker } from "@faker-js/faker";
import thenSteps_jaime from "./steps/thenSteps_jaime";

const sentence = faker.lorem.sentence(5);

describe("Portal Settings Tests", () => {
    beforeEach(() => {
        GivenSteps_jaime.givenNavigateToLoginPage();
        GivenSteps_jaime.givenLogin();
        GivenSteps_jaime.givenNavigateToSettingsPage();
        GivenSteps_jaime.givenNavigateToPortalModal();
    });

    it("Should tests portal settings - positive", () => {
        whenSteps_jaime.WhenTypeOnDisplayNoticeField(sentence);
        whenSteps_jaime.WhenClickSaveButton();
        thenSteps_jaime.ThenSavedButtonExists();
    });
})