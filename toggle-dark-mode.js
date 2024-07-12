document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.querySelector(".dark-mode-toggle");
    const body = document.body;

    // Load dark mode preference
    if (localStorage.getItem("darkMode") === "enabled") {
        body.classList.add("dark-mode");
        toggleButton.querySelector("i").classList.remove("fa-sun");
        toggleButton.querySelector("i").classList.add("fa-moon");
    }

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
