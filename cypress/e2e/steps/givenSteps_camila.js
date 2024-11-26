import LoginPage from "../pages/loginPage";
import DashboardPage from "../pages/dashboardPage";

class givenStepsCamila {

    givenNavigateToLoginPage(){
        LoginPage.navigateToLogin();
    }

    givenLogin() {
        LoginPage.login();
    }

    givenNavigateToSettingsPage(){
        DashboardPage.clickSettingsLink();
    }

}

export default new givenStepsCamila();