document.addEventListener("DOMContentLoaded", function() {
    const heart = document.querySelector(".heart");
    const messageState = document.getElementById("messageState");
    const message = document.querySelector(".message");
    const container = document.querySelector(".container");

    // Toggle the checkbox state when the heart is clicked
    heart.addEventListener("click", function() {
        messageState.checked = !messageState.checked;
        toggleMessage();
    });

    // Function to toggle message and background based on checkbox state
    function toggleMessage() {
        message.classList.remove("openNor", "closeNor");
        
        if (messageState.checked) {
            message.classList.remove("closed", "no-anim");
            message.classList.add("openNor");
            heart.classList.remove("closeHer", "openedHer");
            heart.classList.add("openHer");
            container.style.transition = "background-color 2s";
            container.style.backgroundColor = "#f48fb1";
            console.log("Opening message");
        } else {
            message.classList.add("closeNor");
            heart.classList.add("closeHer");
            container.style.transition = "background-color 2s";
            container.style.backgroundColor = "#fce4ec";
            console.log("Closing message");
        }
    }

    // Reset message classes on animation end
    message.addEventListener("animationend", function() {
        if (message.classList.contains("closeNor")) {
            message.classList.add("closed");
        }
        message.classList.remove("openNor", "closeNor");
        message.classList.add("no-anim");
    });

    // Reset heart classes on animation end
    heart.addEventListener("animationend", function() {
        if (!heart.classList.contains("closeHer")) {
            heart.classList.add("openedHer", "beating");
        } else {
            heart.classList.add("no-anim");
            heart.classList.remove("beating");
        }
        heart.classList.remove("openHer", "closeHer");
    });
});
