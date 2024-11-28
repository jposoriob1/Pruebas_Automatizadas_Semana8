import SettingsPage_carlos from "../pages/settingsPage_carlos";

export class WhenStepsCarlos{
    whenClicksXSaveButton(){
        SettingsPage_carlos.clickSaveX()
    }

    whenClicksFacebookSaveButton(){
        SettingsPage_carlos.clickSaveFacebook()
    }
    whenClicksSocialAccountSaveButton(){
        SettingsPage_carlos.clickSaveSocialAccount()
    }
}
export default new WhenStepsCarlos();