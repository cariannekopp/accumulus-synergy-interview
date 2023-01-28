### Take Home Test for Accumulus Synergy
---

#### Test Automation Engineer Coding Challenge
Welcome to the Accumulus coding challenge for the Test Automation team! It won’t take too
long, and it’s an opportunity to show your stuff. 

**First, a couple of questions:**
1) If you had to build an automated test framework from scratch, what would be your ideal
tech stack?

**Answer:** TODO

2) What makes you a great Test Automation engineer, and why?

**Answer:** TODO

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
