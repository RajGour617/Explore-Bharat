
document.addEventListener('DOMContentLoaded', () => {
    const userName = document.getElementById('userName');
    const userEmail = document.getElementById('userEmail');
    const savedStates = document.getElementById('savedStates');
    const savedCategories = document.getElementById('savedCategories');
    const savedMarketplaceItems = document.getElementById('savedMarketplaceItems');
    const badgesContainer = document.getElementById('badges');

    const db = firebase.firestore();
    const auth = firebase.auth();

    auth.onAuthStateChanged(async (user) => {
        if (user) {
            // User is signed in.
            userName.textContent = user.displayName || 'N/A';
            userEmail.textContent = user.email;

            // Fetch and display badges
            await fetchAndDisplayBadges(user.uid);

        } else {
            // User is signed out.
            window.location.href = 'login.html';
        }
    });

    async function fetchAndDisplayBadges(userId) {
        try {
            const userBadgesSnapshot = await db.collection('user_badges').where('userId', '==', userId).get();

            if (userBadgesSnapshot.empty) {
                badgesContainer.innerHTML = '<p>No badges earned yet. Keep exploring!</p>';
                return;
            }

            const badgesSnapshot = await db.collection('badges').get();
            const allBadges = {};
            badgesSnapshot.forEach(doc => {
                allBadges[doc.id] = doc.data();
            });

            userBadgesSnapshot.forEach(doc => {
                const userBadge = doc.data();
                const badge = allBadges[userBadge.badgeId];

                if (badge) {
                    const badgeElement = document.createElement('div');
                    badgeElement.classList.add('badge');
                    badgeElement.innerHTML = `
                        <img src="${badge.image}" alt="${badge.name}">
                        <h4>${badge.name}</h4>
                        <p>${badge.description}</p>
                    `;
                    badgesContainer.appendChild(badgeElement);
                }
            });
        } catch (error) {
            console.error('Error fetching badges:', error);
            badgesContainer.innerHTML = '<p>Error loading badges.</p>';
        }
    }
});
