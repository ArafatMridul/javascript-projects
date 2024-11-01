const apiUrl = "https://quotes-api-self.vercel.app/quote";
const newQuoteBtn = document.querySelector("#new-quote");
const tweetBtn = document.querySelector("#tweet-btn");
const quote = document.querySelector("blockquote");
const author = document.querySelector("span");

async function getQuote(url) {
    const response = await fetch(url);
    let data = await response.json();

    quote.innerText = data.quote;
    author.innerText = data.author;
}

function tweet() {
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerText + "" + "- by " + author.innerText);
}

newQuoteBtn.addEventListener("click", () => {
    getQuote(apiUrl);
})

tweetBtn.addEventListener("click", tweet);