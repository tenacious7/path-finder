<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="style.css">
    <title>Custom Map</title>
    <style>
        /* Add your CSS styling here */
        body {
            text-align: center;
            font-family: Arial, sans-serif;
        }
        h1 {
            color: black;
            font-weight: bold;
        }
        .location-inputs {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin: 20px 0;
        }
        .location-input {
            margin: 10px 0;
            padding: 5px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
        #findPathButton {
            background-color: #007bff;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
            margin-top: 20px; /* Adjust the margin-top to center the button vertically */
        }
        .loading-bar {
            display: none;
        }
        .loading-fill {
            width: 0;
            background-color: #007bff;
            height: 10px;
            border-radius: 5px;
        }
        /* Add CSS for the popup */
        .popup {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: white;
            border: 1px solid #ccc;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
            padding: 20px;
            z-index: 1000;
            text-align: center;
        }

        .popup button {
            display: block;
            margin: 10px auto;
            background: #007bff;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <h1>Welcome to Centurion University Of Technology and Management</h1>
    <!-- Add the image with the provided URL -->
    <img src="https://th.bing.com/th/id/OIP.KYLzNfR7sqyhGUyTfhKdmAAAAA?pid=ImgDet&rs=1" alt="Your Custom Map Image" height="300px">
    <div class="location-inputs">
        <div class="location-input">
            <label for="from">From:</label>
            <input type="text" id="from" placeholder="Enter your current location">
        </div>
        <div class="location-input">
            <label for="to">To:</label>
            <input type="text" id="to" placeholder="Enter your destination">
        </div>
        <button id="findPathButton">Find My Path</button>
    </div>
    <div class="loading-bar">
        <div class="loading-fill" id="loadingFill"></div>
    </div>
    <canvas id="customMap"></canvas>
    <div id="directions"></div>
    <script src="script.js"></script>
    <link rel="stylesheet" type="text/css" href="style.css">
</body>
</html>
