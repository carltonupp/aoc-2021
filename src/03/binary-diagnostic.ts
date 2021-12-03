import { parse } from 'path/posix';

export function diagnosticReport(numbers: string[]): number {
    let gamma = '';
    let episilon = '';

    for (let i = 0; i < numbers.length; i++) {
        const digits = numbers.map((n) => n[i]);
        const mostCommon = mode(digits);
        const leastCommon = mostCommon === '1' ? '0' : '1';
        gamma += mostCommon ?? '';
        episilon += leastCommon;
    }

    const gammaInt = parseInt(gamma, 2);
    const episilonInt = parseInt(episilon, 2);

    console.log(gammaInt, episilonInt);

    return parseInt(gamma, 2) * parseInt(episilon, 2);
}

function mode(array: string[]): string | undefined {
    return array
        .sort((a, b) => {
            return array.filter((v) => v === a).length - array.filter((v) => v === b).length;
        })
        .pop();
}
