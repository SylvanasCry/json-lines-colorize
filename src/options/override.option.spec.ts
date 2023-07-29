import { BadFormedOptionException } from '../exceptions/bad-formed-option.exception';
import { _parser } from './override.option';

describe('override.option.ts: parser', () => {
  it('should throw on bad formed option value', () => {
    const fn = () => {
      _parser('bad,value,ff0', new Map());
    };
    expect(fn).toThrow(BadFormedOptionException);
  });

  it('should extract option value', () => {
    const option = _parser('good,value,#ff0000', new Map());
    expect(option).toBeInstanceOf(Map);
    expect(option.size).toBe(1);
  });

  it('should add hash symbol to hexColor', () => {
    const option = _parser('good,value,ff0000', new Map());
    expect(option.get('good')?.hexColor).toBe('#ff0000');
  });
});
