import express from "express";

const app = express();

const resources = [
    {
        id: "RES-001",
        title: "Comprendre les modules JavaScript",
        category: "JavaScript",
        level: "intermediate",
        format: "video",
        durationMinutes: 45,
        isRequired: true
    },
    {
        id: "RES-002",
        title: "Introduction à Node.js",
        category: "Node.js",
        level: "beginner",
        format: "article",
        durationMinutes: 20,
        isRequired: false
    },
    {
        id: "RES-003",
        title: "Créer une API avec Express",
        category: "Express",
        level: "intermediate",
        format: "video",
        durationMinutes: 60,
        isRequired: true
    },
    {
        id: "RES-004",
        title: "Découvrir EJS",
        category: "EJS",
        level: "beginner",
        format: "course",
        durationMinutes: 90,
        isRequired: false
    }
];

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("pages/resources", {
        resources: resources
    });
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});