import SettingsPage_jaime from "../pages/settingsPage_jaime";

class WhenSteps_jaime{
    WhenTypeOnDisplayNoticeField(displayName){
        SettingsPage_jaime.typeOnDisplayNoticeField(displayName);
    }

    WhenClickSaveButton(){
        SettingsPage_jaime.clickSaveButton();
    }
}
export default new WhenSteps_jaime();