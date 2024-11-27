import SettingsPageCamila from "../pages/settingsPageCamila";

class WhenStepsCamila{
    WhenSaveUrlX(){
        SettingsPageCamila.clickSaveEditUrlX();
    }
    WhenSaveSitePrivate(){
        SettingsPageCamila.clickSaveSitePrivate();
    }
    WhenInputPasswordSitePreview(password){
        SettingsPageCamila.inputPasswordViewSite(password);
    }
}
export default new WhenStepsCamila();