export function diagnosticReport(numbers: string[]): number {
    const report = new Report(numbers);
    const result = report.run();
    return result.powerConsumption;
}

class ReportResult {
    constructor(private gamma: string, private epsilon: string) {}

    public get gammaValue(): number {
        return parseInt(this.gamma, 2);
    }

    public get epsilonValue(): number {
        return parseInt(this.epsilon, 2);
    }

    public get powerConsumption(): number {
        return this.gammaValue * this.epsilonValue;
    }
}

class Report {
    private gamma = '';
    private epsilon = '';

    constructor(private readonly series: string[]) {}

    run(): ReportResult {
        const byteLength = this.series.map((s) => s.length)[0];
        for (let i = 0; i < byteLength; i++) {
            console.log(i);
            [this.gamma, this.epsilon] = this.getRates(i);
        }

        return new ReportResult(this.gamma, this.epsilon);
    }

    private getRates(i: number): [string, string] {
        const [g, e] = this.analyseSlice(this.series.map((n: string) => n[i]));
        return [this.gamma + g, this.epsilon + e];
    }

    private analyseSlice(slice: string[]): [string, string] {
        let ones = 0;
        let zeroes = 0;

        for (const digit of slice) {
            if (digit == '1') {
                ones++;
            } else if (digit == '0') {
                zeroes++;
            } else {
                console.log(`IMPOSTER: ${digit}`);
            }
        }
        console.log(`1s: ${ones}, 0s: ${zeroes}, total: ${ones + zeroes}`);

        return ones > zeroes ? ['1', '0'] : ['0', '1'];
    }
}
