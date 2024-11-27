import SettingsPage_jaime from "../pages/settingsPage_jaime";

class ThenSteps_jaime {
    ThenSavedButtonExists(){
        SettingsPage_jaime.checkChangesWereSaved();
    }

    ThenNoticeLongErrorExists(){
        SettingsPage_jaime.checkIfNoticeLongErrorExists();
    }

    ThenInvalidEmailAddressExists(){
        SettingsPage_jaime.checkIfInvalidEmailAddressExists();
    }

    ThenErrorExists(){
        SettingsPage_jaime.checkIfErrorExists();
    }
}
export default new ThenSteps_jaime;