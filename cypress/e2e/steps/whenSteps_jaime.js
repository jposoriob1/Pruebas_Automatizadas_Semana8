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

    WhenClickAccountPageTab(){
        SettingsPage_jaime.clickAccountPageTab();
    }

    WhenTypeOnSupportEmailAddressField(supportEmailAddress){
        SettingsPage_jaime.typeOnSupportEmailAddressField(supportEmailAddress);
    }

    WhenTypeOnEditTierCard_NameField(tierName){
        SettingsPage_jaime.typeOnEditTierCard_NameField(tierName);
    }

    WhenTypeOnEditTierCard_Description(tierDescription){
        SettingsPage_jaime.typeOnEditTierCard_Description(tierDescription);
    }
}
export default new whenSteps_jaime();