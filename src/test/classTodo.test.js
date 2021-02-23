import Todo from '../classTodo';

describe('Todo class', () => {
  const mytodo = new Todo('play destiny 2', 'level up', '2/27/2021', 'low', 'play games');

  it('mytodo should have the title', () => {
    expect(mytodo.title).toEqual('play destiny 2');
  });

  it('mytodo should have the description', () => {
    expect(mytodo.description).toEqual('level up');
  });

  it('mytodo should have the date', () => {
    expect(mytodo.date).toEqual('in 3 days');
  });

  it('mytodo should have the priority', () => {
    expect(mytodo.priority).toEqual('low');
  });

  it('mytodo should have the finsihed applied', () => {
    expect(mytodo.finished).toEqual(false);
  });

  it('mytodo should not have the correct title', () => {
    expect(mytodo.title).not.toBe('play mario sunshine');
  });

  it('mytodo should not have the right description', () => {
    expect(mytodo.description).not.toBe('collect all coins');
  });

  it('mytodo should not have the correct date', () => {
    expect(mytodo.date).not.toBe('in 5 days');
  });

  it('mytodo should not match  the priority', () => {
    expect(mytodo.priority).not.toBe('normal');
  });

  it('mytodo should not have the finsihed applied', () => {
    expect(mytodo.finished).not.toBe(true);
  });
});
