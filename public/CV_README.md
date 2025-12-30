# CV - Instructions

## 📄 Où placer votre CV

Placez votre fichier CV dans le dossier `public/` avec le nom exact : **`cv.pdf`**

```
public/
  └── cv.pdf  ← Votre CV ici
```

## ✅ Format recommandé

- **Nom du fichier** : `cv.pdf` (en minuscules)
- **Format** : PDF (recommandé pour la compatibilité)
- **Taille** : Idéalement < 5MB pour un chargement rapide

## 🔧 Alternative : Changer le nom du fichier

Si votre CV a un nom différent, modifiez le lien dans `components/Hero.tsx` :

```tsx
// Ligne ~110 environ
<a
  href="/cv.pdf"  // ← Changez ici (ex: "/mon-cv.pdf")
  target="_blank"
  rel="noopener noreferrer"
  ...
>
```

## 📝 Note

Le bouton s'ouvre dans un nouvel onglet (`target="_blank"`) pour ne pas quitter la page.

