import GivenStepsJuan from "./steps/givenSteps_juan"
import ThenStepsJuan from "./steps/thenSteps_juan"
import WhenStepsJuan from "./steps/whenSteps_juan"
import {faker} from "@faker-js/faker";


function longDescrption(longDesc = 500){
  
  let description = '';
  while(description.length < longDesc){
    description += '' + faker.lorem.paragraph();
  } 
  description = description.trim();
  return description;
}

function validSiteTitle(){

  let nameTagValid = '';
  return nameTagValid = faker.commerce.productAdjective()
}

describe("Site title valido", () => {
    beforeEach(() => {
        // Given the User navigates to the login page
        GivenStepsJuan.givenNavigateToLoginPage();
        // and enters a valid username and password and click the login button
        GivenStepsJuan.givenLogin();
        // and navigates to the Settings
        GivenStepsJuan.givenNavigateToSettingsPage();

      })

    it("01 - Site title valido", () => {
    
        //  When the user clicks on edit title & description 
        WhenStepsJuan.whenClickTitleEdit();


        // Generate a site title using Faker
        const siteTitle = validSiteTitle()
        //and fill the site title
        WhenStepsJuan.whenFillSiteTitle(siteTitle);

        // then save the tag
        ThenStepsJuan.thenSaveSite();
        // And assert that the site title was saved
        ThenStepsJuan.thenAssertSaveSite(siteTitle);
        
    });
    
    })