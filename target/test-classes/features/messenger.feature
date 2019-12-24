@Web
Feature: Login feature

  Background:
    Given I am on home Page

 @login1
  Scenario: Verify signup button
    When I enter makbule into firstname text field on the messenger page
    And I enter angun into lastname text field on the messenger page
    Then I verify that signup button is disable at homepage

  @enterData
  Scenario Outline: Signup form should not accept any invalid email address
    When I enter Test into firstname text fields on home screen
    And I enter Test into lastname text fields on home screen
    And I enter <email> into Mobilenumber text fields on home screen
    And I click on password text field on home screen
    And I click on email text field on home screen
    Then I verify Error Message for invalid email on homepage
    Examples:

      | email                         |
      | plainaddress                  |
      | #@%^%#$@#$@#.com              |
#      | @example.com                  |
#      | Joe Smith <email@example.com> |
#      | email.example.com             |
#      | email@example@example.com     |
#      | .email@example.com            |
#      | email.@example.com            |
#      | email..email@example.com      |
#      | あいうえお@example.com         |
#      | email@example.com (Joe Smith) |
#      | email@example                 |
#      | email@-example.com            |
#      | email@.example.web            |
#      | @email111.222.333.44444       |
#      | email@example...com           |
#      | Abc..123@example.com          |

