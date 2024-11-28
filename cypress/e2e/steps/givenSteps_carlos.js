import LoginPage from "../pages/loginPage";
import DashboardPage from "../pages/dashboardPage";
import SettingsPageCarlos from "../pages/settingsPage_carlos";

export class GivenStepsCarlos{
    givenNavigateToLoginPage(){
        LoginPage.navigateToLogin();
    }

    givenLogin() {
        LoginPage.login();
    }

    givenNavigateToSettingsPage(){
        DashboardPage.clickSettingsLink();
    }
    givenClicksEditXButton(){
        SettingsPageCarlos.clickEditX();
    }
    givenFillsXTile(title){
        SettingsPageCarlos.typeXTitle(title);
    }
    givenFillsXDescription(description){
        SettingsPageCarlos.typeXDescription(description);
    }
    givenClicksEditFacebookButton(){
        SettingsPageCarlos.clickEditFacebook();
    }
    givenFillsFacebookTile(title){
        SettingsPageCarlos.typeFacebookTitle(title);
    }
    givenFillsFacebookDescription(description){
        SettingsPageCarlos.typeFacebookDescription(description);
    }
    givenClicksEditSocialAccountButton(){
        SettingsPageCarlos.clickEditSocialAccount();
    }
    givenFillsSocialAccountFacebookURL(url){
        SettingsPageCarlos.typeSocialAccountFacebookURL(url);
    }
}
export default new GivenStepsCarlos();