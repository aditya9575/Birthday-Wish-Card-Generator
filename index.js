document.getElementById('generateButton').addEventListener('click', function() {
    const nameInput = document.getElementById('nameInput').value;
    const cardContainer = document.getElementById('cardContainer');
    const userNameElements = document.querySelectorAll('#userName');
    const downloadButton = document.getElementById('downloadButton');
  
    if (nameInput.trim() !== "") {
      // Display the card and download button
      cardContainer.style.display = 'flex';
      downloadButton.style.display = 'inline-block';
  
      // Update the card with the user's name
      userNameElements.forEach(element => {
        element.textContent = nameInput;
      });
    } else {
      alert("Please enter a name!");
    }
  });
  
  document.getElementById('downloadButton').addEventListener('click', function() {
    const nameInput = document.getElementById('nameInput').value;
    const cardHTML = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Birthday Card</title>
        <style>
          body {
            background-image: linear-gradient(to right top, #1f0537, #380c60, #55108c, #7413bb, #9612eb);
            height: 100%;
            margin: 0;
            background-repeat: no-repeat;
            background-attachment: fixed;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
  
          .card-container {
            display: flex;
            justify-content: center;
            align-items: center;
          }
  
          .card {
            position: relative;
            width: 300px;
            height: 425px;
            border: 10px solid #9612eb;
            margin: 60px auto 0 auto;
            box-shadow: inset 10px 0px 15px 0px rgba(0, 0, 0, 0.1);
            background-image: linear-gradient(to bottom, rgba(255, 255, 255), rgba(255, 255, 255, 0.5)), url("https://images.unsplash.com/photo-1527481138388-31827a7c94d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60");
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            background-color: #e6f0e6;
          }
  
          .card .text-container {
            width: 80%;
            height: 80%;
            margin: auto;
          }
  
          .card .text-container #head {
            font-family: 'Nobile', sans-serif;
            font-size: 1.5em;
            margin: 60px auto 60px auto;
          }
  
          .card p {
            font-size: 1.1em;
            line-height: 1.4;
            font-family: 'Nobile';
            color: #331717;
            font-style: italic;
            text-align: center;
            margin: 30px auto 0px auto;
          }
  
          .card .front {
            position: absolute;
            width: 100%;
            height: 100%;
            margin: -10px 0px 0px -10px;
            border: 10px solid #9612eb;
            backface-visibility: hidden;
            background-color: #9612eb;
            transform-style: preserve-3d;
            transform-origin: 0% 50%;
            transform: perspective(800px) rotateY(0deg);
            transition: all 0.8s ease-in-out;
          }
  
          .card:hover .front {
            transform: perspective(800px) rotateY(-170deg);
            background-color: #41718d;
          }
  
          .card:hover .back {
            transform: perspective(800px) rotateY(-170deg);
            box-shadow: 7px 0px 5px 0px rgba(0, 0, 0, 0.3), inset 2px 0px 15px 0px rgba(0, 0, 0, 0.1);
            background-color: #d2dcd2;
          }
  
          .card .back {
            position: absolute;
            width: 100%;
            height: 100%;
            border: 10px solid #9612eb;
            margin: -10px 0px 0px -10px;
            backface-visibility: visible;
            filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, .5));
            transform-style: preserve-3d;
            transform-origin: 0% 50%;
            transform: perspective(800px) rotateY(0deg);
            transition: all 0.8s ease-in-out;
            background-color: #e6f0e6;
            box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.1);
          }
  
          .imgset {
            position: relative;
            z-index: 1;
            margin-bottom: -215px;
          }
  
          .imgset img {
            box-shadow: 0px 6px 11px 7px rgba(0, 0, 0, 0.22);
            border-radius: 5px;
          }
        </style>
      </head>
      <body>
        <div class="card-container" style="display: flex;">
          <div class="card" id="birthdayCard">
            <div class="back"></div>
            <div class="front">
              <div class="imgset">
                <img width="100%" src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*FwUO33oTItZAPPrzFebRDQ.png">
              </div>
            </div>
            <div class="text-container">
              <p id="head">Happy Birthday <span id="userName">${nameInput}</span>!</p>
              <p>I hope your special day will bring you lots of happiness, love, and fun. You deserve them a lot. Enjoy!</p>
              <p>Hope your day goes great!</p>
            </div>
          </div>
        </div>
      </body>
      </html>
    `;
  
    const blob = new Blob([cardHTML], { type: 'text/html' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'BirthdayCard.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
  