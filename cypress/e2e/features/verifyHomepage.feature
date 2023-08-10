Feature: Verify Home Page Sliders

  Scenario: Home Page contains three sliders
    When User goes to google
    And User search website
    And User clicks on the website link
    Then User should see url of website homepage
