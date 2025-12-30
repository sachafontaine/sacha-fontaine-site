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

### Modifier la couleur d'accent

Dans `tailwind.config.ts`, modifiez la couleur `accent` (actuellement violet `#8b5cf6`).

### Modifier le statut "Disponible"

Dans `components/Hero.tsx`, cherchez le badge "Disponible pour de nouvelles missions" et modifiez le texte ou masquez-le.

## 🛠️ Technologies

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animations subtiles)

## ✉️ Formulaire de contact

Le formulaire envoie désormais les messages via l'API [Resend](https://resend.com/). Ajoutez les variables d'environnement suivantes avant de lancer le site :

```bash
RESEND_API_KEY=VotreCléResend
RESEND_FROM_EMAIL=contact@votre-domaine.com # adresse vérifiée chez Resend
```

Tous les champs sont requis et un captcha simple (addition) limite le spam. Les messages sont envoyés à `sachafontaine.pro@gmail.com` et utilisent le champ email de l'utilisateur comme `reply-to`.

## 📝 Notes

- Le site est optimisé pour mobile (mobile-first).
- Toutes les animations sont subtiles et utilisent Framer Motion.

