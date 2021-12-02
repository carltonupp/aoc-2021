type Direction = 'up' | 'down' | 'forward';

class Command {
    private _direction: Direction;
    public get direction(): Direction {
        return this._direction;
    }

    private _units: number;
    public get units(): number {
        return this._units;
    }

    constructor(direction: string, units: number) {
        this._units = units;

        if (isDirection(direction)) {
            this._direction = direction;
        } else {
            throw new Error('Invalid direction');
        }
    }
}

function isDirection(direction: string): direction is Direction {
    return ['up', 'down', 'forward'].includes(direction);
}

class Position {
    private vertical: number;
    private horizontal: number;

    constructor() {
        this.vertical = 0;
        this.horizontal = 0;
    }

    move(cmd: Command) {
        switch (cmd.direction) {
            case 'down':
                this.vertical += cmd.units;
                break;
            case 'up':
                this.vertical -= cmd.units;
                break;
            case 'forward':
                this.horizontal += cmd.units;
                break;
            default:
                throw new Error('Invalid command');
        }
    }

    get() {
        return this.horizontal * this.vertical;
    }
}

export function getPosition(commands: string[]): number {
    const position = new Position();

    for (const command of commands) {
        const [direction, units] = command.split(' ');
        const unitsValue = Number.parseInt(units);
        position.move(new Command(direction, unitsValue));
    }

    return position.get();
}
