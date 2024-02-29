function convertToAscii() {
    const inputText = document.getElementById("inputText").value;
    let asciiOutput = "";
    for (let i = 0; i < inputText.length; i++) {
        asciiOutput += inputText.charCodeAt(i) + " ";
    }
    document.getElementById("asciiOutput").textContent = "ASCII: " + asciiOutput;
}
