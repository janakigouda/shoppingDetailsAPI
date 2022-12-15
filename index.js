const express = require("express");
const bookmarkRoute = require("./src/bookmark/bookmark.router");
const connect = require("./src/config/db");
const shoppingRoute = require("./src/shopping/shopping.router");
require("dotenv").config();
const cors=require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/shoppingDetailsApi",shoppingRoute);
app.use("/bookmark",bookmarkRoute);
app.get("/", (req, res) => res.send("hello"));


let PORT = process.env.PORT || 8080;
app.listen(PORT, async() => {
  await connect();
  console.log(`server started on port ${PORT}`);
});
