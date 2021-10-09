import sortUnits from "../sortUnits";

describe('units should be sorted by health points', () => {
    const units = [
        {
            name: 'мечник',
            health: 10
        },
        {
            name: 'маг',
            health: 100
        },
        {
            name: 'лучник',
            health: 80
        },
        {
            name: 'мечник2',
            health: 10
        }
    ];

    units.sort(sortUnits);

    const mage = {
        name: 'маг',
        health: 100
    };

    const swordsman = {
        name: 'мечник',
        health: 10
    };

    const archer = {
        name: 'лучник',
        health: 80
    };

    test('should mage to be first (eq)', () => {
        expect(units[0]).toEqual(mage);
    });

    test('should mage to be first (t2)', () => {
        expect(units[0]).not.toBe(mage);
    });

    test('should archer to be second', () => {
        expect(units[1]).toEqual(archer);
    });

    test('should swordsman to be last', () => {
        expect(units[2]).toEqual(swordsman);
    });
});


