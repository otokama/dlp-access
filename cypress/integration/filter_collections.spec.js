beforeEach(() => {
  cy.visit('/collections')
})

describe('Filter collections by subject', () => {
  let subject = "Women-owned architectural firms"
  it(`displays the collections filtered by ${subject}`, () => {
    cy.get('#content-wrapper')
      .find('div.collection-filters > :nth-child(1) > div.selection')
      .click()
      .contains(subject)
      .click()
    cy.get('#content-wrapper')
      .find('.row')
      .children('.gallery-item')
      .should('have.length', 6)
      .first() 
      .contains('Dorothee Stelzer King Architectural Collection, 1950-2008 (Ms2013-023)')
  })
})

describe('Sort collections', () => {
  it('displays the collections in ascending order of title by default', () => {
    cy.get('#content-wrapper')
      .find('div.collection-filters > :nth-child(2) > div.selection')
      .as('sortSelection')
    cy.get('@sortSelection')
      .find('div.text')
      .contains('Title (A-Z)')
    cy.get('#content-wrapper')
      .find('.row')
      .children('.gallery-item')
      .first() 
      .contains('Alberta Pfeiffer Architectural Collection, 1929-1976 (Ms1988-017)')
  })

  it('displays the collections in descending order of title if selected ', () => {
    cy.get('#content-wrapper')
      .find('div.collection-filters > :nth-child(2) > div.selection')
      .as('sortSelection')
      .click()
      .find('div.menu > :nth-child(2)')
      .as('titleDesc')
    cy.get('@titleDesc')
      .find('span')
      .contains('Title')
      .click()
    cy.get('@sortSelection')
      .find('div.text')
      .contains('Title (Z-A)')
    cy.wait(1000)
    cy.get('#content-wrapper')
      .find('.row')
      .children('.gallery-item')
      .first() 
      .contains('Paula Treder Architectural Collection, 1969-1972 (Ms2005-002)')
  })

  it('displays the collections in the order of newest date if selected ', () => {
    cy.get('#content-wrapper')
      .find('div.collection-filters > :nth-child(2) > div.selection')
      .as('sortSelection')
      .click()
      .find('div.menu > :nth-child(3)')
      .as('dateDesc')
    cy.get('@dateDesc')
      .find('span')
      .contains('Date')
      .click()
    cy.get("@sortSelection")
      .find("div.text")
      .contains("Date (Newest first)");
    cy.wait(1000)
    cy.get('#content-wrapper')
      .find('.row')
      .children('.gallery-item')
      .first() 
      .contains('Paula Treder Architectural Collection, 1969-1972 (Ms2005-002)')
  })
})