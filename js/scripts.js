var a = 0,
    b = 0,
    value = (a * a) - (2 * a * b) - (b * b);
if (value > 0) {
    document.write('Wynik dodatni');
} else if (value < 0) {
    document.write('Wynik ujemny');
} else if (value == 0) {
    document.write('Zero');
} else if (value == NaN) {
    document.write('To nie jest liczba lol');
}
console.log(value);

