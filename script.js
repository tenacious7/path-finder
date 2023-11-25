const paths = [
  {
    from: "Main Gate",
    to: "Temple",
    steps: [
      "Go straight from Main Gate",
      "After moving some distance, you can see a path towards your left",
      "Turn left",
      "You can see the Temple"
    ],
    imagePaths: [
      "image/frommaingate.jpg", // Replace with actual image URL
      "image/tdtemple.jpg", // Replace with actual image URL
      "image/temple.jpg", // Replace with actual image URL

    ]
  },
  {
    from: "Girls Hostel",
    to: "Main gate",
    steps: [
      "Move towards your right",
      "Go straight, then turn left",
      "After moving some distance, turn towards your right",
      "After moving a quite distance, you can find the Main gate"
    ],
    imagePaths: [
      "images/tdgrlshos.jpg", // Replace with actual image path
      "images/td twemp,account.jpg", // Replace with actual image path
      "images/frommaingate.jpg", // Replace with actual image path
    ]
  },
  {
    from: "Main Gate",
    to: "Temple",
    steps: [
      "Go straight from Main Gate",
      "After moving some distance, you can see a path towards your left",
      "Turn left",
      "You can see the Temple"
    ],
    imagePaths: [
      "images/road.jpg", // Replace with actual image path
      "https://example.com/image2.jpg", // Replace with actual image URL
      "https://example.com/image3.jpg" // Replace with actual image URL
    ]
  },
  {
    from: "Main Gate",
    to: "Library",
    steps: [
      "Go straight from Main Gate to CRC-1",
      "From there, move a small distance ahead",
      "You can find the Library (Dr. Y.V.N Rao Memorial Library)"
    ],
    imagePaths: [
      "images/frommaingate (2).jpg", // Replace with actual image path
      "images/straightcrc1.jpg", // Replace with actual image path
      "images/IMG_20231122_145240.jpg", // Replace with actual image path
    ]
  },

  {
    from: "Main Gate",
    to: "MBA Block",
    steps: [
      "Go straight from Main Gate",
      "Turn right",
      "Go straight, you can see a cricket ground",
      "Turn left",
      "Go straight",
      "Turn towards your last right lane",
      "inner view of mba block"
    ],
    imagePaths: [
      "images/frommaingate (2).jpg", // Replace with actual image path
      "images/righttombamess.jpg", // Replace with actual image path
      "images/playground.jpg", // Replace with actual image path
      "images/IMG_20231122_150114.jpg", // Replace with actual image path

    ]
  },
  {
    from: "Main Gate",
    to: "Auditorium",
    steps: [
      "Go straight from Main Gate to CRC-1",
      "You can find the library",
      "From the library, turn towards your right",
      "Go straight"
    ],
    imagePaths: [
      "images/auditorium.jpg", // Replace with actual image path
      "https://example.com/image14.jpg", // Replace with actual image URL
      "https://example.com/image15.jpg" // Replace with actual image URL
    ]
  },
  {
    from: "Girls Hostel",
    to: "Canteen",
    steps: [
      "Go straight from the Main Gate of the hostel",
      "Turn left",
      "Go straight",
      "You can find a triangle area",
      "Turn left",
      "Then turn right"
    ],
    imagePaths: [
      "images/canteen.jpg", // Replace with actual image path
      "https://example.com/image17.jpg", // Replace with actual image URL
      "https://example.com/image18.jpg" // Replace with actual image URL
    ]
  },
  {
    from: "Canteen",
    to: "Mushroom Unit",
    steps: [
      "From the canteen, move towards your left and go straight",
      "Turn right",
      "Turn towards your first left lane",
      "Go straight, you can find the mushroom unit"
    ],
    imagePaths: [
      "images/mushroom_unit.jpg", // Replace with actual image path
      "https://example.com/image20.jpg", // Replace with actual image URL
      "https://example.com/image21.jpg" // Replace with actual image URL
    ]
  },
  {
    from: "Temple",
    to: "Cricket Ground",
    steps: [
      "Go straight from the Temple",
      "Turn right",
      "Go straight, you can see the cricket ground"
    ],
    imagePaths: [
      "images/temple.jpg", // Replace with actual image path
      "https://example.com/image23.jpg", // Replace with actual image URL
      "https://example.com/image24.jpg" // Replace with actual image URL
    ]
  },
  {
    from: "Cricket Ground",
    to: "Canteen",
    steps: [
      "Go straight from the cricket ground",
      "Turn left",
      "Go straight, you can see the temple",
      "Turn right",
      "Go straight, turn left",
      "Turn right"
    ],
    imagePaths: [
      "images/cricket_ground.jpg", // Replace with actual image path
      "https://example.com/image26.jpg", // Replace with actual image URL
      "https://example.com/image27.jpg" // Replace with actual image URL
    ]
  },
  {
    from: "Main Gate",
    to: "Flag Hosting Area",
    steps: [
      "Go straight from Main Gate",
      "After moving a certain distance, you can find the Flag hosting area"
    ],
    imagePaths: [
      "images/flag_hosting_area.jpg", // Replace with actual image path
      "https://example.com/image29.jpg", // Replace with actual image URL
      "https://example.com/image30.jpg" // Replace with actual image URL
    ]
  },
  {
    from: "Main Gate",
    to: "MBA Mess",
    steps: [
      "Go straight from Main Gate",
      "turn right to the basketball ground",
      "go straight towards the field, turn left, follow the road",
      "pass one hostel and turn right",
      "Here you can get MBA Mess."
    ],
    imagePaths: [
      "images/mba_mess.jpg", // Replace with actual image path
      "https://example.com/image32.jpg", // Replace with actual image URL
      "https://example.com/image33.jpg" // Replace with actual image URL
    ]
  },
  //
  // ... (repeat the structure for other paths)
];

// Event listener for the "Find My Path" button
document.getElementById("findPathButton").addEventListener("click", async () => {
  const fromLocation = document.getElementById("from").value;
  const toLocation = document.getElementById("to").value;

  // Show the loading bar
  document.querySelector(".loading-bar").style.display = "block";

  // Calculate directions asynchronously
  const path = await calculateDirections(fromLocation, toLocation);

  // Hide the loading bar
  document.querySelector(".loading-bar").style.display = "none";

  if (path.steps[0] === "No directions found.") {
    // If no path is found, display a message in a popup
    showPopup("❌ No directions found. Please check your input.");
  } else {
    // If directions are found, display them in the container with images
    displayDirectionsWithImages(path);
  }

  // Clear the input fields
  document.getElementById("from").value = "";
  document.getElementById("to").value = "";
});

// Function to calculate directions with image paths
async function calculateDirections(fromLocation, toLocation) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const path = paths.find(
        (path) =>
          path.from.toLowerCase() === fromLocation.toLowerCase() &&
          path.to.toLowerCase() === toLocation.toLowerCase()
      );

      if (path) {
        resolve(path);
      } else {
        resolve({ steps: ["No directions found."] });
      }
    }, 1500); // Simulating a delay for calculation
  });
}

// Function to display directions with images
function displayDirectionsWithImages(path) {
  const directionsContainer = document.getElementById("directions");
  directionsContainer.innerHTML = `<h2>Directions</h2>`;

  path.steps.forEach((step, index) => {
    const directionItem = document.createElement("div");
    directionItem.innerHTML = `<p>${step}</p>`;

    // Add image dynamically
    if (path.imagePaths && path.imagePaths[index]) {
      const image = document.createElement("img");
      image.src = path.imagePaths[index];
      image.alt = "Landmark Image";
      directionItem.appendChild(image);
    }

    directionsContainer.appendChild(directionItem);
  });
}

// Function to display a popup with directions and images
function showPopup(message) {
  const popup = document.createElement("div");
  popup.className = "popup";

  const content = document.createElement("div");
  content.innerHTML = `<p>${message}</p>`;

  const closeButton = document.createElement("button");
  closeButton.innerText = "OK";
  closeButton.addEventListener("click", () => {
    document.body.removeChild(popup);
  });

  content.appendChild(closeButton);
  popup.appendChild(content);
  document.body.appendChild(popup);
}
