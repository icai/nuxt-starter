import express from 'express'
import { fromNodeMiddleware } from 'h3'

const app = express()
// show hello world

app.get('/api/admin/rbac', (req, res) => {
    res.send({
        "config": [
            {
                "name": "OS version",
                "value": "Darwin x64 22.4.0  Intel(R) Core(TM) i7-8850H CPU @ 2.60GHz",
                "type": "blue",
                "icon": "microchip"
            },
            {
                "name": "System LoadAvg",
                "value": "5分钟: 4.92\n10分钟: 5.51\n15分钟: 5.97",
                "type": "indigo",
                "icon": "microchip"
            },
            {
                "name": "Node version",
                "value": "v16.20.0",
                "type": "purple",
                "icon": "microchip"
            },
            {
                "name": "MySQL version",
                "value": "8.0.23",
                "type": "pink",
                "icon": "microchip"
            },
            {
                "name": "Sequelize version",
                "value": "6.29.1",
                "type": "red",
                "icon": "microchip"
            },
            {
                "name": "MySQL max connections",
                "value": "151",
                "type": "orange",
                "icon": "microchip"
            },
            {
                "name": "Redis version",
                "value": "5.0.6",
                "type": "yellow",
                "icon": "microchip"
            },
            {
                "name": "System UpTime",
                "value": "4556 min",
                "type": "green",
                "icon": "microchip"
            },
            {
                "name": "Total memory",
                "value": "16384.00 MB",
                "type": "teal",
                "icon": "microchip"
            },
            {
                "name": "Free memory",
                "value": "246.88 MB",
                "type": "cyan",
                "icon": "microchip"
            },
            {
                "name": "Node memory usage",
                "value": "260.94 MB",
                "type": "blue",
                "icon": "microchip"
            }
        ],
        "operation_logs": [
            {
                "id": "8cc4fbf5-3235-4831-ac73-b74c72e62b3a",
                "user_id": "bf03d66d-9e32-4253-87c2-0169309abe65",
                "user_name": "test",
                "name": "管理小二",
                "operations": "更新用户：neon;ID: 8dd7a843-40ed-44f5-9094-6c14d9823c5b",
                "operate_time": "2023-04-03T12:59:41.000Z",
                "created_at": "2023-04-03T12:59:41.000Z",
                "modified_at": "2023-04-03T12:59:41.000Z"
            },
            {
                "id": "505dfd5b-f866-4b9a-abcb-2f7dc05db448",
                "user_id": "bf03d66d-9e32-4253-87c2-0169309abe65",
                "user_name": "test",
                "name": "管理小二",
                "operations": "更新用户：neon;ID: 8dd7a843-40ed-44f5-9094-6c14d9823c5b",
                "operate_time": "2023-04-03T12:57:45.000Z",
                "created_at": "2023-04-03T12:57:45.000Z",
                "modified_at": "2023-04-03T12:57:45.000Z"
            },
            {
                "id": "e23a0cfe-6458-4154-ae5d-d69730132543",
                "user_id": "bf03d66d-9e32-4253-87c2-0169309abe65",
                "user_name": "test",
                "name": "管理小二",
                "operations": "更新用户：neon;ID: 8dd7a843-40ed-44f5-9094-6c14d9823c5b",
                "operate_time": "2023-04-03T12:52:15.000Z",
                "created_at": "2023-04-03T12:52:15.000Z",
                "modified_at": "2023-04-03T12:52:15.000Z"
            },
            {
                "id": "d3787473-36b2-45a1-a4fc-a6a5d946990e",
                "user_id": "bf03d66d-9e32-4253-87c2-0169309abe65",
                "user_name": "test",
                "name": "管理小二",
                "operations": "更新用户：neon;ID: 8dd7a843-40ed-44f5-9094-6c14d9823c5b",
                "operate_time": "2023-04-03T12:52:03.000Z",
                "created_at": "2023-04-03T12:52:03.000Z",
                "modified_at": "2023-04-03T12:52:03.000Z"
            },
            {
                "id": "600412ff-cb2a-4ae0-afd7-48fc46730415",
                "user_id": "bf03d66d-9e32-4253-87c2-0169309abe65",
                "user_name": "test",
                "name": "管理小二",
                "operations": "更新用户：neon;ID: 8dd7a843-40ed-44f5-9094-6c14d9823c5b",
                "operate_time": "2023-04-03T12:51:56.000Z",
                "created_at": "2023-04-03T12:51:56.000Z",
                "modified_at": "2023-04-03T12:51:56.000Z"
            },
            {
                "id": "f859d0c8-3dd4-4027-ad9d-65e2f6581d3b",
                "user_id": "bf03d66d-9e32-4253-87c2-0169309abe65",
                "user_name": "test",
                "name": "管理小二",
                "operations": "新增用户：neon",
                "operate_time": "2023-04-03T12:04:07.000Z",
                "created_at": "2023-04-03T12:04:07.000Z",
                "modified_at": "2023-04-03T12:04:07.000Z"
            },
            {
                "id": "3dc2440c-2fe8-49c9-8c3b-6ad1d13b239e",
                "user_id": "bf03d66d-9e32-4253-87c2-0169309abe65",
                "user_name": "test",
                "name": "管理小二",
                "operations": "删除用户ID: 42c0d49f-c8f6-468b-b00d-d48a11e06896",
                "operate_time": "2023-04-03T11:51:46.000Z",
                "created_at": "2023-04-03T11:51:46.000Z",
                "modified_at": "2023-04-03T11:51:46.000Z"
            },
            {
                "id": "26ea3fda-fec2-465a-b2f4-ba89d14d2d81",
                "user_id": "bf03d66d-9e32-4253-87c2-0169309abe65",
                "user_name": "test",
                "name": "管理小二",
                "operations": "删除用户ID: 42c0d49f-c8f6-468b-b00d-d48a11e06896",
                "operate_time": "2023-04-03T11:50:18.000Z",
                "created_at": "2023-04-03T11:50:18.000Z",
                "modified_at": "2023-04-03T11:50:18.000Z"
            },
            {
                "id": "6e4b14c7-02ab-4ed9-a2a6-9536011e4a05",
                "user_id": "bf03d66d-9e32-4253-87c2-0169309abe65",
                "user_name": "test",
                "name": "管理小二",
                "operations": "新增用户：neon",
                "operate_time": "2023-04-03T10:37:44.000Z",
                "created_at": "2023-04-03T10:37:44.000Z",
                "modified_at": "2023-04-03T10:37:44.000Z"
            },
            {
                "id": "7dbee36b-6f5c-4726-a839-38ae95afa4ab",
                "user_id": "bf03d66d-9e32-4253-87c2-0169309abe65",
                "user_name": "test",
                "name": "管理小二",
                "operations": "删除用户ID: 79a9a8ff-9828-4ec5-b801-2ffbf489b955",
                "operate_time": "2023-04-03T10:36:44.000Z",
                "created_at": "2023-04-03T10:36:44.000Z",
                "modified_at": "2023-04-03T10:36:44.000Z"
            }
        ],
        "login_time": [
            {
                "id": "339cfebd-ee85-4b08-9bab-e66a3fdc1454",
                "user_id": "bf03d66d-9e32-4253-87c2-0169309abe65",
                "user_name": "test",
                "name": "管理小二",
                "ip": "127.0.0.1",
                "locations": null,
                "login_time": "2023-09-09T11:11:05.000Z",
                "created_at": "2023-09-09T11:11:05.000Z",
                "modified_at": "2023-09-09T11:11:05.000Z",
                "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36"
            },
            {
                "id": "372d2511-fc55-4e6c-a5f4-3288257f0ce0",
                "user_id": "bf03d66d-9e32-4253-87c2-0169309abe65",
                "user_name": "test",
                "name": "管理小二",
                "ip": "127.0.0.1",
                "locations": null,
                "login_time": "2023-09-07T07:59:31.000Z",
                "created_at": "2023-09-07T07:59:31.000Z",
                "modified_at": "2023-09-07T07:59:31.000Z",
                "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36"
            },
            {
                "id": "aeb2ed00-2f53-40ec-971d-5fb8d9827beb",
                "user_id": "bf03d66d-9e32-4253-87c2-0169309abe65",
                "user_name": "test",
                "name": "管理小二",
                "ip": "127.0.0.1",
                "locations": null,
                "login_time": "2023-09-07T02:24:19.000Z",
                "created_at": "2023-09-07T02:24:19.000Z",
                "modified_at": "2023-09-07T02:24:19.000Z",
                "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36"
            },
            {
                "id": "12a8602f-af93-4f7c-a740-7f377432a308",
                "user_id": "bf03d66d-9e32-4253-87c2-0169309abe65",
                "user_name": "test",
                "name": "管理小二",
                "ip": "127.0.0.1",
                "locations": null,
                "login_time": "2023-08-22T16:55:13.000Z",
                "created_at": "2023-08-22T16:55:13.000Z",
                "modified_at": "2023-08-22T16:55:13.000Z",
                "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36"
            },
            {
                "id": "f04d6a13-0d2b-4311-b2f9-41582c2a280d",
                "user_id": "bf03d66d-9e32-4253-87c2-0169309abe65",
                "user_name": "test",
                "name": "管理小二",
                "ip": "127.0.0.1",
                "locations": null,
                "login_time": "2023-08-22T16:54:00.000Z",
                "created_at": "2023-08-22T16:54:00.000Z",
                "modified_at": "2023-08-22T16:54:00.000Z",
                "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36"
            },
            {
                "id": "59d7f82c-1ce3-4109-ad59-63bed2984962",
                "user_id": "bf03d66d-9e32-4253-87c2-0169309abe65",
                "user_name": "test",
                "name": "管理小二",
                "ip": "127.0.0.1",
                "locations": null,
                "login_time": "2023-08-22T16:45:18.000Z",
                "created_at": "2023-08-22T16:45:18.000Z",
                "modified_at": "2023-08-22T16:45:18.000Z",
                "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36"
            },
            {
                "id": "3dc6bcb2-6549-4467-a8f7-097c16c8a27b",
                "user_id": "bf03d66d-9e32-4253-87c2-0169309abe65",
                "user_name": "test",
                "name": "管理小二",
                "ip": "127.0.0.1",
                "locations": null,
                "login_time": "2023-06-13T07:58:04.000Z",
                "created_at": "2023-06-13T07:58:04.000Z",
                "modified_at": "2023-06-13T07:58:04.000Z",
                "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36"
            },
            {
                "id": "62b5e29c-8e0e-4501-a6aa-5d06381bd1b6",
                "user_id": "bf03d66d-9e32-4253-87c2-0169309abe65",
                "user_name": "test",
                "name": "管理小二",
                "ip": "::1",
                "locations": null,
                "login_time": "2023-05-05T06:18:07.000Z",
                "created_at": "2023-05-05T06:18:07.000Z",
                "modified_at": "2023-05-05T06:18:07.000Z",
                "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36"
            },
            {
                "id": "61ab56d5-2ea7-46ef-b0c1-0556f451ca8e",
                "user_id": "bf03d66d-9e32-4253-87c2-0169309abe65",
                "user_name": "test",
                "name": "管理小二",
                "ip": "::1",
                "locations": null,
                "login_time": "2023-05-04T06:58:51.000Z",
                "created_at": "2023-05-04T06:58:51.000Z",
                "modified_at": "2023-05-04T06:58:51.000Z",
                "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36"
            },
            {
                "id": "5541bd02-1f1a-40db-a5e7-67d6849945ba",
                "user_id": "bf03d66d-9e32-4253-87c2-0169309abe65",
                "user_name": "test",
                "name": "管理小二",
                "ip": "::1",
                "locations": null,
                "login_time": "2023-05-04T01:55:00.000Z",
                "created_at": "2023-05-04T01:55:00.000Z",
                "modified_at": "2023-05-04T01:55:00.000Z",
                "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36"
            }
        ],
        "success": 1
    })
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
    console.log(req.url, req.method, Date.now())
    app.handle(req, res, next)
})
