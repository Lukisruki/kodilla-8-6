var a = 20,
    b = 20,
    value = (a * a) - (2 * a * b) - (b * b);
if (value > 0) {
    document.write('Wynik dodatni');
} else if (value < 0) {
    document.write('Wynik ujemny');
}
alert(value);