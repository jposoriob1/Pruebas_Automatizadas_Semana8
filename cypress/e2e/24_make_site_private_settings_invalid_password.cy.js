import GivenStepsCamila from "./steps/givenSteps_camila";
import WhenStepsCamila from "./steps/whenSteps_camila";
import ThenStepsCamila from "./steps/thenSteps_camila";


describe("24_make_site_private_settings_invalid_password", () => {
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

    it("24_make_site_private_settings_invalid_password", () => {
        GivenStepsCamila.AndEditMakeSitePrivate();
        GivenStepsCamila.AndInputPasswordSite(settingsData.password2);
        WhenStepsCamila.WhenSaveSitePrivate();
        ThenStepsCamila.ThenSitePrivate();
    });
})