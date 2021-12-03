class ReportResult {
    constructor(
        public gamma: number,
        public epsilon: number,
        public oxygenGeneratorRating: number,
        public co2ScrubberRating: number,
    ) {}

    public get powerConsumption(): number {
        return this.gamma * this.epsilon;
    }

    public get lifeSupportRating(): number {
        return this.oxygenGeneratorRating * this.co2ScrubberRating;
    }
}

export class Report {
    constructor(private readonly series: string[]) {}

    run(): ReportResult {
        return new ReportResult(
            this.gammaRating,
            this.epsilonRating,
            this.oxygenGeneratorRating,
            this.co2ScrubberRating,
        );
    }

    private get byteLength(): number {
        return this.series.map((s) => s.length)[0];
    }

    private get gammaRating(): number {
        let gamma = '';
        for (let i = 0; i < this.byteLength; i++) {
            const slice = this.series.map((x) => x[i]);
            const [mostCommonByte] = this.analyseSlice(slice);
            gamma += mostCommonByte;
        }
        return parseInt(gamma, 2);
    }

    private get epsilonRating(): number {
        let epsilon = '';
        for (let i = 0; i < this.byteLength; i++) {
            const slice = this.series.map((x) => x[i]);
            const [, leastCommonByte] = this.analyseSlice(slice);
            epsilon += leastCommonByte;
        }
        return parseInt(epsilon, 2);
    }

    private get oxygenGeneratorRating(): number {
        let localSeries = this.series;
        let idx = 0;

        do {
            const slice = localSeries.map((x) => x[idx]);
            const [n, _] = this.analyseSlice(slice);
            localSeries = localSeries.filter((x) => x[idx] === n);
            idx += 1;
        } while (localSeries.length > 1);

        return parseInt(localSeries[0], 2);
    }

    private get co2ScrubberRating(): number {
        let localSeries = this.series;
        let idx = 0;

        do {
            const slice = localSeries.map((x) => x[idx]);
            const [_, n] = this.analyseSlice(slice);
            localSeries = localSeries.filter((x) => x[idx] === n);
            idx += 1;
        } while (localSeries.length > 1);

        return parseInt(localSeries[0], 2);
    }

    private analyseSlice(slice: string[]): [string, string] {
        let ones = 0;
        let zeroes = 0;

        for (const digit of slice) {
            if (digit == '1') {
                ones++;
            } else if (digit == '0') {
                zeroes++;
            }
        }

        if (ones > zeroes) {
            return ['1', '0'];
        } else if (zeroes > ones) {
            return ['0', '1'];
        } else {
            return ['1', '0'];
        }
    }
}
