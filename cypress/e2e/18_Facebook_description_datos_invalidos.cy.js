import GivenStepsCarlos from './steps/givenSteps_carlos.js'
import {faker} from "@faker-js/faker";
import WhenSteps_carlos from "./steps/whenSteps_carlos";
import ThenSteps_carlos from "./steps/thenSteps_carlos";

describe('Facebook Description Invalido', () => {
  beforeEach(() => {
    GivenStepsCarlos.givenNavigateToLoginPage();
    GivenStepsCarlos.givenLogin();
    GivenStepsCarlos.givenNavigateToSettingsPage();
  })
  it('Save Facebook Card ', () => {
    GivenStepsCarlos.givenClicksEditFacebookButton();
    const description = faker.string.alphanumeric({length: 400})
    GivenStepsCarlos.givenFillsFacebookDescription(description)
    WhenSteps_carlos.whenClicksFacebookSaveButton();
    ThenSteps_carlos.thenShouldSeeFacebookSaved();
  });
})