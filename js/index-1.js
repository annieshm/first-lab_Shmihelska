function reverseAndDisplay() {
    const inputElement = document.getElementById('inputNumber');
    const outputElement = document.getElementById('output');
    const number = parseInt(inputElement.value);

    function reverseNumber(number) {
        const reversed = parseInt(number.toString().split('').reverse().join(''));
        return reversed;
    }

    const reversedNumber = reverseNumber(number);
    outputElement.textContent = "Your reversed number: " + reversedNumber;
}
