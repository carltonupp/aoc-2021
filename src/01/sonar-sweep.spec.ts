import { getNumberOfIncreases } from "./sonar-sweep";
import { readFile } from 'fs';

describe('Sonar Sweep', () => {

    let officialInputs: number[];

    beforeAll(() => {
        readFile('./src/01/input.txt', 'utf-8', (err, data) => {
            if (err) throw err;
            officialInputs = data.toString().split('\n').map(x => Number.parseInt(x));
        });
    });

    it('Should return correct number of increases', () => {
       const testData = [1, 2, 10, 15, 4, 5];
       const result = getNumberOfIncreases(testData);
       expect(result).toEqual(4); 
    });

    it('Should return correct number given official test inputs', () => {
        readFile('./src/01/input.txt', 'utf-8', (err, data) => {
            if (err) throw err;
            
            const result = getNumberOfIncreases(officialInputs);
            expect(result).toEqual(1532);
        });
    });
});