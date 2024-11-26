import LoginPage from "../pages/loginPage";
import DashboardPage from "../pages/dashboardPage";
import SettingsPageJuan from "../pages/settingsPage_juan";

class WhenStepsJuan {
    
    whenClickTitleEdit(){
        SettingsPageJuan.clickTitleEdit();
    }

    whenFillSiteTitle(siteTitle){
        SettingsPageJuan.fillSiteTitle(siteTitle);
    }

    whenFillSiteDescription(siteDescription){
        SettingsPageJuan.fillSiteDescription(siteDescription);
    }



}

export default new WhenStepsJuan();