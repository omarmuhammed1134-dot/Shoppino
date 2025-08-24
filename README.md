# 🛍️ React E-commerce Web Application

A **React-based e-commerce application** with role-based dashboards for **Admin** and **Customer**.  
The project follows a clean architecture with **contexts** and **services**, ensuring scalability and reusability.  

---

## 📌 Features

### 🔑 Authentication & Authorization
- Secure **Login** with **Protected Routes** (`PrivateRoute.js`).
- **Role-based Dashboards**:
  - **Admin Dashboard** → Manage products & users.
  - **Customer Dashboard** → Browse products, view details, and add to cart.

### 🛍️ E-commerce Functionalities
- **Product Listing** (`products.jsx`).
- **Product Details Page** (`productDetails.jsx`).
- **Shopping Cart** with global state (`CartContext.js`).

### 🧭 Navigation
- **Reusable Navbar** and **Sidebar** components.

### ⚙️ Services Layer
- `apiServices.js` → Handles API requests.
- `authService.js` → Login / Logout management.

### 🎨 UI/UX
- Built with **React + Bootstrap** for a responsive, modern UI.
- **Clean component structure** for easy maintenance & scalability.

---

## 🛠️ Tech Stack
- **Frontend:** React, React Router, Bootstrap  
- **State Management:** React Context API  
- **Authentication:** Custom Auth Service + Protected Routes  
- **API Handling:** Axios / Fetch (`apiServices.js`)  

---

## 📂 Project Map (Mermaid)

```mermaid
graph TD;
    src --> components;
    src --> context;
    src --> pages;
    src --> routes;
    src --> services;
    src --> App.js;
    src --> index.js;

    components --> admindashboard.jsx;
    components --> customerdashboard.jsx;
    components --> cart.jsx;
    components --> home.jsx;
    components --> navbar.jsx;
    components --> productDetails.jsx;
    components --> products.jsx;
    components --> sidebar.jsx;

    context --> AuthContext.js;
    context --> CartContext.js;

    pages --> login.jsx;

    routes --> privateRoute.js;

    services --> apiServices.js;
    services --> authService.js;
 ----------------------------------------------------------

## 🚀 Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/omarmuhammed1134-dot/Shoppino.git
   cd react-ecommerce
