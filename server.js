/*

// Bring in express from our node_modules
// (dont forget `npm i express`)
const express = require("express");
const morgan = require('morgan')

// Set up a express app
// This lets us attach routes and middlewares
const app = express();
let count = 0;
let isLoggedIn = false;

// Middlewares
// middleware are attached using `app.use(someMIddleware)`
// If i add a midldeware here, it will effect every route defined under it
// These are just functions that we can define, or we can install node_modules for different features
app.use(morgan('tiny'))
app.use((req, res, next) => {
    count += 1;
    console.log("A route was hit", count, "times");
    next(); // allows the req to go to the next route or middle
});

app.get("/sign-up", (req, res) => {
    res.send("Sign up page");
});
app.get("/sign-in", (req, res) => {
    isLoggedIn = true;
    res.send("Your all signed in");
});

app.use((req, res, next) => {
    if (isLoggedIn) {
        console.log("Welcome back user");
        next();
    } else {
        console.log("Not Authorised");
        res.redirect("/sign-up");
    }
});

app.get("/about", (req, res) => {
    res.send("About Page");
});

// Routes (urls)
// HTTP Methods: get, put, post, delete, #patch
app.get("/", (req, res) => {
    res.send("<h1>hello world!</h1>");
});

app.get("/home", (req, res) => {
    res.send("Hello from the home page");
});

// app.get('/:username', (req, res) => {
//     console.log(req.params)
//     res.send(`Hi person named ${req.params.username}`)
// })

const pokemon = [
    "Pikachu", // 0
    "Bulbasaur", // 1
    "Charmander", // 2
    "Squirtle", // 3
];

app.get("/pokemon/query", (req, res) => {
    console.log(typeof parseInt(req.query.pokeId));
    if (req.query.pokeId) {
        if (typeof eval(req.query.pokeId) !== "") {
            res.send(pokemon[req.query.pokeId]);
        } else {
            res.send("Please provide a valid pokeid");
        }
    } else {
        res.send(pokemon);
    }
});

app.get("/:name", (req, res) => {
    res.send(`Hello ${req.params.name}!`);
});

app.get("/greet/:name", (req, res) => {
    res.send(`Hello,${req.params.name}!`);
});

// with url parameters the :something, this :somethings url parts are required for this url to be actions so i must give /pokemon/1
app.get("/pokemon/:index/:index2", (req, res) => {
    console.log(req.params);
    const poke = pokemon[req.params.index];
    const poke2 = pokemon[req.params.index2];
    res.send(`${poke} if fighting ${poke2}`);
});

// catch all route for routes that dont exist
app.get("/*slug", (req, res) => {
    res.send("404 danger page does not exist");
});

// Listen
app.listen(3000, () => console.log("The server is running on port 3000"));

*/


// Import the express library so we can use it
const express = require("express");

// Create an express application (this represents our server)
const app = express();

// Route: When someone visits "/", send back a simple message
app.get("/", (req, res) => {
    res.send("Hello World!");
});

// Route: When someone visits "/home", send back a Home page message
app.get("/home", (req, res) => {
    res.send("<h1>Home Page</h1>");
});

// Tell the server which port to listen on
const PORT = 3000;

// Start the server and listen for requests
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
