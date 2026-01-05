# 🚀 Guide de démarrage rapide

## ⚡ Ouverture immédiate

Pour voir le site immédiatement, ouvrez simplement **`index.html`** dans votre navigateur.

## 📖 Pages disponibles

1. **index.html** - Page d'accueil / Hero
2. **tools.html** - Arsenal de sécurité (Offensive/Defensive/Linux)
3. **articles.html** - Articles cybersécurité
4. **about.html** - À propos professionnel
5. **dashboard.html** - Dashboard SOC-style
6. **login.html** - Red Team Access Panel
7. **contact.html** - Formulaire de contact

## 🎨 Personnalisation rapide

### 1. Remplacer votre photo
- Placez votre photo dans `assets/images/profile.jpg`
- Format recommandé : 400x400px minimum
- Format : JPG ou PNG

### 2. Modifier vos informations
Cherchez et remplacez dans **tous les fichiers HTML** :
- `Younes Boussedari` → Votre nom
- `@younesboussedari` → Vos handles sociaux
- URLs des réseaux sociaux (GitHub, LinkedIn, Twitter, etc.)

### 3. Personnaliser les couleurs
Éditez les variables CSS dans `style.css` (lignes 10-50) :
```css
:root {
    --color-cyan: #18D1FC;    /* Couleur principale */
    --color-red: #EF4444;      /* Couleur offensive */
    --color-green: #00FF9C;    /* Couleur Linux */
}
```

## 🌐 Hébergement gratuit

### Option 1 : GitHub Pages (Recommandé)
```bash
# 1. Créer un repo GitHub
# 2. Push le code
git remote add origin https://github.com/VOTRE-USERNAME/portfolio.git
git push -u origin main

# 3. Activer GitHub Pages dans Settings > Pages
# Votre site sera à : https://VOTRE-USERNAME.github.io/portfolio/
```

### Option 2 : Netlify (Drag & Drop)
1. Aller sur [netlify.com](https://netlify.com)
2. Glisser-déposer le dossier `webapp`
3. Site déployé en 30 secondes !

### Option 3 : Cloudflare Pages
1. Connecter votre repo GitHub
2. Build command : (vide)
3. Publish directory : `/`
4. Déploiement automatique !

## 🔧 Serveur local (optionnel)

Si vous voulez tester avec un serveur local :

```bash
# Python 3
python3 -m http.server 8000

# Node.js (si npx installé)
npx serve

# PHP
php -S localhost:8000
```

Puis ouvrir : `http://localhost:8000`

## ✏️ Modification du contenu

### Ajouter un article
Dans `articles.html`, copier-coller ce bloc et modifier :
```html
<div class="article-card">
    <span class="article-badge">VOTRE CATÉGORIE</span>
    <h3>Titre de l'article</h3>
    <p class="article-preview">Description...</p>
    <div class="article-meta">
        <span class="article-date">Date</span>
        <a href="#" class="read-more">Read More</a>
    </div>
</div>
```

### Ajouter un outil
Dans `tools.html`, section appropriée (offensive/defensive/linux) :
```html
<div class="tool-card offensive">
    <div class="tool-header">
        <div class="tool-icon">🔧</div>
        <h3 class="tool-name">Nom de l'outil</h3>
    </div>
    <p class="tool-description">Description de l'outil...</p>
    <div class="tool-tag">Catégorie</div>
</div>
```

## 📱 Test responsive

Testez votre site sur différents écrans :
- Desktop : ✅ Parfait
- Tablet : ✅ Responsive
- Mobile : ✅ Menu burger automatique

## ⚠️ Points importants

1. **Pas de backend** - Ce site est 100% frontend (HTML/CSS/JS)
2. **Formulaires** - Les formulaires ne sont pas connectés (à faire si besoin)
3. **Images** - Remplacez l'image placeholder par votre photo
4. **Contenu** - Personnalisez tout le texte selon votre profil

## 🎯 Prochaines actions

- [ ] Remplacer la photo de profil
- [ ] Modifier toutes les informations personnelles
- [ ] Personnaliser les liens sociaux
- [ ] Écrire du vrai contenu d'articles
- [ ] Héberger le site en ligne
- [ ] Partager votre portfolio !

## 💡 Besoin d'aide ?

Consultez le **README.md** pour plus de détails techniques.

---

**Bon courage avec votre portfolio cybersécurité ! 🔐**
