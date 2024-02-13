function capitalizeFirstLetter(str) {
    var words = str.split(" ");
    for (var i = 0; i < words.length; i++) {
        if (words[i].length > 0) {
            words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
        }
    }
    return words.join(" ");
}

function capitalizeWords() {
    var inputString = document.getElementById("inputString").value;
    var capitalizedString = capitalizeFirstLetter(inputString);
    document.getElementById("output").innerText = capitalizedString;
}