class SettingsPageCarlos {
    clickEditX() {
        cy.get('div[data-testid="twitter"] span').contains('Edit').click();
    }

    typeXTitle(title) {
        cy.get('div[data-testid="twitter"] input[type="text"]').eq(0).clear({force: true}).type(title);
    }

    clickSaveX() {
        cy.get('div[data-testid="twitter"] span').contains('Save').click();
    }

    typeXDescription(description) {
        cy.get('div[data-testid="twitter"] input[type="text"]').eq(1).clear({force: true}).type(description);
    }

    clickEditFacebook() {
        cy.get('div[data-testid="facebook"] span').contains('Edit').click();
    }

    typeFacebookTitle(title) {
        cy.get('div[data-testid="facebook"] input[type="text"]').eq(0).clear({force: true}).type(title);
    }

    clickSaveFacebook() {
        cy.get('div[data-testid="facebook"] span').contains('Save').click();
    }

    typeFacebookDescription(description) {
        cy.get('div[data-testid="facebook"] input[type="text"]').eq(1).clear({force: true}).type(description);
    }

    clickEditSocialAccount() {
        cy.get('div[data-testid="social-accounts"] span').contains('Edit').click();
    }

    validateSavedMessage() {
        cy.get('span').contains('Saved').should('exist');
    }

    typeSocialAccountFacebookURL(url) {
        cy.get('div[data-testid="social-accounts"] input[type="text"]').eq(0).clear({force: true}).type(url);
    }

    clickSaveSocialAccount() {
        cy.get('div[data-testid="social-accounts"] span').contains('Save').click();
        cy.get('div[data-testid="social-accounts"] span').contains('Save').click();
    }

    seeFacebookInvalid(url) {
        cy.get('span').contains('The URL must be in a format like https://www.facebook.com/yourPage').should('exist');
    }
}

export default new SettingsPageCarlos();