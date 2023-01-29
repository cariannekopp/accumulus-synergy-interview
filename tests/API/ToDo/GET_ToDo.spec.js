// @ts-check
const { test, expect } = require('@playwright/test');
const { request } = require('@playwright/test');
const playwright = require( '@playwright/test' );

test.describe("ToDo API Tests", () => {

    test("Status Code is 200", async ({ request, baseURL }) => {
        const response = await request.get(baseURL);
        expect(response.status()).toBe(200);
    });
    
    test("Total Value Equals the Length of ToDos", async ({ request, baseURL }) => {
        const response = await request.get(baseURL);
        const responseBody = await response.body();
        let data = JSON.parse(responseBody.toString());
        let myToDosLength = data.todos.length;
        let myTotal = data.total;
        expect(myToDosLength).toBe(myTotal);
      });
    
    test("Todos are Sorted by id value", async({ request, baseURL }) => {
        const response = await request.get(baseURL);
        const responseBody = await response.body();
        let data = JSON.parse(responseBody.toString());
        let myToDos = data.todos;
        let i;
        for(i = 0; i < (myToDos.length - 1); i++){
            if(myToDos[i].id < myToDos[i+1].id) {
                var pass = true;
            } else {
                var pass = false;
            }
            expect(pass).toBe(true);
        }
    });
    
    test("Id is type of Number", async({ request, baseURL }) => {
        const response = await request.get(baseURL);
        const responseBody = await response.body();
        let data = JSON.parse(responseBody.toString());
        let myToDos = data.todos;
        let i;
        for(i = 0; i < myToDos.length; i++) {
            expect(typeof myToDos[i].id).toEqual("number");
        }
    });
    
    test("Todo is type of String", async({ request, baseURL }) => {
        const response = await request.get(baseURL);
        const responseBody = await response.body();
        let data = JSON.parse(responseBody.toString());
        let myToDos = data.todos;
        let i;
        for(i = 0; i < myToDos.length; i++) {
            expect(typeof myToDos[i].todo).toEqual("string");
        }
    });
    
    test("Completed is type of Boolean", async({ request, baseURL }) => {
        const response = await request.get(baseURL);
        const responseBody = await response.body();
        let data = JSON.parse(responseBody.toString());
        let myToDos = data.todos;
        let i;
        for(i = 0; i < myToDos.length; i++) {
            expect(typeof myToDos[i].completed).toEqual("boolean");
        }
    });
    
    test("UserId is type of Number", async({ request, baseURL }) => {
        const response = await request.get(baseURL);
        const responseBody = await response.body();
        let data = JSON.parse(responseBody.toString());
        let myToDos = data.todos;
        let i;
        for(i = 0; i < myToDos.length; i++) {
            expect(typeof myToDos[i].userId).toEqual("number");
        }
    });
    
    test("Total is type of Number", async({ request, baseURL }) => {
        const response = await request.get(baseURL);
        const responseBody = await response.body();
        let data = JSON.parse(responseBody.toString());
        let total = data.total;
        expect(typeof total).toEqual("number");
    });
    
    test("Skip is type of Number", async({ request, baseURL }) => {
        const response = await request.get(baseURL);
        const responseBody = await response.body();
        let data = JSON.parse(responseBody.toString());
        let skip = data.skip;
        expect(typeof skip).toEqual("number");
    });
    
    test("Limit is type of Number", async({ request, baseURL }) => {
        const response = await request.get(baseURL);
        const responseBody = await response.body();
        let data = JSON.parse(responseBody.toString());
        let limit = data.limit;
        expect(typeof limit).toEqual("number");
    })
    

});


