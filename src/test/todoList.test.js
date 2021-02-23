import todoForm from '../todoList';

describe('todoForm', () => {
  it('should show the correct class', () => {
    const mainform = todoForm;
    expect(mainform.getAttribute('class')).toBe('modal-bg todo-modal');
  });

  it('should not show the class', () => {
    const mainform = todoForm;
    expect(mainform.getAttribute('class')).not.toBe('form-control mb-3 w-75 mx-auto d-block');
  });

  it('todoForm  should be an object', () => {
    expect(typeof todoForm).toBe('object');
  });

  it('todoForm  should not be an function', () => {
    expect(typeof todoForm).not.toBe('function');
  });
});
