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


}

export default new ThenStepsJuan();