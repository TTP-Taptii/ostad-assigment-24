# User Management App

A simple React app to practice API calling, `useEffect`, Zustand state management and Local Storage.

## Live Demo

**Deployment link:** https://YOUR-PROJECT-NAME.vercel.app

## Features

- Fetch users from JSONPlaceholder using `useEffect` (with a loading message)
- Show each user's name, email and phone in a card layout
- Details button to view the selected user's full information
- Favorite button to add or remove a user from favorites
- Favorites are managed with Zustand and saved in Local Storage (they stay after refresh)
- Navbar shows Total Users and Favorite Users count
- Responsive for mobile and desktop

## Tech Stack

React, Vite, Zustand, CSS

## Run Locally

```bash
npm install
npm run dev
```

## API

https://jsonplaceholder.typicode.com/users
