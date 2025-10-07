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



// Famous Places of Katni (sample data)
const placesData = [
  {
    name: "Maa Jalpa Devi Mandir",
    img: "images/Maa.jpg",
    history: "A revered temple dedicated to Maa Jalpa Devi, attracting thousands of devotees during Navratri.",
    facts: "Known as the spiritual heart of Katni; famous for its ancient rituals.",
    map_embed_code:`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2618.291919641866!2d80.38847735396574!3d23.838069063274418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398161de635a8a59%3A0x14a78fb61f3a0846!2z4KSu4KS-4KSBIOCknOCkvuCksuCljeCkquCkviDgpK7gpILgpKbgpL_gpLA!5e1!3m2!1shi!2sin!4v1759051383650!5m2!1shi!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
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
    <div class="card-actions" style="display: flex; gap: 10px; margin-top: 15px;">
        <a href="https://www.google.com/search?q=${place.name.replace(/ /g, "+")}" class="btn-view" target="_blank" rel="noopener noreferrer">View Details</a>
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