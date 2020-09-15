Feature: Calculator

    @FACCOM-5716
    Scenario: Calculate the sum of two positive integer numbers
        Given the calculator is open
        When enter the value 1
        And enter symbol key "+"
        And enter the value 1
        Then it should show the value 2

    @FACCOM-5718
    Scenario Outline: Making equations
        Given the calculator is open
        When enter the value <valueA>
        And enter symbol key "<equation>"
        And enter the value <valueB>
        Then it should show the value <result>

        Examples:
            | valueA | equation | valueB | result |
            | 6      | +        | 2      | 8      |
            | 6      | -        | 2      | 4      |
            | 6      | *        | 2      | 12     |
            | 6      | /        | 2      | 3      |