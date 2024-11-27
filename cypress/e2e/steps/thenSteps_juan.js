import LoginPage from "../pages/loginPage";
import DashboardPage from "../pages/dashboardPage";
import SettingsPageJuan from "../pages/settingsPage_juan";

class ThenStepsJuan {
    
    thenSaveSite(){
        SettingsPageJuan.saveSite();
    }

    thenAssertSaveSite(siteTitle){
        SettingsPageJuan.assertSaveSite(siteTitle);
    }

    thenSavePlanguage(){
        SettingsPageJuan.saveSite();
    }

    thenAssertPlanguage(siteTitle){
        SettingsPageJuan.assertSaveSite(siteTitle);
    }

    thenClickSaveMetadata(){
        SettingsPageJuan.clickSaveMetadata();
    }

    thenAssertMetaTitle(validTitle){
        SettingsPageJuan.assertMetaTitle(validTitle);
    }

    thenClickCloseModal(){
        SettingsPageJuan.clickCloseModal();
    }

    thenAssertNLtitle(invalidName){
        SettingsPageJuan.assertNLtitle(invalidName);
    }
    thenAssertNLDescrip(invalidDescription){
        SettingsPageJuan.assertNLDescrip(invalidDescription);
    }


}

export default new ThenStepsJuan();