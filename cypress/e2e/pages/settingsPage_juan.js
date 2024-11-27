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

    get editMeta(){
        cy.get('[data-testid="metadata"] button').contains('Edit').click();
    }

    metaTitle(invalidLeng) {
        cy.get('[data-testid="metadata"]')
          .find('input')
          .eq(0)
          .clear({ force: true })
          .type(invalidLeng, { force: true });
    }

    get saveMetadata(){
        cy.get('.bg-green').click();
    }

    metaDescription(invalidLeng) {
        cy.get('[data-testid="metadata"]')
        .find('input')
        .eq(0)
        .clear({ force: true })
        
        
        cy.get('[data-testid="metadata"]')
          .find('input')
          .eq(1)
          .clear({ force: true })
          .type(invalidLeng, { force: true });
    }

    get buttomAddNewsLetter(){
         return cy.get('[data-testid="newsletters"] button span')
        .contains('Add newsletter');
    }

    get nLname(){
        return cy.get('input[placeholder="Weekly roundup"]').clear();        
    }

    get nLDescrip(){
        return  cy.get('.gap-8 > :nth-child(2)').clear();
    }

    get buttonCreateNL(){
        return   cy.contains('button', 'Create');
    }

    get buttonSaveNL(){
        return cy.contains('button', 'Save');
    }

    get buttonCloseModal(){
        return cy.contains('button', 'Close');
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

    clickEditMeta(){
        this.editMeta;
    }

    fillMetaTitle(invalidLeng){
        this.metaTitle(invalidLeng);
    }

    clickSaveMetadata(){
        this.saveMetadata;
    }

    assertMetaTitle(validTitle){
        cy.contains(validTitle, { matchCase: true })
        .should('exist');
    }

    fillMetaDescription(validTitle){
        this.metaDescription(validTitle)
    }

    clickAddNewsLetter(){
        this.buttomAddNewsLetter.click();
    }

    fillNLname(invalidName){
        this.nLname.type(invalidName);
    }

    fillNLDescrip(invalidDescription){
        this.nLDescrip.type(invalidDescription);
    }

    clickCreateNL(){
        this.buttonCreateNL.click();
    }
    clickSaveNL(){
        this.buttonSaveNL.click();
    }

    clickCloseModal(){
        this.buttonCloseModal.click();
    }

    assertNLtitle(invalidName){
        cy.contains(invalidName, { matchCase: true })
        .should('exist');
    }

    assertNLDescrip(invalidDescription){
        cy.contains(invalidDescription, { matchCase: true })
        .should('exist');
    }


}   


export default new SettingsPageJuan();