import { Calculator, Equation } from "./calculator";
import { Severity } from "jest-allure/dist/Reporter";

const calculator = new Calculator();

describe("calculator", () => {
  beforeEach(() => {
    reporter.startStep("Arrange");
    calculator.valueA = 6;
    calculator.valueB = 2;
    reporter.endStep();
  });

  it("addition", () => {
    reporter
      .description("Short description about testing an addition")
      .severity(Severity.Trivial)
      .testId("TEST-01");

    reporter.startStep("Act");
    const result = calculator.result(Equation.Addition);
    reporter.endStep();

    reporter.startStep("Assert");
    expect(result).toBe(8);
    reporter.endStep();
  });

  it("subtraction", () => {
    reporter
      .description("Short description about testing a subtraction")
      .severity(Severity.Minor)
      .testId("TEST-02");

    reporter.startStep("Act");
    const result = calculator.result(Equation.Subtraction);
    reporter.endStep();

    reporter.startStep("Assert");
    expect(result).toBe(4);
    reporter.endStep();
  });

  it("multiplication", () => {
    reporter
      .description("Short description about testing a multiplication")
      .severity(Severity.Normal)
      .testId("TEST-03");

    reporter.startStep("Act");
    const result = calculator.result(Equation.Multiplication);
    reporter.endStep();

    reporter.startStep("Assert");
    expect(result).toBe(12);
    reporter.endStep();
  });

  it("division", () => {
    reporter
      .description("Short description about testing a division")
      .severity(Severity.Critical)
      .testId("TEST-04");

    reporter.startStep("Act");
    const result = calculator.result(Equation.Division);
    reporter.endStep();

    reporter.startStep("Assert");
    expect(result).toBe(3);
    reporter.endStep();
  });

  it("error", () => {
    reporter
      .description("Short description about testing a division")
      .severity(Severity.Critical)
      .testId("TEST-04");

    reporter.startStep("Act");
    calculator.result("sum");
    reporter.endStep();
  });
});
