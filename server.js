const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/api/estimate', (req, res) => {
    const { propertyType, surface, address, condition, email, phone } = req.body;

    // Validation
    if (!email || !phone || !address) {
        return res.status(400).json({ error: 'Champs obligatoires manquants' });
    }

    // Simulation d'estimation (à remplacer par un vrai modèle DCF)
    const basePrices = {
        appartement: 3000,
        maison: 3500,
        terrain: 1500
    };

    const conditionFactors = {
        neuf: 1.2,
        bon: 1.0,
        moyen: 0.8,
        a_renover: 0.6
    };

    const estimation = basePrices[propertyType] * surface * conditionFactors[condition];
    const finalEstimation = Math.round(estimation * (0.9 + Math.random() * 0.2));

    // Simuler l'envoi d'email (à implémenter)
    // sendEmail(email, phone, address, finalEstimation);

    res.json({
        estimation: finalEstimation,
        message: 'Votre estimation a été envoyée par email'
    });
});

// Gestion des erreurs
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Une erreur est survenue' });
});

// Démarrage du serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});
