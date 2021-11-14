// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

// ===== isPhoneNumber test =====

// Should be True
test('123-456-7890 is a valid phone number', () => {
    expect(functions.isPhoneNumber("123-456-7890")).toBe(true);
});

// Should be True
test('555-555-5555 is a valid phone number', () => {
    expect(functions.isPhoneNumber("555-555-5555")).toBe(true);
});

// Should be False
test('911 is not a valid phone number', () => {
    expect(functions.isPhoneNumber("911")).toBe(false);
});

// Should be False
test('1000 is not a valid phone number', () => {
    expect(functions.isPhoneNumber("1000")).toBe(false);
});


// ===== isEmail test =====

// Should be True
test('audrey@gmail.com is a valid email', () => {
    expect(functions.isEmail("audrey@gmail.com")).toBe(true);
});

// Should be True
test('brandon@gmail.com is a valid email', () => {
    expect(functions.isEmail("brandon@gmail.com")).toBe(true);
});

// Should be False
test('111-111-1111 is not a valid email', () => {
    expect(functions.isEmail("111-111-1111")).toBe(false);
});

// Should be False
test('cse110 is not a valid email', () => {
    expect(functions.isEmail("cse110")).toBe(false);
});


// ===== isStrongPassword test =====

// Should be True
test('audreyspassword is a valid password', () => {
    expect(functions.isStrongPassword("audreyspassword")).toBe(true);
});

// Should be True
test('AbCd_1234 is a valid password', () => {
    expect(functions.isStrongPassword("AbCd_1234")).toBe(true);
});

// Should be False
test('1234 is not a valid password', () => {
    expect(functions.isStrongPassword("1234")).toBe(false);
});

// Should be False
test('abcdefghijklmnop is not a valid password', () => {
    expect(functions.isStrongPassword("abcdefghijklmnop")).toBe(false);
});


// ===== isDate test =====

// Should be True
test('10/14/2021 is a valid date', () => {
    expect(functions.isDate("10/14/2021")).toBe(true);
});

// Should be True (even though it's not a valid date...)
test('12/34/5678 is a valid date', () => {
    expect(functions.isDate("12/34/5678")).toBe(true);
});

// Should be False
test('1234 is not a valid date', () => {
    expect(functions.isDate("1234")).toBe(false);
});

// Should be False
test('helloWorld is not a valid date', () => {
    expect(functions.isDate("helloWorld")).toBe(false);
});


// ===== isHexColor test =====

// Should be True
test('#000 is a valid hex color', () => {
    expect(functions.isHexColor("#000")).toBe(true);
});

// Should be True
test('#012345 is a valid hex color', () => {
    expect(functions.isHexColor("#012345")).toBe(true);
});

// Should be False
test('hexColor is not a valid hex color', () => {
    expect(functions.isHexColor("hexColor")).toBe(false);
});

// Should be False
test('1 is not a valid hex color', () => {
    expect(functions.isHexColor("1")).toBe(false);
});