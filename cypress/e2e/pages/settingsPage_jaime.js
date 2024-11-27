class SettingsPage_jaime {
    get DisplayNoticeField(){
        return cy.get('div.kg-prose');
    }

    get SaveButton() {
        return cy.get('button').contains('Save');
    }

    get LookAndFeelTab() {
        return cy.get('button#lookAndFeel');
    }

    get AccountPageTab() {
        return cy.get('button#accountPage');
    }

    get SignUpButtonText() {
        return cy.get('.peer.z-\\[1\\].order-2.h-9.w-full.bg-transparent.px-3.py-1\\.5.text-sm.placeholder\\:text-grey-500.dark\\:placeholder\\:text-grey-700.md\\:h-\\[38px\\].md\\:py-2.md\\:text-md.dark\\:text-white.rounded-lg');
    }

    get SupportEmailAddressField() {
        return cy.get('.peer.z-[1].order-2.h-9.w-full.bg-transparent.px-3.py-1.5.text-sm.placeholder\\:text-grey-500.dark\\:placeholder\\:text-grey-700.md\\:h-[38px].md\\:py-2.md\\:text-md.dark\\:text-white.rounded-lg');
    }

    get EditTierCard() {
        return cy.get('div[data-testid="tier-card"][data-tier="free"]')
            .scrollIntoView();
    }

    get EditTierCard_NameField() {
        return cy.get('.peer.z-\\[1\\].order-2.h-9.w-full.bg-transparent.px-3.py-1\\.5.text-sm.placeholder\\:text-grey-500.dark\\:placeholder\\:text-grey-700.md\\:h-\\[38px\\].md\\:py-2.md\\:text-md.dark\\:text-white.rounded-lg');
    }

    typeOnEditTierCard_NameField(tierName){
        this.EditTierCard_NameField.eq(0).clear().type(tierName);
    }

    typeOnEditTierCard_Description(tierDescription){
        this.EditTierCard_NameField.eq(1).clear().type(tierDescription);
    }

    clickOnEditTierCard() {
        this.EditTierCard.click();
    }

    typeOnSupportEmailAddressField(supportEmailAddress){
        cy.wait(1000);
        this.SupportEmailAddressField.clear().type(supportEmailAddress);
    }

    clickAccountPageTab() {
        cy.wait(1000);
        this.AccountPageTab.click();
    }

    typeOnSignUpButtonText(signUpText){
        cy.wait(1000);
        this.SignUpButtonText.clear().type(signUpText);
    }

    clickLookAndFeelTab() {
        cy.wait(1000);
        this.LookAndFeelTab.click();
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

    checkIfInvalidEmailAddressExists() {
        cy.contains('span', 'Enter a valid email address').should('exist');
    }

    navigateToEditTierModal() {
        this.clickOnEditTierCard();
    }

    checkIfErrorExists() {
        cy.get('div.text-grey-900.dark\\:text-grey-300')
            .should('exist');
    }
}

export default new SettingsPage_jaime();