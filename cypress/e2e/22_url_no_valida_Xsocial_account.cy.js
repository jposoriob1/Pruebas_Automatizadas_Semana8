import GivenStepsCamila from "./steps/givenSteps_camila";
import {faker} from "@faker-js/faker";
import WhenStepsCamila from "./steps/whenSteps_camila";
import ThenStepsCamila from "./steps/thenSteps_camila";


describe("22_url_no_valida_Xsocial_account.cy.js", () => {
    beforeEach(() => {
        GivenStepsCamila.givenNavigateToLoginPage();
        // and enters a valid username and password and click the login button
        GivenStepsCamila.givenLogin();
        // and navigates to the settings
        GivenStepsCamila.givenNavigateToSettingsPage();
    })

    it("22_url_no_valida_Xsocial_account.cy.js", () => {
        // and clicks on the Xsocial account
        GivenStepsCamila.AndTypeOnXsocialAccount(faker.internet.url());
        WhenStepsCamila.WhenSaveUrlX();
        ThenStepsCamila.ThenUrlXsocialAccountNoValid();
    });
})