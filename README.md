# 🔐 Cybersecurity Portfolio - Younes Boussedari

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

Un site web professionnel de haute qualité représentant un véritable profil **Junior Penetration Tester** avec une approche Red Team / SOC mindset.

## 🎯 Vue d'ensemble

Ce portfolio cybersécurité n'est pas un template - c'est un site web conçu pour refléter l'identité professionnelle d'un testeur de pénétration junior spécialisé dans la sécurité offensive et les fondamentaux SOC.

### ✨ Caractéristiques principales

- ✅ **Pure HTML5, CSS3, JavaScript** - Aucun framework, aucune bibliothèque
- 🎨 **Design cybersécurité professionnel** - Thème dark blue avec accents cyan/neon
- 🔴 **Red Team themed** - Interface orientée offensive security
- 🔵 **Blue Team awareness** - Compréhension des opérations SOC
- 📱 **Responsive Design** - Fonctionne sur tous les appareils
- ⚡ **Animations fluides** - Canvas circuits, effets de glow, transitions
- 🔒 **Page de login Red Team** - Panneau d'authentification stylisé
- 📊 **Dashboard personnel** - Centre d'opérations cybersécurité

## 📁 Structure du projet

```
webapp/
├── index.html          # Page d'accueil / Hero section
├── tools.html          # Arsenal de sécurité (Offensive/Defensive/Linux)
├── articles.html       # Articles et writeups cybersécurité
├── about.html          # À propos / Compétences professionnelles
├── dashboard.html      # Dashboard personnel SOC-style
├── login.html          # Red Team Access Panel
├── contact.html        # Canaux de communication sécurisés
├── style.css           # Styles globaux (15KB)
├── tools.css           # Styles additionnels pour pages internes (14KB)
├── login.css           # Styles page de login (3KB)
├── script.js           # JavaScript principal (14KB)
├── tools.js            # Script recherche outils (1KB)
├── .gitignore          # Configuration Git
├── README.md           # Documentation
└── assets/
    └── images/         # Dossier pour images (profile photo, etc.)
```

## 🚀 Pages et fonctionnalités

### 1. **Home (index.html)**
- Hero section avec présentation professionnelle
- Services highlights (Web App Testing / Network Pentesting)
- Stats animées (Vulnérabilités trouvées, Labs complétés, etc.)
- Design futuriste avec background canvas animé

### 2. **Services / Tools (tools.html)**
Organisé en 3 catégories :

#### 🔴 Offensive Security Tools (Red Team)
- Nmap, Burp Suite, SQLmap, Metasploit
- Nikto, Hydra, Gobuster, ffuf
- John The Ripper, Enum4linux
- Couleur thème : **Rouge/Magenta**

#### 🔵 Defensive Security Tools (Blue Team / SOC)
- Wireshark, Splunk, ELK Stack
- Wazuh, Suricata, Zeek, Sysmon
- OSSEC, VirusTotal, TheHive
- Couleur thème : **Cyan/Bleu**

#### 🟢 Linux Operations Core
- Bash scripting, automation, tool chaining
- Couleur thème : **Vert terminal**

### 3. **Articles (articles.html)**
Collection de 9 articles cybersécurité :
- SQL Injection, XSS, SSRF, IDOR
- Network Enumeration, Red Team Methodology
- Phishing Analysis, Brute Force Detection
- Broken Authentication

### 4. **About Me (about.html)**
- Résumé professionnel détaillé
- Mindset Red + Blue Team
- Compétences Offensive & Defensive
- Fondamentaux techniques

### 5. **Dashboard (dashboard.html)**
- Statistiques personnelles
- Terminal simulé avec statut système
- Barres de progression
- Style SOC Operations Center

### 6. **Login (login.html)**
- Red Team Access Panel
- Design deux colonnes (Welcome / Login)
- Formulaire sécurisé stylisé
- Thème rouge agressif

### 7. **Contact (contact.html)**
- Méthodes de contact sécurisées
- GitHub, LinkedIn, Twitter, Instagram, WhatsApp
- Formulaire de message
- Layout deux colonnes

## 🎨 Système de couleurs

### Backgrounds
- `#0A0E1A` - Fond primaire
- `#111827` - Fond secondaire
- `#1F2937` - Fond tertiaire
- `#161B22` - Fond dark

### Accents principaux
- `#18D1FC` - Cyan (Defensive/Primary)
- `#20C5FA` - Cyan bright
- `#5E67F1` - Purple

### Status colors
- `#EF4444` - Rouge (Offensive)
- `#BE123C` - Rouge foncé
- `#F59E0B` - Orange
- `#00FF9C` - Vert (Linux/Success)
- `#22C55E` - Vert alternatif

### Texte
- `#FFFFFF` - Texte primaire
- `#9CA3AF` - Texte secondaire
- `#6B7280` - Texte muted

## 💻 Technologies utilisées

- **HTML5** - Structure sémantique moderne
- **CSS3** - Flexbox, Grid, Variables CSS, Animations
- **Vanilla JavaScript** - Canvas API, Intersection Observer, Event Listeners
- **SVG** - Icônes et graphiques vectoriels

### Aucune dépendance externe
✅ Pas de React, Vue, Angular  
✅ Pas de Bootstrap, Tailwind  
✅ Pas de jQuery  
✅ Pas de bibliothèques CSS/JS

## 📦 Installation et utilisation

### 1. Cloner le repository
```bash
git clone <repository-url>
cd webapp
```

### 2. Ouvrir le site
Simplement ouvrir `index.html` dans un navigateur moderne :
```bash
# Linux/Mac
open index.html

# Windows
start index.html

# Ou utiliser un serveur local
python3 -m http.server 8000
# Puis ouvrir http://localhost:8000
```

### 3. Personnalisation

#### Remplacer la photo de profil
Placer votre photo dans `assets/images/profile.jpg`

#### Modifier les informations personnelles
- **Nom** : Chercher "Younes Boussedari" dans tous les fichiers HTML
- **Links sociaux** : Modifier les URLs des liens GitHub, LinkedIn, etc.
- **Contenu** : Éditer le texte dans chaque section HTML

#### Ajuster les couleurs
Les couleurs sont définies dans `:root` au début de `style.css`

## 🔒 Avertissement

**Tout le contenu de ce site web est à des fins éducatives et éthiques uniquement.**

Ce portfolio démontre des compétences en cybersécurité dans un contexte éthique et légal. Toutes les techniques mentionnées doivent être utilisées uniquement sur des systèmes pour lesquels vous avez une autorisation explicite.

## 📊 Statistiques du code

```bash
Fichiers HTML: 7 pages
Lignes CSS:    ~750 lignes (32KB total)
Lignes JS:     ~500 lignes (15KB total)
Total lignes:  ~3000+ lignes de code
Taille:        ~75KB (non compressé)
```

## 🎯 Objectifs atteints

✅ Design professionnel cybersécurité de haute qualité  
✅ Architecture Red Team / Blue Team claire  
✅ Pure HTML/CSS/JS - Aucun framework  
✅ Responsive et mobile-friendly  
✅ Animations fluides et modernes  
✅ Code propre, commenté, production-ready  
✅ Git repository initialisé  
✅ Documentation complète  

## 📝 Prochaines étapes recommandées

1. **Remplacer l'image de profil** - Ajouter votre photo professionnelle
2. **Personnaliser les liens sociaux** - Mettre vos vrais profils
3. **Écrire des articles réels** - Créer du contenu de writeups
4. **Ajouter un portfolio** - Showcaser vos projets réels
5. **Héberger le site** - GitHub Pages, Netlify, ou Cloudflare Pages

## 📧 Contact

- **Email** : younes@example.com
- **GitHub** : @younesboussedari
- **LinkedIn** : Younes Boussedari

## 📄 License

Ce projet est fourni tel quel pour usage personnel et éducatif.

---

**Créé avec ❤️ et beaucoup de code propre**  
**© 2025 Younes Boussedari. Tous droits réservés.**
