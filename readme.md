# Allure Service

This project contains an example of how to implement the Allure Service to store the results obtained during the test run.

- [Service details](#service-details)
- [Integration](#integration)

## Service details

For this example, the tool called Allure Service was chosen ([GitHub](https://github.com/kochetkov-ma/allure-server)|[DockerHub](https://hub.docker.com/r/kochetkovma/allure-server)). Thanks Maxim Kochetkov ([GitHub](https://github.com/kochetkov-ma)).

To start the docker service, run the command below:

```shell
docker run -p 8080:8080 kochetkovma/allure-server:latest -e allure.reports.history.level=10 -e allure.issues.tracker.pattern=http://my-bugtracker.com/issue/%s
-e allure.tests.management.pattern=http://my-testmanagement.com/testcase/%s
```

Now, just access the `http:127.0.0.1:8080/ui` to see the Allure Service UI.

## Integration

Before you begin, define the environment variables:

- APPLICATION: Application name
- NODE_ENV: Execution environment
- PROJECT_URL: Repository url
- BUILD: Build version
- BUILD_URL: Build url (e.g.: jenkins)
- ALLURE_SERVICE: Allure Service url

The project contains two examples:

- Jest

```sh
npm run test:jest
```

- Cucumber

```sh
npm run test:cucumber
```

Execute one of the options listed above, and after this, run the command below:

```sh
npm run integration
```

The result obtained is look

```console
Results submitted successfully
Report generated successfully: {
  uuid: 'bc28686e-6fb8-4e3c-a356-c2a152e9aeb8',
  path: 'dev/cucumber',
  url: 'http://localhost:8080/reports/dev/cucumber'
}
```
