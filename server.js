const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const bindUser = require("./middleware/bindUser");

const userRouter = require("./routes/userRouter")
const jsonRouter = require("./routes/jsonRouter")


const app = express();

dotenv.config({ path: path.join(__dirname, "./.env") });

app.use(cors());
app.use(express.static(__dirname + "/public"));
app.use(fileUpload());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.all("*", bindUser);
app.use("/users",userRouter)
app.use("/document", jsonRouter)



const port = process.env.PORT || 3000;

app.listen(port, async () => {
  console.log("server is running on port: " + port);
});

