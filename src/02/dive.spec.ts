import { getPosition } from './dive';

describe('Dive!', () => {
    it('Should return correct position given series of commands', () => {
        const testData = ['forward 5', 'down 5'];
        const result = getPosition(testData);
        expect(result).toEqual(25);
    });
});
