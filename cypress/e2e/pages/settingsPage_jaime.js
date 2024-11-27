class SettingsPage_jaime {
    get DisplayNoticeField(){
        return cy.get('div.kg-prose');
    }

    get SaveButton() {
        return cy.get('button').contains('Save');
    }

    clickSaveButton() {
        this.SaveButton.click();
    }

    typeOnDisplayNoticeField(displayName){
        this.DisplayNoticeField.clear().type(displayName);
    }

    navigateToPortalModal() {
        cy.get('#admin-x-settings-scroller > div > div:nth-child(3) > div > div:nth-child(1) > div.flex.items-start.justify-between.gap-4 > div:nth-child(2) > button')
            .scrollIntoView()
            .click();
    }

    checkChangesWereSaved() {
        cy.contains('button', 'Saved').should('exist');
    }

    checkIfNoticeLongErrorExists() {
        cy.contains('span', 'Signup notice is too long').should('exist');
    }
}

export default new SettingsPage_jaime();