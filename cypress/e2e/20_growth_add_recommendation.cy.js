import givenSteps_jaime from "./steps/givenSteps_jaime";
import whenSteps_jaime from "./steps/whenSteps_jaime";
import { faker } from "@faker-js/faker";
import thenSteps_jaime from "./steps/thenSteps_jaime";

const sentenceLessThan115 = faker.lorem.sentence(5);
const sentenceMoreThan115 = faker.lorem.sentence(50);
const wordMoreThan115 = faker.string.alpha({length: 120});
const wordOf110 = faker.string.alpha({length: 110});
const site = faker.internet.url();

describe("Growth Add Tests", () => {
    beforeEach(() => {
        givenSteps_jaime.givenNavigateToLoginPage();
        givenSteps_jaime.givenLogin();
        givenSteps_jaime.givenNavigateToSettingsPage();
        givenSteps_jaime.givenNavigateToGrowthAddRecommendationModal();
    });

    it("Should test URL on Growth Recommendation - URL (positive)", () => {
        whenSteps_jaime.WhenTypeOnGeneralTextField(site);
        whenSteps_jaime.WhenClickOnAddGrowthRecommendationNextButton();
        cy.wait(10000);
        thenSteps_jaime.ThenPreviewTitleExists();
    });

    it("Should test URL on Growth Recommendation - sentence of less than 115 characters (negative)", () => {
        whenSteps_jaime.WhenTypeOnGeneralTextField(sentenceLessThan115);
        whenSteps_jaime.WhenClickOnAddGrowthRecommendationNextButton();
        thenSteps_jaime.ThenCheckIfErrorOnUrlExists();
    });
});