document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM Content Loaded');

    // Wait a bit for script.js to initialize
    setTimeout(initializeStateView, 100);

    function initializeStateView() {
        // Get references to key elements
        const stateFilter = document.getElementById('stateFilter');
        const statesGrid = document.getElementById('statesGrid');
        const stateDetailContainer = document.getElementById('stateDetailContainer');
        const statesGridContainer = document.getElementById('statesGridContainer');
        const backToStates = document.getElementById('backToStates');

        console.log('Elements found:', {
            stateFilter: !!stateFilter,
            statesGrid: !!statesGrid,
            stateDetailContainer: !!stateDetailContainer,
            statesGridContainer: !!statesGridContainer
        });

        if (!window.CULTURE_DATA || !window.CULTURE_DATA.states) {
            console.error('State data not found!');
            return;
        }

        // Function to create a state card
        function createStateCard(state) {
            const article = document.createElement('article');
            article.className = 'card';
            article.innerHTML = `
                <img src="${state.banner}" alt="${state.id}" />
                <h4>${state.id}</h4>
                <p>${state.intro}</p>
            `;
            article.addEventListener('click', () => selectState(state.id));
            return article;
        }

        // Function to populate state dropdown
        function populateStateDropdown() {
            if (!stateFilter) return;

            // Clear existing options except the first one
            while (stateFilter.options.length > 1) {
                stateFilter.remove(1);
            }

            // Add states from the data
            window.CULTURE_DATA.states.forEach(state => {
                const option = document.createElement('option');
                option.value = state.id;
                option.textContent = state.id;
                stateFilter.appendChild(option);
            });

            console.log('Populated dropdown with states:', stateFilter.options.length - 1);
        }

        // Function to render states grid
        function renderStatesGrid() {
            if (!statesGrid) return;

            statesGrid.innerHTML = ''; // Clear existing content
            window.CULTURE_DATA.states.forEach(state => {
                const card = createStateCard(state);
                statesGrid.appendChild(card);
            });

            console.log('Rendered states grid with cards:', window.CULTURE_DATA.states.length);
        }

        // Function to handle state selection
        function selectState(stateId) {
            const state = window.CULTURE_DATA.states.find(s => s.id === stateId);
            if (!state) return;

            // Update dropdown
            if (stateFilter) {
                stateFilter.value = stateId;
            }

            // Show state detail container and hide states grid
            document.body.classList.add('state-selected');

            // Render state content using the global function
            if (window.renderStatePage) {
                window.renderStatePage(stateId);
            }

            console.log('Selected state:', stateId);
        }

        // Event listener for state filter
        if (stateFilter) {
            stateFilter.addEventListener('change', (e) => {
                const selectedState = e.target.value;
                if (selectedState) {
                    selectState(selectedState);
                }
            });
        }

        // Event listener for back button
        if (backToStates) {
            backToStates.addEventListener('click', () => {
                document.body.classList.remove('state-selected');
                if (stateFilter) {
                    stateFilter.value = '';
                }
            });
        }

        // Initialize the view
        populateStateDropdown();
        renderStatesGrid();
        console.log('State view initialized');
    }
});