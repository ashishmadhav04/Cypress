/// <reference types="cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe('General test with CIrcle CI API', ()=> {
    it('My first API tests', ()=> {
        cy.request({
            method: 'GET',
            headers: ({
                Authorization: 'Basic ' + Cypress.env('authorization_token'),
                'Circle-Token': Cypress.env('circle_token')
            }),
            url: '/project/gh/ashishmadhav04/CirclePipeline',
            body: ''
        }).then((response) => {
                expect(response.status).to.eq(200)
                let body = JSON.parse(response.body)
                expect(body.organization_name).to.eq('ashishmadhav04')
                Cypress.env('project_name', body.organization_name)
            })
    })
})