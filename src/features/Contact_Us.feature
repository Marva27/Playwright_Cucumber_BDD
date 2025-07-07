Feature: Contact_Us

Scenario: Validate Contact Us Form submission
    Given I navigate to the webdriveruniversity homepage
    When I click on the CONTACT US link
    And I switch to the new browser tab
    Then I should be on the Contact Us page
    When I enter a valid first name
    And I enter a valid last name
    And I enter a valid email address
    And I enter a valid comment
    Then I should be able to submit the form successfully

 Scenario: Validate Contact Us Form submission - Using Specific Data
    Given I navigate to the webdriveruniversity homepage
    When I click on the CONTACT US link
    And I switch to the new browser tab
    Then I should be on the Contact Us page
    When I enter a specific first name "Sarah"
    And I enter a specific last name "Woods"
    And I enter a specific email address "sarah.woods@exampl.com"
    And I enter specific text "Hello world" and a number 2 within the comment input field
    Then I should be able to submit the form successfully   
