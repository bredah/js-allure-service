export const Equation = Object.freeze({
  Addition: "+",
  Subtraction: "-",
  Multiplication: "*",
  Division: "/",
});

export class Calculator {
  constructor() {
    this.valueA = 0;
    this.valueB = 0;
  }

  result(equation) {
    switch (equation) {
      case Equation.Addition:
        return this.valueA + this.valueB;
      case Equation.Subtraction:
        return this.valueA - this.valueB;
      case Equation.Multiplication:
        return this.valueA * this.valueB;
      case Equation.Division:
        if (this.valueB == 0) {
          throw new Error("Division by zero :(");
        }
        return this.valueA / this.valueB;
      default:
        throw new Error(`Invalid equation: ` + equation);
    }
  }
}
