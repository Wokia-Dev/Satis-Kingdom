# 404 Social Life Not Found WebSite Repo

Repo dédié au site zeb de 404 SLNF.

## Comment cloner 

```bash
git clone http://82.66.32.47:3000/404_Social_Life_Not_Found/404.S.L.N.F_WebSite.git
```

Ensuite, utilisez vos identifiants pour vous connecter. Et ouvrer le projet avec l'IDE de votre choix (VS Code, WebStorm, ...)

### Commandes utiles 

#### Changer de branche
```bash
git checkout [nom de la branche]
```

#### Mettre à jour votre branche avec les dernières modifications de main
```bash
git checkout [nom de la branche]
git pull origin main
```

#### Envoyer vos modifications sur votre branche
```bash
git add .
git commit -m "Description de votre modification"
git push origin [nom de la branche]
```

#### Fusionner votre branche principale dans main (une fois validé)
##### C'est ici ou on va avoir de probleme donc reverifier bien tout avant pour etre sur. Il faudra surement ressourdre des merge conflits.
1. Assurez-vous d'être sur la branche **main** :  
   ```bash
   git checkout main
   ```
2. Fusionnez votre branche :  
   ```bash
   git merge [nom de la branche]
   ```
3. Poussez les modifications sur le serveur :  
   ```bash
   git push origin main
   ```

#### Créer une nouvelle branche
```bash
git checkout -b [nouvelle-branche]
```