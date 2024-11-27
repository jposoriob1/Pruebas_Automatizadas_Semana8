import GivenStepsCamila from "./steps/givenSteps_camila";
import WhenStepsCamila from "./steps/whenSteps_camila";
import ThenStepsCamila from "./steps/thenSteps_camila";
import {faker} from "@faker-js/faker";


describe("30_ingresar_anuncio_desde_settings", () => {
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

    it("30_ingresar_anuncio_desde_settings", () => {
        GivenStepsCamila.AndEditAnnouncement();
        WhenStepsCamila.WhenInputAnnouncement(settingsData.Announcement);
        ThenStepsCamila.ThenSaveAnnouncement();

    });
})