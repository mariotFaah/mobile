 Ce qui est déjà prêt dans ton backend :
📁 config/db.js

    Gère la connexion à la base de données MySQL via un pool.

    Permet les requêtes asynchrones avec mysql2/promise.

📁 models/Room.js

    Modèle Room avec deux fonctions :

        getAll() : récupérer toutes les chambres.

        create(roomData) : créer une nouvelle chambre avec nom, prix, capacité.

📁 controllers/roomController.js

    Deux routes contrôlées :

        GET /rooms : liste toutes les chambres.

        POST /rooms : ajoute une chambre.

📁 routes/roomRoutes.js

    Définit les routes pour la ressource Room (chambres).

    Connecté aux fonctions du contrôleur.

📄 server.js (tu ne l’as pas affiché mais probablement contient express, body-parser, etc.)
🔧 Ce que tu peux améliorer / compléter

Pour une application de gestion d’hôtel, voici des tables supplémentaires que tu pourrais créer, avec leur utilité :
🏨 1. clients (clients / visiteurs)

    À quoi sert-elle ? : Gérer les clients (nom, prénom, numéro de téléphone, email...).

    Fonctionnalités :

        Ajouter / modifier / supprimer un client.

        Voir l’historique de réservation d’un client.

📅 2. reservations

    À quoi sert-elle ? : Gérer les réservations effectuées.

    Fonctionnalités :

        Lier un client à une chambre pour une période donnée.

        Calcul automatique du prix selon la durée du séjour.

        Empêcher les doubles réservations (chambre déjà occupée).

💳 3. paiements

    À quoi sert-elle ? : Suivre les paiements effectués pour les réservations.

    Fonctionnalités :

        Historique des paiements.

        Lier un paiement à une réservation.

        Suivi des paiements en attente.

👤 4. utilisateurs (admin/employés)

    À quoi sert-elle ? : Gérer les comptes utilisateurs de l’application.

    Fonctionnalités :

        Authentification / autorisation (login, mot de passe).

        Différents rôles : admin, réceptionniste...

🧹 5. nettoyages (suivi du ménage des chambres)

    À quoi sert-elle ? : Gérer le planning et le statut de nettoyage des chambres.

    Fonctionnalités :

        Voir les chambres à nettoyer.

        Marquer une chambre comme nettoyée ou non.

⚙️ 6. services (mini-bar, room service, blanchisserie...)

    À quoi sert-elle ? : Enregistrer les services additionnels consommés par un client.

    Fonctionnalités :

        Ajouter des services à une réservation.

        Facturer les services en plus du prix de la chambre.

🧾 7. factures (génération de facture finale)

    À quoi sert-elle ? : Délivrer une facture totale (chambre + services).

    Fonctionnalités :

        Générer une facture en PDF.

        Historique des factures.

🔄 Relations entre les tables (vue logique) :

    Un client peut avoir plusieurs réservations.

    Une réservation correspond à une chambre et un client.

    Une réservation peut avoir plusieurs paiements.

    Une réservation peut inclure plusieurs services.

    Une facture regroupe tout (réservation + services).


