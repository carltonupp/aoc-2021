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
