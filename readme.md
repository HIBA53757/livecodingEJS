###EJS live Coding
#1. Créer le projet
mkdir ejs-livecoding
cd ejs-livecoding
npm init -y
#2. Installer les dépendances
npm install express ejs

Ajouter dans package.json :

"type": "module"
#3. Créer la structure
ejs-livecoding/
├── src/
│   └── app.js
├── views/
│   ├── pages/
│   │   └── resources.ejs
│   └── partials/
│       ├── header.ejs
│       └── footer.ejs
└── package.json
#4. Configurer Express et EJS

Dans src/app.js :

import express from "express";

const app = express();

app.set("view engine", "ejs");
#5. Créer les données

Dans app.js, créer le tableau resources :

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
    }
];
#6. Créer la route
app.get("/", (req, res) => {
    res.render("pages/resources", {
        resources: resources
    });
});
#7. Créer les partials

Créer :

views/partials/header.ejs
views/partials/footer.ejs

Dans resources.ejs :

<%- include("../partials/header") %>



<%- include("../partials/footer") %>
#8. Créer la vue EJS

Dans views/pages/resources.ejs :

Afficher le titre
Afficher le nombre total de ressources
Parcourir resources
Afficher title, category, level, format, durationMinutes
Afficher un badge si isRequired est true

Syntaxes EJS :

<%= value %>
<% code %>
<%- include("file") %>
#9. Démarrer le serveur

Dans app.js :

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});

Lancer :

node src/app.js

Ouvrir :

http://localhost:3000
#10. Comprendre le fonctionnement
resources[]
     ↓
app.get("/")
     ↓
res.render()
     ↓
resources.ejs
     ↓
HTML généré
     ↓
Navigateur
À retenir
Express → serveur et routes
EJS → moteur de templates
res.render() → envoie les données à la vue
Partials → réutiliser du HTML
EJS → exécuté côté serveur
Navigateur → reçoit le HTML final