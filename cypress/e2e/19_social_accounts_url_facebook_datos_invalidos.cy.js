import GivenStepsCarlos from './steps/givenSteps_carlos.js'
import {faker} from "@faker-js/faker";
import WhenSteps_carlos from "./steps/whenSteps_carlos";
import ThenSteps_carlos from "./steps/thenSteps_carlos";

describe('Social Account Facebook Url Invalid', () => {
  beforeEach(() => {
    GivenStepsCarlos.givenNavigateToLoginPage();
    GivenStepsCarlos.givenLogin();
    GivenStepsCarlos.givenNavigateToSettingsPage();
  })
  it('Save Social Account ', () => {
    GivenStepsCarlos.givenClicksEditSocialAccountButton();
    const url = faker.internet.url();
    GivenStepsCarlos.givenFillsSocialAccountFacebookURL(url);
    WhenSteps_carlos.whenClicksSocialAccountSaveButton();
    ThenSteps_carlos.thenShouldSeeInvalidFacebookURL()
  });
})