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

    whenFillSiteDescription(siteTitle){
        SettingsPageJuan.fillSiteDescription(siteTitle);
    }



}

export default new WhenStepsJuan();