 Feature: Specify number of events

    Scenario: When the user hasn't specified a number, 32 is the default number
        Given the user has not specified the number of events
        When the user sees the full events list loaded
        Then the user should see 33 events by default

    Scenario: The user can change the number of events they want to see
        Given the user has not specified what event they want shown
        When the user changes the number of events shown
        Then the user's page will update with the number of events chosen

