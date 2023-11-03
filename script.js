// Define your locations and paths data
const locations = [
    { name: "Main Gate", x: 100, y: 100 },
    { name: "CRC-1", x: 200, y: 100 },
    { name: "CRC-2", x: 300, y: 100 },
    { name: "CSR Activity Center", x: 100, y: 200 },
    { name: "Account Section", x: 150, y: 200 },
    { name: "Temple", x: 50, y: 200 },
    { name: "Dean's Office", x: 200, y: 50 },
    { name: "Registrar's Office", x: 200, y: 80 },
    // Add more locations as needed
];

const paths = [
    {
        from: "Main Gate",
        to: "CRC-1",
        steps: [
            "Go straight from Main Gate to CRC-1.",
            "Turn left ."
        ]
    },
    {
        from: "Main Gate",
        to: "CRC-2",
        steps: [
            "Go straight from Main Gate towards CUTM logo  .",
            "Turn right ."
        ]
    },
    {
        from: "Main Gate",
        to: "CSR Activity Center",
        steps: [
            "Go straight after few step .",
            "look towards Left.",
            "Then you can find CSR hall board(farst floor)."
        ]
    },
    {
        from: "Main Gate",
        to: "CSR Activity Center",
        steps: [
            "Go straight after few step .",
            "look towards Left.",
            "Then you can find CSR hall board(farst floor)."
        ]
    },
    {
        from: "Main Gate",
        to: "CSR Activity Center",
        steps: [
            "Go straight after few step .",
            "look towards Left.",
            "Then you can find CSR hall board(farst floor)."
        ]
    },
    {
        from: "Main Gate",
        to: "CSR Activity Center",
        steps: [
            "Go straight after few step .",
            "look towards Left.",
            "Then you can find CSR hall board(farst floor)."
        ]
    },
    // Add more path directions with steps as needed
];

// Function to get step-by-step directions
function getDirections(fromLocation, toLocation) {
    // Search for a path from the 'fromLocation' to the 'toLocation'
    const path = paths.find(path => path.from.toLowerCase() === fromLocation.toLowerCase() && path.to.toLowerCase() === toLocation.toLowerCase());

    if (path) {
        return path.steps;
    } else {
        return ["No directions found."]; // Handle the case when no path is found
    }
}

// Function to display directions on the page
function displayDirections(directions) {
    const directionsContainer = document.getElementById("directions");
    directionsContainer.innerHTML = directions.join("<br>");
}

// Event listener for the "Find My Path" button
const findPathButton = document.getElementById("findPathButton");
findPathButton.addEventListener("click", () => {
    const fromLocation = document.getElementById("from").value;
    const toLocation = document.getElementById("to").value;
    
    // Call the getDirections function and display the results
    const directions = getDirections(fromLocation, toLocation);

    if (directions[0] === "No directions found.") {
        // If no path is found, display an emoji and a message in a pop-up
        alert("😞 No directions found. Please check your input.");
    } else {
        // If directions are found, display them in a pop-up
        alert(`🚀 Path Found!\n\nDirections:\n${directions.join("\n")}`);
    }

    // Clear the input fields
    document.getElementById("from").value = "";
    document.getElementById("to").value = "";

    // Clear the directions container on the page
    displayDirections([]);
});
