# GIF Expert App - React
Explore the world of GIFs in seconds! Use the search bar to find GIFs in real-time. This app was created using **React 18**, **PrimeReact** and **React Router Dom**.

Example from **React: De cero a experto (Hooks y MERN)** course by **Fernando Herrera**.

Demo: []

### About:

- Created with **React 18** + **Vite** + **TypeScript**
- Routed with **React Router DOM**
- Use **PrimeReact** + **PrimeBlocks** to create UI
- Custom hooks
- Responsive Design (mobile first)
- Fetch to **Giphy API**
- Testing with **Jest** and **React Testing Library**
- Deployed in **Vercel**

### Features:

Type a word in the search bar and get your GIF's
List 12 GIF\s in a grid.
Display search history.
Reset all search.

### Requirements

To run this app, you must have installed Node & NPM.

### Installation

This README has the instructions to install and execute this webapp. The first step is clone the repository from GitHub.
```
https://github.com/codeslator/gif-expert-app.git
```

After clone the repository, you must to install all dependencies.

```
cd gif-expert-app
npm install
```

When dependencies are installed, before run the webapp in local, make sure you have the .env file in the repository with the following variables:
```
VITE_GIPHY_API_KEY='your apikey here'
```

Finally, you can execute the Vite App using the following command:
```
npm run dev
```
If application started correctly, will be listen in 5173 port. Open in your Browser the following URL: http://localhost:5173/