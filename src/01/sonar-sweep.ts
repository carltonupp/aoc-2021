export function getNumberOfIncreases(measurements: number[]): number {
    let increases = 0;

    for (let i = 0; i < measurements.length; i++) {
        const current = measurements[i];
        const previous = measurements[i - 1];

        if (current > previous) {
            increases++;
        }
    }

    return increases;
}

export function getNumberOfIncreasesWindowed(measurements: number[]): number {
    let increases = 0;

    for (let i = 0; i < measurements.length; i++) {
        const firstTotal = getWindowTotal(measurements, i);
        const secondTotal = getWindowTotal(measurements, i + 1);

        if (secondTotal > firstTotal) {
            increases++;
        }
    }

    return increases;
}

const getWindowTotal = (series: number[], index: number) => {
    const window = series.slice(index, index + 3);
    if (window.length < 3) return 0;
    return window.reduce((total, x) => (total += x), 0);
};
