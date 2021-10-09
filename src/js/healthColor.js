export default function healthColor({name, health}) {
    let color = '';

    if (health > 50) {
        color = 'зелёный';
    } else if (health >= 15 && health <= 50) {
        color = 'жёлтый';
    } else {
        color = 'красный';
    }

    return color;
}