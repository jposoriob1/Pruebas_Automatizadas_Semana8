
class SettingsPageCamila {

    get socialAccount(){
        return cy.get('[data-testid="social-accounts"]',{ timeout: 10000 }).should('exist').scrollIntoView();
    }

    get  socialAccountEdit(){
        return cy.get('[data-testid="social-accounts"] > .items-start > :nth-child(2) > .flex > .cursor-pointer > span');
    }
    get socialAccountSave(){
        return cy.get('.bg-green > span');
    }
    get urlXsocialInput(){
        return cy.get('#\\:r16\\:');
    }
    get urlShouldNoValid(){
        return cy.get('[data-testid="social-accounts"] > .gap-x-5 > :nth-child(2) > .mt-1');

    }
    typeOnXsocialAccount(url){
        this.socialAccount.click();
        this.socialAccountEdit.click();
        this.urlXsocialInput.click();
        cy.wait(1000);
        this.urlXsocialInput.clear().type(url);
    }

    clickSaveEditUrlX(){
        this.socialAccount.click()
        cy.wait(2000);
        this.socialAccountSave.click();
    }

    urlNoValid(){
        this.urlShouldNoValid.should('be.visible').and('contain.text', 'not a valid Twitter Username');
    }

    urlValid(){
        cy.wait(2000);
        this.urlShouldNoValid.should('be.visible').and('not.contain.text', 'not a valid Twitter Username');
    }


}

export default new SettingsPageCamila();