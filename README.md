# E-Shopping

## What This Does

A small e-commerce storefront demo. It lists men's and women's clothing from the
public [Fake Store API](https://fakestoreapi.com/), lets you open a product detail
page, and add/remove items in a slide-out shopping bag with live quantity and total.

## Tech Stack

- React 18 (Create React App)
- React Router DOM for routing
- React Context for cart, product, and sidebar state
- TailwindCSS for styling
- react-icons for icons

## Prerequisites

- Node.js 18+

## Setup

1. Clone the repo
2. `npm install`
3. `npm start` — opens http://localhost:3000

## Available Scripts

| Command         | Description                          |
| --------------- | ------------------------------------ |
| `npm start`     | Run the dev server                   |
| `npm run build` | Build the production bundle          |
| `npm test`      | Run the test runner                  |

## Pages

| Route          | Description                          |
| -------------- | ------------------------------------ |
| `/`            | Home — hero and product grid         |
| `/product/:id` | Single product detail page           |

## Project Structure

```
src/
├── components/      # Header, Sidebar, Hero, Footer, Product, CartItem
├── contexts/        # CartContext, ProductContext, SidebarContext
├── pages/           # Home, ProductDetails
├── img/             # Local image assets
├── App.jsx          # Routes + layout
└── index.js         # Entry point, wraps the app in context providers
```

## Notes

- Product data is fetched at runtime from the Fake Store API; no backend or
  environment variables are required.
- The Home page only shows the `men's clothing` and `women's clothing` categories.
