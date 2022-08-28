const loadQuote = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayQuote(data))
}

const displayQuote = quote => {
    console.log(quote);
    const blockquote = document.getElementById('quote');
    blockquote.innerText = quote.quote;
}
// loadQuote();