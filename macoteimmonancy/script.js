// Fonction pour gérer l'estimation
function handleEstimation(event) {
    event.preventDefault();
    
    // Récupérer les données du formulaire
    const formData = {
        propertyType: document.getElementById('propertyType').value,
        surface: document.getElementById('surface').value,
        address: document.getElementById('address').value,
        condition: document.getElementById('condition').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value
    };

    // Validation des données
    if (!validateForm(formData)) {
        alert('Veuillez remplir tous les champs obligatoires');
        return;
    }

    // Afficher un message de chargement
    const submitButton = document.querySelector('.cta-button');
    const originalText = submitButton.innerHTML;
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> En cours...';
    submitButton.disabled = true;

    // Simuler l'envoi des données (à remplacer par une vraie API)
    simulateEstimation(formData);
}

// Fonction de validation du formulaire
function validateForm(data) {
    return Object.values(data).every(value => value !== "" && value !== undefined);
}

// Fonction pour simuler l'estimation
function simulateEstimation(data) {
    // Simuler un délai de traitement
    setTimeout(() => {
        // Simuler une estimation basique (à remplacer par un vrai calcul DCF)
        let estimation = calculateBasicEstimation(data);
        
        // Envoyer les données par email (à implémenter avec une vraie solution)
        sendEmail(data, estimation);
        
        // Afficher un message de succès
        alert('Votre estimation a été envoyée par email. Nous vous recontacterons rapidement.');
        
        // Réinitialiser le formulaire
        document.getElementById('estimationForm').reset();
        
        // Réactiver le bouton
        const submitButton = document.querySelector('.cta-button');
        submitButton.innerHTML = '<i class="fas fa-calculator"></i> Estimer mon bien';
        submitButton.disabled = false;
    }, 2000);
}

// Fonction de calcul basique (à remplacer par un vrai modèle DCF)
function calculateBasicEstimation(data) {
    // Prix de base par m² selon le type de bien (à ajuster avec données réelles)
    const basePrice = {
        appartement: 3000,
        maison: 3500,
        terrain: 1500
    };

    // Facteur d'état
    const conditionFactor = {
        neuf: 1.2,
        bon: 1.0,
        moyen: 0.8,
        a_renover: 0.6
    };

    // Calcul de l'estimation
    let estimation = basePrice[data.propertyType] * data.surface * conditionFactor[data.condition];
    
    // Ajouter une marge d'erreur
    estimation = Math.round(estimation * (0.9 + Math.random() * 0.2));
    
    return estimation;
}

// Fonction pour envoyer les données par email (à implémenter avec une vraie solution)
function sendEmail(data, estimation) {
    // À implémenter avec une vraie solution d'envoi d'email
    console.log('Email envoyé à:', data.email);
    console.log('Estimation:', estimation);
    console.log('Données:', data);
}
