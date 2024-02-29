// script.js

document.getElementById("encryptButton").addEventListener("click", encryptMessage);
document.getElementById("decryptButton").addEventListener("click", decryptMessage);

function encryptMessage() {
    const message = document.getElementById("message").value;
    const password = document.getElementById("password").value;

    if (message && password) {
        const encrypted = CryptoJS.AES.encrypt(message, password).toString();
        
        // Display only the encrypted message and clear the decrypted message
        document.getElementById("encryptedMessage").textContent = encrypted;
        document.getElementById("decryptedMessage").textContent = "";
    } else {
        alert("Please enter a message and password.");
    }
}

function decryptMessage() {
    const encryptedMessage = document.getElementById("encryptedMessage").textContent;
    const password = document.getElementById("password").value;

    if (encryptedMessage && password) {
        try {
            const decrypted = CryptoJS.AES.decrypt(encryptedMessage, password).toString(CryptoJS.enc.Utf8);
            
            if (decrypted)
                document.getElementById("decryptedMessage").textContent = decrypted;
            else
                document.getElementById("decryptedMessage").textContent = "Wrong password!";
        } catch (err) {
            console.error("Decryption error:", err);
            document.getElementById("decryptedMessage").textContent = "Wrong password!";
        }
    } else {
        alert("Please enter an encrypted message and password.");
    }
}
