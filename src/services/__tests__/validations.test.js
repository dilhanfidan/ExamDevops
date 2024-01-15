// TODO: Create tests suite for validation function
const { isValid } = require('../validations');

describe('validations tests suites - isValid', () => {
    test('should return an error message for invalid input', () => {
        const invalidGamerTag = 'short';
        const result = isValid(invalidGamerTag);
        expect(result).toBe('Invalid - gamertag length must be at least 8 characters');
    });

    test('should return an error message for missing special character', () => {
        const invalidGamerTag = 'NoSpecialChar';
        const result = isValid(invalidGamerTag);
        expect(result).toBe('Invalid - gamertag must contain at least a special character');
    });

    test('should return an error message for missing number', () => {
        const invalidGamerTag = 'NoNumber&SpecialChar';
        const result = isValid(invalidGamerTag);
        expect(result).toBe('Invalid - gamertag must contain at least a number');
    });

    test('should return null for a valid gamer tag', () => {
        const validGamerTag = 'ValidTag&1';
        const result = isValid(validGamerTag);
        expect(result).toBeNull();
    });
});