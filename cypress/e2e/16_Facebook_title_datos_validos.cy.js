import GivenStepsCarlos from './steps/givenSteps_carlos.js'
import {faker} from "@faker-js/faker";
import WhenSteps_carlos from "./steps/whenSteps_carlos";
import ThenSteps_carlos from "./steps/thenSteps_carlos";

describe('Facebook Title Valido', () => {
  beforeEach(() => {
    GivenStepsCarlos.givenNavigateToLoginPage();
    GivenStepsCarlos.givenLogin();
    GivenStepsCarlos.givenNavigateToSettingsPage();
  })
  it('Save Facebook Card ', () => {
    GivenStepsCarlos.givenClicksEditFacebookButton();
    const title = faker.string.alphanumeric({length: 50})
    GivenStepsCarlos.givenFillsFacebookTile(title)
    WhenSteps_carlos.whenClicksFacebookSaveButton();
    ThenSteps_carlos.thenShouldSeeFacebookSaved();
  });
})