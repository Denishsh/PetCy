const userData = require("../fixtures/user_data.json");

describe("Pet user create, update, delete", () => {
    it("Create user test", () => {
        cy.request({
            method: "POST",
            url: "https://petstore.swagger.io/v2/user",
            body: {
                "id": 123456,
                "username": userData.username,
                "firstName": "string",
                "lastName": "string",
                "email": "string",
                "password": userData.password,
                "phone": "string",
                "userStatus": 0
              }
          }).then((response) => {
            cy.log(JSON.stringify(response.body));
            expect(response.status).to.eq(200);
        }) 
    });

    it("Update user test", () => {
        cy.request({
            method: "PUT",
            url: "https://petstore.swagger.io/v2/user/" + userData.username,
            body: {
                "id": 123456,
                "username": userData.changedUsername,
                "firstName": "string",
                "lastName": "string",
                "email": "string",
                "password": userData.password,
                "phone": "string",
                "userStatus": 0
              }
          }).then((response) => {
            cy.log(JSON.stringify(response.body));
            expect(response.status).to.eq(200);
        })
    });

    it("Delete user test", () => {
        cy.request({
            method: "DELETE",
            url: "https://petstore.swagger.io/v2/user/" + userData.username,
            failOnStatusCode: false
        }).then((response) =>{
            cy.log(JSON.stringify(response.body));
            expect(response.status).to.eq(404);
        });

        cy.request({
            method: "DELETE",
            url: "https://petstore.swagger.io/v2/user/" + userData.changedUsername,
            failOnStatusCode: false
        }).then((response) =>{
            cy.log(JSON.stringify(response.body));
            expect(response.status).to.eq(200);
        });
    });

    
});