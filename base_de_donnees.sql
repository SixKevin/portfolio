-- --- Projet BUT 1 : Gestion de Stock ---
-- Création de la base de données

CREATE DATABASE MagasinBUT;
USE MagasinBUT;

CREATE TABLE Produits (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(100),
    prix DECIMAL(10,2),
    stock INT
);

-- Exemple de requête pour voir les ruptures
SELECT * FROM Produits WHERE stock < 5;
