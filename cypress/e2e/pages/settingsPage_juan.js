class SettingsPageJuan {

    get titleEdit(){
        return cy.get('button span').contains('Edit').eq(0);
    }

    get siteTitle(){
        return cy.get('input[placeholder="Site title"]');
    }

    get buttonSaveSite(){
        return cy.contains('button', 'Save');
    }

    get okassertSaveSite(){
        return cy.get('.flex.items-center.mt-1');
    }

    get siteDecription(){
        return cy.get('input[placeholder="Site description"]');
    }

    get buttomEditPlenguage(){
        return cy.get('[data-testid="publication-language"] > .items-start > :nth-child(2) > .flex > .cursor-pointer > span');
    }

    get siteLenguage(){
        return cy.get('input[placeholder="Site language"]');
    }

    clickTitleEdit(){
        this.titleEdit.click();
    }

    fillSiteTitle(siteTitle){
        this.siteTitle.clear().type(siteTitle);
    }

    saveSite(){
        this.buttonSaveSite.click();
    }

    assertSaveSite(siteTitle){
        this.okassertSaveSite.should('contain.text', siteTitle);
    }

    fillSiteDescription(siteDescription){
        this.siteDecription.clear().type(siteDescription);
    }

    editPlenguage(){
        this.buttomEditPlenguage.click();
    }

    fillSiteLenguage(siteTitle){
        this.siteLenguage.clear().type(siteTitle);
    }
}

export default new SettingsPageJuan();