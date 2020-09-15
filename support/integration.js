require("dotenv").config();

import path from "path";
import * as allureService from "./allure/allure-service";

const executioInfo = {
  application: process.env.APPLICATION || "application",
  projectUrl: process.env.PROJECT_URL || "http://localhost:8181",
  environment: process.env.NODE_ENV || "dev",
  buildName: process.env.BUILD || "123",
  buildUrl: process.env.BUILD_URL || "http://localhost:8080",
};

(async () => {
  const allureReportFolder = path.join(__dirname, "/../allure-results");
  const result = await allureService.sendResult(allureReportFolder);
  await allureService.generateReport(result.uuid, executioInfo);
})();
