import React from "react";
import express from "express";
import { renderToString } from "react-dom/server";
import path from "path";

import { App } from "../client/App";

const app = express();

app.use("/assets", express.static(path.join(__dirname, "assets")));

app.get("/", async (req, res) => {
  const html = renderToString(<App />);

  res.send(`
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
    <div id="root">${html}</div>
    <script src="/assets/client.js"></script>
</body>
</html>
`);
});

app.listen(4000, () => {
  console.log("Example app listening on port 4000!");
});
