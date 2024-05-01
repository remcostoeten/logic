const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

const mockName = "Your Name Here";

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Mock Page</title>
    </head>
    <body>
      <div id="name-container">
        ${mockName}
      </div>
    </body>
    </html>
  `);
});

app.listen(4000, () => console.log("Mock server listening on port 4000"));
