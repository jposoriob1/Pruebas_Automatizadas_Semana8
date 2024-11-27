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
    WhenInputNewNavigation(url,item){
        SettingsPageCamila.inputNavigationItem(url,item);
    }

    WhenInputAnnouncement(announcement){
        SettingsPageCamila.inputAnnouncement(announcement);
    }

}
export default new WhenStepsCamila();