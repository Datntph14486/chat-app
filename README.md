# Chat App (NestJS + Socket.IO)

This is a simple real-time chat application built using [NestJS](https://nestjs.com/) and [Socket.IO](https://socket.io/). It allows users to join a chat room, enter their name, and send/receive messages in real time.

## Features

- Real-time chat using WebSockets (Socket.IO)
- Prompt user for name upon connecting
- Display incoming and outgoing messages in Facebook-style chat bubbles
- Automatically serve frontend from `public/index.html`
- Hide `index.html` from the URL

## Technologies Used

- Backend: NestJS, Socket.IO
- Frontend: HTML, CSS, JavaScript
- Static file serving with `@nestjs/serve-static`

## Installation

```bash
# Clone the repository
git clone https://github.com/Datntph14486/chat-app.git
cd chat-app

# Install dependencies
npm install --legacy-peer-deps
```

## Running the App

```bash
npm run start
```

Then open your browser and go to [http://localhost:3000](http://localhost:3000).

## Project Structure

```
chat-app/
├── src/
│   ├── app.module.ts
│   ├── app.gateway.ts      # Main socket gateway
│   └── main.ts             # NestJS bootstrap
├── public/
│   └── index.html          # Frontend HTML served statically
├── package.json
└── README.md
```

## Notes

- All users can see messages broadcasted to the room.
- The frontend is automatically served from the `public` directory.
- The URL will remain clean (`/`) and not show `index.html` thanks to proper routing.
