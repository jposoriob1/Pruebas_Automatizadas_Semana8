import GivenStepsCamila from "./steps/givenSteps_camila";
import WhenStepsCamila from "./steps/whenSteps_camila";
import ThenStepsCamila from "./steps/thenSteps_camila";
import {faker} from "@faker-js/faker";


describe("27_add_item_primary_navigation_invalid", () => {
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

    it("27_add_item_primary_navigation_invalid", () => {
        GivenStepsCamila.AndEditNavigation();
        WhenStepsCamila.WhenInputNewNavigation(settingsData.urlNavigation,settingsData.itemInvalid);
        ThenStepsCamila.ThenSaveNavigation();
    });
})