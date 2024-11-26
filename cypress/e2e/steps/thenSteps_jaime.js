import SettingsPage_jaime from "../pages/settingsPage_jaime";

class ThenSteps_jaime {
    ThenSavedButtonExists(){
        SettingsPage_jaime.checkChangesWereSaved();
    }
}
export default new ThenSteps_jaime;