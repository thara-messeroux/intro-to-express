# Intro to Express

A simple Express server built with Node.js.

## Description
This project demonstrates:
- setting up an Express server
- defining GET routes
- using URL parameters to create dynamic routes

## How to Run
```bash
npm install
node server.js
```

---

## What This Project Does

This project shows how a basic Express server works and how requests flow through it.

In this app, you can:
- start a server that listens for browser requests
- create different pages using routes
- use dynamic values from the URL
- log requests automatically using middleware

## Key Concepts Covered

### Express Server
- An Express app represents your server
- The server listens on a specific port (`3000`)
- When the server is running, the browser can connect to it


### Routes (Pages)
This app includes several routes:

- `/` → displays a welcome message  
- `/home` → displays a Home page  
- `/greet/:name` → greets a user using a value from the URL  
- `/item/:itemNumber` → displays an item number from the URL  
- `/hello?name=Alex&age=30` → uses query parameters from the URL  

### URL Parameters
- URL parameters are part of the route path
- Example: `/greet/Alex`
- Express extracts the value using `req.params`


### Query Parameters
- Query parameters come after `?` in the URL
- Example: `/hello?name=Alex&age=30`
- Express reads them using `req.query`

### Middleware
- Middleware runs **before** routes
- It can log requests or run checks
- This app uses:
  - a custom middleware message
  - Morgan for automatic request logging

### Morgan (Request Logger)
- Morgan logs each request automatically
- It shows:
  - the HTTP method (GET)
  - the route visited
  - the response status
  - how long the request took
- This helps with debugging and understanding request flow

## How to Run the Project

1. Install dependencies:
```bash
npm install
```

2. Start the server:
```bash
node server.js
```

3. Open your browser and visit:
```bash
http://localhost:3000
```