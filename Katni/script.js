// Famous Places of Katni (sample data)
const placesData = [
  {
    name: "Maa Jalpa Devi Mandir",
    img: "images/Maa.jpg",
    history: "A revered temple dedicated to Maa Jalpa Devi, attracting thousands of devotees during Navratri.",
    facts: "Known as the spiritual heart of Katni; famous for its ancient rituals."
  },
  {
    name: "Badera Chhatarpur Waterfall",
    img: "images/waterfall.jpg",
    history: "A scenic waterfall surrounded by lush greenery, a popular picnic and tourist spot.",
    facts: "Best visited during monsoon; locals call it 'Nature's Jewel of Katni'."
  },
  {
    name: "Katni Marble Rocks",
    img: "images/katni-marble.jpg",
    history: "Katni is called the 'City of Marbles', famous worldwide for marble production.",
    facts: "Marbles from Katni are exported globally and used in famous monuments."
  }
];

// Inject cards into DOM
const container = document.getElementById("places");
placesData.forEach(place => {
  const card = document.createElement("div");
  card.classList.add("place-card");

  card.innerHTML = `
    <img src="${place.img}" alt="${place.name}">
    <h2>${place.name}</h2>
    <p><strong>History:</strong> ${place.history}</p>
    <p><strong>Fact:</strong> ${place.facts}</p>
    <a href="https://www.google.com/search?q=${place.name.replace(/ /g, "+")}" class="btn-view" target="_blank" rel="noopener noreferrer">View Details</a>
  `;

  container.appendChild(card);
});
