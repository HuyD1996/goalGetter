const quoteText = document.getElementById("quote-text"),
  quoteTags = document.getElementById("quote-tags"),
  quoteAuthor = document.getElementById("quote-author"),
  genQuoteBtn = document.getElementById("gen-quote-btn");

function randomQuote() {
  fetch("https://api.quotable.io/random?tags=inspirational")
    .then((response) => response.json())
    .then((data) => {
      quoteText.textContent = data.content;
      quoteAuthor.textContent = `- ${data.author}`;
    });
}

randomQuote();
genQuoteBtn.addEventListener("click", () => {
  randomQuote();
});
