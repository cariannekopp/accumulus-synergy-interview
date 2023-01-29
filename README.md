### Take Home Test for Accumulus Synergy
---

#### Test Automation Engineer Coding Challenge
Welcome to the Accumulus coding challenge for the Test Automation team! 

It won’t take too long, and it’s an opportunity to show your stuff. 

**First, a couple of questions:**
1) If you had to build an automated test framework from scratch, what would be your ideal
tech stack?

**Answer:** If I had to build an automated test framework from scratch, I would likely include Playwright, Cucumber, Javascript, and Github Actions; architected using a POM approach.  

I would first lay the foundation by creating a Tests folder which contained folders for our API tests, UI Tests, and our E2E tests.  

In the Tests folder, I would create a helpers file that would contain a custom method to assist tests in getting the environment and switching test fixtures/test assertions/endpoints based on the environment.

Inside E2E tests, I would create folders for all the pages of our product and populate those folders each with their own feature file (test file), test steps file, fixture file(s), and selectors file. 

I would create in the root of the project a Github Actions workflow file to run our tests.  In that file, I would set the workflow to first get the environment and then run a specified set of tests based on the environment.

The file structure of the API Tests folder would greatly depend on whether the backend was mainly a monolith service or multiple microservices that interacted.

The UI Tests folder structure would be similiar to the E2E tests file structure since it would also follow a POM architecture.



2) What makes you a great Test Automation engineer, and why?

**Answer:** What if?

My brain naturally has a disposition to always wonder "what if?" This has been my greatest strength while working in the testing field.  It has allowed me to capture countless edge cases while always question what we're building, why we're building it, and the endless ways a user may utilize our product. My pragmatic nature, combined with my inquisitive brain, has an aptitude to produce clear and concise documented test cases,thorough test coverage-resulting in products with superb quality.

---

That was easy, right? Now for the fun part. 

Your task is to build a small test framework to test a simple api that gets a
list of ToDos. 

**The ToDo call should be a simple GET request that returns a JSON array something like:**

```
{
"todos": [
{
"id": 1,
"todo": "Finish the Accumulus coding challenge",
"completed": true,
"userId": 26
},
{...},
{...}
],
"total": 10,
"skip": 0,
"limit": 30
}
```

Using your favorite test automation tool, design a few tests to validate the service is functioning
properly. 

Make sure you write down your thinking about how/why you designed the tests as you
did, and what you would consider for a larger application.

Use a free REST API mocking tool like https://mockapi.io/, or anything you prefer that will do the
job of making a REST API.

Please don’t spend more than 1.5-2 hours on it, this is supposed to be fun!


When you are done, send us a link to the app, the npm or github repo, or by email to:
michael.banham@accumulus.org. Or if you like, you can just make a brief video of your work
and send that instead. Whatever is easiest for you to show us your work.

---

## Instructions for Reviewer
:exclamation: Please Read the contents of the file **"TestsInformation.md"** for the answers on _**How each test is designed**_ and _**Why each tests is designed that way**_

**How To Run Postman API Tests via CLI:**
- Clone this repository
- Navigate to this repository in terminal
- Navigate to the testsPostman folder in terminal
- Run `npm install newman` or `npm install`
- Run `newman run ToDoTests.json`

Test Results will print to console

**How to Run Postman API Tests via GUI:**
- Download Postman GUI _or_ use Postman for web
- In Postman, click the 'Import' button
- In Postman, click the 'Upload Files' button and select the file in this repository named 'ToDoTests.json'
- In Postman, click the 'Import' button
- In Postman, click the 'Send' button

Test Results will print under the 'Test Results' tab in Postman GUI

**How to Run Playwright API Tests**
- Clone this repository
- Navigate to this repository in terminal
- Navigate to the tests/API/ToDo folder in terminal
- Run `npm install playwright` or `npm install`
- Run `npx playwright test`

Test Results will print in the console.

To View an HTML report of the Tests Results, run `npx playwright show-report`




