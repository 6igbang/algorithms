const edulidean = require('./index');

test('Math.edulidean', () => {
    expect(edulidean(1, 1)).toBe(1);
    expect(edulidean(2, 1)).toBe(1);
    expect(edulidean(3, 2)).toBe(1);
    expect(edulidean(4, 2)).toBe(2);
    expect(edulidean(12, 9)).toBe(3);
    expect(edulidean(12, -16)).toBe(4);
});