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

function invalidText(longDesc = 500) {
  let nameTagValid = '';

  // Genera texto concatenando adjetivos hasta alcanzar la longitud deseada
  while (nameTagValid.length < longDesc) {
      nameTagValid += faker.commerce.productAdjective(); // Agrega adjetivos sin espacios
  }

  // Asegura que el texto tenga exactamente la longitud deseada
  return nameTagValid.substring(0, longDesc);
}


describe("Newsletters llenar name y description invalido (expresion larga)", () => {
    beforeEach(() => {
        // Given the User navigates to the login page
        GivenStepsJuan.givenNavigateToLoginPage();
        // and enters a valid username and password and click the login button
        GivenStepsJuan.givenLogin();
        // and navigates to the Tags
        GivenStepsJuan.givenNavigateToSettingsPage();

      })

    it("10 -Newsletters llenar name y description invalido (expresion larga)", () => {

        //  When the user clicks on Add Newsletter
        WhenStepsJuan.whenClickAddNewsLetter();

        // Generate a name with faker words for fill name
        const invalidName = invalidText(100)
        //and fill the name newsletter
        WhenStepsJuan.whenFillNLname(invalidName);
        // Generate a name with faker words for fill name
        const invalidDescription = invalidText(100)
        //and fill the description newsletter
        WhenStepsJuan.whenFillNLDescrip(invalidDescription);
        // and click on create
        WhenStepsJuan.whenClickCreateNL();
        // and click on save
        WhenStepsJuan.whenClickSaveNL();
        // then close the modal
        ThenStepsJuan.thenClickCloseModal();
        // And assert that the name and descriptio was saved
        ThenStepsJuan.thenAssertNLtitle(invalidName);
        ThenStepsJuan.thenAssertNLDescrip(invalidDescription);

    });

    })