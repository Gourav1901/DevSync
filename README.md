DevSync - A Collaborative Web-Based Code Editor
DevSync is a responsive, web-based code editor designed for real-time coding and collaboration. It supports HTML, CSS, and JavaScript, offering an interactive environment where users can write, edit, and run code directly in the browser. With real-time collaboration features, DevSync is ideal for pair programming, remote learning, and instant code sharing.

Features
Real-Time Collaboration: Collaborate with multiple users in real-time on the same code.
HTML, CSS, and JavaScript Support: Write and run front-end code directly in the browser.
Live Preview: Instantly see your code changes reflected in the browser preview.
Syntax Highlighting: Enhanced code readability with syntax highlighting.
Responsive Design: Fully optimized for mobile and desktop.
Minimal UI: Clean, distraction-free interface for easy navigation and usage.
Tech Stack
Frontend: React.js, Vite (for fast development and optimized builds)
Backend: Node.js, Express.js
Real-Time Sync: WebSockets using Socket.IO
Deployment: Netlify / Vercel 
Getting Started
Follow these steps to run DevSync locally.

Prerequisites
Node.js: Ensure you have Node.js installed on your machine.
NPM/Yarn: Either npm or yarn to manage packages.
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/devsync.git
Navigate to the project directory:

bash
Copy code
cd devsync
Install dependencies:

For the backend:

bash
Copy code
npm install
For the frontend (inside the client folder):

bash
Copy code
cd client
npm install
Set up environment variables:

Create a .env file at the root and add any necessary configuration:

bash
Copy code
PORT=5000
VITE_APP_BACKEND_URL=http://localhost:5000
Run the development servers:

To start the backend server (in one terminal):

bash
Copy code
npm run server
To start the Vite development server for the frontend (in a different terminal):

bash
Copy code
cd client
npm run dev
Open the app: The frontend will be served at http://localhost:3000 by default.

Deployment
To deploy the project, build the frontend for production and deploy it along with the backend.

Build the frontend:

bash
Copy code
cd client
npm run build
This will create an optimized build inside the client/dist folder.

Serve the production build: Set up your backend to serve static files from client/dist and deploy to platforms like Heroku or Vercel.

Running Both Servers in Parallel
You can run both the frontend and backend servers together using the following:

bash
Copy code
npm run dev
This will use concurrently to run the backend and Vite frontend servers simultaneously.

Usage
Start Coding: Once the app is running, start writing code in HTML, CSS, or JavaScript.
Live Collaboration: Share the URL with collaborators to code together in real-time.
Live Preview: The changes you make to the code are reflected instantly in the preview window.
