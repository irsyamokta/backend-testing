import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connection from "./config/connection.js";
import router from "./routes/user.js";

dotenv.config();
const app = express();
let port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Server is running");
})

app.use("/", router);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
    console.log(`http://localhost:${port}`);
})

connection.connect((err) => {
    if (err) {
        console.error(`Error connecting to the database: ${err.stack}`)
        return
    }
    console.log(`Connected to the database as id ${connection.threadId}`)
})
