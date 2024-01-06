# Node.js Application

## Overview

The assignment focuses on building a comprehensive Node.js application with user management, role-based access control, and security measures. The user management module involves user sign-up, login, profile modification, and account deletion, with emphasis on collecting essential details and implementing robust password encryption. Roles are categorized into Admin and User, with respective access controls ensuring that Admins can manage all user details, while Users can only modify their own information. Admin management APIs enable the creation of admin accounts for enhanced control.

Authentication is implemented using JSON Web Tokens (JWT), enhancing the security of the application. Passwords are securely encrypted using bcrypt, ensuring user data protection. The assignment also addresses image storage concerns, allowing profile images to be saved locally or integrated with third-party services. The choice of database includes options like MongoDB or Firebase, providing flexibility based on project requirements. The application framework utilizes Express.js for API development, ensuring a scalable and efficient solution. In summary, this assignment covers crucial aspects of a Node.js application, combining user-centric functionalities, security protocols, and database flexibility for a well-rounded and robust system.

## Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.

## Getting Started

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/RKR0/BWI_Assignment.git


2. **Install Dependencies:**

   ```bash
   npm install

3. **Running the Application:**
  To start the application, run the following command
   ```bash
   node app.js
