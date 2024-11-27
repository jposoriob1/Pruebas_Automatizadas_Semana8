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

    whenEditPlenguage(){
        SettingsPageJuan.editPlenguage();
    }

    whenFillSiteLenguage(siteTitle){
        SettingsPageJuan.fillSiteLenguage(siteTitle);
    }

    whenClickEditMeta(){
        SettingsPageJuan.clickEditMeta();
    }

    whenFillMetaTitle(invalidLeng){
        SettingsPageJuan.fillMetaTitle(invalidLeng);
    }

    whenFillMetaDescription(validTitle){
        SettingsPageJuan.fillMetaDescription(validTitle);
    }

    whenClickAddNewsLetter(){
        SettingsPageJuan.clickAddNewsLetter();
    }

    whenFillNLname(invalidName){
        SettingsPageJuan.fillNLname(invalidName);
    }

    whenFillNLDescrip(invalidDescription){
        SettingsPageJuan.fillNLDescrip(invalidDescription);
    }

    whenClickCreateNL(){
        SettingsPageJuan.clickCreateNL();
    }

    whenClickSaveNL(){
        SettingsPageJuan.clickSaveNL();
    }
}

export default new WhenStepsJuan();