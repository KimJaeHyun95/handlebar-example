// Import required modules
const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");

// Create Express app instance
const app = express();

const favicon = require('serve-favicon');
app.use(favicon(__dirname + '/favicon.ico'));

// Set static directory
app.use(express.static(path.join(__dirname, "src")));

// Make axios available on the client side
app.use("/axios", express.static(path.join(__dirname, "node_modules", "axios", "dist")));

// Configure Handlebars view engine
app.engine(
    "hbs",
    exphbs({
      extname: "hbs",
      defaultLayout: "main", // Default layout file name
      partialsDir: [
        __dirname + "/src/views/partials", // First partials directory
        __dirname + "/src/views/layouts",  // Second partials directory
        __dirname + "/src/views/chart",  // third partials directory
      ],
    })
);
app.set("view engine", "hbs"); // Set Handlebars as view engine
app.set("views", "./src/views"); // Set views directory

// Define route handler for the root path
app.get("/", (req, res) => {
  res.status(200).render("home", {
    style: "style",
    name: "parkoon",
    isLoggedIn: true,
    isReady: false,
    users: ["parkoon", "kimyang", "choikoon", "leeyang"],
    admin: {
      name: "kjh",
      age: 29,
      birth: "1995-02-07",
    },
  });
});

app.get("/:page", (req, res) => {
  const { page } = req.params;
  res.status(200).render(page, {
    path: page,
    style: "style",
  });
});

// Start the server
app.listen(3000, () => {
  console.log(`Server is running on ${3000} port`);
});
