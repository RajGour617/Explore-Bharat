// Famous Places of Indore (sample data)
const placesData = [
    {
        name: "Rajwada Palace",
        img: "images/rajwada.jpg",
        history: "A historical palace showcasing the grandeur of Indore's royal past.",
        facts: "Famous for its intricate architecture and beautiful gardens."
    },
    {
        name: "Lal Bagh Palace",
        img: "images/lalbagh.jpg",
        history: "A beautiful palace built during the Holkar dynasty, known for its stunning gardens.",
        facts: "The palace features a blend of Indian and European architectural styles."
    },
    {
        name: "Sarafa Bazaar",
        img: "images/sarafa.jpg",
        history: "A famous night market in Indore, known for its street food and vibrant atmosphere.",
        facts: "Sarafa Bazaar transforms into a food paradise after sunset."
    },
    {
        name: "Kanch Mandir",
        img: "images/kanchmandir.jpg",
        history: "A Jain temple made entirely of glass, showcasing intricate glasswork.",
        facts: "The temple's walls and ceilings are adorned with glass mosaics."
    },
    {
        name: "Chhatri Baag",
        img: "images/chhatri.jpg",
        history: "A beautiful garden with cenotaphs of the Holkar rulers.",
        facts: "Known for its stunning architecture and serene environment."
    },
    {
        name: "Annapurna Temple",
        img: "images/annapurna.jpg",
        history: "A famous temple dedicated to Goddess Annapurna, the goddess of food and nourishment.",
        facts: "The temple is known for its beautiful architecture and spiritual significance."
    },
    {
        name: "Khajrana Ganesh Temple",
        img: "images/khajrana.jpg",
        history: "A revered temple dedicated to Lord Ganesha, attracting devotees from all over.",
        facts: "The temple is believed to fulfill the wishes of its devotees."
    },
    {
        name: "Chhappan Dukan",
        img: "images/chappan.jpg",
        history: "A popular food street in Indore, known for its variety of snacks and sweets.",
        facts: "Chhappan Dukan translates to '56 shops', offering a wide range of culinary delights."
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
  `;

    container.appendChild(card);
});
