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
// Famous Places of Indore (sample data)
const placesData = [
    {
        name: "Mahakaleshwar Jyotirlinga",
        img: "images/mahakaleshwar.jpg",
        history: "One of the twelve Jyotirlingas, Mahakaleshwar is a sacred temple dedicated to Lord Shiva.",
        facts: "The temple is famous for its unique Bhasma Aarti, performed with sacred ash.",
        map_embed_code:`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2631.352268651323!2d75.76562247351377!3d23.182746360335287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3963743638ffffff%3A0x3024e4d1bd13cc22!2z4KS24KWN4KSw4KWAIOCkruCkueCkvuCkleCkvuCksuClh-CktuCljeCkteCksCDgpJzgpY3gpK_gpYvgpKTgpL_gpLDgpY3gpLLgpL_gpILgpJcg4KSu4KSC4KSm4KS_4KSw!5e1!3m2!1shi!2sin!4v1759050989169!5m2!1shi!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
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
if (container) {
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
}
