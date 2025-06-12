# MaCoteImmoNancy - Site d'Estimation Immobilière

Site web élégant et minimaliste pour un service d'estimation immobilière localisé à Nancy.

## Fonctionnalités

- Formulaire d'estimation immobilière
- Interface responsive
- Design élégant avec thème sombre et accents dorés
- Simulation d'estimation basique (à remplacer par un vrai modèle DCF)
- Collecte de leads (email, téléphone, adresse)

## Structure du Projet

```
macoteimmonancy/
├── index.html
├── styles.css
├── script.js
├── vercel.json
└── README.md
```

## Technologies Utilisées

- HTML5
- CSS3
- JavaScript
- Font Awesome (pour les icônes)
- Vercel (pour le déploiement)

## Déploiement sur Vercel

1. Connectez-vous à votre compte Vercel
2. Importez le projet depuis GitHub
3. Configurez les variables d'environnement si nécessaire
4. Déployez le site

## Mise en Production

Pour mettre le site en production, vous devez :

1. Implémenter un backend pour :
   - Stocker les données des utilisateurs
   - Calculer les estimations DCF
   - Envoyer les emails
   - Gérer les leads

2. Configurer un CRM (comme Zoho CRM ou Hubspot Free) pour :
   - Stocker les leads
   - Suivre les interactions
   - Gérer les opportunités

3. Héberger le site sur un serveur web

## Notes

Le site actuel est une version de démonstration. Pour une version complète, il faudra :

1. Intégrer un vrai moteur DCF avec des données immobilières réelles
2. Implémenter un système d'envoi d'email
3. Connecter un CRM
4. Sécuriser le formulaire contre les spam
5. Ajouter une validation côté serveur

## Licence

Ce projet est sous licence MIT.
