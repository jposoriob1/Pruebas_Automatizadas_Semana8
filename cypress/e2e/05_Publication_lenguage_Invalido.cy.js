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

function invalidLenguage(longDesc = 500) {
  let nameTagValid = '';

  // Genera texto concatenando adjetivos hasta alcanzar la longitud deseada
  while (nameTagValid.length < longDesc) {
      nameTagValid += faker.commerce.productAdjective(); // Agrega adjetivos sin espacios
  }

  // Asegura que el texto tenga exactamente la longitud deseada
  return nameTagValid.substring(0, longDesc);
}


describe("Publication language invalido", () => {
    beforeEach(() => {
        // Given the User navigates to the login page
        GivenStepsJuan.givenNavigateToLoginPage();
        // and enters a valid username and password and click the login button
        GivenStepsJuan.givenLogin();
        // and navigates to the Tags
        GivenStepsJuan.givenNavigateToSettingsPage();

      })

    it("05 - Publication language invalido", () => {
    
        //  When the user clicks on New tag
        // WhenStepsJuan.whenClickTitleEdit();
        WhenStepsJuan.whenEditPlenguage();

        // Generate a site faker words for fill language
        const invalidLeng = invalidLenguage(10)
        //and fill the site lenguage
        WhenStepsJuan.whenFillSiteLenguage(invalidLeng);

        // then save
        ThenStepsJuan.thenSavePlanguage();
        // And assert that the puclivation lenguage was saved
        ThenStepsJuan.thenAssertPlanguage(invalidLeng);


        // // then save the tag
        // ThenStepsJuan.thenSaveSite();
        // // And assert that the site title was saved
        // const first10Chars = siteDescription.substring(0, 10);
        // ThenStepsJuan.thenAssertSaveSite(first10Chars);

        
    });
    
    })