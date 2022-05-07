Feature: Car rental

    This feature is required for a user to be able to rent a car

    Scenario: User should be able to see the desired rental car model in the search result
        Given a user navigates to the website
        When the user select "France"
        And choose "Paris"
        And enter the model "Mazda 3"
        And enter pick up date "2022-05-20"
        And enter drop off date "2022-05-25"
        And click on the Search button
        Then the user should be able to see the desired car model in the search results

     Scenario: User should be able to see the correct vehicle information for the chosen car
        Given a user navigates to the website
        When the user select "France"
        And choose "Paris"
        And enter pick up date "2022-06-05"
        And enter drop off date "2022-06-06"
        And click on the Search button
        And selects the row "1" car
        Then the user should be able to see the correct vehicle information

    Scenario: User should be able to successfully rent a car
        Given a user navigates to the website
        When the user select "France"
        And choose "Paris"
        And enter pick up date "2022-05-20"
        And enter drop off date "2022-05-25"
        And click on the Search button
        And selects the row "1" car
        Then the user should be able to see the correct vehicle information
        And clicks on the rent button
        And enters "John" "Doe" "1234567890" "johndoe@gmail.com" into the form
        And clicks on the rent button to confirm
        Then user has successfully rented a car and receives a confirmation message