import LoginPage from "../pages/loginPage";
import DashboardPage from "../pages/dashboardPage";
import SettingsPageCamila from "../pages/settingsPageCamila";

class GivenStepsCamila {

    givenNavigateToLoginPage() {
        LoginPage.navigateToLogin();
    }

    givenLogin() {
        LoginPage.login();
    }

    givenNavigateToSettingsPage() {
        DashboardPage.clickSettingsLink();
    }

    AndTypeOnXsocialAccount(url) {
        SettingsPageCamila.typeOnXsocialAccount(url);
    }

    AndEditMakeSitePrivate(){
        SettingsPageCamila.editMakeSitePrivate();
    }

    AndInputPasswordSite(password){
        SettingsPageCamila.inputPasswordSite(password);
    }

    AndNavigateViewSite(){
        SettingsPageCamila.navigationViewSite();
    }




}

export default new GivenStepsCamila();
