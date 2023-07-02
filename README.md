# ProjetAndroid1

- Application Android React Native TMDB Movie App

Ce dépôt contient une application Android réalisée avec React Native, 
permettant de parcourir et rechercher des films à partir de l'API TMDB (The Movie Database). 
L'application utilise des composants React Native et interagit avec l'API TMDB pour récupérer les informations sur les films.

### Configuration requise

Avant de pouvoir exécuter l'application, assurez-vous d'avoir les éléments suivants installés sur votre machine :

- Node.js
- NPM (Node Package Manager)
- React Native CLI

### Installation

1. Clonez ce dépôt sur votre machine locale :

```
git clone https://github.com/votre_utilisateur/nom_du_depot.git
```

2. Accédez au répertoire du projet :

```
cd nom_du_depot
```

3. Installez les dépendances nécessaires :

```
npm install
```

4. Configurez votre clé d'API TMDB

   - Rendez-vous sur le site de l'API TMDB (https://www.themoviedb.org/) et créez un compte gratuit.
   - Générez une clé d'API dans les paramètres de votre compte TMDB.
   - Copiez la clé d'API générée.

5. Ajoutez votre clé d'API TMDB au projet :

   - Ouvrez le fichier `App.js`.
   - Remplacez la valeur de `API_KEY` par votre clé d'API TMDB sur les lignes 8 et 10.

6. Lancez l'application sur votre appareil ou simulateur Android :

```
npx react-native run-android
```

### Fonctionnalités

- Parcourir les films populaires
- Rechercher des films par titre
- Afficher les détails d'un film sélectionné

### Structure du projet

Le projet est organisé de la manière suivante :

  - `components` : Composants réutilisables.

### Contribuer

Les contributions à ce projet sont les bienvenues. Si vous souhaitez apporter des améliorations, veuillez suivre les étapes suivantes :

1. Fork ce dépôt.
2. Créez une nouvelle branche : `git checkout -b ma-nouvelle-fonctionnalite`
3. Effectuez les modifications et effectuez un commit : `git commit -m "Ajouter une nouvelle fonctionnalité"`
4. Poussez les modifications vers la branche : `git push origin ma-nouvelle-fonctionnalite`
5. Soumettez une pull request.
