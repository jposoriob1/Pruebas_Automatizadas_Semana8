import SettingsPageCamila from "../pages/settingsPageCamila";

class ThenStepsCamila {
    ThenUrlXsocialAccountNoValid(){
        SettingsPageCamila.urlNoValid();
    }

    ThenUrlXsocialAccountValid(){
        SettingsPageCamila.urlValid();
    }
}
export default new ThenStepsCamila;