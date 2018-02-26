var a = 10,
    b = 3,
    value = (a * a) - (2 * a * b) - (b * b);
if (value > 0) {
    document.write('Wynik dodatni');
} else if (value < 0) {
    document.write('Wynik ujemny');
}
alert(value);