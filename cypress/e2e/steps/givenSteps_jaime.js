import LoginPage from "../pages/loginPage";
import DashboardPage from "../pages/dashboardPage";
import settingsPage_jaime from "../pages/settingsPage_jaime";

class GivenSteps_jaime {
    givenNavigateToLoginPage() {
        LoginPage.navigateToLogin();
    }

    givenLogin() {
        LoginPage.login();
    }

    givenNavigateToSettingsPage() {
        DashboardPage.clickSettingsLink();
    }

    givenNavigateToPortalModal() {
        settingsPage_jaime.navigateToPortalModal()
    }
}

export default new GivenSteps_jaime();