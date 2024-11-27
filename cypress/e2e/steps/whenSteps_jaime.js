import SettingsPage_jaime from "../pages/settingsPage_jaime";

class whenSteps_jaime{
    WhenTypeOnDisplayNoticeField(displayName){
        SettingsPage_jaime.typeOnDisplayNoticeField(displayName);
    }

    WhenClickSaveButton(){
        SettingsPage_jaime.clickSaveButton();
    }

    WhenClickLookAndFeelTab(){
        SettingsPage_jaime.clickLookAndFeelTab();
    }

    WhenTypeOnSignUpButtonText(signUpText){
        SettingsPage_jaime.typeOnSignUpButtonText(signUpText);
    }
}
export default new whenSteps_jaime();