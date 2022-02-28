import {Given, And, When, Then} from 'cypress-cucumber-preprocessor/steps';

Given('url git',()=>{
cy.visit('https://qa-environment.koalaresorthotels.com/Account/Logon')
})
Given('datalari kullanarak sayfaya gir',(dataTale)=>{
    cy.get('#UserName').type(dataTale.rawTable[1][0])
    cy.get('#Password').type(dataTale.rawTable[1][1])
    
})
Given('login butonuna tikla',()=>{
    cy.get('#btnSubmit').click()
})
Given('sayfaya girildigini onayla',()=>{
    cy.get('.caption-subject').should('be.visible')
})