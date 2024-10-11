document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.querySelector(".dark-mode-toggle");
    const body = document.body;

    // Function to set dark mode based on local storage
    function setDarkModeFromStorage() {
        if (localStorage.getItem("darkMode") === "enabled") {
            body.classList.add("dark-mode");
            toggleButton.querySelector("i").classList.remove("fa-sun");
            toggleButton.querySelector("i").classList.add("fa-moon");
        } else {
            body.classList.remove("dark-mode");
            toggleButton.querySelector("i").classList.remove("fa-moon");
            toggleButton.querySelector("i").classList.add("fa-sun");
        }
    }

    // Check and set dark mode on initial load
    setDarkModeFromStorage();

    // Toggle dark mode on button click
    toggleButton.addEventListener("click", function() {
        body.classList.toggle("dark-mode");

        // Toggle icons between sun and moon
        const icon = toggleButton.querySelector("i");
        if (body.classList.contains("dark-mode")) {
            icon.classList.remove("fa-sun");
            icon.classList.add("fa-moon");
            localStorage.setItem("darkMode", "enabled");
        } else {
            icon.classList.remove("fa-moon");
            icon.classList.add("fa-sun");
            localStorage.setItem("darkMode", "disabled");
        }
    });
});
