// Function to open the map in a new window with a back button
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
        name: "Rajwada Palace",
        img: "images/rajwada.jpg",
        history: "A historical palace showcasing the grandeur of Indore's royal past.",
        facts: "Famous for its intricate architecture and beautiful gardens.",
        map_embed_code: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1320.207606747813!2d75.85465699999999!3d22.717521199999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fda0a27f50f5%3A0xdd375ab4fdfb3f50!2z4KSw4KS-4KSc4KS14KS-4KSh4KS-LCDgpIfgpKjgpY3gpKbgpYzgpLAsIOCkruCkp-CljeCkryDgpKrgpY3gpLDgpKbgpYfgpLY!5e1!3m2!1shi!2sin!4v1758992688997!5m2!1shi!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
    },
    {
        name: "Lal Bagh Palace",
        img: "images/lalbagh.jpg",
        history: "A beautiful palace built during the Holkar dynasty, known for its stunning gardens.",
        facts: "The palace features a blend of Indian and European architectural styles.",
        map_embed_code: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2640.7462715241954!2d75.84469093487203!3d22.700356360637343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fdaca5739ae1%3A0x4d96f8bd2eb77a91!2z4KSy4KS-4KSy4KSs4KS-4KSXIOCkquCliOCksuClh-CkuA!5e1!3m2!1shi!2sin!4v1759050228970!5m2!1shi!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
    },
    {
        name: "Sarafa Bazaar",
        img: "images/sarafa.jpg",
        history: "A famous night market in Indore, known for its street food and vibrant atmosphere.",
        facts: "Sarafa Bazaar transforms into a food paradise after sunset.",
        map_embed_code: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1936.6720005676339!2d75.84978307347633!3d22.717777588211593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fda0c01c3295%3A0xe1004ef7a4cbe1c7!2z4KS44KSw4KS-4KSr4KS-IOCkrOCkvuClm-CkvuCksCwg4KSH4KSo4KWN4KSm4KWM4KSwLCDgpK7gpKfgpY3gpK8g4KSq4KWN4KSw4KSm4KWH4KS2IDQ1MjAwMg!5e1!3m2!1shi!2sin!4v1759050306088!5m2!1shi!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
    },
    {
        name: "Kanch Mandir",
        img: "images/kanchmandir.jpg",
        history: "A Jain temple made entirely of glass, showcasing intricate glasswork.",
        facts: "The temple's walls and ceilings are adorned with glass mosaics.",
        map_embed_code: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2640.4376183528307!2d75.84639692167356!3d22.716359930833324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fda6b608a7f3%3A0xa031bf990e77bcb6!2z4KSV4KS-4KSC4KSaIOCkruCkqOCljeCkpuCkv-CksA!5e1!3m2!1shi!2sin!4v1759050419704!5m2!1shi!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
    },
    {
        name: "Chhatri Baag",
        img: "images/chhatri.jpg",
        history: "A beautiful garden with cenotaphs of the Holkar rulers.",
        facts: "Known for its stunning architecture and serene environment.",
        map_embed_code: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7653.926684891805!2d75.84165499273978!3d22.711147469336876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fda8997bead7%3A0x2e9d3c901d48c55!2z4KSb4KSk4KWN4KSw4KWA4KSs4KS-4KWaLCDgpIfgpKjgpY3gpKbgpYzgpLAsIOCkruCkp-CljeCkryDgpKrgpY3gpLDgpKbgpYfgpLY!5e1!3m2!1shi!2sin!4v1759050535448!5m2!1shi!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
    },
    {
        name: "Annapurna Temple",
        img: "images/annapurna.jpg",
        history: "A famous temple dedicated to Goddess Annapurna, the goddess of food and nourishment.",
        facts: "The temple is known for its beautiful architecture and spiritual significance.",
        map_embed_code: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2640.942569155733!2d75.8356097734948!3d22.690172828654283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fc4ee5b727db%3A0x3a174d0df7c692d7!2z4KSF4KSo4KWN4KSo4KSq4KWC4KSw4KWN4KSj4KS-IOCkn-Clh-CkguCkquCksg!5e1!3m2!1shi!2sin!4v1759050596721!5m2!1shi!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
    },
    {
        name: "Khajrana Ganesh Temple",
        img: "images/khajrana.jpg",
        history: "A revered temple dedicated to Lord Ganesha, attracting devotees from all over.",
        facts: "The temple is believed to fulfill the wishes of its devotees.",
        map_embed_code: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2640.150583926441!2d75.90364278885497!3d22.731233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962e392c3e7709f%3A0xbe613e2b66216261!2z4KSW4KSc4KSw4KS-4KSo4KS-IOCkl-Cko-Clh-CktiDgpK7gpILgpKbgpL_gpLAg4KSH4KSC4KSm4KWM4KSw!5e1!3m2!1shi!2sin!4v1759050657019!5m2!1shi!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
    },
    {
        name: "Chhappan Dukan",
        img: "images/chappan.jpg",
        history: "A popular food street in Indore, known for its variety of snacks and sweets.",
        facts: "Chhappan Dukan translates to '56 shops', offering a wide range of culinary delights.",
        map_embed_code: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2640.282694176028!2d75.88163507349614!3d22.72438867739341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd38edf9deab%3A0xeed0cc00121fc349!2z4KSb4KSq4KWN4KSq4KSoIOCkpuClgeCkleCkvuCkqCwg4KSo4KWN4KSv4KWCIOCkquCksuCkvuCkuOCkv-Ckr-Ckviwg4KSH4KSo4KWN4KSm4KWM4KSwLCDgpK7gpKfgpY3gpK8g4KSq4KWN4KSw4KSm4KWH4KS2!5e1!3m2!1shi!2sin!4v1759050768142!5m2!1shi!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
    }
];

// Inject cards into DOM
const container = document.getElementById("places");
if (container) {
    placesData.forEach(place => {
        const card = document.createElement("div");
        card.classList.add("place-card");

        // Card ka HTML banao
        card.innerHTML = `
            <img src="${place.img || 'images/placeholder.jpg'}" alt="${place.name}">
            <h2>${place.name}</h2>
            <p><strong>History:</strong> ${place.history}</p>
            <p><strong>Fact:</strong> ${place.facts}</p>
            <div class="card-actions" style="display: flex; gap: 10px; margin-top: 15px;">
                <a href="https://en.wikipedia.org/wiki/${place.name.replace(/ /g, "_")}" class="btn-view" target="_blank" rel="noopener noreferrer">View Details</a>
                ${place.map_embed_code ?
                    `<button class="btn-location" style="background-color: #6b7280; color: white; padding: 8px 12px; border-radius: 8px; border: none; cursor: pointer; font-size: 14px;">
                        View Location
                    </button>`
                    : ''}
            </div>
        `;

        // Agar map code hai, to button ko dhoond kar uspar event listener lagao
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