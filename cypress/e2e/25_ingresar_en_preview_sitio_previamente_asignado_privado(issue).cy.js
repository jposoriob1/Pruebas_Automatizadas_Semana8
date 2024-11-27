import GivenStepsCamila from "./steps/givenSteps_camila";
import WhenStepsCamila from "./steps/whenSteps_camila";
import ThenStepsCamila from "./steps/thenSteps_camila";


describe("25_ingresar_en_preview_sitio_previamente_asignado_privado(issue)", () => {
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

    it("25_ingresar_en_preview_sitio_previamente_asignado_privado(issue)", () => {
        GivenStepsCamila.AndEditMakeSitePrivate();
        GivenStepsCamila.AndInputPasswordSite(settingsData.password);
        WhenStepsCamila.WhenSaveSitePrivate();
        GivenStepsCamila.AndNavigateViewSite();
        WhenStepsCamila.WhenInputPasswordSitePreview(settingsData.password);
        ThenStepsCamila.ThenClickAccessSite();
    });
})