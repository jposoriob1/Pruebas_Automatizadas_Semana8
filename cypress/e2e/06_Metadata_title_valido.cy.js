import GivenStepsJuan from "./steps/givenSteps_juan"
import ThenStepsJuan from "./steps/thenSteps_juan"
import WhenStepsJuan from "./steps/whenSteps_juan"
import {faker} from "@faker-js/faker";


function longTitle(longDesc = 500){
  
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

function validLenguage(longDesc = 500) {
  let nameTagValid = '';

 
  while (nameTagValid.length < longDesc) {
      nameTagValid += faker.commerce.productAdjective(); 
  }


  return nameTagValid.substring(0, longDesc);
}


describe("Metadata title valido", () => {
    beforeEach(() => {
        // Given the User navigates to the login page
        GivenStepsJuan.givenNavigateToLoginPage();
        // and enters a valid username and password and click the login button
        GivenStepsJuan.givenLogin();
        // and navigates to the Tags
        GivenStepsJuan.givenNavigateToSettingsPage();

      })

    it("06 - Metadata title valido", () => {
    
        //  When the user clicks on edit metadata
        WhenStepsJuan.whenClickEditMeta();
        // Generate a site faker words for fill title
        const validTitle = validLenguage(10)
        //and fill the title metadata
        WhenStepsJuan.whenFillMetaTitle(validTitle);

        //then save
        ThenStepsJuan.thenClickSaveMetadata();
        // And assert that the metadadata title was saved
        ThenStepsJuan.thenAssertMetaTitle(validTitle);
        
    });
    
    })