# 🌸 Florist Website — Frontend Demo (HTML · CSS · JavaScript)

*A fully responsive florist storefront built with HTML, CSS, and JavaScript.*



## ✨ Overview

This project showcases a complete florist website featuring multiple product categories, interactive UI elements, and a functional cart simulation using **sessionStorage** (frontend only).
No backend or database is used.



## 🌼 Features

### 1. Responsive Frontend Design

- Built using **HTML + CSS + JavaScript**
- Mobile-first layout with **hamburger navigation menu**
- Multi-category product display
- Hover descriptions for all product images
- Optimized `alt` and `title` attributes for accessibility & SEO


### 2. Interactive Shopping Cart System (Frontend Only)

Powered entirely using **sessionStorage**:
- Add-to-cart using `data-id`, `data-name`, `data-price`, `data-image`.
- Cart count updates dynamically
- **Mini Cart** positioned at the top-right:
  - Fixed position when scrolling
  - Clickable → navigates to checkout page

**Cart Persistence:**

| Action                 | Result                     |
| ---------------------- | -------------------------- |
| Navigate between pages | Cart retained              |
| Refresh page           | Cart retained              |
| Close browser          | Cart cleared automatically |


### 3. Dynamic Checkout Page

The checkout page loads items from sessionStorage and supports:
- Product image
- Product name
- Quantity controls ( + / – )
- Remove item (🗑)
- Automatic total price calculation

If cart is empty:
- Table hides
- “Your cart is empty” message appears
- Checkout button hidden


### 4. Rich Product Collections

The website displays a comprehensive florist catalog:

- 🌿 **Single Stem Collection**
- 🎂 **Birthday Blossom Series**
- 🌼 **Everyday Blossom Collection** (Bouquets)
- 🎀 **Elegant Blossom Accessories** (Corsage & Buttonhole)
- 👩‍🎓 **Graduation Blossom Series**
- 🎉 **Grand Opening Bloom Collection**
- 🌷 **Bloom for Mom Collection**
- 💝 **Eternal Love Valentine Collection** (Valentine’s Day)
- 💍 **Eternal Love Wedding Collection** (Wedding Series)

Each product includes:
- Hover descriptions
- SEO-friendly alt text
- Add-to-cart integration



## 🛠️ Technologies Used

| Technology               | Purpose                                       |
| ------------------------ | --------------------------------------------- |
| **HTML5**                | Structure                                     |
| **CSS3**                 | Styling, Responsive Layout, Media Queries     |
| **JavaScript (Vanilla)** | Cart system, event handling, DOM manipulation |
| **sessionStorage**       | Stores cart data for current browser session  |



## 📂 Folder Structure

```
Florist_Website/
│
├── florist_images/            # All flower images
│
├── index.html                 # Homepage
├── flower.html                # Flowers catalog
├── plant.html                 # Plants catalog
├── checkout.html              # Cart & checkout page
├── contact.html               # Contact form page
├── submitted.html             # Form submission confirmation
│
├── script.js                  # Cart logic, mobile menu, dynamic functions
└── styles.css                 # Global styling & responsive design
```


## 🔒 Disclaimer

This project is **frontend-only**.

It does **not** include:
- Backend server
- Database
- Authentication
- Payment processing

Cart data is stored only in **sessionStorage**, and clears when the browser closes.



## 🎯 Purpose of This Project

- Demonstrate *UI/UX design*
- Practice *responsive web design*
- Simulate an e-commerce flow using only front-end code
- Portfolio + academic usage

---

## 💐 Author

**Suet Kei Lock**  
*Florist Website Design — Frontend Development Project* 

---

## 📘 Academic Note

This project was originally developed as part of a university coursework and was later refined into a complete frontend demo featuring responsive design and a session-based cart system.

---

## © Copyright

© 2025 Suet Kei Lock. All rights reserved.  
Unauthorized copying, redistribution, or submission of this project as academic work is strictly prohibited.

> ⚠️ This project is protected under All Rights Reserved.  
> The design, code, images, and content in this repository are original work by Suet Kei Lock.  
> Copying this project for academic submission, commercial use, or redistribution without permission is strictly forbidden.

