const passwordBox = document.getElementById("password");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()_+~|}{[]></-=";

const allChars = upperCase + lowerCase + number + symbol;

function createPassword() {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while (password.length < length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = password;
}

function copyPassword() {
    passwordBox.select();
    passwordBox.setSelectionRange(0, 999); // for mobile devices

    navigator.clipboard.writeText(passwordBox.value)
        .then(() => {
            const msg = document.getElementById("copy-message");
            msg.style.display = "inline";
            msg.style.opacity = "1";

            // Reset animation
            msg.classList.remove("copy-message");
            void msg.offsetWidth; // Trigger reflow
            msg.classList.add("copy-message");
        })
        .catch(err => {
            console.error("Failed to copy password: ", err);
        });
}
