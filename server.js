// server.js imports
const { createServer } = require("http");
const next = require("next")



const app = next({
    dev: process.env.NODE_ENV !== "production"
});

// Add the navigation
const routes = require("./routes");

const handler = routes.getRequestHandler(app);

// Prepare the server
app.prepare().then(() => {
    createServer(handler).listen(3000, (err) => {
        if (err) throw err;
        console.log("Server running on localhost:3000")
    })
})