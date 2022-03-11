let quotedisplay = document.getElementById('quoteDisplay');
let resetbtn = document.getElementById("resetBtn");
let submitbtn = document.getElementById("submitBtn")
let timeDispaly = document.getElementById("timer");
let inputQuote = document.getElementById("quoteInput");
let msg = document.getElementById("result");
let page = document.getElementById('speedTypingTest');
let spinnerPage = document.getElementById('spinner');
let time = 0
let url = "https://apis.ccbp.in/random-quote";
let textQuote = {
    method: "GET"
}
let func = () => {
    key = setInterval(function() {


        timeDispaly.textContent = time;
        time = time + 1

    }, 1000);
    return key;
}
let timevalue = func();
fetch(url, textQuote)
    .then(function(response) {
        return response.json();
    })
    .then(function(text) {
        let quote = text;

        quotedisplay.textContent = quote.content;
        timeDispaly.textContent = 0

    });

function reset() {
    page.classList.add('d-none');
    spinnerPage.classList.remove("d-none");
    clearTimeout(timevalue)
    msg.textContent = "";
    inputQuote.value = '';
    time = 0
    fetch(url, textQuote)
        .then(function(response) {

            return response.json();

        })
        .then(function(text) {
            page.classList.remove('d-none');
            spinnerPage.classList.add("d-none");
            let quote = text;


            timeDispaly.textContent = 0

            quotedisplay.textContent = quote.content;
            timevalue = func();
        })
}

function submit() {
    if (inputQuote.value === quotedisplay.textContent) {
        let x = parseInt(time) - 1;
        clearInterval(timevalue);
        msg.textContent = "your typed " + x + " seconds"

    } else {
        msg.textContent = "you typed incorrect sentences"

    }

}


resetbtn.addEventListener("click", reset);
submitbtn.addEventListener("click", submit)