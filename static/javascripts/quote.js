document.addEventListener("DOMContentLoaded", function () {
    // Function to fetch and display a random quote
    function fetchQuote() {
        fetch("https://type.fit/api/quotes")
            .then(response => response.json())
            .then(data => {
                // Select a random quote from the array
                const randomIndex = Math.floor(Math.random() * data.length);
                const randomQuote = data[randomIndex];

                const quoteContainer = document.getElementById("quoteContainer");
                quoteContainer.innerHTML = `
                    <p class="quote text-white text-center">
                        "${randomQuote.text}"
                    </p>
                    <p class="author text-white text-center">- <em>${randomQuote.author || "Unknown"}</em></p>`;
            })
            .catch(error => console.error("Error fetching the quote:", error));
    }

    // Call fetchQuote function to display initial quote
    fetchQuote();

    // Function to determine if a color is dark
    function isDarkColor(color) {
        const rgb = color.match(/\d+/g);
        const brightness = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
        return brightness < 128;
    }

    const body = document.body;
    const computedColor = window.getComputedStyle(body).backgroundColor;

    // Check if background color is dark and apply appropriate text color
    if (isDarkColor(computedColor)) {
        body.classList.add('dark-text');
    }
});
