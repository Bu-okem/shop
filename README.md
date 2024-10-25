# Shop.co

**Overview**
--------

Shop.co is a modern e-commerce application designed to provide a seamless shopping experience. Built with **React** for the frontend, **TypeScript** for enhanced reliability and maintainability, and powered by **AppWrite** as the backend solution, this project ensures scalability, security, and ease of maintenance. It's desing

**Table of Contents**
-----------------

1. [**Project Features**](#project-features)
2. [**Technical Stack**](#technical-stack)
3. [**Getting Started**](#getting-started)
    * [Prerequisites](#prerequisites)
    * [Setup](#setup)
    * [Running the Application](#running-the-application)
4. [**AppWrite Backend Setup**](#appwrite-backend-setup)
5. [**Contributing**](#contributing)
6. [**License**](#license)
7. [**Acknowledgments**](#acknowledgments)

### **Project Features**
------------------------

* **User Authentication**: Secure login and registration using AppWrite's authentication services.
* **Product Catalog**: Browse through a list of products, with filtering and sorting capabilities.
* **Shopping Cart**: Add, remove, and update products in your cart.
* **Checkout Process**: Secure payment gateway integration using Stripe API
* **Order Management**: View past orders and their status.
* **Responsive Design**: Enjoy a seamless experience across various devices.

### **Technical Stack**
----------------------

* **Frontend**:
	+ **Framework**: React
	+ **Language**: TypeScript
	+ **State Management**: Context API
	+ **Styling**: TailwindCSS
* **Backend**:
	+ **Platform**: AppWrite
	+ **Database**: AppWrite's Built-in Database Solution
* **Additional Tools/Libraries**:
	+ Stripe API

### **Getting Started**
----------------------

#### **Prerequisites**
---------------

* **Node.js** (>= 14.17.0)
* **npm** (or **yarn**)
* **AppWrite Account** (for backend setup)

#### **Setup**
---------

1. Clone the repository:
   ```bash
   git clone https://github.com/buokem/shop.git
   ```
2. Navigate into the project directory:
   ```bash
   cd shop
   ```
3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

#### **Running the Application**
-----------------------------

1. Start the React application:
   ```bash
   npm run dev
   # or
   yarn run dev
   ```
2. Open your web browser and navigate to `http://localhost:5173` to view the application.

### **AppWrite Backend Setup**
-----------------------------

1. **Create an AppWrite Account**: Visit [AppWrite](https://appwrite.io/) and sign up.
2. **Create a New Project**: Follow AppWrite's dashboard to create a new project.
3. **Configure AppWrite SDK**:
   - Install the AppWrite SDK using npm or yarn:
     ```bash
     npm install appwrite
     # or
     yarn add appwrite
     ```
   - Initialize AppWrite in your project with the project ID and API keys from your AppWrite dashboard. Refer to [AppWrite's Documentation](https://appwrite.io/docs) for detailed setup instructions.
   

### **Acknowledgments**
-------------------

The success of Shop.co is also attributed to the invaluable contribution of:

* **Hamza Naeem**: UI/UX Designer ([Dribble](https://dribbble.com/hamzauix)) ([Behance](https://www.behance.net/hamzauix))
    + Played a pivotal role in shaping the project's visual identity and user experience.
    + Key contributions include:
        - Designing the project's logo and comprehensive branding guidelines.
        - Crafting the intuitive UI/UX
    

