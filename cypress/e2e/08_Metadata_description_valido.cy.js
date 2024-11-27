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

function invalidSiteTitle(){

  let nameTagValid = '';
  return nameTagValid = faker.commerce.productAdjective()
}

function validLenguage(longDesc = 500) {
  let nameTagValid = '';

  // Genera texto concatenando adjetivos hasta alcanzar la longitud deseada
  while (nameTagValid.length < longDesc) {
      nameTagValid += faker.commerce.productAdjective(); // Agrega adjetivos sin espacios
  }

  // Asegura que el texto tenga exactamente la longitud deseada
  return nameTagValid.substring(0, longDesc);
}


describe("Metadata description valido ", () => {
    beforeEach(() => {
        // Given the User navigates to the login page
        GivenStepsJuan.givenNavigateToLoginPage();
        // and enters a valid username and password and click the login button
        GivenStepsJuan.givenLogin();
        // and navigates to the Tags
        GivenStepsJuan.givenNavigateToSettingsPage();

      })

    it("08 - Metadata description valido ", () => {
    
        //  When the user clicks on edit metadata
        WhenStepsJuan.whenClickEditMeta();
        // Generate a site faker words for fill title
        const validDescrip = validLenguage(6)
        //and fill the title metadata
        WhenStepsJuan.whenFillMetaDescription(validDescrip);

        //then save
        ThenStepsJuan.thenClickSaveMetadata();
        // And assert that the metadadata title was saved
        ThenStepsJuan.thenAssertMetaTitle(validDescrip);
        
    });
    
    })