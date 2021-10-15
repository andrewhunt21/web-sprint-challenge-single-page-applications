describe('Quotes App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza');
    })

    const nameInput = () => cy.get('input[id="name-input"]');
    const specialInput = () => cy.get('input[id="special-text"]');
    const toppingsBoxes = () => cy.get('input[className="toppings"]');
    const submitButton = () => cy.get('button[id="order-button"]');

    it('sanity check', () => {
        expect(1 + 2).to.equal(3);
    })

    describe('filling out inputs and cancelling', () => {
        it('can type in the inputs', () => {
            nameInput()
                .should('have.value', '')
                .type('name name')
                .should('have.value', 'name name');
            specialInput()
                .should('have.value', '')
                .type('some special instructions')
                .should('have.value', 'some special instructions');
        })
    })

})