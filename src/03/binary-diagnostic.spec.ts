import { readFileSync } from 'fs';
import { diagnosticReport } from './binary-diagnostic';

describe('Binary Diagnostic', () => {
    let officalInputs: string[] = [];

    beforeAll(() => {
        const file = readFileSync('./src/03/input.txt', 'utf-8');
        officalInputs = file.split('\n').map((x) => x.trim());
    });

    it('Should return correct result given test inputs', () => {
        const testData = [
            '00100',
            '11110',
            '10110',
            '10111',
            '10101',
            '01111',
            '00111',
            '11100',
            '10000',
            '11001',
            '00010',
            '01010',
        ];

        const result = diagnosticReport(testData);
        expect(result).toEqual(198);
    });

    it('Should return correct result given official inputs', () => {
        const result = diagnosticReport(officalInputs);
        expect(result).toEqual(2003336);
    });
});
