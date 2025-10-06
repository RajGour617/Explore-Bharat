document.addEventListener('DOMContentLoaded', () => {
    const leaderboardBody = document.querySelector('#leaderboard-table tbody');

    async function fetchLeaderboard() {
        try {
            const usersRef = firebase.firestore().collection('users');
            const snapshot = await usersRef.orderBy('quizScore', 'desc').limit(10).get();

            if (snapshot.empty) {
                leaderboardBody.innerHTML = '<tr><td colspan="3">No scores yet. Be the first to take the quiz!</td></tr>';
                return;
            }

            let rank = 1;
            snapshot.forEach(doc => {
                const user = doc.data();
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${rank}</td>
                    <td>${user.name}</td>
                    <td>${user.quizScore || 0}</td>
                `;
                leaderboardBody.appendChild(row);
                rank++;
            });
        } catch (error) {
            console.error('Error fetching leaderboard:', error);
            leaderboardBody.innerHTML = '<tr><td colspan="3">Error loading leaderboard.</td></tr>';
        }
    }

    fetchLeaderboard();
});
