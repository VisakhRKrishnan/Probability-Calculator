import { calculateProbability } from './calculator';

describe('calculateProbability', () => {
    describe('Validation', () => {
        it('should throw error if A < 0', () => {
            expect(() => calculateProbability('CombinedWith', -0.1, 0.5)).toThrow('Probabilities must be between 0 and 1');
        });

        it('should throw error if A > 1', () => {
            expect(() => calculateProbability('CombinedWith', 1.1, 0.5)).toThrow('Probabilities must be between 0 and 1');
        });

        it('should throw error if B < 0', () => {
            expect(() => calculateProbability('CombinedWith', 0.5, -0.1)).toThrow('Probabilities must be between 0 and 1');
        });

        it('should throw error if B > 1', () => {
            expect(() => calculateProbability('CombinedWith', 0.5, 1.1)).toThrow('Probabilities must be between 0 and 1');
        });
    });

    describe('CombinedWith (P(A) * P(B))', () => {
        it('should calculate correctly for 0.5 and 0.5', () => {
            expect(calculateProbability('CombinedWith', 0.5, 0.5)).toBe(0.25);
        });

        it('should calculate correctly for 0 and 1', () => {
            expect(calculateProbability('CombinedWith', 0, 1)).toBe(0);
        });

        it('should calculate correctly for 1 and 1', () => {
            expect(calculateProbability('CombinedWith', 1, 1)).toBe(1);
        });
    });

    describe('Either (P(A) + P(B) - P(A) * P(B))', () => {
        it('should calculate correctly for 0.5 and 0.5', () => {
            expect(calculateProbability('Either', 0.5, 0.5)).toBe(0.75);
        });

        it('should calculate correctly for 0 and 1', () => {
            expect(calculateProbability('Either', 0, 1)).toBe(1);
        });

        it('should calculate correctly for 0 and 0', () => {
            expect(calculateProbability('Either', 0, 0)).toBe(0);
        });
    });
});
