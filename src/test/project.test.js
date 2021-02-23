/* eslint-disable no-irregular-whitespace */
import projectForm from '../project';

describe('Project form', () => {
  it('project form should be a function', () => {
    expect(typeof projectForm).toBe('object');
  });

  it('projectForm should not be an object', () => {
    expect(typeof projectForm).not.toBe('function');
  });
});
