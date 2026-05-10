# MedFast — maquette statique

## Publier sur GitHub Pages (`*.github.io`)

### 1. Créer le dépôt sur GitHub

1. Sur GitHub : **New repository** (nom au choix, par ex. `medfast`).
2. Laisse le dépôt vide (sans README) si tu vas pousser ce dossier tel quel.

### 2. Pousser ce projet depuis ta machine

Dans un terminal, à la racine de ce dossier :

```bash
git init
git add .
git commit -m "Site statique MedFast"
git branch -M main
git remote add origin https://github.com/TON_UTILISATEUR/TON_REPO.git
git push -u origin main
```

Remplace `TON_UTILISATEUR` et `TON_REPO`.

### 3. Activer GitHub Pages (workflow)

1. Sur le dépôt GitHub : **Settings** → **Pages**.
2. Sous **Build and deployment** → **Source** : chois **GitHub Actions**.
3. Le fichier `.github/workflows/pages.yml` déclenchera un déploiement à chaque push sur `main`.
4. La première fois, vérifie **Settings** → **Actions** → **General** → **Workflow permissions** : coche **Read and write** si GitHub le demande pour Pages.

Après le premier workflow réussi, l’URL sera :

- dépôt `medfast` : `https://TON_UTILISATEUR.github.io/medfast/`

Les chemins du site (`styles.css`, `images/…`) sont relatifs : ils fonctionnent avec cette URL.

### Alternative sans Actions

**Settings** → **Pages** → Source : **Deploy from a branch**, branche **`main`**, dossier **`/`** (racine).

---

Fichier `.nojekyll` : évite que GitHub traite le site avec Jekyll (inutile ici, mais sans risque).
