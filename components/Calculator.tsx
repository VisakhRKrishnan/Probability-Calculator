'use client';

import { useActionState } from 'react';
import { calculateAndLog, State } from '@/app/actions';

const initialState: State = {
    result: undefined,
    error: null,
};

export default function Calculator() {
    const [state, formAction, isPending] = useActionState(calculateAndLog, initialState);

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Probability Calculator</h2>

            <form action={formAction} className="space-y-4">
                <div>
                    <label htmlFor="probabilityA" className="block text-sm font-medium text-gray-700">Probability A (0 - 1)</label>
                    <input
                        type="number"
                        step="0.01"
                        min="0"
                        max="1"
                        id="probabilityA"
                        name="probabilityA"
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
                        placeholder="e.g. 0.5"
                    />
                </div>

                <div>
                    <label htmlFor="probabilityB" className="block text-sm font-medium text-gray-700">Probability B (0 - 1)</label>
                    <input
                        type="number"
                        step="0.01"
                        min="0"
                        max="1"
                        id="probabilityB"
                        name="probabilityB"
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
                        placeholder="e.g. 0.5"
                    />
                </div>

                <div>
                    <label htmlFor="operation" className="block text-sm font-medium text-gray-700">Operation</label>
                    <select
                        id="operation"
                        name="operation"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
                    >
                        <option value="CombinedWith">CombinedWith (P(A) * P(B))</option>
                        <option value="Either">Either (P(A) + P(B) - P(A)*P(B))</option>
                    </select>
                </div>

                <button
                    type="submit"
                    disabled={isPending}
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
                >
                    {isPending ? 'Calculating...' : 'Calculate'}
                </button>
            </form>

            {state.error && (
                <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-md">
                    <p className="font-bold">Error:</p>
                    <p>{state.error}</p>
                </div>
            )}

            {state.result !== undefined && state.result !== null && (
                <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-md">
                    <p className="font-bold">Result:</p>
                    <p className="text-xl">{state.result}</p>
                </div>
            )}
        </div>
    );
}
