import GivenStepsCamila from "./steps/givenSteps_camila";
import WhenStepsCamila from "./steps/whenSteps_camila";
import ThenStepsCamila from "./steps/thenSteps_camila";

const urlValid="https://x.com/camila123457"

describe("62_post_excerpt_301_caracteres", () => {
    beforeEach(() => {
        GivenStepsCamila.givenNavigateToLoginPage();
        // and enters a valid username and password and click the login button
        GivenStepsCamila.givenLogin();
        // and navigates to the settings
        GivenStepsCamila.givenNavigateToSettingsPage();
    })

    it("21_", () => {
        // and clicks on the Xsocial account
        GivenStepsCamila.AndTypeOnXsocialAccount(urlValid);
        WhenStepsCamila.WhenSaveUrlX();
        ThenStepsCamila.ThenUrlXsocialAccountValid();
    });
})