function checkAmount() {
    var amount = document.getElementById("amountInput").value;
    var resultText = "";

    if (!isNaN(amount) && amount >= 0) {
        resultText = amount + " ";
        if (amount === "1") {
            resultText += "гривня";
        } else if (amount % 10 === 1 && amount % 100 !== 11) {
            resultText += "гривня";
        } else if ((amount % 10 >= 2 && amount % 10 <= 4) && (amount % 100 < 10 || amount % 100 >= 20)) {
            resultText += "гривні";
        } else {
            resultText += "гривень";
        }
    } else {
        resultText = "Будь ласка, введіть невід'ємне ціле число.";
    }

    document.getElementById("result").innerText = resultText;
}