import exp from 'constants';
import { readFileSync } from 'fs';
import { Report } from './binary-diagnostic';

describe('Binary Diagnostic', () => {
    let officalInputs: string[] = [];

    beforeAll(() => {
        const file = readFileSync('./src/03/input.txt', 'utf-8');
        officalInputs = file.split('\n').map((x) => x.trim());
    });

    it('Should return correct power consumption given test inputs', () => {
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

        const result = new Report(testData).run();
        expect(result.powerConsumption).toEqual(198);
    });

    it('Should return correct power consumption given official inputs', () => {
        const result = new Report(officalInputs).run();
        expect(result.powerConsumption).toEqual(2003336);
    });

    it('Should return correct oxygen generator rating given test inputs', () => {
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

        const result = new Report(testData).run();
        expect(result.oxygenGeneratorRating).toEqual(23);
    });

    it('Should return correct CO2 Scrubber rating given test inputs', () => {
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

        const result = new Report(testData).run();
        expect(result.co2ScrubberRating).toEqual(10);
    });

    it('Should return correct life support rating given test inputs', () => {
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

        const result = new Report(testData).run();
        expect(result.lifeSupportRating).toEqual(230);
    });

    it('Should return correct life support rating given official inputs', () => {
        const result = new Report(officalInputs).run();
        expect(result.lifeSupportRating).toEqual(1877139);
    });
});
