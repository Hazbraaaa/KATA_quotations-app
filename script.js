// init variables
const submitButton = document.querySelector('#submit-button');
const quote = document.querySelector('#quote');
const personQuoted = document.querySelector('#person-quoted');
let text = "";
let author = "";


// init functions
function getQuotation() {
    text = quote.value;
    author = personQuoted.value;
    console.log(text);
    console.log(author);
}


// execute code
submitButton.addEventListener('click', () => {
    getQuotation();
})