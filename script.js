const paths = [
    {
        from: "Main Gate",
        to: "Library",
        steps: [
            "Go straight from Main Gate to CRC-1",
            "From there, move a small distance ahead",
            "You can find the Library"
        ],
        imagePaths: [
            "images/IMG_20231122_162414.jpg",
            "images/IMG_20231122_162414.jpg",
            "images/IMG_20231122_162414.jpg"
        ]
    }
];

document.getElementById("findPathButton").addEventListener("click", async () => {
    const fromLocation = document.getElementById("from").value;
    const toLocation = document.getElementById("to").value;

    document.getElementById("loading-bar").style.display = "block";

    const path = await calculateDirections(fromLocation, toLocation);

    document.getElementById("loading-bar").style.display = "none";

    if (path.steps[0] === "No directions found.") {
        alert("❌ No directions found. Please check your input.");
    } else {
        displayDirections(path);
    }

    document.getElementById("from").value = "";
    document.getElementById("to").value = "";
});

async function calculateDirections(fromLocation, toLocation) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const path = paths.find(p => p.from.toLowerCase() === fromLocation.toLowerCase() && p.to.toLowerCase() === toLocation.toLowerCase());
            resolve(path ? path : { steps: ["No directions found."] });
        }, 1500);
    });
}

function displayDirections(path) {
    const directionsContainer = document.getElementById("directions");
    directionsContainer.innerHTML = `<h2>Directions</h2>`;

    path.steps.forEach((step, index) => {
        const stepElement = document.createElement("div");
        stepElement.innerHTML = `<p>${step}</p>`;
        directionsContainer.appendChild(stepElement);
    });

    // Initialize the 360° image viewer
    initPanorama(path.imagePaths[0]);
}

function initPanorama(imagePath) {
    const panoramaContainer = document.getElementById("panorama");
    panoramaContainer.innerHTML = `<iframe width="100%" height="100%" src="${imagePath}" allowfullscreen></iframe>`;
}
