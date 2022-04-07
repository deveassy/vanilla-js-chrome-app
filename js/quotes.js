const quotes = [
  {
    quote:
      "Life is a tragedy when seen in close-up, but a comedy in long shot.",
    author: "Charlie Chaplin",
  },
  {
    quote: "Do not be afraid to give up the good to go for the great.",
    author: "John D. Rockefeller",
  },
  {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
  },
  {
    quote:
      "Many of life's failures are people who did not realize how close they were to success when they gave up.",
    author: "Thomas A. Edison",
  },
  {
    quote:
      " You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.",
    author: "Dr. Seuss",
  },
  {
    quote:
      "If you spend too much time thinking about a thing, you’ll never get it done.",
    author: "Bruce Lee",
  },
  {
    quote:
      "Success is not final; failure is not fatal: It is the courage to continue that counts.",
    author: "Winston S. Churchill",
  },
  {
    quote: "Opportunities don't happen. You create them.",
    author: "Chris Grosser",
  },
  {
    quote: "Try not to become a man of success. Rather become a man of value.",
    author: "Albert Einstein",
  },
  {
    quote: "All progress takes place outside the comfort zone.",
    author: "Michael John Bobak",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
