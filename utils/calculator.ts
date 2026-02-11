export type OperationType = 'CombinedWith' | 'Either';

export function calculateProbability(type: OperationType, a: number, b: number): number {
    if (a < 0 || a > 1 || b < 0 || b > 1) {
        throw new Error('Probabilities must be between 0 and 1');
    }

    if (type === 'CombinedWith') {
        return a * b;
    } else if (type === 'Either') {
        return a + b - a * b;
    } else {
        throw new Error('Invalid operation type');
    }
}
