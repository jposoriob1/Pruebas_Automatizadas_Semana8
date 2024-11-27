import GivenStepsCamila from "./steps/givenSteps_camila";
import WhenStepsCamila from "./steps/whenSteps_camila";
import ThenStepsCamila from "./steps/thenSteps_camila";
import {faker} from "@faker-js/faker";


describe("28_add_item_secondary_navigation_valid", () => {
    let settingsData = [];
    before(() => {
        cy.fixture('dataPriori.json').then((data) => {
            settingsData = data;
        });
    });

    beforeEach(() => {
        GivenStepsCamila.givenNavigateToLoginPage();
        // and enters a valid username and password and click the login button
        GivenStepsCamila.givenLogin();
        // and navigates to the settings
        GivenStepsCamila.givenNavigateToSettingsPage();
    })

    it("28_add_item_secondary_navigation_valid", () => {
        GivenStepsCamila.AndEditNavigation();
        GivenStepsCamila.AndClickSecondaryNavigation();
        WhenStepsCamila.WhenInputNewNavigation(settingsData.urlNavSecond,settingsData.itemInvalid2);
        ThenStepsCamila.ThenSaveNavigation();
    });
})