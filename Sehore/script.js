function openLocationPopup(embedCode) {
    const newWindow = window.open("", "_blank", "width=800,height=600,scrollbars=no");
    if (newWindow) {
        const htmlContent = `
            <!DOCTYPE html><html lang="en"><head><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Location</title><style>body{margin:0;overflow:hidden;font-family:sans-serif}iframe{width:100%;height:100vh;border:none}.back-button{position:fixed;top:70px;left:15px;z-index:1000;background:rgba(0,0,0,.65);color:#fff;padding:10px 16px;border:none;border-radius:50px;cursor:pointer;font-size:16px;font-weight:500;box-shadow:0 3px 8px rgba(0,0,0,.2);transition:background-color .2s}.back-button:hover{background:rgba(0,0,0,.8)}</style></head><body><button class="back-button" onclick="window.close()">← Back</button>${embedCode}</body></html>
        `;
        newWindow.document.write(htmlContent);
        newWindow.document.close();
    } else {
        alert("Pop-up was blocked. Please allow pop-ups for this site.");
    }
}
// Famous Places of Sehore (sample data)
const placesData = [
    {
        name: "Chintaman Ganesh Mandir",
        img: "images/ganesh.jpg",
        history: "A revered temple dedicated to Lord Ganesh, attracting thousands of devotees.",
        facts: "Known for its beautiful architecture and spiritual significance.",
        map_embed_code:`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1758.5017416943222!2d77.059468671144!3d23.209324607647563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397cf3268c0fdeef%3A0x391542af0ccf0fbe!2z4KS24KWN4KSw4KWAIOCkmuCkv-CkguCkpOCkvuCkruCkqCDgpJfgpKPgpYfgpLYg4KSu4KSC4KSm4KS_4KSwLCDgpLjgpYDgpLngpYvgpLA!5e1!3m2!1shi!2sin!4v1759051621668!5m2!1shi!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
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
        name: "Shyam Ji Ki Chhatri",
        img: "images/sanka.jpg",
        history: "A beautiful garden with cenotaphs of the Holkar rulers.",
        facts: "Known for its stunning architecture and serene environment."
    },
    {
        name: "Chain Singh ki Chhatri",
        img: "images/chhatri.jpg",
        history: "A beautiful chhatri (cenotaph) dedicated to Chain Singh, a prominent figure in the region's history.",
        facts: "Known for its stunning architecture and intricate carvings."
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
    <div class="card-actions" style="display: flex; gap: 10px; margin-top: 15px;">
        <a href="https://en.wikipedia.org/wiki/${place.name.replace(/ /g, "_")}" class="btn-view" target="_blank" rel="noopener noreferrer">View Details</a>
        ${place.map_embed_code ?
            `<button class="btn-location"
                     style="background-color: #6b7280; color: white; padding: 8px 12px; border-radius: 8px; border: none; cursor: pointer; font-size: 14px;">
                     View Location
            </button>`
            : ''}
    </div>
`;

    if (place.map_embed_code) {
        const locationButton = card.querySelector(".btn-location");
        if (locationButton) {
            locationButton.addEventListener('click', () => {
                openLocationPopup(place.map_embed_code);
            });
        }
    }

    container.appendChild(card);
});