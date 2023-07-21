describe('template spec', () => {
  it('TESTING GET', () => {
    cy.request(
      {
        method: 'GET',
        url: 'https://dummy.restapiexample.com/api/v1/employee/1',
        failOnStatusCode: false,

      }
    ).as('details')

    cy.get('@details').its('status').should('eq',200)
    cy.get('@details').then((response) =>{
      cy.log(JSON.stringify(response.body))
    })

    

  })

  it.only('Testing POST', () => {
    cy.request({
      method: 'POST',
      url: 'https://dummy.restapiexample.com/api/v1/create',
      failOnStatusCode: false,
      
      body: {
      id:22,
      employee_name:"TESTING CYPRESS",
      employee_salary:6000000,
      employee_age:27,
      profile_image:""}
  }).as('details')
  //Validate status code
  cy.get('@details').its('status').should('eq', 200)
  cy.get('@details').then((response) => {
      let res = response.body
      att1 = res.id
      cy.log(att1)
  })
  cy.get('@details').then((response) => {
      cy.log(JSON.stringify(response.body))
  })
  });


})