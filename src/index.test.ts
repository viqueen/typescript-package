import { project } from './index';

describe('project', () => {
    it('should add project as prefix', () => {
        const withPrefix = project('hello');
        expect(withPrefix).toEqual(`project hello`);
    });
});
