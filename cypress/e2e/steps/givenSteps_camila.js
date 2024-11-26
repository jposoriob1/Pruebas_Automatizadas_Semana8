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
}

export default new GivenStepsCamila();
