// Famous Places of Indore (sample data)
const placesData = [
    {
        name: "Pashupatinath Temple",
        img: "images/pashu.jpg",
        history: " An ancient temple dedicated to Lord Shiva, dating back to the 16th century.",
        facts: "Famous for its intricate architecture and beautiful gardens."
    },
    {
        name: "Gandhisagar Dam",
        img: "images/Gandhisagar.jpg",
        history: "A beautiful dam built during the Holkar dynasty, known for its stunning gardens.",
        facts: "The dam features a blend of Indian and European architectural styles."
    },
    {
        name: "GandhiSagar Point",
        img: "images/gandhipoint.jpg",
        history: " A scenic viewpoint offering panoramic views of the city and surrounding areas.",
        facts: "GandhiSagar Point is a popular spot for photography and enjoying sunsets."
    },
    {
        name: "Alvi Mahadev Mandir",
        img: "images/Alvi.jpg",
        history: "A historic temple dedicated to Lord Shiva, known for its unique blend of Hindu and Islamic architectural styles.",
        facts: "The temple is famous for its intricate carvings and peaceful ambiance."
    },
    {
        name: "Chhatri Baag",
        img: "images/chhatri.jpg",
        history: "A beautiful garden with cenotaphs of the Holkar rulers.",
        facts: "Known for its stunning architecture and serene environment."
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
