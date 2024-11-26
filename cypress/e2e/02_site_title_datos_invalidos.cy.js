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

function invalidSiteTitle(longDesc = 500) {
  let nameTagValid = '';

  // Genera texto concatenando adjetivos hasta alcanzar la longitud deseada
  while (nameTagValid.length < longDesc) {
      nameTagValid += faker.commerce.productAdjective(); // Agrega adjetivos sin espacios
  }

  // Asegura que el texto tenga exactamente la longitud deseada
  return nameTagValid.substring(0, longDesc);
}


describe("Site title invalido", () => {
    beforeEach(() => {
        // Given the User navigates to the login page
        GivenStepsJuan.givenNavigateToLoginPage();
        // and enters a valid username and password and click the login button
        GivenStepsJuan.givenLogin();
        // and navigates to the Tags
        GivenStepsJuan.givenNavigateToSettingsPage();

      })

    it("02 - Site title invalido", () => {
    
        //  When the user clicks on New tag
        WhenStepsJuan.whenClickTitleEdit();


        // Generate a site title using Faker
        const siteTitle = invalidSiteTitle(300)
        //and fill the site title
        WhenStepsJuan.whenFillSiteTitle(siteTitle);

        // then save the tag
        ThenStepsJuan.thenSaveSite();
        // And assert that the site title was saved
        const first10Chars = siteTitle.substring(0, 10);
        ThenStepsJuan.thenAssertSaveSite(first10Chars);

        
    
      

      
      
      
    //     //  When the user clicks on New tag
    //   WhenStepsTag.whenClickTagNewTag();
      
    //   // Generate a tag name using Faker
    //   const nameTag = validTagName()
    //   // and fills the name tag input
    //   WhenStepsTag.whenFillNameTag(nameTag);
    
      
    //   // Generate a long description > 501 using Faker
    //   const descriptionTag = longDescrption(501)
    //   // and fill the description tag input
    //   WhenStepsTag.whenFillInvalidDescription(descriptionTag);
  
    //   // then save the tag
    //   ThenStepsTag.thenSaveTag();

    //   // And assert that the error message is displayed
    //   ThenStepsTag.thenAssertErrorDescription();  

        
    });
    
    })