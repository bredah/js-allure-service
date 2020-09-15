import fs from "fs";
import request from "superagent";
import { zipFolder } from "../utils";

const ALLURE_SERVICE_URL =
  process.env.ALLURE_SERVICE || "http://localhost:8080";

export async function sendResult(allureReportFolder) {
  const file = zipFolder(allureReportFolder);
  return new Promise((resolve) => {
    request
      .post(`${ALLURE_SERVICE_URL}/api/result`)
      .attach("allureResults", file)
      .then((response) => response.body)
      .then((result) => {
        console.log("Results submitted successfully");
        fs.unlinkSync(file);
        resolve(result);
      })
      .catch((error) => {
        throw new Error("An error occurred when upload the result file", error);
      });
  });
}

export async function generateReport(result, info) {
  return new Promise((resolve) => {
    request
      .post(`${ALLURE_SERVICE_URL}/api/report`)
      .set("Content-Type", "application/json;charset=UTF-8")
      .send({
        reportSpec: {
          path: [`${info.environment}/${info.application}`],
          executorInfo: {
            name: info.project,
            type: "automation",
            url: info.projectUrl,
            buildName: info.buildName,
            buildUrl: info.buildUrl,
            reportName: "Report",
          },
        },
        results: [result],
        deleteResults: true,
      })
      .then((response) => {
        console.log("Report generated successfully:", response.body);
        return response.body;
      })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        throw new Error("An error occurred when generate the report", error);
      });
  });
}
