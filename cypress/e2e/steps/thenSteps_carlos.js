import SettingsPage_carlos from "../pages/settingsPage_carlos";

export class ThenStepsCarlos{
    thenShouldSeeXSaved(){
        SettingsPage_carlos.validateSavedMessage()
    }
    thenShouldSeeFacebookSaved(){
        SettingsPage_carlos.validateSavedMessage()
    }
    thenShouldSeeSocialAccountSaved(){
        SettingsPage_carlos.validateSavedMessage()
    }
    thenShouldSeeInvalidFacebookURL(){
        SettingsPage_carlos.seeFacebookInvalid()
    }
}
export default new ThenStepsCarlos();