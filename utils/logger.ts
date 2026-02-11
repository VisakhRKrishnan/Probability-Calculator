import fs from 'fs';
import path from 'path';

export async function logCalculation(type: string, a: number, b: number, result: number) {
    const logFile = path.join(process.cwd(), 'calculation_log.txt');
    const timestamp = new Date().toISOString();
    const entry = `${timestamp} | Type: ${type} | A: ${a} | B: ${b} | Result: ${result}\n`;

    try {
        await fs.promises.appendFile(logFile, entry);
    } catch (error) {
        console.error('Failed to write to log file:', error);
    }
}
