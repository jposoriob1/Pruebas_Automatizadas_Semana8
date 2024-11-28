import GivenStepsCarlos from './steps/givenSteps_carlos.js'
import {faker} from "@faker-js/faker";
import WhenSteps_carlos from "./steps/whenSteps_carlos";
import ThenSteps_carlos from "./steps/thenSteps_carlos";

describe('X Description Invalido', () => {
  beforeEach(() => {
    GivenStepsCarlos.givenNavigateToLoginPage();
    GivenStepsCarlos.givenLogin();
    GivenStepsCarlos.givenNavigateToSettingsPage();
  })
  it('Save X Card ', () => {
    GivenStepsCarlos.givenClicksEditXButton();
    const description = faker.string.alphanumeric({length: 400})
    GivenStepsCarlos.givenFillsXDescription(description)
    WhenSteps_carlos.whenClicksXSaveButton();
    ThenSteps_carlos.thenShouldSeeXSaved();
  });
})