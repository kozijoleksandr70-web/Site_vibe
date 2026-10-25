const quotes = [
  {
    text: "«Любов виникає з любові; коли хочу, щоб мене любили, я сам перший люблю.»",
    author: "— Григорій Сковорода"
  },
  {
    text: "«Борітеся — поборете, вам Бог помагає! За вас правда, за вас слава і воля святая!»",
    author: "— Тарас Шевченко"
  },
  {
    text: "«Ні, я жива! Я буду вічно жити! Я в серці маю те, що не вмирає.»",
    author: "— Леся Українка"
  },
  {
    text: "«Шукайте цензора в собі. Він там живе, дрімучий, безпардонний.»",
    author: "— Ліна Костенко"
  },
  {
    text: "«А ви думали, що Україна так просто? Україна — це супер! Україна — це ексклюзив.»",
    author: "— Ліна Костенко"
  }
];

let currentIndex = 0;
const quoteText = document.getElementById("quote-text");
const quoteAuthor = document.getElementById("quote-author");
const nextBtn = document.getElementById("next-quote-btn");

if (nextBtn) {
  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % quotes.length;
    quoteText.textContent = quotes[currentIndex].text;
    quoteAuthor.textContent = quotes[currentIndex].author;
  });
}
