import assert from "assert";
import { Before, Given, When, Then } from "cucumber";
import { Calculator, Equation } from "../../src/calculator";

const calculator = new Calculator();
let equation;

Before(function () {});

Given("the calculator is open", () => {
  calculator.valueA = undefined;
  calculator.valueB = undefined;
});

When("enter the value {int}", (value) => {
  if (calculator.valueA) {
    calculator.valueB = value;
  } else {
    calculator.valueA = value;
  }
});

When("enter symbol key {string}", (value) => {
  equation = value;
});

Then("it should show the value {int}", (expectResult) => {
  let result = calculator.result(equation);
  assert.equal(result, expectResult, "Error ;(");
});
