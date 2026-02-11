'use server';

import { calculateProbability, OperationType } from '@/utils/calculator';
import { logCalculation } from '@/utils/logger';

export type State = {
    result?: number;
    error?: string | null;
    message?: string | null;
};

export async function calculateAndLog(prevState: State | null, formData: FormData): Promise<State> {
    const probabilityA = parseFloat(formData.get('probabilityA') as string);
    const probabilityB = parseFloat(formData.get('probabilityB') as string);
    const operation = formData.get('operation') as OperationType;

    if (isNaN(probabilityA) || isNaN(probabilityB)) {
        return { error: 'Invalid input: Probabilities must be numbers.' };
    }

    try {
        const result = calculateProbability(operation, probabilityA, probabilityB);
        await logCalculation(operation, probabilityA, probabilityB, result);
        return { result, error: null };
    } catch (error: any) {
        return { error: error.message };
    }
}
