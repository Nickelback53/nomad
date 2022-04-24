const quotes = [
    {
        quote: "hello",
        author: "nana",
    },
    {
        quote: "hi",
        author: "papa",
    },
    {
        quote: "bye",
        author: "kaka",
    },
    {
        quote: "hoho",
        author: "hehe",
    },
    {
        quote: "gogo",
        author: "doo",
    },
    {
        quote: "bba",
        author: "dk",
    },
    {
        quote: "asdfasd",
        author: "sfsdfas",
    }
];


const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];


quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;