# Guide de modification des textes

## 📁 Structure du projet

```
Website/
├── app/                    # Configuration Next.js
│   ├── page.tsx           # Page principale (assemble les composants)
│   ├── layout.tsx         # Layout global (SEO, fonts)
│   └── globals.css        # Styles globaux
│
├── components/             # Composants React
│   ├── TopNav.tsx         # Navigation en haut
│   ├── Hero.tsx           # Section profil/intro
│   ├── Experiences.tsx    # Section expériences
│   ├── Projects.tsx       # Section projets
│   ├── Hobbies.tsx       # Section hobbies
│   └── Contact.tsx        # Section contact
│
├── contexts/               # Contextes React (état global)
│   ├── LanguageContext.tsx  ⭐ TOUS LES TEXTES SONT ICI
│   └── ThemeContext.tsx     # Gestion du thème dark/light
│
└── public/                # Fichiers statiques
    └── images/
        └── profile.jpg    # Votre photo de profil
```

---

## ✏️ Où modifier les textes ?

### **Fichier principal : `contexts/LanguageContext.tsx`**

**Tous les textes du site sont centralisés dans ce fichier**, organisés par sections et en deux langues (français et anglais).

### Structure des traductions

Le fichier contient un objet `translations` avec deux clés :
- `fr` : toutes les traductions en français
- `en` : toutes les traductions en anglais

Chaque texte a une **clé unique** (ex: `"hero.subtitle"`) qui permet de le récupérer dans les composants.

---

## 📝 Sections et clés de traduction

### 1. **Navigation** (`nav.*`)
```typescript
"nav.home": "Accueil",
"nav.experiences": "Expériences",
"nav.projects": "Projets",
"nav.hobbies": "À côté",
"nav.contact": "Contact",
```

### 2. **Section Hero/Profil** (`hero.*`)
```typescript
"hero.subtitle": "Product Builder & Product Manager IA",
"hero.description1": "J'aide les PME...",
"hero.description2": "Expérience côté moteurs...",
"hero.available": "Disponible pour de nouvelles missions",
"hero.seeProjects": "Voir mes projets",
"hero.contactMe": "Me contacter",
```

### 3. **Expériences** (`exp.*`)
```typescript
"exp.title": "Expériences",
"exp.qwant.title": "Product Manager IA",
"exp.qwant.org": "Qwant",
"exp.qwant.period": "2022 – Aujourd'hui",
"exp.qwant.point1": "Lancement et amélioration...",
// ... etc pour chaque expérience
```

**Pour ajouter/modifier une expérience :**
- Ajoutez les clés dans `fr` et `en`
- Modifiez la fonction `getExperiences()` dans `components/Experiences.tsx` si besoin

### 4. **Projets** (`projects.*`)
```typescript
"projects.title": "Projets & missions",
"projects.search.name": "IAgen pour moteur de recherche",
"projects.search.type": "Feature IA",
"projects.search.point1": "Intégration de LLM...",
"projects.search.client": "Qwant",
"projects.search.company": "Qwant",
"projects.search.year": "2023",
"projects.search.description": "Développement d'une fonctionnalité...",
"projects.search.cta": "Voir la démo",
```

**Structure pour chaque projet :**
- `projects.[nom].name` : Nom du projet
- `projects.[nom].type` : Type (Feature IA, Application web, etc.)
- `projects.[nom].point1/2/3` : 3 points clés
- `projects.[nom].client` : Nom du client
- `projects.[nom].company` : Nom de l'entreprise
- `projects.[nom].year` : Année
- `projects.[nom].description` : Description longue (texte enrichi)
- `projects.[nom].cta` : Texte du bouton CTA

**Projets disponibles :**
- `search` : IAgen pour moteur de recherche
- `dashboard` : Dashboard trésorerie PME
- `chatbot` : Chatbot IA pour support client
- `nocode` : Plateforme no-code
- `automation` : Système d'automatisation
- `ecommerce` : MVP e-commerce avec IA

### 5. **Hobbies** (`hobbies.*`)
```typescript
"hobbies.title": "À côté des missions",
"hobbies.running.title": "Course à pied & trail",
"hobbies.running.desc": "Préparation de marathons...",
"hobbies.ai.title": "Exploration IA & LLM",
"hobbies.ai.desc": "Curiosité constante...",
"hobbies.side.title": "Projets personnels & side projects",
"hobbies.side.desc": "Passion pour construire...",
```

### 6. **Contact** (`contact.*`)
```typescript
"contact.title": "Travaillons ensemble",
"contact.description": "Je suis ouvert aux nouvelles missions...",
"contact.writeMe": "M'écrire",
"contact.formTitle": "Formulaire de contact",
"contact.name": "Nom",
"contact.email": "Email",
"contact.message": "Message",
```

---

## 🔧 Comment modifier un texte

### Exemple 1 : Changer le sous-titre du Hero

1. Ouvrez `contexts/LanguageContext.tsx`
2. Cherchez la ligne `"hero.subtitle": "Product Builder & Product Manager IA",`
3. Modifiez le texte entre guillemets :
   ```typescript
   "hero.subtitle": "Votre nouveau texte ici",
   ```
4. Faites la même chose dans la section `en:` pour la version anglaise
5. Sauvegardez → le changement apparaît automatiquement

### Exemple 2 : Modifier une expérience

1. Dans `contexts/LanguageContext.tsx`, cherchez `"exp.qwant.title"`
2. Modifiez les valeurs :
   ```typescript
   "exp.qwant.title": "Nouveau titre",
   "exp.qwant.org": "Nouvelle entreprise",
   "exp.qwant.period": "2020 – 2024",
   "exp.qwant.point1": "Nouveau point 1",
   "exp.qwant.point2": "Nouveau point 2",
   "exp.qwant.point3": "Nouveau point 3",
   ```
3. Répétez dans la section `en:` pour l'anglais

### Exemple 3 : Ajouter un nouveau projet

1. Dans `contexts/LanguageContext.tsx`, ajoutez les traductions :
   ```typescript
   // Dans la section fr:
   "projects.nouveau.name": "Mon nouveau projet",
   "projects.nouveau.type": "Application web",
   "projects.nouveau.point1": "Point 1",
   "projects.nouveau.point2": "Point 2",
   "projects.nouveau.point3": "Point 3",
   "projects.nouveau.client": "Client XYZ",
   "projects.nouveau.company": "Company XYZ",
   "projects.nouveau.year": "2024",
   "projects.nouveau.description": "Description détaillée...",
   "projects.nouveau.cta": "Voir le projet",
   
   // Dans la section en: (même structure)
   "projects.nouveau.name": "My new project",
   // ... etc
   ```

2. Dans `components/Projects.tsx`, ajoutez le projet dans la fonction `getProjects()` :
   ```typescript
   {
     id: "nouveau",
     name: t("projects.nouveau.name"),
     type: t("projects.nouveau.type"),
     // ... etc
   }
   ```

---

## 🎨 Autres fichiers importants

### `components/Hero.tsx`
- Contient la structure de la section profil
- Utilise les traductions via `t("hero.xxx")`
- **Ne modifiez que si vous voulez changer la structure**, pas les textes

### `components/Experiences.tsx`
- Structure de la section expériences
- Les données viennent de `getExperiences(t)` qui utilise les traductions

### `components/Projects.tsx`
- Structure de la section projets
- Les données viennent de `getProjects(t)` qui utilise les traductions

### `app/layout.tsx`
- Métadonnées SEO (titre, description)
- **Modifiez ici pour changer le titre de la page dans les résultats Google**

### `public/images/profile.jpg`
- Votre photo de profil
- Remplacez ce fichier pour changer la photo

---

## 💡 Conseils

1. **Toujours modifier les deux langues** (fr et en) pour garder la cohérence
2. **Respectez la structure des clés** : `section.soussection.element`
3. **Testez après modification** : `npm run dev` pour voir les changements
4. **Les clés doivent être identiques** entre fr et en (seul le texte change)

---

## 🚀 Commandes utiles

```bash
# Lancer le serveur de développement
npm run dev

# Build de production
npm run build

# Vérifier les erreurs
npm run lint
```

---

## 📍 Résumé : Où modifier quoi ?

| Élément | Fichier | Section |
|---------|---------|---------|
| **Tous les textes** | `contexts/LanguageContext.tsx` | Objet `translations` |
| **Titre de la page (SEO)** | `app/layout.tsx` | `metadata.title` |
| **Photo de profil** | `public/images/profile.jpg` | Remplacez le fichier |
| **Structure des sections** | `components/*.tsx` | Modifiez uniquement si besoin |

**En résumé : 95% des modifications de texte se font dans `contexts/LanguageContext.tsx` !**

