const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Temporary storage (NO DATABASE)
let users = [];
let results = [];

/* REGISTER API */
app.post("/register", (req, res) => {
    const { name, email, department, year } = req.body;

    if (!name || !email || !department || !year) {
        return res.status(400).json({ message: "All fields required" });
    }

    const user = {
        id: users.length + 1,
        name,
        email,
        department,
        year
    };

    users.push(user);

    res.json({ message: "Registration successful", user });
});

/* SAVE RESULT API */
app.post("/submit-result", (req, res) => {
    const { email, score } = req.body;

    const result = {
        email,
        score
    };

    results.push(result);

    res.json({ message: "Result saved successfully" });
});

/* GET ALL USERS (Optional) */
app.get("/users", (req, res) => {
    res.json(users);
});

/* GET ALL RESULTS (Optional) */
app.get("/results", (req, res) => {
    res.json(results);
});

app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});