const quotes = [
  {
    text: "Любов виникає з любові; коли хочу, щоб мене любили, я сам перший люблю.",
    author: "— Григорій Сковорода"
  },
  {
    text: "Борітеся — поборете! Вам Бог помагає! За вас правда, за вас слава і воля святая!",
    author: "— Тарас Шевченко"
  },
  {
    text: "Ні, я жива! Я буду вічно жити! Я в серці маю те, що не вмирає.",
    author: "— Леся Українка"
  },
  {
    text: "Я бачу світ крізь серпанок краси і сонця, бо краса рятує людину від буденності.",
    author: "— Михайло Коцюбинський"
  },
  {
    text: "Місто чекає на сміливих і спраглих життя, воно забирає сили, але дарує крила.",
    author: "— Валер'ян Підмогильний"
  },
  {
    text: "Класична пластика і строгість думки — ось захист від хаосу епохи.",
    author: "— Микола Зеров"
  }
];

let currentIndex = 0;
const quoteText = document.getElementById("quote-text");
const quoteAuthor = document.getElementById("quote-author");
const nextBtn = document.getElementById("next-quote-btn");

if (nextBtn) {
  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % quotes.length;
    quoteText.style.opacity = 0;
    quoteAuthor.style.opacity = 0;
    
    setTimeout(() => {
      quoteText.textContent = quotes[currentIndex].text;
      quoteAuthor.textContent = quotes[currentIndex].author;
      quoteText.style.opacity = 1;
      quoteAuthor.style.opacity = 1;
    }, 200);
  });
}
