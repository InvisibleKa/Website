function convertToAlphabets() {
    const asciiInput = document.getElementById("asciiInput").value;
    let alphabetOutput = "";
    const asciiArray = asciiInput.split(' ');
    
    asciiArray.forEach(ascii => {
        if (!isNaN(ascii)) {
            const char = String.fromCharCode(parseInt(ascii));
            alphabetOutput += char;
        }
    });
    
    document.getElementById("alphabetOutput").textContent = "Alphabets: " + alphabetOutput;
}
