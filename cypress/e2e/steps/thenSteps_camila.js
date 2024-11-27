import SettingsPageCamila from "../pages/settingsPageCamila";

class ThenStepsCamila {
    ThenUrlXsocialAccountNoValid(){
        SettingsPageCamila.urlNoValid();
    }

    ThenUrlXsocialAccountValid(){
        SettingsPageCamila.urlValid();
    }

    ThenSitePrivate(){
        SettingsPageCamila.verifySitePrivate();
    }

    ThenClickAccessSite(){
        SettingsPageCamila.clickAccessSite();
    }
}
export default new ThenStepsCamila;