# Site personnel - Sacha Fontaine

Site one-page personnel créé avec Next.js, TypeScript et Tailwind CSS.

## 🚀 Démarrage

1. Installer les dépendances :
```bash
npm install
```

2. Lancer le serveur de développement :
```bash
npm run dev
```

3. Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 📁 Structure du projet

```
Website/
├── app/
│   ├── layout.tsx      # Layout principal avec metadata SEO
│   ├── page.tsx        # Page principale qui assemble tous les composants
│   └── globals.css     # Styles globaux Tailwind
├── components/
│   ├── TopNav.tsx      # Navigation sticky en haut
│   ├── Hero.tsx        # Section hero/profil
│   ├── Experiences.tsx # Section expériences professionnelles
│   ├── Projects.tsx    # Section projets & missions
│   ├── Hobbies.tsx     # Section hobbies/perso
│   └── Contact.tsx     # Section contact
├── tailwind.config.ts  # Configuration Tailwind avec couleur accent
└── package.json
```

## 🎨 Personnalisation

### Modifier les données

Les données (expériences, projets, hobbies) sont directement dans les composants sous forme de tableaux TypeScript. Vous pouvez les modifier facilement :

- **Expériences** : `components/Experiences.tsx` - tableau `experiences`
- **Projets** : `components/Projects.tsx` - tableau `projects`
- **Hobbies** : `components/Hobbies.tsx` - tableau `hobbies`

### Modifier l'email de contact

Dans `components/Contact.tsx`, ligne avec `mailto:`, remplacez `sacha@example.com` par votre email.

### Modifier la couleur d'accent

Dans `tailwind.config.ts`, modifiez la couleur `accent` (actuellement violet `#8b5cf6`).

### Modifier le statut "Disponible"

Dans `components/Hero.tsx`, cherchez le badge "Disponible pour de nouvelles missions" et modifiez le texte ou masquez-le.

## 🛠️ Technologies

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animations subtiles)

## 📝 Notes

- Le formulaire de contact est en mode démo (pas de backend). Utilisez le bouton "M'écrire" pour un contact direct via email.
- Le site est optimisé pour mobile (mobile-first).
- Toutes les animations sont subtiles et utilisent Framer Motion.

