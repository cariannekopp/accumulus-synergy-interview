### This file provides the "How test is designed" and "Why test is designed this way" information for reviewers.
---

1. **Test "Status code is 200"**

**How test is designed:**
- Test performs a simple assertion that the response code returned is 200.
- Test does not include verification that response code returned is 200 with proper authentication due to authentication not being an available feature with mock api service used.
- Thus, no tests for verifiying response codes for failed authentication are included here either.

**Why test is designed this way:**
- Test is coded using framework's simple assertion method
- Test is positioned to be first test executed in the suite since verifying a valid response is returned is a standard p0 test.
- This test is typically considered p0 since other tests verifying aspects of the body any not be feasible without the expected response returned.

---
2. **Test "Total Value Equals the Length of ToDos"**

**How test is designed:**
- This test asserts two variables are equal
- The first variable is set to the length of the todos object in the response
- The second variable is set to the value returned for total in the response

**Why test is designed this way:**
- I chose to set the values to be compared to variables to make the test assertion more readable and easier to understand for a reviewer

---

3. **Test "Todos are Sorted by id value"**

**How test is designed:**
- This test loops through the response body and using a conditional statement, verifies that the Number returned for each iteration is less than the Number value of the following iteration

**Why test is designed this way:**
- This test was purposefully designed to NOT check that the id values are increments of 1, even though the example response meets that criteria.
- The reason I instead chose to verify that the next iteration's id value is greater than the current is the potential scenario where a todo item could be DELETED and potentially not returned in the response.
- This purpose of verifying that the todo items are sorted is to ensure that the list of todo items is presented to the user in an order they expect and not in a random order.

---

4. **Tests "Id is type of Number", "Todo is type of String", "Completed is type of Boolean", "Userid is type of Number", "Total is type of Number", "Skip is type of Number", and "Limit is type of Number"**

**How tests are designed:**
- These tests are all designed in a similiar format as they all verify correct value types are returned
- These tests (except for Total, Skip, and Limit) loop through the response body and assert the expected value type is returned
- The tests for Total, Skip, and Limit do not loop since there is only a single value for each of these items

**Why tests are designed this way:**
- These tests (except for Total, Skip, and Limit) were designed to verify EACH value type since it cannot be assumed that if the first value type is correct that the rest will be also correct
- Even though all these types verify the correct type for a value was returned, they were purposefully not grouped into a single test.  This is because tests should ideally have 1 verification.  If one value's type did not pass verification, the test would not proceed to check the rest of the value types after the one that failed.
- For the tests that verify a value's type were the type 'Number', I intentionally did not validate that the returned value was NaN.  This is because NaN is not a valid JSON type and thus cannot be a valid scenario.
- The tests for Total, Skip, and Limit were designed as a simple assertion as there is no need to loop since only 1 value is returned for each
