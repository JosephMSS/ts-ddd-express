Feature: Create a new course
  In order to have courses in the platform
  As a user with admin permissions
  I want to create a new course

  Scenario: A valid non existing course
    Given I send a PUT request to "/courses/ef8ac118-8d7f-49cc-abec-78e0d05af80a" with body:
    """
    {
      "id":"d92cf24e-b3e4-4885-9592-5d6996a6733c",
      "name": "The best course",
      "duration": "5 hours"
    }
    """
    Then the response status code should be 201
    And the response should be empty
  Scenario: An invalid non existing course
    Given I send a PUT request to "/courses/ef8ac118-8d7f-49cc-abec-78e0d05af80a" with body:
    """
    {
      "id":"d92cf24e-b3e4-4885-9592-5d6996a6733c",
      "name": 5,
      "duration": "5 hours"
    }
    """
    Then the response status code should be 422
