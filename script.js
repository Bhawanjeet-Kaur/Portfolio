document.addEventListener("DOMContentLoaded", function () {
    const line = document.querySelector(".line");
    const author = document.querySelector(".author");

    let position = 0;
    const totalHeight = author.offsetHeight; // Total height of the text
    const animationSpeed = 1000; // Total animation duration in milliseconds
    const frameRate = 60; // Number of frames per second
    const intervalTime = 1000 / frameRate; // Time per frame
    const step = totalHeight / (animationSpeed / intervalTime); // Line movement per frame

    let interval = setInterval(() => {
        position += step; // Move the line down step-by-step
        line.style.transform = `translateY(${position}px)`;

        // Make the text reveal **1.3x faster** than the line movement
        let revealPercent = (position / totalHeight) * 230; // 130% speed for faster text reveal
        if (revealPercent > 100) revealPercent = 100; // Ensure it doesn't exceed 100%
        
        author.style.clipPath = `inset(0 0 ${100 - revealPercent}% 0)`;

        if (position >= totalHeight) {
            clearInterval(interval); // Stop animation when the line reaches the bottom
        }
    }, intervalTime); // Smooth animation effect
    // Ensure links navigate properly
    aboutLink.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default behavior if needed
        window.location.href = "about.html"; // Navigate to About page
    });

    // Make the Projects button work as a link
    projectsButton.addEventListener("click", function () {
        window.location.href = "projects.html"; // Redirect to Projects page
    });
});