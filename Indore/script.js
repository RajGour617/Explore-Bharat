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

// Modal setup
function showModal(title, content) {
    let modal = document.getElementById('placeModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'placeModal';
        modal.style.position = 'fixed';
        modal.style.top = '0';
        modal.style.left = '0';
        modal.style.width = '100vw';
        modal.style.height = '100vh';
        modal.style.background = 'rgba(0,0,0,0.6)';
        modal.style.display = 'flex';
        modal.style.alignItems = 'center';
        modal.style.justifyContent = 'center';
        modal.style.zIndex = '9999';
        modal.innerHTML = `<div style="background:#fff;padding:32px 24px;border-radius:12px;max-width:400px;box-shadow:0 8px 32px #0002;position:relative;">
        <button id="closeModalBtn" style="position:absolute;top:8px;right:12px;font-size:1.5rem;background:none;border:none;cursor:pointer;">&times;</button>
        <h2 id="modalTitle"></h2>
        <div id="modalContent"></div>
    </div>`;
        document.body.appendChild(modal);
        modal.querySelector('#closeModalBtn').onclick = () => modal.remove();
    }
    modal.querySelector('#modalTitle').textContent = title;
    modal.querySelector('#modalContent').innerHTML = content;
    modal.style.display = 'flex';
}

// Researched content for each place
// const placeDetails = {
//     "Rajwada Palace": "Rajwada Palace is a historic landmark in Indore, built by the Holkars over two centuries ago. It features a blend of Maratha, Mughal, and French architectural styles. The palace is a symbol of Indore's royal heritage and hosts cultural events and light shows.",
//     "Lal Bagh Palace": "Lal Bagh Palace, constructed in the late 19th century, is one of the grandest monuments of the Holkar dynasty. Its interiors are inspired by European palaces, and the gardens are perfect for leisurely walks.",
//     "Sarafa Bazaar": "Sarafa Bazaar is famous for its vibrant night market, where you can taste Indore's best street food. The market comes alive after sunset and is a must-visit for food lovers.",
//     "Kanch Mandir": "Kanch Mandir, or Glass Temple, is a Jain temple renowned for its intricate glasswork. Every surface inside the temple is covered with glass mosaics, creating a dazzling effect.",
//     "Chhatri Baag": "Chhatri Baag is a serene garden with cenotaphs dedicated to the Holkar rulers. The site is known for its peaceful atmosphere and beautiful architecture.",
//     "Annapurna Temple": "Annapurna Temple is dedicated to Goddess Annapurna, the deity of food and nourishment. The temple is an important spiritual site and is admired for its ornate carvings.",
//     "Khajrana Ganesh Temple": "Khajrana Ganesh Temple is a revered Hindu temple, believed to fulfill the wishes of devotees. It attracts thousands of pilgrims every year.",
//     "Chhappan Dukan": "Chhappan Dukan is a famous food street in Indore, offering a variety of snacks and sweets from 56 different shops. It's a paradise for foodies and a lively spot in the city."
// };

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
    <a href="https://en.wikipedia.org/wiki/${place.name.replace(/ /g, "_")}" class="btn-view" target="_blank" rel="noopener noreferrer">View Details</a>
`;

    container.appendChild(card);
});
