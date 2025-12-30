# 🚀 Guide rapide : Modifier les textes

## ⚡ En 30 secondes

**Tous les textes sont dans : `contexts/LanguageContext.tsx`**

Ouvrez ce fichier et cherchez la section que vous voulez modifier.

---

## 📍 Carte des modifications

### Pour modifier le **sous-titre** (Product Builder & Product Manager IA)
```typescript
// Ligne ~29 dans contexts/LanguageContext.tsx
"hero.subtitle": "Product Builder & Product Manager IA",
```
➡️ Changez le texte entre guillemets

---

### Pour modifier les **expériences professionnelles**
```typescript
// Lignes ~38-55 dans contexts/LanguageContext.tsx
"exp.qwant.title": "Product Manager IA",
"exp.qwant.org": "Qwant",
"exp.qwant.period": "2022 – Aujourd'hui",
"exp.qwant.point1": "Lancement et amélioration...",
"exp.qwant.point2": "Amélioration de la conversion...",
"exp.qwant.point3": "Coordination entre équipes...",
```
➡️ Modifiez les valeurs pour chaque expérience

**Expériences disponibles :**
- `exp.qwant.*` → Expérience Qwant
- `exp.freelance.*` → Expérience Freelance
- `exp.startup.*` → Expérience Startup

---

### Pour modifier les **projets**
```typescript
// Lignes ~58-133 dans contexts/LanguageContext.tsx
"projects.search.name": "IAgen pour moteur de recherche",
"projects.search.type": "Feature IA",
"projects.search.point1": "Intégration de LLM...",
"projects.search.client": "Qwant",
"projects.search.company": "Qwant",
"projects.search.year": "2023",
"projects.search.description": "Développement d'une fonctionnalité...",
"projects.search.cta": "Voir la démo",
```

**Projets disponibles :**
- `projects.search.*` → IAgen pour moteur de recherche
- `projects.dashboard.*` → Dashboard trésorerie
- `projects.chatbot.*` → Chatbot IA
- `projects.nocode.*` → Plateforme no-code
- `projects.automation.*` → Automatisation
- `projects.ecommerce.*` → E-commerce MVP

---

### Pour modifier les **hobbies**
```typescript
// Lignes ~136-142 dans contexts/LanguageContext.tsx
"hobbies.running.title": "Course à pied & trail",
"hobbies.running.desc": "Préparation de marathons...",
"hobbies.ai.title": "Exploration IA & LLM",
"hobbies.ai.desc": "Curiosité constante...",
"hobbies.side.title": "Projets personnels & side projects",
"hobbies.side.desc": "Passion pour construire...",
```

---

### Pour modifier le **contact**
```typescript
// Lignes ~145-156 dans contexts/LanguageContext.tsx
"contact.title": "Travaillons ensemble",
"contact.description": "Je suis ouvert aux nouvelles missions...",
"contact.writeMe": "M'écrire",
```

---

## ⚠️ Important : Modifier les DEUX langues

Chaque texte existe en **français** (`fr:`) et en **anglais** (`en:`).

**Exemple :**
```typescript
fr: {
  "hero.subtitle": "Product Builder & Product Manager IA",  // ← Modifiez ici
  // ...
},
en: {
  "hero.subtitle": "Product Builder & AI Product Manager",  // ← Et aussi ici
  // ...
}
```

---

## 🎯 Exemple concret : Changer le statut "Disponible"

1. Ouvrez `contexts/LanguageContext.tsx`
2. Cherchez `"hero.available"` (ligne ~32)
3. Modifiez :
   ```typescript
   // Avant
   "hero.available": "Disponible pour de nouvelles missions",
   
   // Après
   "hero.available": "En mission actuellement",
   ```
4. Faites pareil dans la section `en:` (ligne ~128)
5. Sauvegardez → C'est fait !

---

## 📝 Autres fichiers à connaître

| Fichier | Usage |
|---------|-------|
| `app/layout.tsx` | **Titre de la page** (SEO, onglet navigateur) |
| `public/images/profile.jpg` | **Votre photo de profil** |
| `components/*.tsx` | Structure des sections (ne pas toucher sauf besoin) |

---

## ✅ Checklist de modification

- [ ] J'ai trouvé la clé dans `contexts/LanguageContext.tsx`
- [ ] J'ai modifié la version **française** (`fr:`)
- [ ] J'ai modifié la version **anglaise** (`en:`)
- [ ] J'ai sauvegardé le fichier
- [ ] J'ai testé avec `npm run dev`

---

**💡 Astuce :** Utilisez la recherche (Cmd+F / Ctrl+F) dans `LanguageContext.tsx` pour trouver rapidement ce que vous cherchez !

