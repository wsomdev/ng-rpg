import { InterfaceDigitsPipe } from './interface-digits-pipe';

describe('== InterfaceDigitsPipe Testing ==', () => {
  const pipe = new InterfaceDigitsPipe();

  it('1. Testing 1 return', () => {
    expect(pipe.transform(0.2)).toBe(1);
    expect(pipe.transform(0.42)).toBe(1);
    expect(pipe.transform(0.512)).toBe(1);
    expect(pipe.transform(0.9999)).toBe(1);
  });

  it('2. Testing 0 return', () => {
    expect(pipe.transform(-4)).toBe(0);
    expect(pipe.transform(-2.5)).toBe(0);
    expect(pipe.transform(-69)).toBe(0);
    expect(pipe.transform(-0.01)).toBe(0);
  });

  it('3. Testing 1+ return', () => {
    expect(pipe.transform(4.111)).toBe(4);
    expect(pipe.transform(2.5)).toBe(3);
    expect(pipe.transform(69)).toBe(69);
    expect(pipe.transform(1.01)).toBe(1);
  });

  it('4. Testing digits parameters', () => {
    expect(pipe.transform(4.111, 0)).toBe(4);
    expect(pipe.transform(2.22225, 1)).toBe(2.2);
    expect(pipe.transform(69.1111111, 3)).toBe(69.111);
    expect(pipe.transform(1.01, 1)).toBe(1);
  });
});
