import express from "express";
import cors from "cors";

const app = express();
let port = 3000

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.get("/api/testing", (req, res) => {
    res.json(
        {
            "name": "Testing API",
            "message": "Success"
        }
    );
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})