Student Chat Application

This is a simple chat application designed for students, built with React for the frontend and Express for the backend. The app allows users to set a username and start chatting in real-time using the ChatEngine API.

Features
User authentication using a custom username
Real-time chat functionality
Responsive design

Technologies Used: 
Frontend: React
Backend: Express
Chat Engine: ChatEngine.io
HTTP Client: Axios

Getting Started:

Prerequisites:
Node.js and npm installed on your machine
A ChatEngine.io account

Installation:

Clone the repository:

git clone https://github.com/akshatmanohar21/Student-Chat-App.git
cd student-chat-app

Install dependencies for both frontend and backend:

npm install

Configuration
ChatEngine Project ID:

Sign up on ChatEngine.io and create a new project.
Copy the Project ID and replace the placeholder in ChatsPage.jsx.
Private Key:

Obtain your Private Key from the ChatEngine project dashboard.
Replace the placeholder in index.js with your private key.
Running the Application
Start the backend server:

bash
Copy code
node index.js
Start the frontend development server:

bash
Copy code
npm start
Open your browser and navigate to:

arduino
Copy code
http://localhost:3000
Usage
Enter a username on the authentication page.
Start chatting in real-time.
Folder Structure
App.jsx: Main component that handles user authentication and rendering the chat page.
ChatsPage.jsx: Component that renders the chat window using ChatEngine.
AuthPage.jsx: Component for user authentication.
App.css: Styling for the application.
index.js: Express server setup and API endpoints.
Contributing
Contributions are welcome! Please fork the repository and submit a pull request for any enhancements or bug fixes.

License
This project is licensed under the MIT License. See the LICENSE file for details.

Acknowledgements
ChatEngine.io for providing the chat API.
React community for the amazing tools and libraries.
Contact
For any questions or suggestions, feel free to contact me at akshat.projects.deployment@gmail.com
