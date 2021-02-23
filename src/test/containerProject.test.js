import projectContainer from '../containerProject';

describe('containerProject', () => {
  
    it('containerProject expected to return a function', () => {
      expect(typeof(projectContainer)).toBe('function');
    });
  
    it('containerProject should not be an object', () => {
      expect(typeof(projectContainer)).not.toBe('object');
    });

    const myProject = projectContainer('test1');
    const title = myProject.cardTitle

    it('containerProject expected to have a string title', () => {
          expect(typeof(title)).not.toBe('object');
    });
  });