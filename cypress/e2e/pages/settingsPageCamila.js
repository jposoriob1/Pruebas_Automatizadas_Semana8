
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
    get makeSitePrivate(){
        return cy.get('[data-testid="locksite"]',{ timeout: 10000 }).should('exist').scrollIntoView();
    }

    get makeSitePrivateEdit(){
        return cy.get('[data-testid="locksite"] > .items-start > :nth-child(2) > .flex > .cursor-pointer > span');
    }

    get habilitarSitePrivado(){
        return cy.get('button[data-state="unchecked"][aria-checked="false"]');
    }

    get passwordSite(){
        return cy.get('input[placeholder="Enter password"]');
    }

    get viewSite(){
        return cy.get('a[href="#/site/"]');
    }

    get viewSitePassword(){
        return  cy.get('input[placeholder="Password"]');
    }

    get accesSite(){
        return cy.get('button.gh-btn').contains('Access site');
    }

    get shouldSitePrivate(){
        return cy.get('.leading-supertight');
    }

    get closeSettings(){
        return cy.get('[data-testid="exit-settings"]');
    }
    typeOnXsocialAccount(url){
        this.socialAccount.click();
        this.socialAccountEdit.click();
        this.urlXsocialInput.click();
        cy.wait(1000);
        this.urlXsocialInput.clear().type(url);
    }

    editMakeSitePrivate(){
        this.makeSitePrivate.click();
        this.makeSitePrivateEdit.click();
        cy.wait(1000);
        cy.get('body', { timeout: 10000 }).then(($body) => {
            if ($body.find('button[data-state="unchecked"][aria-checked="false"]').length > 0) {
                cy.get('button[data-state="unchecked"][aria-checked="false"]').click();
            } else {
                cy.log('Botón habilitar site privado no está presente.');
            }
        });
    }

    inputPasswordSite(password){
        this.passwordSite.should('be.visible')
        .click()
        .clear().type(password,{ parseSpecialCharSequences: false });
        cy.wait(2000);
    }

    clickSaveSitePrivate(){
        this.makeSitePrivate;
        cy.wait(2000);
        this.socialAccountSave.click();
        cy.wait(2000);
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

    verifySitePrivate(){
        this.shouldSitePrivate.should('be.visible');
    }

    navigationViewSite(){
        this.closeSettings.click();
        cy.wait(2000);
        this.viewSite.click();
    }

    inputPasswordViewSite(password){
        cy.get('iframe.site-frame') // Selecciona el iframe
            .its('0.contentDocument.body') // Accede al cuerpo del iframe
            .should('not.be.empty')
            .then(cy.wrap)
            .find('input[placeholder="Password"]')
            .should('be.visible')
            .click()
            .clear()
            .type(password);
    }

    clickAccessSite(){
        cy.wait(2000);
        cy.get('iframe.site-frame') // Selecciona el iframe por su clase (ajusta si es necesario)
            .its('0.contentDocument.body') // Cambia al contenido del iframe
            .should('not.be.empty') // Asegúrate de que el iframe esté cargado
            .then(cy.wrap) // Cambia al contexto del iframe
            .contains('button', 'Access site →') // Encuentra el botón basado en el texto
            .should('be.visible') // Verifica que sea visible
            .dblclick(); // Haz clic en el botón

    }

}

export default new SettingsPageCamila();