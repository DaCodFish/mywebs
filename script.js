document.addEventListener("DOMContentLoaded", function() {
    let text = "Welcome to My Website!";
    let index = 0;
    let speed = 100;
    let h1 = document.querySelector("h1");

    function typeText() {
        if (index < text.length) {
            h1.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeText, speed);
        }
    }

    h1.innerHTML = ""; // Clear existing text
    typeText(); // Start animation
});
