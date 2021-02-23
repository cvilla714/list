import todoEdit from '../todoEdit';

describe('todoEdit', () => {
  it('should show the correct class', () => {
    const mainform = todoEdit;
    expect(mainform.getAttribute('class')).toBe('modal-bg edit-todo-modal');
  });

  it('should not show the class', () => {
    const mainform = todoEdit;
    expect(mainform.getAttribute('class')).not.toBe('form-control mb-3 w-75 mx-auto d-block');
  });

  it('todoForm  should be an object', () => {
    expect(typeof todoEdit).toBe('object');
  });

  it('todoForm  should not be an function', () => {
    expect(typeof todoEdit).not.toBe('function');
  });
});
