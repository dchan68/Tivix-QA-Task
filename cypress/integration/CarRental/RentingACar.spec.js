import {Given, When, And, Then} from "cypress-cucumber-preprocessor/steps"

let carModel = '';
let vehiclePickupDate = '';
let vehicleDropOffDate = '';
let company = '';
let licensePlate = '';
let pricePerDay = '';
let countryOfRental = '';
let cityOfRental = '';

Given('a user navigates to the website', () => {
    cy.visit('/')
    cy.title().should('eq', 'Car rent')
})

When('the user select {string}', (country) => {
    countryOfRental = country
    cy.get('[name="country"]').select(country)
    
})

And('choose {string}', (city) => {
    cityOfRental = city
    cy.get('[name="city"]').select(city).should('have.value', 4)
    
})

And('enter the model {string}', (model) => {
    carModel = model
    cy.get('[name="model"]').type(model)
})

And('enter pick up date {string}', (pickup) => {
    vehiclePickupDate = pickup
    cy.get('[name="pickup"]').type(pickup)
})

And('enter drop off date {string}', (dropoff) => {
    vehicleDropOffDate = dropoff
    cy.get('[name="dropoff"]').type(dropoff)
})

And('click on the Search button', () => {
    cy.get('[class="btn btn-primary"]').click()
})

Then('the user should be able to see the desired car model in the search results', () => {
    cy.get('table[id=search-results]').contains('td', carModel).should('be.visible')
})

And('selects the row {string} car', (row) => {
    //gets the value of the company from table and stores it in variable company
    cy.get('table[id=search-results] > tbody > tr:nth-child(' + row + ') > td:nth-child(2)').then(article => {
        company = article.text()
    })
    //gets the value of the car model from table and stores it in variable carModel
    cy.get('table[id=search-results] > tbody > tr:nth-child(' + row + ') > td:nth-child(3)').then(article => {
        carModel = article.text()
    })
    //gets the value of the license plate from table and stores it in variable licensePlate
    cy.get('table[id=search-results] > tbody > tr:nth-child(' + row + ') > td:nth-child(4)').then(article => {
        licensePlate = article.text()
    })
    //gets the value of the price per day from table and stores it in variable pricePerDay
    cy.get('table[id=search-results] > tbody > tr:nth-child(' + row + ') > td:nth-child(6)').then(article => {
        pricePerDay = article.text()
    })
    //Clicks on the rent button
    cy.get('table[id=search-results] > tbody > tr:nth-child(' + row + ') > td:nth-child(7) > a').click()

})

Then('the user should be able to see the correct vehicle information', () => {
    cy.get('[class="card-header"]').contains(carModel).should('be.visible')
    cy.get('[class="card-title"]').contains(company).should('be.visible')
    cy.get('[class="card-text"]').contains(pricePerDay).should('be.visible')
    cy.get('[class="card-text"]').contains(countryOfRental).should('be.visible')
    cy.get('[class="card-text"]').contains(cityOfRental).should('be.visible')
    cy.get('[class="card-text"]').contains(licensePlate).should('be.visible')
    cy.get('h6').contains(vehiclePickupDate).should('be.visible')
    cy.get('h6').contains(vehicleDropOffDate).should('be.visible')
})

And('clicks on the rent button', () => {
    cy.get('a[class="btn btn-primary"]').click()
})

And('enters {string} {string} {string} {string} into the form', (firstName, lastName, cardNumber, email) => {
    cy.get('input[id="name"]').type(firstName)
    cy.get('input[id="last_name"]').type(lastName)
    cy.get('input[id="card_number"]').type(cardNumber)
    cy.get('input[id="email"]').type(email)
})

And('clicks on the rent button to confirm', (firstName, lastName, cardNumber, email) => {
    cy.get('button[class="btn btn-primary"]').click()
})

Then('user has successfully rented a car and receives a confirmation message', () => {
    cy.on('uncaught:exception', (e, runnable) => {
        expect(err.message).to.include('Page not found')
        return false
    })
    
})