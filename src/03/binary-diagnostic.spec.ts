import { diagnosticReport } from './binary-diagnostic';

describe('Binary Diagnostic', () => {
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
});
