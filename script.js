

const paths = [
  {
      from: "q",
      to: "w",
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
// Event listener for the "Find My Path" button
const findPathButton = document.getElementById("findPathButton");
const loadingBar = document.querySelector(".loading-bar");
const loadingFill = document.getElementById("loadingFill");

findPathButton.addEventListener("click", async () => {
  const fromLocation = document.getElementById("from").value;
  const toLocation = document.getElementById("to").value;

  // Show the loading bar
  loadingBar.style.display = "block";

  // Calculate directions asynchronously (you can use async/await)
  const directions = await calculateDirections(fromLocation, toLocation);

  // Hide the loading bar
  loadingBar.style.display = "none";

  if (directions[0] === "No directions found.") {
    // If no path is found, display a message in a popup
    showPopup("😞 No directions found. Please check your input.");
  } else {
    // If directions are found, display them in a popup
    showPopup(`🚀 Path Found!\n\nDirections:\n${directions.join("\n")}`);
  }

  // Clear the input fields
  document.getElementById("from").value = "";
  document.getElementById("to").value = "";
});

// Function to calculate directions (simulated asynchronous function)
async function calculateDirections(fromLocation, toLocation) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const path = paths.find(
        (path) =>
          path.from.toLowerCase() === fromLocation.toLowerCase() &&
          path.to.toLowerCase() === toLocation.toLowerCase()
      );

      if (path) {
        resolve(path.steps);
      } else {
        resolve(["No directions found."]);
      }
    }, 1500); // Simulating a delay for calculation
  });
}

// Function to display a popup with a message
function showPopup(message) {
  const popup = document.createElement("div");
  popup.className = "popup";
  popup.innerHTML = message;

  const closeButton = document.createElement("button");
  closeButton.innerText = "OK";
  closeButton.addEventListener("click", () => {
    document.body.removeChild(popup);
  });

  popup.appendChild(closeButton);

  document.body.appendChild(popup);
}
