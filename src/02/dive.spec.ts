import { readFileSync } from 'fs';
import { getPosition } from './dive';

describe('Dive!', () => {
    let officialInputs: string[];

    beforeAll(() => {
        const file = readFileSync('./src/02/input.txt', 'utf-8');
        officialInputs = file.split('\n');
    });

    it('Should return correct position given official inputs', () => {
        const result = getPosition(officialInputs);
        expect(result).toEqual(1971095320);
    });

    it('Should return correct position based on pt2 test data', () => {
        const testData = ['forward 5', 'down 5', 'forward 8', 'up 3', 'down 8', 'forward 2'];
        const result = getPosition(testData);
        expect(result).toEqual(900);
    });
});
