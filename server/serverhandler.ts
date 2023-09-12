import express from 'express'
import { fromNodeMiddleware } from 'h3'

import dashboard from './mock/dashboard.json'
import permission from './mock/permission.json'

const app = express()
// show hello world

app.get('/api/admin/dashboard/dashboard', (req, res) => {
    res.send(dashboard)
})

app.get('/api/auth/admin/permissions', (req, res) => {
    res.send(permission)
})

function generateRandomText() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let text = '';
  for (let i = 0; i < 4; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    text += characters.charAt(randomIndex);
  }
  return text;
}

function getRandom(min, max) {
  // Generate a random rotation angle between 10 and 30 degrees
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function generateRandomColor() {
  // Generate a random color in hexadecimal format
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function createSVGImage(text, width, height) {
  // Create an SVG image string with the specified text, width, height, random rotation, and interference characters
  const characterWidth = width / text.length;
  let characterX = 0;
  let textGroup = [];

  for (let i = 0; i < text.length; i++) {
    const rotationAngle = getRandom(0, 30);
    const interferenceColor = generateRandomColor();
    const interferenceFontSize = getRandom(10, 20);
    const character = text[i];

    // Add small interference characters around each group of 4 characters
    for (let j = 0; j < 3; j++) {
      const rotationAngle = getRandom(0, 30);
      const interferenceCharacter = generateRandomText().charAt(0);
      const interferenceX = characterX + (Math.random() * 10 - 5); // Randomize position within a small range
      const interferenceY = height / 2 + (Math.random() * 10 - 5);
      const interferenceColor = generateRandomColor();
      const interferenceFontSize = getRandom(3, 8);
      textGroup.push(`<text x="${interferenceX}" y="${interferenceY}" rotate="${rotationAngle}" font-size="${interferenceFontSize}"  fill="${interferenceColor}" text-anchor="middle" dominant-baseline="middle">${interferenceCharacter}</text>`);
    }

    textGroup.push(`<text x="${characterX + characterWidth / 2 + Math.random()}"  y="${height / 2 + + Math.random()}" rotate="${rotationAngle}" font-size="${interferenceFontSize}" fill="${interferenceColor}" text-anchor="middle" dominant-baseline="middle">${character}</text>`);
    characterX += characterWidth;
  }

  // reorder textGroup
  for (let i = 0; i < textGroup.length; i++) {
    const randomIndex = Math.floor(Math.random() * textGroup.length);
    const temp = textGroup[i];
    textGroup[i] = textGroup[randomIndex];
    textGroup[randomIndex] = temp;
  }

  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
      <rect width="100%" height="100%" fill="white" />
      ${textGroup.join('')}
    </svg>
  `;
}


app.get('/api/verify', (req, res) => {
  const text = generateRandomText();
  // Create an SVG image string with the text, specified dimensions, and rotation
  const svgImage = createSVGImage(text, 80, 33);

  // Set the content type header
  res.setHeader('Content-Type', 'image/svg+xml');

  // Send the SVG image string as the response
  res.end(svgImage);
})




app.get('/api/some', (req, res) => {
  res.send({
    message: 'Hello World!'
  })
})

export default fromNodeMiddleware((req, res, next) => {
    // console.log(req.url, req.method, Date.now())
    app.handle(req, res, next)
})
