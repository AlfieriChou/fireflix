import CustomLimit from '../../src/limit/customLimit';

const customLimit = new CustomLimit();

describe('CustomLimit', () => {
  it('execute', async done => {
    const ret = await customLimit.execute(`${Date.now()}/1000`, () => 'helloWorld');
    expect(ret).toEqual('helloWorld');
    expect(customLimit.length()).toEqual(1);
    done();
  });

  it('clear', async done => {
    const key = `${Date.now()}/1000`;
    await customLimit.execute(key, () => 'helloWorld');
    customLimit.clear(key);
    expect(customLimit.length()).toEqual(0);
    done();
  });

  it('clear all', async done => {
    await customLimit.execute(`${Date.now()}/1000`, () => 'helloWorld');
    customLimit.clearAll();
    expect(customLimit.length()).toEqual(0);
    done();
  });

  it('get value', async done => {
    const key = `${Date.now()}/1000`;
    await customLimit.execute(key, () => 'helloWorld');
    const ret = customLimit.getValue(key);
    expect(ret).toEqual('helloWorld');
    done();
  });

  it('exists key', async done => {
    const key = `${Date.now()}/100000`;
    await customLimit.execute(key, () => 'helloWorld');
    const ret = await customLimit.execute(key, () => 'kkWoeld');
    expect(ret).toEqual('helloWorld');
    done();
  });

  it('cache length is 1', async done => {
    await customLimit.execute(`${Date.now()}`, () => 'helloWorld');
    await customLimit.execute(`${Date.now()}`, () => 'kkWoeld');
    expect(customLimit.length()).toEqual(1);
    done();
  });
});
