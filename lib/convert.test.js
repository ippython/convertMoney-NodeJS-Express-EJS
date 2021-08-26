const { TestWatcher } = require('jest');
const convert = require('./convert');

test('convert 4 for 4', () =>{
    expect(convert.convert(4, 4)).toBe(16)
})
test('convert 0 for 4', () =>{
    expect(convert.convert(0, 4)).toBe(0)
})
test('convert 0 for 4', () =>{
    expect(convert.convert(0, 4)).toBe(0)
})