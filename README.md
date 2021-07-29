# Test Automation with Selenium (internally-facing web app)

Example of an automated test suite to validate the functionality of an internally-facing MVC web application from the front-end perspective. 

The test suite was written in [TypeScript](https://www.typescriptlang.org/) using [Selenium](https://www.selenium.dev/) to automate the browser and [Jasmine](https://jasmine.github.io/) as the testing framework.  The [Page Object](https://webdriver.io/docs/pageobjects/) design pattern was also implemented whereby pages are defined as classes called Page Object Models (POM). POMs encapsulate the features of a page (defining its elements and specific methods) and act as a layer between the test scripts and UI providing a reusable interface to the pages of the system under test. 


## Test Automation with Selenium (public-facing web app)

Another example of an automated test suite to validate the functionality of the accompanying public-facing MVC web application (used to collect the data for the internal application) can be seen at [uqs-selenium](https://github.com/haguezo/uqs-selenium).  Again, this test suite uses TypeScript, Selenium, Jasmine and the Page Object pattern.
