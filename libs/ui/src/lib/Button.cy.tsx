import { Button } from './Button';

describe('Button', () => {
  it('should render', () => {
    cy.mount(<Button data-cy="button">Test</Button>);
    cy.get('[data-cy="button"]')
    //cy.findByTestId('button')
  });
  it('should handle click', () => {
    const onClickSpy = cy.spy().as('onClickSpy');
    cy.mount(
      
        <button
          onClick={onClickSpy}
          id="main"
          class="btn btn-large"
          name="submission"
          role="button"
          data-cy="submit"
          data-test="submit"
        >
          Submit
        </button>
      
    );

    cy.get('[data-cy="submit"]').click();
  });
});
