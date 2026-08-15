# 🛒 Blinkit Clone

A modern and responsive **Blinkit-inspired grocery shopping web application** built with **React.js, Tailwind CSS, Vite, Node.js, Express.js, and MongoDB**.

This project is organized into three main applications:

- 🛍️ **Frontend** – Customer grocery shopping interface
- ⚙️ **Backend** – REST APIs, authentication, database, and business logic
- 🛠️ **Admin Panel** – Product and application management

> ⚠️ This project is created for educational and portfolio purposes and is not affiliated with or officially connected to Blinkit.

---

## ✨ Features

### 🛍️ Customer Frontend

- 🏠 Modern responsive home page
- 🔍 Product search
- 🛒 Add to cart
- ➕ Increase/decrease product quantity
- 💰 Product pricing and discounts
- 📦 Product categories
- ⭐ Featured products
- 🥬 Fresh products section
- 📱 Mobile, tablet, laptop, and desktop support
- ♻️ Reusable React components
- ⚡ Fast performance with Vite
- 🎨 Modern UI with Tailwind CSS

### ⚙️ Backend

- 🚀 RESTful APIs
- 👤 User management
- 🔐 Authentication and authorization
- 📦 Product management
- 🛒 Cart APIs
- 📋 Order APIs
- 🗄️ MongoDB database integration
- 🔗 Mongoose
- ⚡ Server-side business logic
- 🌐 API integration with frontend and admin panel

### 🛠️ Admin Panel

- 📊 Admin dashboard
- 📦 Product management
- ➕ Add products
- ✏️ Update products
- 🗑️ Delete products
- 📋 Manage product information
- 🔐 Admin authentication
- 📈 Administrative controls

---

# 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| ⚛️ React.js | Frontend UI |
| ⚡ Vite | Development and build tool |
| 🎨 Tailwind CSS | Styling and responsive design |
| 🟢 Node.js | Backend runtime |
| 🚂 Express.js | REST API server |
| 🍃 MongoDB | Database |
| 🔗 Mongoose | MongoDB object modeling |
| 📜 JavaScript | Application logic |
| ▲ Netlify | Deployment |

---

# 📂 Project Structure

```text
Blinkit-Clone/
│
├── adminpanel/
│   └── Admin dashboard and management application
│
├── backend/
│   └── Backend server, APIs, database and authentication
│
├── frontend/
│   └── Customer-facing grocery shopping application
│
├── netlify.toml
│   └── Netlify deployment configuration
│
└── README.md
    └── Project documentation
```

---

# 📁 Folder Details

## 🛍️ `frontend/`

The `frontend` directory contains the customer-facing grocery shopping application.

It handles:

- Product browsing
- Product search
- Categories
- Product cards
- Shopping cart
- Product quantities
- Pricing
- Responsive UI
- Customer interactions

---

## ⚙️ `backend/`

The `backend` directory contains the server-side application and REST APIs.

It handles:

- API requests
- Database operations
- Users
- Products
- Authentication
- Authorization
- Cart operations
- Orders
- Business logic

---

## 🛠️ `adminpanel/`

The `adminpanel` directory contains the administration application.

It is used for:

- Adding products
- Updating products
- Deleting products
- Managing product information
- Managing application data
- Administrative operations

---

## 🌐 `netlify.toml`

The `netlify.toml` file contains configuration for deploying the project with Netlify.

---

# 🚀 Getting Started

## 📌 Prerequisites

Make sure the following are installed:

- [Node.js](https://nodejs.org/)
- npm
- Git
- MongoDB or a MongoDB Atlas database

Check Node.js and npm:

```bash
node --version
npm --version
```

---

# 1️⃣ Clone the Repository

```bash
git clone https://github.com/Mr-Ahad-Khan/Blinkit-Clone.git
```

Navigate to the project:

```bash
cd Blinkit-Clone
```

---

# 2️⃣ Frontend Setup

Navigate to the frontend:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The frontend will normally be available at:

```text
http://localhost:5173
```

---

# 3️⃣ Backend Setup

Open a new terminal and navigate to the backend:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file inside the `backend` directory.

Example:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

> Environment variable names may differ depending on your backend implementation. Use the names defined in your backend source code.

Start the backend:

```bash
npm run dev
```

The backend will normally run at:

```text
http://localhost:5000
```

---

# 4️⃣ Admin Panel Setup

Open another terminal:

```bash
cd adminpanel
```

Install dependencies:

```bash
npm install
```

Start the admin panel:

```bash
npm run dev
```

Vite will display the local URL and port in your terminal.

---

# 🔄 Application Architecture

```text
                         ┌─────────────────────┐
                         │    Customer/User    │
                         └──────────┬──────────┘
                                    │
                                    ▼
                         ┌─────────────────────┐
                         │      Frontend       │
                         │    React + Vite     │
                         │    Tailwind CSS     │
                         └──────────┬──────────┘
                                    │
                                    │ REST API
                                    ▼
                         ┌─────────────────────┐
                         │       Backend       │
                         │   Node + Express    │
                         └──────────┬──────────┘
                                    │
                                    │ Database
                                    ▼
                         ┌─────────────────────┐
                         │       MongoDB       │
                         │      Database       │
                         └─────────────────────┘


                         ┌─────────────────────┐
                         │       Admin         │
                         └──────────┬──────────┘
                                    │
                                    ▼
                         ┌─────────────────────┐
                         │    Admin Panel      │
                         │    React + Vite     │
                         │    Tailwind CSS     │
                         └──────────┬──────────┘
                                    │
                                    │ REST API
                                    ▼
                         ┌─────────────────────┐
                         │       Backend       │
                         └─────────────────────┘
```

---

# 🔗 API Architecture

```text
Frontend
   │
   ├── Products
   ├── Users
   ├── Cart
   └── Orders
        │
        ▼
     Backend
        │
        ▼
     MongoDB


Admin Panel
     │
     ├── Add Product
     ├── Update Product
     ├── Delete Product
     └── Manage Data
        │
        ▼
     Backend
```

---

# 🛒 User Flow

```text
Open Website
      │
      ▼
Browse Products
      │
      ▼
Search / Select Product
      │
      ▼
Add Product to Cart
      │
      ▼
Update Quantity
      │
      ▼
Review Cart
      │
      ▼
Place Order
      │
      ▼
Order Processing
```

---

# 🛠️ Admin Flow

```text
Admin Login
     │
     ▼
Admin Dashboard
     │
     ├───────────────┐
     ▼               ▼
Add Product      Manage Products
                     │
             ┌───────┼────────┐
             ▼       ▼        ▼
           Edit    Delete    View
             │       │        │
             └───────┴────────┘
                     │
                     ▼
                Update Data
```

---

# 🔐 Environment Variables

Create the following file:

```text
backend/.env
```

Example:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

If your project requires additional environment variables, add them according to your backend configuration.

### ⚠️ Important

Never upload your `.env` file to GitHub.

Add the following to `.gitignore`:

```gitignore
.env
node_modules
dist
```

---

# 🏗️ Production Build

Build the frontend:

```bash
cd frontend
npm run build
```

The production files will normally be generated in:

```text
frontend/dist/
```

Preview the production build:

```bash
npm run preview
```

---

# 🌐 Deployment

The project contains:

```text
netlify.toml
```

for Netlify deployment configuration.

Before deploying, make sure:

- ✅ Environment variables are configured
- ✅ Backend API URL is correct
- ✅ MongoDB connection is working
- ✅ Frontend production build works
- ✅ Backend APIs are accessible
- ✅ CORS is configured correctly
- ✅ Deployment settings match your project structure

---

# 📱 Responsive Design

The application is designed for:

- 💻 Desktop
- 🖥️ Laptop
- 📱 Mobile
- 📲 Tablet

Tailwind CSS responsive utilities are used to provide a consistent experience across screen sizes.

---

# 🎨 UI Sections

The customer application includes a grocery-shopping-focused interface such as:

- 🏠 Hero banner
- 🔍 Search bar
- 🛍️ Grocery categories
- ⭐ Featured products
- 🥬 Fresh products
- 📦 Product cards
- 🛒 Shopping cart
- 📱 Responsive navigation

---

# 🎯 Future Enhancements

- ❤️ Wishlist functionality
- 🔐 Complete user authentication
- 💳 Secure checkout
- 💰 Payment gateway integration
- 📦 Complete order management
- 🚚 Live order tracking
- 🔎 Advanced product filters
- 🏷️ Coupons and promotional offers
- ⭐ Product reviews and ratings
- 🌙 Dark mode
- 📍 Location-based delivery
- 🔔 Push notifications
- 📊 Advanced admin analytics
- 👥 Customer management
- 📈 Sales and revenue dashboard
- 🧾 Invoice generation
- 📦 Delivery partner management
- 🗺️ Delivery location tracking
- 🔔 Real-time order status

---

# 🤝 Contributing

Contributions are welcome!

## 1. Fork the Repository

Fork this repository to your GitHub account.

## 2. Clone the Repository

```bash
git clone https://github.com/Mr-Ahad-Khan/Blinkit-Clone.git
```

## 3. Navigate to the Project

```bash
cd Blinkit-Clone
```

## 4. Create a Feature Branch

```bash
git checkout -b feature/NewFeature
```

## 5. Make Your Changes

Implement your feature or fix.

## 6. Add Your Changes

```bash
git add .
```

## 7. Commit Your Changes

```bash
git commit -m "Add New Feature"
```

## 8. Push Your Branch

```bash
git push origin feature/NewFeature
```

## 9. Create a Pull Request

Open a Pull Request and describe your changes.

---

# 📸 Project Preview

You can add screenshots of the project here.

Example:

```markdown
![Frontend Screenshot](./frontend/screenshot.png)
![Admin Panel Screenshot](./adminpanel/screenshot.png)
```

---

# 📄 License

This project is licensed under the **MIT License**.

You are free to use, modify, and distribute this project according to the terms of the license.

---

# 👨‍💻 Author

## Ahad Khan

**Frontend Developer | MERN Full Stack Developer | Event Host**

- 🌐 GitHub: https://github.com/Mr-Ahad-Khan
- 💼 LinkedIn: https://www.linkedin.com/in/mr-ahad-khan
- 📧 Email: ahad998867@gmail.com

---

# ⭐ Show Your Support

If you found this project useful or interesting, please consider giving the repository a ⭐ on GitHub.

Your support encourages continued development and open-source contributions.

---

# 📌 Disclaimer

This project is created for **educational and portfolio purposes** and is inspired by the concept and user experience of quick-commerce grocery applications.

It is not affiliated with or officially connected to Blinkit.

---

# 🚀 Happy Coding!

Built with ❤️ using:

**React.js • Vite • Tailwind CSS • Node.js • Express.js • MongoDB**
