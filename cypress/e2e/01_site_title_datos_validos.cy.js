import GivenStepsJuan from "./steps/givenSteps_juan"
import ThenStepsJuan from "./steps/thenSteps_juan"
import WhenStepsJuan from "./steps/whenSteps_juan"
// import {faker} from "@faker-js/faker";


// function longDescrption(longDesc = 500){
  
//   let description = '';
//   while(description.length < longDesc){
//     description += '' + faker.lorem.paragraph();
//   } 
//   description = description.trim();
//   return description;
// }

// function validTagName(){

//   let nameTagValid = '';
//   return nameTagValid = faker.commerce.productAdjective()
// }

describe("Site title valido", () => {
    beforeEach(() => {
        // Given the User navigates to the login page
        GivenStepsJuan.givenNavigateToLoginPage();
        // and enters a valid username and password and click the login button
        GivenStepsJuan.givenLogin();
        // and navigates to the Tags
        GivenStepsJuan.givenNavigateToSettingsPage();

      })

    it("01 - Site title valido", () => {

        cy.get('button span').contains('Edit').eq(0).click();
        cy.wait(50000)

    
    //    //  When the user clicks on New tag
    //    WhenStepsJuan.whenClickTitleEdit();
      
      
      
      
      
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