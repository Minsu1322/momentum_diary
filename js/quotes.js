const quotes = [
{
  quote: "자바스크립트 공부용입니다.",
  author: "-김민수"
},

{
  quote: "Html 공부용 테스트.!!",
  author: "-Kim Min Su"
},

{
  quote: "CSS공부용 테스트입니다. 열공!!",
  author: "-김민수"
},

{
  quote: "공부용 테스트입니다 화이팅!!~",
  author: "-KimMinSu"
},

{
  quote: "JS 공부 테스트입니다",
  author: "-Kim-Min-Su"
},

{
  quote: "JS 공부 화이팅!!~",
  author: "-김민수"
}
]


const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];


quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;