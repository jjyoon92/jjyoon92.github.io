document.addEventListener("DOMContentLoaded", () => {
    // Initialize skill bars
    const skillBars = document.querySelectorAll(".skill-bar");

    skillBars.forEach((bar) => {
        const skill = bar.getAttribute("data-skill");
        const level = bar.getAttribute("data-level");

        const levelBar = document.createElement("div");
        levelBar.classList.add("skill-level");
        levelBar.style.width = `${level}%`;
        levelBar.innerText = `${skill} (${level}%)`;

        bar.appendChild(levelBar);
    });


    const scrollToTopButton = document.getElementById("scrollToTopButton");

    // Show button when scrolling down
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            scrollToTopButton.style.display = "block";
        } else {
            scrollToTopButton.style.display = "none";
        }
    });

    // Scroll to top when button clicked
    scrollToTopButton.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});