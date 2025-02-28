// init variables
const form = document.querySelector('#form');
const quote = document.querySelector('#quote');
const personQuoted = document.querySelector('#person-quoted');
const quoteList = document.querySelector('#quote-list');
let text = "";
let author = "";
let quoteCount = 1; // already one quote of Simone de Beauvoir


// init functions
function getQuotation() {
    text = quote.value;
    author = personQuoted.value;
}

function addQuote(text, author) {
    const quoteBlock = document.createElement('p');
    const authorBlock = document.createElement('p');
    const quoteDiv = document.createElement('div');
    const count = document.querySelector('#count');

    quoteBlock.classList.add('text');
    quoteBlock.innerText = `Citation : "${text}"`;
    authorBlock.classList.add('auhtor');
    authorBlock.innerText = `Auteur/Autrice : ${author}`;
    quoteDiv.classList.add('quote');
    quoteDiv.appendChild(quoteBlock);
    quoteDiv.appendChild(authorBlock);
    quoteList.appendChild(quoteDiv);
    quoteCount++;
    count.innerText = `${quoteCount} citations`;
}


// execute code
form.addEventListener('submit', () => {
    getQuotation();
    addQuote(text, author);
})