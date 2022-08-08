
# Groupomania

Groupomania 
Réseaux social d'entreprise


# Features

- Modifications de post
- Création de post
- Suppression de post
- Modification du profil
- Modification de l'image du profil
- Rank pour la modération
- Possibilité de mettre un commentaire
- Possibilité de supprimer un commentaire
- Inscription / Connexion
- Responsive


## Installation Backend

```bash
  cd Backend  
  npm install  
  Crée la base de données sous le nom groupomania  
  Remplir le .env avec les informations nécessaires  
  nodemon serveur ou npm start pour lancer l'api ça permettra de crée les tables dans la base de données  
  Importer le fichier groupomania.sql qui contient toutes les tables et 3 utilisateurs 1 admin et 2 membres et ajoute les Rank disponible 
  Restart l'api / update un fichier avec ctrl+s par exemple si utilisation de nodemon
```
    
## Installation Frontend

```bash
  cd Frontend
  npm install
  npm start pour lancer le projet react

  Administrateur
  Jean@groupomania.fr
  YizBdgh?ak7y3hn!

  Utilisateur
  Marie@gmail.com
  tfr4aEc#H3JL5akm

  Utilisateur2 
  Jean@yahoo.com
  gpN@Qm@RHpc8c@S8
```
## Environment Variables

Pour exécuter ce projet, vous devrez ajouter les variables d'environnement suivantes à votre fichier .env se trouvant dans le backend il y   a un fichier .env_exemple avec toutes les clés préremplies il n'y a plus qu'a édit

`DB_PASSWORD`

`DB_USER`

`DB_NAME`

`DB_HOST`

`GROUPOMANIA_SECRETKEY`

`GROUPOMANIA_COOKIESECRETKEY`

# Framework
React

# Language utilisée

Javascript
Html
css (bulma)
nodejs

# ORM
Sequelize