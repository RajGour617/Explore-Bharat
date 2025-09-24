// Famous Places of Indore (sample data)
const placesData = [
    {
        name: "Chintaman Ganesh Mandir",
        img: "images/ganesh.jpg",
        history: "A revered temple dedicated to Lord Ganesh, attracting thousands of devotees.",
        facts: "Known for its beautiful architecture and spiritual significance."
    },
    {
        name: "Kubreshwar Mahadev Mandir",
        img: "images/kubreshwar.jpg",
        history: "A beautiful temple dedicated to Lord Shiva, known for its stunning architecture.",
        facts: "The temple attracts a large number of devotees, especially during festivals."
    },
    {
        name: "Vindhyawasini Mata Mandir Salkanpur",
        img: "images/salkanpur.jpg",
        history: "A revered temple dedicated to Goddess Vindhyawasini, attracting numerous pilgrims.",
        facts: "The temple is situated on a hill, offering panoramic views of the surrounding landscape."
    },
    {
        name: "Chain Singh ki Chhatri",
        img: "images/chhatri.jpg",
        history: "A beautiful chhatri (cenotaph) dedicated to Chain Singh, a prominent figure in the region's history.",
        facts: "Known for its stunning architecture and intricate carvings."
    },
    {
        name: "Chhatri Baag",
        img: "images/chatri.jpg",
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
