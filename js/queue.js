function setupGrid(gridSize) {
    const section = document.querySelector('section.queue-grid');
    for (let row = 0; row < gridSize; row++) {
        const wrapper = document.createElement("div");
        wrapper.classList.add("wrapper");
        for (let col = 0; col < gridSize; col++) {
            const tile = document.createElement("div");
            tile.classList.add("tile");
            wrapper.appendChild(tile);
        }
        section.appendChild(wrapper);
    }
}

function setupClickListeners(gridSize, delay = 300) {
    let clickedTiles = [];

    document.addEventListener("mousemove", function () {
        if (!event.target.classList.contains("tile")) return;
        if (clickedTiles.includes(event.target)) return;
        event.target.classList.add("selected");
        clickedTiles.push(event.target);

        if (clickedTiles.length >= gridSize ** 2) {
            const interval = setInterval(() => {
                const tile = clickedTiles.shift();
                tile.classList.remove("selected");
                if (clickedTiles.length === 0) {
                    clearInterval(interval);
                }
            }, delay);
        }
    });
}

const gridSize = 6;
setupGrid(gridSize);
setupClickListeners(gridSize, 100);