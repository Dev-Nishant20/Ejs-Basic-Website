// Import the Express module
import express from "express";

// Create an instance of the Express application
const app = express();

// Define the port number where the server will listen for requests
const port = 3000;

// Serve static files from the "public" directory
app.use(express.static("public"));

// Define a route for the home page
app.get("/", (req, res) => {
  // Render the "index.ejs" view when the home page is accessed
  res.render("index.ejs");
});

// Define a route for the "About" page
app.get("/about", (req, res) => {
  // Render the "about.ejs" view when the "About" page is accessed
  res.render("about.ejs");
});

// Define a route for the "Contact" page
app.get("/contact", (req, res) => {
  // Render the "contact.ejs" view when the "Contact" page is accessed
  res.render("contact.ejs");
});

// Start the server and listen for incoming requests on the specified port
app.listen(port, () => {
  // Log a message to the console indicating the server is running
  console.log(`Server running on port ${port}`);
});
