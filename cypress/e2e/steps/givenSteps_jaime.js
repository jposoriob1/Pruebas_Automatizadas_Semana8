import LoginPage from "../pages/loginPage";
import DashboardPage from "../pages/dashboardPage";
import settingsPage_jaime from "../pages/settingsPage_jaime";

class givenSteps_jaime {
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

    givenNavigateToEditTierModal() {
        settingsPage_jaime.navigateToEditTierModal();
    }

    givenNavigateToGrowthAddRecommendationModal() {
        settingsPage_jaime.navigateToGrowthAddRecommendationModal();
    }
}

export default new givenSteps_jaime();