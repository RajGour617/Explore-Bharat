// Famous Places of Indore (sample data)
const placesData = [
    {
        name: "Mahakaleshwar Jyotirlinga",
        img: "images/mahakaleshwar.jpg",
        history: "One of the twelve Jyotirlingas, Mahakaleshwar is a sacred temple dedicated to Lord Shiva.",
        facts: "The temple is famous for its unique Bhasma Aarti, performed with sacred ash."
    },
    {
        name: "Harshiddhi Mata Mandir",
        img: "images/harsiddhi.jpg",
        history: "A revered temple dedicated to Goddess Harshiddhi, an incarnation of Goddess Durga.",
        facts: "The temple is known for its intricate carvings and spiritual significance."
    },
    {
        name: "Kal Bhairav Mandir",
        img: "images/kalbhairav.jpg",
        history: "A famous temple dedicated to Kal Bhairav, the guardian deity of the city.",
        facts: "Kal Bhairav is worshipped as the protector of the city and its people."
    },
    {
        name: "Mangalnath Mandir",
        img: "images/mangalnath.jpg",
        history: "A famous temple dedicated to Lord Mangalnath, the deity of Mars.",
        facts: "The temple is known for its unique architecture and spiritual significance."
    },
    {
        name: "Ram Ghat",
        img: "images/ramghat.jpg",
        history: "A sacred ghat on the banks of the Shipra River, known for its religious significance.",
        facts: "Ram Ghat is a popular spot for rituals and ceremonies."
    },
    {
        name: "Kalidas Museum",
        img: "images/kalidas.jpg",
        history: "A museum dedicated to the famous Sanskrit poet Kalidas, showcasing his life and works.",
        facts: "The museum features various artifacts, sculptures, and paintings related to Kalidas."
    },
    {
        name: "Iskcon Temple",
        img: "images/iskcon.jpg",
        history: "A spiritual temple dedicated to Lord Krishna, promoting peace and devotion.",
        facts: "The temple is known for its beautiful architecture and serene atmosphere."
    },
    {
        name: "Sandipani Ashram",
        img: "images/sandipani.jpg",
        history: "An ashram dedicated to the study of ancient Indian scriptures and philosophy.",
        facts: "The ashram is known for its serene environment and spiritual teachings."
    },
    {
        name: "Kaliyadeh Palace",
        img: "images/kaliyadeh.jpg",
        history: "Kaliadeh Palace is located on the bank of Shipra river in Ujjain. A Sun Temple is there.",
        facts: "The palace features a blend of Indian and European architectural styles."
    },
    {
        name: "Ram-Janardhan Temple",
        img: "images/ramjan.jpg",
        history: "Ram-Janardhan Temple is a revered shrine dedicated to Lord Rama and Lord Janardhan.",
        facts: "The temple is known for its beautiful carvings and peaceful ambiance."
    },
    {
        name: "Chaubis Khamba Temple",
        img: "images/chaubis.jpg",
        history: "The architectural design, of twenty-four ornate pillars, dates from the ninth or tenth century A.D. Two idols of deities, one each Mahamaya and Mahalaya are installed on either side of the door.",
        facts: "The temple is known for its intricate carvings and historical significance."
    },
    {
        name: "Gopal Mandir",
        img: "images/gopal.jpg",
        history: "Gopal Mandir is a famous temple dedicated to Lord Krishna, showcasing beautiful architecture and intricate carvings.",
        facts: "The temple is known for its vibrant festivals and spiritual significance."
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
