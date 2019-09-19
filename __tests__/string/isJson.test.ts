import isJson from '../../src/string/isJson';

const a: string = '1';
const b: string = 'a';
const c: string = '{"a": "1", "b": "1", "c": "1"}';

describe('test isJson!!', () => {
  it('test number string should return false', () => {
    const ret = isJson(a);
    expect(ret).toBe(false);
  });
  it('test string should return false', () => {
    const ret = isJson(b);
    expect(ret).toBe(false);
  });
  it('should return true', () => {
    const ret = isJson(c);
    expect(ret).toBeTruthy();
  });
});
