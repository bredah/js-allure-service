import { AllureRuntime, CucumberJSAllureFormatter } from "allure-cucumberjs";

export default class Reporter extends CucumberJSAllureFormatter {
  constructor(options) {
    super(options, new AllureRuntime({ resultsDir: "./allure-results" }), {
      labels: {
        issue: [/@bug_(.*)/],
        epic: [/@feature:(.*)/],
      },
    });
  }
}
