// init variables

const submitButton = document.querySelector('#submit-button');
const quoteList = document.querySelector('#quote-list');
const counter = document.querySelector('#counter')
let quotesArray = JSON.parse(localStorage.getItem("quotesArrayLS")) || [];
let quoteCount = quotesArray.length;


// init functions

function addQuote(text, author) {
    printArray(text, author);
    quoteCount++;
    counter.innerText = `${quoteCount} citations`;
}

function printArray(text, author) {
    const newText = document.createElement('p');
    const newAuthor = document.createElement('p');
    const newQuote = document.createElement('div');

    newText.classList.add('text');
    newText.innerText = `Citation : "${text}"`;
    newAuthor.classList.add('author');
    newAuthor.innerText = `Auteur : ${author}`;
    newQuote.classList.add('quote');
    newQuote.appendChild(newText);
    newQuote.appendChild(newAuthor);
    document.querySelector('#quote-list').appendChild(newQuote);
}

function stockQuote(text, author) {
    const oneQuote = {
        text: text,
        author: author
    }

    quotesArray.push(oneQuote);
    localStorage.setItem("quotesArrayLS", JSON.stringify(quotesArray));
}

function updateQuoteList() {
    quotesArray.forEach((Element) => {
        printArray(Element.text, Element.author);
    })
    counter.innerText = `${quoteCount} citations !`
}

// execute code

updateQuoteList();
submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    const text = document.querySelector('#quote').value;
    const author = document.querySelector('#person-quoted').value;

    addQuote(text, author);
    stockQuote(text, author);
})