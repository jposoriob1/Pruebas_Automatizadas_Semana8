
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


    get passwordSite(){
        return cy.get('input[placeholder="Enter password"]');
    }

    get viewSite(){
        return cy.get('a[href="#/site/"]');
    }


    get shouldSitePrivate(){
        return cy.get('.leading-supertight');
    }

    get closeSettings(){
        return cy.get('[data-testid="exit-settings"]');
    }

    get navigationSiteSettings(){
        return cy.get('[data-testid="navigation"]',{ timeout: 10000 }).should('exist').scrollIntoView();
    }

    get customizeNavigation(){
        return cy.get('[data-testid="navigation"] > .flex > :nth-child(2) > .cursor-pointer > span');
    }

    get addNavigation(){
        return cy.get('[data-testid="add-button"]');
    }

    get inputItemNavigation(){
        return cy.get('input[placeholder="New item label"]');
    }
    get inputUrlNavigation(){
        return cy.get('input[value="http://localhost:3001/"]');
    }
    get divNavigation(){
        return cy.get('[data-testid="new-navigation-item"]');
    }
    get secondaryNavigation(){
        return cy.get('#secondary-nav');
    }

    get btnSaveNavigation(){
        return cy.get('.bg-black')
    }
    get announcement(){
        return cy.get('[data-testid="announcement-bar"]',{ timeout: 10000 }).should('exist').scrollIntoView();
    }

    get btnCustomizeAnnouncement(){
        return cy.get('[data-testid="announcement-bar"] > .flex > :nth-child(2) > .cursor-pointer > span');
    }

    get addAnnouncement(){
        return cy.get('.kg-prose > p');
    }

    get btnSaved(){
        return cy.get('.bg-green > span');
    }

    get closeAnnouncement(){
        return cy.get('.max-h-\\[82px\\] > .flex > .text-grey-900 > span');

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
        cy.get('iframe.site-frame')
            .its('0.contentDocument.body')
            .should('not.be.empty')
            .then(cy.wrap)
            .contains('button', 'Access site →')
            .should('be.visible')
            .dblclick();

    }

    editNavigation(){
        this.navigationSiteSettings.click();
        this.customizeNavigation.click();
    }

    inputNavigationItem(url,item){
        this.divNavigation.within(() => {
            this.inputUrlNavigation.click().clear().type(url,{ parseSpecialCharSequences: false }).click();
            cy.wait(1000);
            this.inputItemNavigation.type(item,{ parseSpecialCharSequences: false });
            this.addNavigation.click();
            cy.wait(1000);
        });
    }
    saveNavigation(){
        cy.wait(1000);
        this.btnSaveNavigation.should('be.visible').click();
    }

    clickSecondaryNavigation(){
        this.secondaryNavigation.click();
        cy.wait(1000);
    }

    editAnnouncement(){
        this.announcement.click();
        cy.wait(1000);
        this.btnCustomizeAnnouncement.click();
    }

    inputAnnouncement(announcement){
        this.addAnnouncement.click().clear().type(announcement,{ parseSpecialCharSequences: false });
    }

    saveAnnouncement(){
        cy.wait(1000);
        this.btnSaveNavigation.click();
        cy.wait(500);
        this.btnSaved.should('be.visible').and('contain.text', 'Saved');
        cy.wait(1000);
        this.closeAnnouncement.click();
    }

}

export default new SettingsPageCamila();