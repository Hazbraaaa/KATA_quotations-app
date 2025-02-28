// init variables
const submitButton = document.querySelector('#submit-button');
const quote = document.querySelector('#quote');
const personQuoted = document.querySelector('#person-quoted');
const quoteList = document.querySelector('#quote-list')
let text = "";
let author = "";


// init functions
function getQuotation() {
    text = quote.value;
    author = personQuoted.value;
}

function addQuote(text, author) {
    const quoteBlock = document.createElement('p');
    const authorBlock = document.createElement('p');
    const quoteDiv = document.createElement('div');

    quoteBlock.classList.add('text');
    quoteBlock.innerText = `Citation : ${text}`;
    authorBlock.classList.add('auhtor');
    authorBlock.innerText = `Auteur/Autrice : ${author}`;
    quoteDiv.classList.add('quote');
    quoteDiv.appendChild(quoteBlock);
    quoteDiv.appendChild(authorBlock);
    quoteList.appendChild(quoteDiv);
}

// execute code
submitButton.addEventListener('click', () => {
    getQuotation();
    addQuote(text, author);
})