import { getNumberOfIncreases, getNumberOfIncreasesWindowed } from "./sonar-sweep";
import { readFileSync } from 'fs';

describe('Sonar Sweep', () => {

    let officialInputs: number[];

    beforeAll(() => {
        const file = readFileSync('./src/01/input.txt', 'utf-8');
        officialInputs = file.toString().split('\n').map(x => Number.parseInt(x));

    });

    it('Should return correct number of increases', () => {
       const testData = [1, 2, 10, 15, 4, 5];
       const result = getNumberOfIncreases(testData);
       expect(result).toEqual(4); 
    });

    it('Should return correct number given official test inputs', () => {
        const result = getNumberOfIncreases(officialInputs);
        expect(result).toEqual(1532);
    });

    it('Should return correct number of increases windowed', () => {
        const testData = [1, 2, 3, 4, 5];
        const result = getNumberOfIncreasesWindowed(testData);
        expect(result).toEqual(2);
    });

    it('Should return correct number of increases windowed given official test inputs', () => {
        const result = getNumberOfIncreasesWindowed(officialInputs);
        expect(result).toEqual(1571);
    });
});