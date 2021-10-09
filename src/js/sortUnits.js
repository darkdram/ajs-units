export default function sortUnits(firstUnit, secondUnit) {
    if (firstUnit.health < secondUnit.health) {
        return 1;
    } else if (firstUnit.health > secondUnit.health) {
        return -1;
    } else {
        return 0;
    }
}