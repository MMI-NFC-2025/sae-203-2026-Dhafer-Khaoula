---
name: Intégration
description: à utiliser pour la mise en forme de site en astro
---

<!-- Tip: Use /create-prompt in chat to generate content with agent assistance -->

Voici le tutoriel complet a suivre pour l'intégration du site en astro : 
H1/Tutoriel: 

H2/Cadrage et fondations
 H3/Installation Astro / Tailwind
    Installation d’Astro
Créer un répertoire conservatoire puis l’ouvrir dans VSCode. Ouvrir le terminal dans VSCode et installez un nouveau projet Astro :

Fenêtre de terminal
npm create astro@latest

Choisir les options suivantes :

Emplacement : ./
Template : A basic, helpful starter project
Dépendances : Yes
Git : No
    Installation de Tailwind CSS
Ajouter Tailwind au projet :

Fenêtre de terminal
npx astro add tailwind

Cette commande installe automatiquement :

tailwindcss
@astrojs/tailwind
Configure les fichiers nécessaires
Ajouter l’import du fichier css au début de Layout.astro :

---
import '../styles/global.css'
---

Conventions de code
Établir des conventions de code dès le départ du projet est essentiel pour maintenir une base de code cohérente et lisible. Ces règles facilitent la collaboration entre développeurs et réduisent la charge cognitive lors de la navigation dans le projet. Une convention bien définie permet à n’importe quel membre de l’équipe de retrouver rapidement les fichiers et de comprendre leur rôle au premier coup d’œil.

Nommage des fichiers
Le nommage des fichiers suit des conventions différentes selon leur rôle dans l’application :

Les conventions de nommage

PascalCase : Chaque mot commence par une majuscule, pas d’espaces ni de tirets (ex: MyComponent, UserProfile)
kebab-case : Tout en minuscules, mots séparés par des tirets (ex: my-component, user-profile)
camelCase : Première lettre en minuscule, puis majuscule au début de chaque mot (ex: myFunction, getUserData)
Composants : PascalCase.astro (ex: Button.astro, HeaderNav.astro)

Reflète leur nature de composant réutilisable
Facilite la distinction avec les pages
Pages : kebab-case.astro (ex: contact-form.astro, a-propos.astro)

Correspond aux URL générées (/contact-form, /a-propos)
Plus lisible dans les chemins d’URL
Utilitaires : camelCase.ts (ex: formatDate.ts, fetchEvents.ts)

Convention JavaScript standard pour les fonctions
Cohérent avec le contenu du fichier
Organisation des imports
L’organisation systématique des imports améliore la lisibilité et facilite la maintenance. En regroupant les imports par catégorie, on comprend immédiatement les dépendances d’un fichier :

---
// 1. Imports npm
import { Image } from 'astro:assets';

// 2. Imports locaux (composants)
import Layout from '../layouts/Layout.astro';
import Button from '../components/Button.astro';

// 3. Imports utilitaires
import { formatDate } from '../lib/utils';

// 4. Props et logique
interface Props {
  title: string;
}

const { title } = Astro.props;
---



 H3/Environnement de développement
    Plugins
Pour optimiser l’expérience de développement avec Astro et Tailwind CSS, il est essentiel d’installer les extensions VS Code officielles. Ces plugins apportent la coloration syntaxique, l’autocomplétion, et la détection d’erreurs en temps réel.

Astro
Extension officielle pour les fichiers .astro qui fournit :

Coloration syntaxique pour la syntaxe Astro
Autocomplétion des composants et des props
Validation des erreurs en temps réel
Support de TypeScript intégré
Installation : Astro pour VS Code

Tailwind CSS IntelliSense
Extension officielle qui améliore considérablement l’expérience avec Tailwind :

Autocomplétion intelligente des classes Tailwind
Aperçu des couleurs et tailles directement dans l’éditeur
Avertissements pour les classes invalides ou en conflit
Documentation au survol de chaque classe
Installation : Tailwind CSS IntelliSense

Installation rapide

Vous pouvez installer ces extensions directement depuis VS Code en cherchant “Astro” et “Tailwind CSS IntelliSense” dans l’onglet Extensions (Cmd+Shift+X).

Formatage
Le formatage automatique du code assure une cohérence visuelle dans tout le projet et évite les discussions sur le style de code. Prettier formate automatiquement votre code selon des règles définies, ce qui améliore la lisibilité et facilite la collaboration en équipe.

Installation de l’extension VSCode
Ouvrir VSCode
Aller dans l’onglet Extensions (Cmd+Shift+X sur macOS)
Rechercher “Prettier - Code formatter”
Installer l’extension officielle de Prettier
Définir Prettier comme formateur par défaut :
Ouvrir les Paramètres (Cmd+,)
Rechercher “Default Formatter”
Sélectionner “Prettier - Code formatter”
Activer le formatage à la sauvegarde :
Rechercher “Format On Save”
Cocher la case “Editor: Format On Save”
Installation des dépendances
Installer Prettier et ses plugins pour Astro et Tailwind CSS :

Fenêtre de terminal
npm install -D prettier prettier-plugin-astro prettier-plugin-tailwindcss

Ces plugins permettent :

prettier-plugin-astro : Formate correctement les fichiers .astro avec leur syntaxe spécifique
prettier-plugin-tailwindcss : Réorganise automatiquement les classes Tailwind dans un ordre cohérent et optimal
Configuration
Créer un fichier .prettierrc à la racine du projet :

.prettierrc
{
  "plugins": ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  "tailwindStylesheet": "./src/styles/global.css",
  "overrides": [
    {
      "files": "*.astro",
      "options": { "parser": "astro" }
    }
  ]
}

Avantages de cette configuration :

Code formaté automatiquement à chaque sauvegarde
Cohérence garantie dans toute l’équipe
Classes Tailwind toujours dans le même ordre
Gain de temps (plus besoin de formater manuellement)
Moins de conflits Git liés au formatage
 
 
 
 H3/Structure des répertoires
      Structure du projet Astro
Répertoirenode_modules/
Modules installés par npm pour le projet
Répertoirepublic/
Fichiers statiques
favicon.svg
Répertoiresrc/
Code source
Répertoireassets/
Images optimisées par Astro
astro.svg
background.svg
Répertoirecomponents/
Composants réutilisables
Header.astro
…
Répertoirelayouts/
Templates de mise en page
Layout.astro
Répertoirepages/
Pages du site (routing)
index.astro
Répertoirestyles/
CSS globaux
global.css
.gitignore
Fichiers et dossiers ignorés par Git.
astro.config.mjs
Configuration Astro
package.json
Scripts et dépendances
README.md
Fichier de présentation du projet
tsconfig.json
Configuration TypeScript
Le dossier node_modules
Le dossier node_modules/ contient toutes les dépendances installées via npm. C’est un dossier généré automatiquement lors de l’exécution de npm install et il ne doit jamais être versionné dans Git.

Caractéristiques
Très volumineux : Peut contenir des milliers de fichiers et peser plusieurs centaines de Mo
Généré automatiquement : Recréé à partir du fichier package-lock.json
Spécifique à l’environnement : Peut varier selon le système d’exploitation
Non modifiable : Ne jamais modifier directement les fichiers dans ce dossier
Gestion
Le fichier .gitignore contient déjà node_modules/ pour exclure ce dossier du versioning. Lors du clonage du projet sur une nouvelle machine, il suffit d’exécuter :

Fenêtre de terminal
npm install

Cette commande lit package.json et package-lock.json pour installer exactement les mêmes versions des dépendances.

Problèmes avec node_modules ?

Si vous rencontrez des erreurs étranges ou des comportements inattendus :

Supprimer le dossier node_modules/
Supprimer le fichier package-lock.json
Relancer npm install
Cette manipulation “nettoie” les dépendances et résout souvent les problèmes de cache ou de versions conflictuelles.

Bonnes pratiques
Garder les composants petits et focalisés
Créer des composants réutilisables dans /components
Utiliser les layouts pour mutualiser la structure
Documenter les composants complexes


 H3/Fichiers sources
  Décompressez le répertoire assets-public et :

déposez les répertoires img et icons dans le répertoire assets du projet.
déposez les fichiers de public dans le répertoire public.
Répertoirepublic
apple-touch-icon.png
favicon.ico
favicon.svg …
Répertoiresrc/
Code source
Répertoireassets/
Images optimisées par Astro
astro.svg
background.svg
Répertoireicones
icone_arrow.svg
icon_arrowcarrousel.svg
…
Répertoireimg
conservatoire-exterieur-01.jpg
conservatoire-exterieur-02.jpg
…
À present lancez le projet avec la commande suivante :

Fenêtre de terminal
npm run dev

Puis rendez vous sur la page indiquée dans le terminal (http://localhost:4321/)




H2/Design system et layout

 H3/Variables de thème
    Variables de thème
Tailwind CSS utilise un système de design tokens puissant qui permet de définir des variables réutilisables pour tous les aspects du design : couleurs, typographie, espacements, ombres, etc.

Avec Tailwind v4, les variables de thème sont définies directement dans les fichiers CSS en utilisant la directive @theme. Ces variables deviennent ensuite disponibles via les classes utilitaires de Tailwind ou peuvent être référencées via var() dans du CSS personnalisé.

Avantages :

Cohérence : un seul endroit pour définir le design system
Performance : variables CSS natives, pas de compilation JS
Flexibilité : possibilité de surcharger les valeurs par contexte
Theming dynamique : dark mode et thèmes multiples facilités
Theme Configuration
Documentation officielle de Tailwind CSS sur la configuration du thème avec les variables CSS
Typographie
Installation des fontes via Fontsource
Nous utilisons Fontsource pour gérer les polices de caractères localement, ce qui améliore les performances et respecte la vie privée des utilisateurs.

Font source
Bibliothèque open source qui permet d’installer des Google Fonts via npm pour les utiliser directement dans un projet web, sans passer par un CDN.
1. Installer les polices
Mulish : fontsource.org/fonts/mulish
Space Mono : fontsource.org/fonts/space-mono
Fenêtre de terminal
npm install @fontsource-variable/mulish @fontsource/space-mono

2. Importer dans le layout principal
src/layouts/Layout.astro
---
import '../styles/global.css';
import "@fontsource/space-mono";
import "@fontsource-variable/mulish";
---

Déclaration des variables de fonte
Dans src/styles/global.css :

src/styles/global.css
@import "tailwindcss";

@theme {
  --font-sans: "Mulish Variable", sans-serif;
  --font-mono: "Space Mono", monospace;
}

Couleurs
OKLCH : le futur des couleurs CSS
Nous utilisons le modèle de couleur oklch pour une meilleure gestion des contrastes et de la lisibilité.

Les couleurs OKLCH offrent :

Perception uniforme : même luminosité perçue
Gamut plus large : plus de couleurs accessibles
Meilleur contraste : ajustement plus précis
Explication des valeurs oklch
26.53% : Luminosité (L, plus bas = plus sombre, plus haut = plus clair)
0.1502 : Chroma (C, saturation de la couleur)
278.05 : Teinte (H, l’angle sur la roue des couleurs)
Ce modèle permet d’obtenir des couleurs plus uniformes par rapport au RGB ou au HSL, ce qui est utile pour assurer une bonne accessibilité et un design cohérent.

oklch.com
OKLCH is a new way to encode colors (like hex, RGBA, or HSL)
Couleurs personnalisées du thème
Ajoutez les couleurs personnalisées suivantes :

src/styles/global.css
@import "tailwindcss";

@theme {
  --font-sans: "Mulish", sans-serif;
  --font-mono: "Space Mono", monospace;

  --color-indigo: oklch(26.53% 0.1502 278.05); /* #1d096b */
  --color-pink: oklch(82.94% 0.1209 30.54); /* #feaa9b */
}

Supprimez le composant Welcome et ajoutez un titre à la place pour testez les variables de thèmes en utilisant les classes Tailwind correspondantes :

src/pages/index.astro
---
import Welcome from '../components/Welcome.astro';
import Layout from '../layouts/Layout.astro';
---

<Layout>
  <Welcome />
  <h1 class="font-mono text-indigo">Conservatoire Henri Dutilleux</h1>
</Layout>





 H3/Styles de base
   Les couches de Tailwind
Tailwind CSS organise les styles en trois couches principales :

@layer base : Styles de base et reset CSS (éléments HTML bruts)
@layer components : Composants réutilisables (ex: .btn, .card)
@layer utilities : Classes utilitaires personnalisées (ex: .text-balance)
Ces couches sont appliquées dans cet ordre, ce qui garantit que les utilitaires ont toujours la priorité et peuvent surcharger n’importe quel style.

Preflight : le reset CSS de Tailwind
Tailwind inclut Preflight, un reset CSS moderne basé sur modern-normalize qui :

Normalise les styles entre navigateurs
Supprime les marges/paddings par défaut
Définit des styles de base sensés (ex: box-sizing: border-box)
Preflight - Tailwind CSS
Le reset CSS moderne intégré à Tailwind qui normalise les styles entre navigateurs
La directive @apply
La directive @apply permet d’appliquer des classes utilitaires Tailwind directement dans du CSS personnalisé. Elle est particulièrement utile dans la couche @layer base pour styliser les éléments HTML sans ajouter de classes.

Quand utiliser @apply ?

À utiliser avec modération ! L’avantage principal de Tailwind est d’utiliser les classes utilitaires directement dans le HTML. Réservez @apply pour :

Les styles de base des éléments HTML (h1, p, a, etc.)
Les composants très répétitifs
L’intégration avec du code legacy
Évitez de créer des classes personnalisées pour chaque composant, privilégiez les classes utilitaires dans vos fichiers .astro.

Typographie responsive
Les tailles de texte doivent s’adapter aux différentes tailles d’écran. Tailwind permet de combiner plusieurs breakpoints pour créer une échelle typographique fluide.

Principe
h1 {
  @apply text-4xl lg:text-6xl;
  /* Mobile: 2.25rem (36px) → Desktop: 3.75rem (60px) */
}

Styles de base
Styles de base dans Tailwind
Personnalisez les styles de base en ajoutant vos propres styles dans @layer base
Ajoutez les styles de bases suivants au fichier global.css :

src/styles/global.css
@import "tailwindcss";

@theme {
  --color-indigo: oklch(26.53% 0.1502 278.05); /* #1d096b */
  --color-pink: oklch(82.94% 0.1209 30.54); /* #feaa9b */

  --font-sans: "Mulish Variable", sans-serif;
  --font-mono: "Space Mono", monospace;
}

@layer base {
  body {
    @apply font-sans text-base leading-normal;
  }
  h1 {
    @apply text-4xl font-mono leading-tight lg:text-6xl;
  }
  h2 {
    @apply text-2xl font-mono leading-tight lg:text-4xl;
  }
  h3 {
    @apply text-xl font-sans font-bold leading-tight my-4;
  }
  ::selection {
    @apply bg-(--color-pink);
  }
}

Testez les styles de base en ajoutant des titres dans la page principale :

src/pages/index.astro
---
import Layout from '../layouts/Layout.astro';
---

<Layout>
  <h1 class="font-mono text-indigo">Conservatoire Henri Dutilleux</h1>
  <h1>Conservatoire Henri Dutilleux</h1>
  <h2>Titre de niveau 2</h2>
  <h3>Titre de niveau 3</h3>
  <p>Texte standard</p>
</Layout>



 H3/Layout principal
  Le Layout est le composant fondamental qui enveloppe toutes les pages du site. Il définit la structure HTML commune et importe les ressources partagées (CSS, polices, composants).

Voici l’état de notre Layout pour l’instant :

src/layouts/Layout.astro
---
import "../styles/global.css";
import "@fontsource-variable/mulish";
import "@fontsource/space-mono";
---

<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="icon" href="/favicon.ico" />
    <meta name="generator" content={Astro.generator} />
    <title>Astro Basics</title>
  </head>
  <body>
    <slot />
  </body>
</html>

Étape 1 : Props et title
Ajout des props et gestion du titre
Ajoutons la logique pour gérer dynamiquement le titre et la description :

src/layouts/Layout.astro
---
import "../styles/global.css";
import "@fontsource-variable/mulish";
import "@fontsource/space-mono";

const { title, description } = Astro.props;
const siteName = "Conservatoire Henri Dutilleux";
const titleHead = Astro.url.pathname === "/" ? siteName : `${title} — ${siteName}`;
---

<!doctype html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="icon" href="/favicon.ico" />
    <meta name="generator" content={Astro.generator} />
    <title>Astro Basics</title>
    <title>{titleHead}</title>
    <meta name="description" content={description} />
  </head>
  <body>
    <slot />
  </body>
</html>

<style>
  html,
  body {
    margin: 0;
    width: 100%;
    height: 100%;
  }
</style>

Les props avec Astro
Astro.props permet de récupérer les propriétés passées au composant depuis une page parente. C’est le mécanisme qui permet de rendre les composants dynamiques et réutilisables.

Les props de composant dans Astro
Dans notre Layout, nous récupérons deux props :

const { title, description } = Astro.props;

title : Le titre spécifique de chaque page
description : La description pour les métadonnées SEO
Ces props sont ensuite utilisées pour personnaliser le contenu de la balise <head>.

Utilisation dans une page

Pour passer des props au Layout depuis une page :

<Layout title="Agenda" description="Consultez tous nos événements">
  <!-- Contenu de la page -->
</Layout>

Les valeurs title et description seront automatiquement récupérées dans Astro.props.

Gestion dynamique du titre
Le titre de la page est construit dynamiquement selon le contexte de navigation en utilisant Astro.url.pathname :

const siteName = "Conservatoire Henri Dutilleux";

const titleHead = Astro.url.pathname === "/" ? siteName : `${title} — ${siteName}`;

Logique appliquée :

Page d’accueil (/) : Affiche uniquement le nom du site → "Conservatoire Henri Dutilleux"
Autres pages : Combine le titre de la page avec le nom du site → "Agenda — Conservatoire Henri Dutilleux"
Cette approche améliore le SEO en créant des titres uniques et descriptifs pour chaque page tout en conservant la marque du site.

Astro.url.pathname retourne le chemin actuel de l’URL (ex: /, /agenda, /contact), ce qui permet d’adapter le comportement selon la page visitée.

Étape 2 : Ajout des favicons
Une favicon professionnelle nécessite plusieurs formats pour couvrir tous les navigateurs et appareils :

Aller sur RealFaviconGenerator
Uploader votre logo (idéalement un fichier SVG ou PNG haute résolution)
Configurer les options pour chaque plateforme :
Favicon classique : Pour les navigateurs desktop
Apple Touch Icon : Pour iOS et iPadOS
Android Chrome : Pour les appareils Android
Windows tiles : Pour Windows 10/11
Télécharger le package généré
Extraire les fichiers dans le dossier /public
Copier les balises <link> fournies dans la section <head> du Layout
Les fichiers générés incluent généralement :

favicon.svg ou favicon.ico
apple-touch-icon.png (180×180)
site.webmanifest (configuration pour Android)
Plusieurs tailles de PNG pour différents contextes
Remplaçons les favicons par défaut par ceux générés avec RealFaviconGenerator :

src/layouts/Layout.astro
---
import "../styles/global.css";
import "@fontsource-variable/mulish";
import "@fontsource/space-mono";

const { title, description } = Astro.props;
const siteName = "Conservatoire Henri Dutilleux";
const titleHead = Astro.url.pathname === "/" ? siteName : `${title} — ${siteName}`;
---

<!doctype html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="icon" href="/favicon.ico" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <meta name="generator" content={Astro.generator} />
    <title>{titleHead}</title>
    <meta name="description" content={description} />
  </head>
  <body>
    <slot />
  </body>
</html>

Étape 3 : Import et ajout des composants Header et Footer
Le Layout importe et utilise les composants Header et Footer qui seront présents sur toutes les pages. Ces composants doivent être créés dans le dossier /src/components/.

Création du Header
Créer src/components/Header.astro :

src/components/Header.astro
---
// Navigation et logique du header
---

<header>
  <!-- Structure de navigation -->
</header>

Le Header contiendra typiquement :

Le logo et nom du site
Menu de navigation principale
Liens vers les pages clés
Création du Footer
Créer src/components/Footer.astro avec les informations de bas de page :

src/components/Footer.astro
---
// Informations et logique du footer
---

<footer>
  <!-- Coordonnées, liens secondaires, copyright -->
</footer>

Le Footer inclut généralement :

Informations de contact
Liens secondaires
Copyright et mentions légales
Composants détaillés

Les composants Header et Footer seront développés en détail dans les sections suivantes du design system. Pour l’instant, créez des versions simples pour que le Layout fonctionne.

Import des composants dans le Layout
src/layouts/Layout.astro
---
import "../styles/global.css";
import "@fontsource-variable/mulish";
import "@fontsource/space-mono";

import Header from "../components/Header.astro";
import Footer from "../components/Footer.astro";

const { title, description } = Astro.props;
const siteName = "Conservatoire Henri Dutilleux";
const titleHead = Astro.url.pathname === "/" ? siteName : `${title} — ${siteName}`;
---

<!doctype html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <title>{titleHead}</title>
    <meta name="description" content={description} />
  </head>
  <body>
    <Header />
    <main>
      <slot />
    </main>
    <Footer />
  </body>
</html>

Utilisation du Layout
Une fois le Layout créé, il peut être utilisé dans n’importe quelle page :

src/pages/index.astro
---
import Layout from '../layouts/Layout.astro';
---

<Layout title="Accueil" description="Bienvenue au Conservatoire Henri Dutilleux">
  <section>
    <h1>Bienvenue</h1>
    <p>Contenu de la page d'accueil...</p>
  </section>
</Layout>

Le contenu placé entre les balises <Layout> sera injecté à l’emplacement du <slot /> dans le fichier Layout.astro.






H2/UI primitives
 H3/Grille & composant Footer
    Le Footer est un composant essentiel présent sur toutes les pages du site. Il contient les informations de contact, les liens de navigation secondaire et les réseaux sociaux. Nous allons le construire progressivement en suivant l’approche mobile-first, puis nous ajouterons une grille personnalisée pour la version desktop.

Étape 1 : Structure HTML de base
Commençons par définir la structure sémantique du footer avec les 5 sections principales :

src/components/Footer.astro
---
---
<footer>
  <!-- 1. Logo -->
  <a href="/" aria-label="Accueil">
    Logo
  </a>

  <!-- 2. Navigation -->
  <nav>
    <h3>Menu</h3>
    <ul>
      <li><a href="/agenda">Agenda</a></li>
      <li><a href="/contact">Contact et accès</a></li>
    </ul>
  </nav>

  <!-- 3. Contact -->
  <div>
    <h3>Contact</h3>
    <address>
      1 rue Paul Koepfler<br />90000 Belfort<br />
      <a href="tel:0384542727">03 84 54 27 27</a><br />
      <a href="mailto:conservatoire@agglo-belfort.fr">conservatoire@agglo-belfort.fr</a>
    </address>
  </div>

  <!-- 4. Logo partenaire -->
  <div>
    Logo Grand Belfort
  </div>

  <!-- 5. Réseaux sociaux -->
  <div>
    <h3>Nous suivre</h3>
    <ul>
      <li><a href="#" aria-label="facebook">Facebook</a></li>
      <li><a href="#" aria-label="instagram">Instagram</a></li>
      <li><a href="#" aria-label="twitter">Twitter</a></li>
      <li><a href="#" aria-label="youtube">YouTube</a></li>
    </ul>
  </div>
</footer>

Points clés :

Utilisation de la balise sémantique <footer>
<nav> pour les liens de navigation
<address> pour les informations de contact (retire le style italique par défaut)
aria-label pour l’accessibilité des liens icônes
Étape 2 : Import des assets et données
Ajoutons les imports des icônes SVG :

src/components/Footer.astro
---
import LogoFooter from '../assets/icones/icon_logoFooter.svg';
import LogoGrandBelfort from '../assets/icones/logo-grand-belfort.svg';
import IconFacebook from '../assets/icones/icon_facebook.svg';
import IconInstagram from '../assets/icones/icon_instagram.svg';
import IconTwitter from '../assets/icones/icon_twitter.svg';
import IconYoutube from '../assets/icones/icon_youtube.svg';
---

<footer>
</footer>

Structure du tableau socialLinks :

url : Lien vers le réseau social
label : Texte pour l’accessibilité
Icon : Composant SVG importé
Étape 3 : Intégration des composants SVG
Remplaçons les textes par les composants SVG importés :

src/components/Footer.astro
---
import LogoFooter from '../assets/icones/icon_logoFooter.svg';
import LogoGrandBelfort from '../assets/icones/logo-grand-belfort.svg';
import IconFacebook from '../assets/icones/icon_facebook.svg';
import IconInstagram from '../assets/icones/icon_instagram.svg';
import IconTwitter from '../assets/icones/icon_twitter.svg';
import IconYoutube from '../assets/icones/icon_youtube.svg';

const socialLinks = [
  { url: 'https://facebook.com', label: 'facebook', Icon: IconFacebook },
  { url: 'https://instagram.com', label: 'instagram', Icon: IconInstagram },
  { url: 'https://twitter.com', label: 'twitter', Icon: IconTwitter },
  { url: 'https://youtube.com', label: 'youtube', Icon: IconYoutube },
];
---

<footer>
  <a href="/" aria-label="Accueil">
    Logo
    <LogoFooter/>
  </a>


  <div>
    Logo Grand Belfort
    <LogoGrandBelfort/>
  </div>

  <div>
    <h3>Nous suivre</h3>
    <ul>
      <li><a href="#" aria-label="facebook">Facebook</a></li>
      <li><a href="#" aria-label="instagram">Instagram</a></li>
      <li><a href="#" aria-label="twitter">Twitter</a></li>
      <li><a href="#" aria-label="youtube">YouTube</a></li>
      {socialLinks.map(({ url, label, Icon }) => (
        <li>
          <a href={url} aria-label={label}>
            <Icon />
          </a>
        </li>
      ))}
    </ul>
  </div>
</footer>

Utilisation de .map() : Nous itérons sur le tableau socialLinks pour générer dynamiquement les liens sociaux avec leurs icônes respectives.

Étape 4 : Configuration de la grille personnalisée
Avant de styliser le footer, nous devons créer une grille personnalisée dans src/styles/global.css :

src/styles/global.css
@import "tailwindcss";

@theme {
  --my-grid: repeat(12, minmax(0, 64px));
}

@layer base {
}

@layer components {
  .grille {
    @apply px-6 lg:grid lg:grid-cols-(--my-grid) lg:justify-center lg:gap-12;
  }
}

Explication de la grille :

--my-grid: repeat(12, minmax(0, 64px)) : Crée une grille de 12 colonnes
Chaque colonne a une largeur minimale de 0 et maximale de 64px
Permet une mise en page précise sur desktop
La classe .grille :

px-6 : Padding horizontal sur mobile
lg:grid : Active la grille uniquement sur les grands écrans (≥1024px)
lg:grid-cols-(--my-grid) : Applique notre grille de 12 colonnes
lg:justify-center : Centre la grille horizontalement
lg:gap-12 : Espacement entre les colonnes
Approche Mobile-first

Tailwind CSS encourage de commencer par les styles mobile, puis d’ajouter les modifications pour les écrans plus grands avec les préfixes md:, lg:, etc. C’est pourquoi les classes sans préfixe s’appliquent à tous les écrans, et les classes préfixées lg: s’appliquent uniquement à partir de 1024px.


Étape 5 : Styles mobile (base)
Ajoutons les styles de base qui s’appliqueront sur tous les écrans :

src/components/Footer.astro
---
import LogoFooter from '../assets/icones/icon_logoFooter.svg';
import LogoGrandBelfort from '../assets/icones/logo-grand-belfort.svg';
import IconFacebook from '../assets/icones/icon_facebook.svg';
import IconInstagram from '../assets/icones/icon_instagram.svg';
import IconTwitter from '../assets/icones/icon_twitter.svg';
import IconYoutube from '../assets/icones/icon_youtube.svg';

const socialLinks = [
  { url: 'https://facebook.com', label: 'facebook', Icon: IconFacebook },
  { url: 'https://instagram.com', label: 'instagram', Icon: IconInstagram },
  { url: 'https://twitter.com', label: 'twitter', Icon: IconTwitter },
  { url: 'https://youtube.com', label: 'youtube', Icon: IconYoutube },
];
---

<footer class="grille space-y-6 text-sm bg-stone-900 py-16 px-6 text-white">
  <a class="block" href="/" aria-label="Accueil">
    <LogoFooter/>
  </a>

  <nav class="space-y-3">
    <h3 class="uppercase text-sm tracking-wide text-stone-400">Menu</h3>
    <ul>
      <li><a href="/agenda">Agenda</a></li>
      <li><a href="/contact">Contact et accès</a></li>
    </ul>
  </nav>

  <div class="space-y-3">
    <h3 class="uppercase text-sm tracking-wide text-stone-400">Contact</h3>
    <address class="not-italic">
      1 rue Paul Koepfler<br />90000 Belfort<br />
      <a href="tel:0384542727">03 84 54 27 27</a><br />
      <a href="mailto:conservatoire@agglo-belfort.fr">conservatoire@agglo-belfort.fr</a>
    </address>
  </div>

  <div>
    <LogoGrandBelfort/>
  </div>

  <div class="space-y-3">
    <h3 class="uppercase text-sm tracking-wide text-stone-400">Nous suivre</h3>
    <ul class="flex gap-4">
      {socialLinks.map(({ url, label, Icon }) => (
        <li>
          <a href={url} aria-label={label}>
            <Icon class="fill-white"/>
          </a>
        </li>
      ))}
    </ul>
  </div>
</footer>

Classes mobile ajoutées :

Footer : space-y-6 (espacement vertical), bg-stone-900 (fond sombre), py-16 px-6 (padding), text-white
Titres h3 : uppercase (majuscules), tracking-wide (espacement lettres), text-stone-400 (couleur grise)
Sections : space-y-3 (espacement entre titre et contenu)
Address : not-italic (supprime l’italique par défaut)
Réseaux sociaux : flex gap-4 (affichage horizontal avec espacement)
Icônes SVG : fill-white (couleur de remplissage)
Étape 6 : Styles desktop avec grille
Ajoutons maintenant les classes pour positionner les éléments dans notre grille 12 colonnes :

src/components/Footer.astro
---
import LogoFooter from '../assets/icones/icon_logoFooter.svg';
import LogoGrandBelfort from '../assets/icones/logo-grand-belfort.svg';
import IconFacebook from '../assets/icones/icon_facebook.svg';
import IconInstagram from '../assets/icones/icon_instagram.svg';
import IconTwitter from '../assets/icones/icon_twitter.svg';
import IconYoutube from '../assets/icones/icon_youtube.svg';

const socialLinks = [
  { url: 'https://facebook.com', label: 'facebook', Icon: IconFacebook },
  { url: 'https://instagram.com', label: 'instagram', Icon: IconInstagram },
  { url: 'https://twitter.com', label: 'twitter', Icon: IconTwitter },
  { url: 'https://youtube.com', label: 'youtube', Icon: IconYoutube },
];
---

<footer class="grille space-y-6 text-sm bg-stone-900 py-16 px-6 text-white lg:space-y-0">
  <a class="block" href="/" aria-label="Accueil">
    <LogoFooter/>
  </a>

  <nav class="space-y-3 lg:col-span-3 lg:col-start-7">
    <h3 class="uppercase text-sm tracking-wide text-stone-400">Menu</h3>
    <ul>
      <li><a href="/agenda">Agenda</a></li>
      <li><a href="/contact">Contact et accès</a></li>
    </ul>
  </nav>

  <div class="space-y-3 lg:col-span-3 lg:col-start-10">
    <h3 class="uppercase text-sm tracking-wide text-stone-400">Contact</h3>
    <address class="not-italic">
      1 rue Paul Koepfler<br />90000 Belfort<br />
      <a href="tel:0384542727">03 84 54 27 27</a><br />
      <a href="mailto:conservatoire@agglo-belfort.fr">conservatoire@agglo-belfort.fr</a>
    </address>
  </div>

  <div class="lg:col-span-3 lg:col-start-7">
    <LogoGrandBelfort/>
  </div>

  <div class="space-y-3 lg:col-span-3 lg:col-start-10">
    <h3 class="uppercase text-sm tracking-wide text-stone-400">Nous suivre</h3>
    <ul class="flex gap-4">
      {socialLinks.map(({ url, label, Icon }) => (
        <li>
          <a href={url} aria-label={label}>
            <Icon class="fill-white"/>
          </a>
        </li>
      ))}
    </ul>
  </div>
</footer>

Positionnement dans la grille :

lg:space-y-0 : Supprime l’espacement vertical en desktop (éléments côte à côte)
lg:col-span-3 : L’élément occupe 3 colonnes
lg:col-start-7 : L’élément commence à la colonne 7
lg:col-start-10 : L’élément commence à la colonne 10



 H3/Composant Header
     Le Header est la barre de navigation principale du site. Il contient le logo, la navigation et un bouton de recherche. Sur mobile, la navigation est cachée derrière un menu hamburger. Le header s’adapte également au scroll de la page en se masquant ou en changeant de couleur.

Commençons par la structure html de base avec les assets :

Étape 1 : Structure de base
Créons la navigation avec sa liste de liens :

src/components/Header.astro
---
import Logo from "../assets/icones/logo.svg";
import IconSearch from "../assets/icones/icon_search.svg";
---

<header>
  <div>
    <a href="/" aria-label="Accueil">
      <Logo />
    </a>
  </div>

  <div>
    <button aria-label="Recherche">
      <IconSearch />
    </button>

    <button
      id="menu-btn"
      aria-label="Menu"
      aria-controls="menu"
      aria-expanded="false"
    >
      <span></span>
      <span></span>
      <span></span>
    </button>

    <!-- Navigation -->
    <nav id="menu" aria-hidden="true">
      <ul>
        <li>
          <a href="/conservatoire">Le conservatoire</a>
        </li>
        <li>
          <a href="/enseignements">Enseignements</a>
        </li>
        <li>
          <a href="/agenda">Agenda</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
        <li>
          <a href="/inscription">S'inscrire</a>
        </li>
      </ul>
    </nav>
  </div>
</header>

Attributs ARIA :

aria-label : indique la nature de l’élément lorsqu’il na pas de contenu textuel
aria-controls="menu" : Indique quel élément est contrôlé par ce bouton
aria-expanded="false" : Indique l’état du menu (ouvert/fermé)
aria-hidden="true" : caché par défaut. JavaScript basculera cet attribut
Étape 2 : Styles du header, du logo et du bouton de recherche
Ajoutons les classes Tailwind pour le positionnement et les styles de base :

src/components/Header.astro
---
import Logo from "../assets/icones/logo.svg";
import IconSearch from "../assets/icones/icon_search.svg";
---

<header
  class="fixed z-10 flex w-full items-stretch justify-between px-6 py-4 transition-all duration-300 ease-in-out"
  id="header"
>
  <div class="relative z-20 flex items-center">
    <a href="/" aria-label="Accueil">
      <Logo />
    </a>
  </div>

  <div class="flex items-center gap-4">
    <button class="flex w-12 justify-center" aria-label="Recherche">
      <IconSearch />
    </button>

Classes header :

fixed z-10 : Positionné en haut de page, au-dessus du contenu
flex justify-between : Disposition horizontale avec espace entre logo et menu
w-full : Prend toute la largeur
transition-all duration-300 : Animations fluides pour les changements d’état
flex items-center gap-4 : Aligne les éléments horizontalement avec espacement
flex w-12 justify-center : Centre l’icône de recherche
Étape 3 : Styles du bouton hamburger
Créons l’animation du bouton hamburger avec les trois barres :

src/components/Header.astro
---
import Logo from "../assets/icones/logo.svg";
import IconSearch from "../assets/icones/icon_search.svg";
---
    <button
      class="group *:ease relative z-20 flex h-6 w-8 flex-col justify-between *:h-0.5 *:w-full *:bg-white *:transition-all *:duration-300"
      id="menu-btn"
      aria-label="Menu"
      aria-controls="menu"
      aria-expanded="false"
    >
      <span
        class="group-aria-expanded:translate-y-[10.5px] group-aria-expanded:rotate-45"
      ></span>
      <span class="group-aria-expanded:opacity-0"></span>
      <span
        class="group-aria-expanded:-translate-y-[10.5px] group-aria-expanded:-rotate-45"
      ></span>
    </button>

</header>

Classes du bouton :

group : Permet d’utiliser les variants group-* sur les enfants
*: : Applique les styles à tous les enfants directs (les 3 <span>)
*:bg-white *:h-0.5 : Barres blanches de 2px de hauteur
Animation hamburger → X :

group-aria-expanded: : Classes actives quand aria-expanded="true"
Barre 1 : Se déplace vers le bas et tourne de 45°
Barre 2 : Devient invisible
Barre 3 : Se déplace vers le haut et tourne de -45°
Étape 4 : Styles de la navigation mobile
Ajoutons les styles pour le menu plein écran sur mobile :

src/components/Header.astro
---
import Logo from "../assets/icones/logo.svg";
import IconSearch from "../assets/icones/icon_search.svg";
---
    <nav
      class="visible fixed inset-0 z-10 bg-indigo text-2xl text-white opacity-100 transition-all duration-300 ease-in-out"
      id="menu"
      aria-hidden="true"
    >
      <ul
        class="mx-16 mt-[25vh] *:relative *:overflow-hidden"
      >
        <li>
          <a class="block px-5 py-4" href="/conservatoire">
            Le conservatoire
          </a>
        </li>
        <li>
          <a class="block px-5 py-4" href="/enseignements">
            Enseignements
          </a>
        </li>
        <li>
          <a class="block px-5 py-4" href="/agenda">Agenda</a>
        </li>
        <li>
          <a class="block px-5 py-4" href="/contact">
            Contact
          </a>
        </li>
        <li>
          <a class="block px-5 py-4" href="/inscription">S'inscrire</a>
        </li>
      </ul>
    </nav>
  </div>
</header>

Classes navigation mobile :

fixed inset-0 : Occupe tout l’écran
bg-indigo text-white text-2xl : Fond indigo avec texte blanc et grande taille
max-lg:aria-hidden:invisible max-lg:aria-hidden:opacity-0 : Caché quand aria-hidden="true" sur mobile
transition-all duration-300 : Animation douce à l’ouverture/fermeture
Classes liste :

mx-16 mt-[25vh] : Marges et positionnement vertical centré
block px-5 py-4 : Liens cliquables avec padding généreux
Étape 5 : Interaction du menu
Créez un répertoire js à la racine de src. Ajoutez-y un fichier header.js.

src/js/header.js
/**
 * Gestion du menu mobile (hamburger)
 */
function initMobileMenu() {
  const toggle = document.querySelector("#menu-btn");
  const nav = document.querySelector("#menu");
  const page = document.body;

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const isOpen = toggle.ariaExpanded === "true";
      const isClosed = !isOpen;
      // Mise à jour des attributs ARIA pour accessibilité
      toggle.ariaExpanded = String(isClosed);
      nav.ariaHidden = String(isOpen);
      page.classList.toggle("overflow-hidden", isClosed);
    });
  }
}
// Initialisation au chargement du DOM
initMobileMenu();

Explication du code JavaScript
Sélection des éléments :

#menu-btn : Le bouton hamburger
#menu : La navigation à afficher/masquer
document.body : Pour bloquer le scroll de la page quand le menu est ouvert
Logique de bascule :

Au clic sur le bouton, on récupère l’état actuel via ariaExpanded
On inverse l’état : si ouvert → fermé, si fermé → ouvert
On met à jour les attributs ARIA pour l’accessibilité
On bloque le scroll de la page (overflow-hidden) quand le menu est ouvert
Pourquoi String() ? : Les attributs ARIA attendent des chaînes de caractères, pas des booléens. String(true) convertit en "true".

Bonnes pratiques

Vérification de l’existence : Le if (toggle && nav) évite les erreurs si les éléments n’existent pas
ARIA first : On utilise les attributs ARIA comme source de vérité, pas des classes CSS
Accessibilité : Les lecteurs d’écran annoncent correctement l’état du menu grâce aux attributs ARIA
UX mobile : Bloquer le scroll (overflow-hidden) évite les interactions confuses quand le menu est ouvert
src/components/Header.astro
---
import Logo from "../assets/icones/logo.svg";
import IconSearch from "../assets/icones/icon_search.svg";
---

<header
    <nav
      class="visible fixed inset-0 z-10 bg-indigo text-2xl text-white opacity-100 transition-all duration-300 ease-in-out max-lg:aria-hidden:invisible max-lg:aria-hidden:opacity-0"
      id="menu"
      aria-hidden="true"
    >
</header>

<script src="../js/header.js"></script>

Variants Tailwind basés sur ARIA
Tailwind permet d’utiliser des variants basés sur les attributs ARIA pour styler les éléments selon leur état :

Syntaxe générale :

aria-[attribut]:[classes]

Dans notre cas :

max-lg:aria-hidden:invisible : Applique invisible quand aria-hidden="true" sur mobile
max-lg:aria-hidden:opacity-0 : Applique opacity-0 quand aria-hidden="true" sur mobile
Avantages :

Synchronisation automatique entre l’état ARIA (accessibilité) et les styles visuels
JavaScript modifie uniquement aria-hidden, le CSS s’adapte automatiquement
Plus maintenable que de gérer des classes CSS personnalisées
Autres variants ARIA utiles

aria-expanded: → Pour les accordéons et dropdowns
aria-selected: → Pour les onglets et listes sélectionnables
aria-checked: → Pour les cases à cocher personnalisées
aria-pressed: → Pour les boutons toggle
Exemple : aria-expanded:rotate-180 pour faire pivoter une icône de chevron

Étape 6 : Styles desktop
Ajoutons les styles pour transformer le menu en navigation horizontale sur desktop :

src/components/Header.astro
---
import Logo from "../assets/icones/logo.svg";
import IconSearch from "../assets/icones/icon_search.svg";
---

<header
  class="fixed z-10 flex w-full items-stretch justify-between px-6 py-4 transition-all duration-300 ease-in-out lg:bg-white lg:py-0"
  id="header"
>
  <div class="relative z-20 flex items-center">
    <a href="/" aria-label="Accueil">
      <Logo />
    </a>
  </div>

  <div class="flex items-center gap-4 lg:flex-row-reverse">
    <button class="flex w-12 justify-center" aria-label="Recherche">
      <IconSearch />
    </button>

    <button
      class="group *:ease relative z-20 flex h-6 w-8 flex-col justify-between *:h-0.5 *:w-full *:bg-white *:transition-all *:duration-300 lg:hidden"
      id="menu-btn"
      aria-label="Menu"
      aria-controls="menu"
      aria-expanded="false"
    >
      <span
        class="group-aria-expanded:translate-y-[10.5px] group-aria-expanded:rotate-45"
      ></span>
      <span class="group-aria-expanded:opacity-0"></span>
      <span
        class="group-aria-expanded:-translate-y-[10.5px] group-aria-expanded:-rotate-45"
      ></span>
    </button>

    <!-- Navigation -->
    <nav
      class="visible fixed inset-0 z-10 bg-indigo text-2xl text-white opacity-100 transition-all duration-300 ease-in-out max-lg:aria-hidden:invisible max-lg:aria-hidden:opacity-0 lg:relative lg:flex lg:items-center lg:bg-transparent lg:text-sm lg:font-bold lg:tracking-wide lg:text-black lg:uppercase lg:opacity-100"
      id="menu"
      aria-hidden="true"
    >
      <ul
        class="mx-16 mt-[25vh] *:relative *:overflow-hidden lg:m-0 lg:flex *:lg:before:absolute *:lg:before:bottom-0 *:lg:before:left-0 *:lg:before:h-2 *:lg:before:w-full *:lg:before:translate-y-2 *:lg:before:bg-black *:lg:before:transition-all *:lg:before:duration-300 *:lg:before:ease-in-out *:lg:hover:before:translate-y-0"
      >
        <li>
          <a class="block px-5 py-4 lg:py-8" href="/conservatoire"
            >Le conservatoire</a
          >
        </li>
        <li>
          <a class="block px-5 py-4 lg:py-8" href="/enseignements"
            >Enseignements</a
          >
        </li>
        <li>
          <a class="block px-5 py-4 lg:py-8" href="/agenda">Agenda</a>
        </li>
        <li>
          <a class="block px-5 py-4 lg:py-8" href="/contact">Contact</a>
        </li>
        <li>
          <a
            class="block px-5 py-4 lg:bg-black lg:px-8 lg:py-8 lg:text-white"
            href="/inscription">S'inscrire</a
          >
        </li>
      </ul>
    </nav>
  </div>
</header>

<script src="../js/header.js"></script>

Modifications desktop :

lg:bg-white lg:py-0 : Fond blanc permanent sur le header
lg:flex-row-reverse : Inverse l’ordre (navigation avant recherche)
lg:hidden : Masque le bouton hamburger
Navigation : lg:relative lg:flex transforme le menu plein écran en navigation horizontale
lg:text-sm lg:font-bold lg:uppercase lg:text-black : Styles typographiques desktop
Animation underline au hover :

*:lg:before: : Crée un pseudo-élément sous chaque lien
*:lg:before:translate-y-2 : Caché par défaut (en dessous)
*:lg:hover:before:translate-y-0 : Remonte au survol
Dernier lien :

lg:bg-black lg:text-white : Style bouton CTA pour “S’inscrire”
Étape 7 : Comportement au scroll
Ajoutons maintenant la logique pour masquer/afficher le header au scroll et changer sa couleur de fond.

Modifions le fichier src/js/header.js pour ajouter la fonction initHeaderScroll() :

src/js/header.js
/**
 * Gestion du comportement du header au scroll
 * - Ajoute un fond blanc après un certain offset
 * - Masque/affiche selon le sens du scroll
 */
function initHeaderScroll() {
  const navBar = document.querySelector("#header");
  if (!navBar) return;

  let lastScrollY = 0;
  let ticking = false;
  const offset = 205;

  function handleScroll() {
    const currentScrollY = window.scrollY;
    const isPastOffset = currentScrollY > offset;

    // Toggle classes selon la position
    navBar.classList.toggle("bg-white", isPastOffset);
    navBar.classList.toggle(
      "-translate-y-full",
      currentScrollY > lastScrollY && isPastOffset
    );

    lastScrollY = currentScrollY;
    ticking = false;
  }

  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(handleScroll);
      ticking = true;
    }
  });
}

// Initialisation au chargement du DOM
initMobileMenu();
initHeaderScroll();

Explication de la fonction de scroll
Variables d’état :

lastScrollY : Mémorise la position de scroll précédente pour détecter la direction
ticking : Flag pour le throttling via requestAnimationFrame
offset : Seuil de 205px avant d’activer les effets
Logique du fond blanc :

const isPastOffset = currentScrollY > offset;
navBar.classList.toggle("bg-white", isPastOffset);

Ajoute bg-white après 205px de scroll pour améliorer la lisibilité sur les contenus clairs.

Logique du masquage :

navBar.classList.toggle(
  "-translate-y-full",
  currentScrollY > lastScrollY && isPastOffset
);

Scroll vers le bas + au-delà de l’offset → masque le header (-translate-y-full)
Scroll vers le haut ou en haut de page → affiche le header
Optimisation des performances : L’utilisation de requestAnimationFrame avec le flag ticking limite les calculs au taux de rafraîchissement de l’écran (60 FPS), évitant de traiter chaque événement scroll (qui peut se déclencher des centaines de fois par seconde).

Test du comportement

Pour tester facilement ce comportement, ajoutez une hauteur temporaire au <main> dans votre layout :

src/layouts/Layout.astro
<main class="h-[2000px] bg-gray-500">

Cela permettra de scroller et d’observer le comportement du header.

Ajustements CSS pour le comportement au scroll
Ajoutons quelques règles CSS pour gérer la couleur des icônes selon l’état du header :

src/styles/global.css
@import "tailwindcss";
@layer components {
  .grille {
    @apply px-6 lg:grid lg:grid-cols-(--my-grid) lg:justify-center lg:gap-12;
  }
  header.bg-white #menu-btn[aria-expanded="false"] > span {
    @apply !bg-black;
  }
  header:not(.bg-white) button[aria-label="Recherche"] > svg > * {
    @apply max-lg:stroke-white;
  }
}

Règle 1 : Barres du hamburger en noir sur fond blanc :

header.bg-white #menu-btn[aria-expanded="false"] > span {
  @apply !bg-black;
}

Quand le header a un fond blanc et que le menu est fermé, les barres du hamburger passent en noir pour rester visibles. Le ! force la règle (important).

Règle 2 : Icône de recherche blanche sans fond :

header:not(.bg-white) button[aria-label="Recherche"] > svg > * {
  @apply max-lg:stroke-white;
}

Sur mobile, quand le header n’a pas de fond blanc (donc transparent), l’icône de recherche reste blanche.

Pourquoi ces règles CSS et non Tailwind ?

Ces règles combinent des sélecteurs conditionnels complexes (.bg-white, [aria-expanded], :not()) avec des ciblages profonds (> svg > *). Tailwind ne permet pas facilement ce niveau de spécificité dans les classes, d’où l’utilisation de CSS personnalisé dans @layer components.



 H3/Composant Hero
    Contrairement aux composants Footer et Header qui restent identiques sur toutes les pages, le Hero est notre premier composant véritablement dynamique. Son contenu doit s’adapter au contexte : page d’accueil avec disiciplines et icônes, pages standards avec chapo descriptif, pages événements avec visuels spécifiques… Cette flexibilité nécessite une approche différente de celle des composants statiques précédents.

Hero
Hero
Hero
Hero
Étape 1 : Structure de base avec titre et sous-titre
Créez le fichier Hero.astro dans le répertoire src/components.

Hero
Commençons par définir les props et le rendu conditionnel du sous-titre :

src/components/Hero.astro
---
const { title, subTitle } = Astro.props;
---

<div>
  <div>
    <h1>{title}</h1>
    {
      subTitle && (
        <h2 class="font-sans text-sm font-bold uppercase lg:text-lg">
          {subTitle}
        </h2>
      )
    }
  </div>
</div>

Props du composant :

title : Le titre principal (obligatoire)
subTitle : Le sous-titre (optionnel)
Rendu conditionnel :

subTitle && : Affiche le <h2> uniquement si subTitle existe
Cette syntaxe JSX évite de rendre un élément vide
Styles du sous-titre :

font-sans text-sm lg:text-lg : Typographie responsive (14px → 18px)
font-bold uppercase : Gras et majuscules pour contraste visuel avec le titre
Étape 2 : Ajout des slots nommés
Certains contenus sont trop différents et trop complexes pour être introduits via des props.

Chapo de la page d’accueil = Icônes + textes

Chapo index
Chapo des pages standards = paragraphe d’introduction

Chapo page
C’est là qu’interviennent les slots. Les slots permettent d’injecter n’importe quel contenu HTML/Astro valide, rendant le Hero extrêmement flexible tout en conservant une structure et un style cohérents.

Les slots
Balise substituable par du contenu HTML externe, permettant d’injecter des éléments enfants depuis d’autres fichiers dans un modèle de composant.
Utilisation des slots nommés

Les slots nommés permettent d’avoir plusieurs zones de contenu personnalisable dans un composant. Exemple d’utilisation :

<Hero title="Mon titre">
  <p slot="chapo">Texte d'introduction simple</p>
  <Picture slot="image" src={monImage} alt="Description" />
</Hero>

Voici les zones du Hero qui doivent être “personnalisables” :

Hero structure
Slot chapo : Le contenu de présentation varie selon le contexte

Navigation interactive avec icônes et composants SVG
Paragraphe simple de description
Slot image : Les sources et traitements d’images diffèrent

Images statiques importées localement
Composants d’image spécialisés (<Picture>, <ImagePB>)
Slot patterns : Les éléments décoratifs sont optionnels et contextuels

Motifs SVG animés avec effets de fusion CSS
Souvent omis pour un design sobre
Ajoutons les slots pour le chapo, l’image de fond et les éléments décoratifs :

src/components/Hero.astro
---
const { title, subTitle } = Astro.props;
---

<div>
  <div>
    <h1>{title}</h1>
    {
      subTitle && (
        <h2 class="font-sans text-sm font-bold uppercase lg:text-lg">
          {subTitle}
        </h2>
      )
    }
  </div>

  <div>
    <slot name="chapo" />
  </div>

  <slot name="image" />
  <slot name="patterns" />
</div>

Dans les chapitres suivants, nous verrons des utilisations concrètes du Hero avec différents types de contenu adaptés aux besoins spécifiques de la page d’accueil et des pages dynamiques.

Étape 3 : Version mobile
Ajoutons les styles pour la version mobile avec une grille verticale plein écran :

src/components/Hero.astro
---
const { title, subTitle } = Astro.props;
---

<div
  class="grille relative grid h-screen grid-rows-[4fr_1fr] bg-indigo"
>
  <div class="z-2 my-12 space-y-8 self-end text-white">
    <h1>{title}</h1>
    {
      subTitle && (
        <h2 class="font-sans text-sm font-bold uppercase lg:text-lg">
          {subTitle}
        </h2>
      )
    }
  </div>

  <div
    class="relative z-1 row-start-2 -mx-6 flex items-center bg-white px-6 text-xl leading-normal"
  >
    <slot name="chapo" />
  </div>

  <slot name="image" />
  <slot name="patterns" />
</div>

Grille principale :

grille : Classe personnalisée définie dans global.css pour la grille 12 colonnes
relative : Contexte de positionnement pour les éléments enfants
grid h-screen : Grille qui occupe toute la hauteur de l’écran (100vh)
grid-rows-[4fr_1fr] : Divise en 2 lignes avec ratio 4:1 (titre prend 80%, chapo 20%)
bg-indigo : Ajout de la couleur indigo en fond
Unité fractionnelle
fr

L’unité fr (fraction) divise l’espace disponible proportionnellement. [4fr_1fr] signifie que la première ligne prend 80% de l’espace et la seconde 20%.

Zone titre :

z-2 : Index z pour être au-dessus de l’image (z-index: 2)
my-12 space-y-8 : Marges verticales de 48px et espacement entre titre/sous-titre de 32px
self-end : Aligne le contenu en bas de sa zone de grille
text-white : Texte blanc pour contraster avec l’image de fond
Zone chapo :

relative z-1 : Sous le titre (z-index: 1) mais au-dessus de l’image
row-start-2 : Se place sur la deuxième ligne de la grille
-mx-6 : Marges négatives pour sortir du padding du .grille (pleine largeur)
px-6 : Padding horizontal interne de 24px
flex items-center : Centre le texte verticalement
bg-white : Fond blanc
text-xl leading-normal : Taille de texte 20px avec interlignage normal
Étape 4 : Version desktop
Chapo page
Ajoutons les styles responsive pour adapter la mise en page sur grand écran :

src/components/Hero.astro
---
const { title, subTitle } = Astro.props;
---

<div
  class="grille relative grid h-screen grid-rows-[4fr_1fr] bg-indigo lg:grid-rows-[3fr_1fr]"
>
  <div class="z-2 my-12 space-y-8 self-end text-white lg:col-span-9">
    <h1>{title}</h1>
    {
      subTitle && (
        <h2 class="font-sans text-sm font-bold uppercase lg:text-lg">
          {subTitle}
        </h2>
      )
    }
  </div>

  <div
    class="relative z-1 row-start-2 -mx-6 flex items-center bg-white px-6 text-xl leading-normal lg:col-span-9 lg:mx-0 lg:pl-0 lg:text-3xl lg:before:absolute lg:before:top-0 lg:before:ml-[-100%] lg:before:h-full lg:before:w-full lg:before:bg-white"
  >
    <slot name="chapo" />
  </div>

  <slot name="image" />
  <slot name="patterns" />
</div>

Grille desktop :

lg:grid-rows-[3fr_1fr] : Change le ratio à 3:1 sur desktop (titre 75%, chapo 25%)
Zone titre desktop :

lg:col-span-9 : Occupe 9 colonnes sur 12 pour créer une marge à droite
Zone chapo desktop :

lg:col-span-9 : Aligné avec le titre (9 colonnes)
lg:mx-0 lg:pl-0 : Réinitialise les marges négatives et padding du mobile
lg:text-3xl : Augmente la taille du texte à 30px
Pseudo-élément d’extension :

lg:before:absolute : Crée un pseudo-élément ::before positionné
lg:before:top-0 lg:before:h-full lg:before:w-full : Même dimensions que le parent
lg:before:ml-[-100%] : Décale à gauche de 100% de sa largeur
lg:before:bg-white : Fond blanc pour étendre visuellement la zone blanche vers la gauche
Technique du pseudo-élément

Le ::before permet d’étendre visuellement le fond blanc vers la gauche sur desktop sans affecter le contenu ou la structure HTML. Cela crée un effet de débordement élégant hors de la grille 12 colonnes, tout en gardant le contenu aligné.

Étape 5 : Intégration du composant dans la page d’accueil
Maintenant que le composant Hero est créé, testons-le en l’intégrant dans la page d’accueil. Nous allons utiliser le slot chapo pour afficher un bloc avec des icônes représentant les trois disciplines enseignées au conservatoire.

Intégration du Hero :

src/pages/index.astro
---
import Layout from "../layouts/Layout.astro";
import Hero from "../components/Hero.astro";

import IconMusique from "../assets/icones/icon_musique.svg";
import IconTheatre from "../assets/icones/icon_theatre.svg";
import IconDanse from "../assets/icones/icon_danse.svg";
---

<Layout>
  <h1>Conservatoire Henri Dutilleux</h1>
  <h2>Titre de niveau 2</h2>
  <h3>Titre de niveau 3</h3>
  <p>Texte standard</p>
  <Hero
    title="Conservatoire Henri Dutilleux"
    subTitle="Conservatoire à rayonnement départemental du grand belfort"
  >
    <div class="flex-1 font-mono lg:text-3xl" slot="chapo">
      <ul
        class="grid grid-cols-3 gap-12 *:flex *:flex-col *:items-center *:gap-4 *:lg:flex-row"
      >
        <li><IconMusique /> Musique</li>
        <li><IconTheatre /> Théâtre</li>
        <li><IconDanse /> Danse</li>
      </ul>
    </div>
  </Hero>
</Layout>

Changements apportés :

Import du composant Hero : import Hero from "../components/Hero.astro"

Import des icônes SVG : Les trois icônes représentant les disciplines (musique, théâtre, danse)

Utilisation du composant :

Props title et subTitle pour le contenu textuel principal
Slot chapo contenant une liste interactive avec icônes
Styles du chapo :

flex-1 : Prend tout l’espace disponible
font-mono : Utilise la police monospace
lg:text-3xl : Taille de texte responsive (20px → 30px)
grid grid-cols-3 gap-12 : Grille 3 colonnes avec espacement
*:flex *:flex-col *:items-center : Chaque <li> en flexbox vertical centré
*:lg:flex-row : Passage en flexbox horizontal sur desktop
Slots image et patterns

Pour l’instant, nous n’utilisons que le slot chapo. Les slots image et patterns seront intégrés dans les chapitres suivants pour ajouter l’image de fond et les éléments décoratifs.

Étape 6 : Ajout des métadonnées SEO
Pour améliorer le référencement de la page, nous devons ajouter des métadonnées SEO (titre et description) au composant Layout. Plutôt que de passer ces informations directement sous forme de chaînes de caractères dans les props, il est préférable de les définir comme variables. Cette approche présente plusieurs avantages :

Pourquoi utiliser des variables ?

Réutilisabilité : Le titre peut être utilisé à la fois pour le SEO (<Layout>) et pour l’affichage visuel (<Hero>)
Cohérence : Garantit que le titre affiché et le titre SEO sont identiques
Maintenance : Une seule modification met à jour tous les usages
Lisibilité : Le code est plus clair avec des variables nommées explicitement
Évolutivité : Facilite l’ajout de logique (traductions, transformations, etc.)
Version améliorée avec variables :

src/pages/index.astro
---
import Layout from "../layouts/Layout.astro";
import Hero from "../components/Hero.astro";

import IconMusique from "../assets/icones/icon_musique.svg";
import IconTheatre from "../assets/icones/icon_theatre.svg";
import IconDanse from "../assets/icones/icon_danse.svg";

const title = "Conservatoire Henri Dutilleux";
const subTitle = "Conservatoire à Rayonnement Départemental du Grand Belfort";
const description = "Le Conservatoire Henri Dutilleux de Belfort vous accueille pour découvrir la musique, la danse et le théâtre.";
---

<Layout title={title} description={description}>
  <Hero
    title="Conservatoire Henri Dutilleux"
    subTitle="Conservatoire à rayonnement départemental du grand belfort"
  >
  <Hero title={title} subTitle={subTitle}>
    <div class="flex-1 font-mono lg:text-3xl" slot="chapo">
      <ul
        class="grid grid-cols-3 gap-12 *:flex *:flex-col *:items-center *:gap-4 *:lg:flex-row"
      >
        <li><IconMusique /> Musique</li>
        <li><IconTheatre /> Théâtre</li>
        <li><IconDanse /> Danse</li>
      </ul>
    </div>
  </Hero>
</Layout>

Définition des variables :

title : Utilisé pour le SEO et l’affichage dans le Hero
subTitle : Sous-titre spécifique au Hero (non utilisé pour le SEO)
description : Meta description pour les moteurs de recherche
Transmission aux composants :

<Layout title={title} description={description}> : Props SEO pour les balises <meta>
<Hero title={title} subTitle={subTitle}> : Props visuelles pour l’affichage
Bonne pratique SEO

Le titre (title) et la description (description) définis ici apparaîtront dans :

L’onglet du navigateur
Les résultats de recherche Google
Les aperçus sur les réseaux sociaux (avec Open Graph)
Assurez-vous que la description soit concise (150-160 caractères) et décrive précisément le contenu de la page.



 H3/Composant Image & duotone
     Astro propose deux composants natifs pour gérer les images de manière optimisée : <Image> et <Picture>. Ces composants génèrent automatiquement plusieurs formats d’images (WebP, AVIF) et différentes tailles pour améliorer les performances.

Composants Image et Picture
Astro propose plusieurs façons d’utiliser les images, qu’elles soient stockées localement dans le projet, liées à une URL externe ou gérées dans un CMS ou un CDN.
Étape 1 : Les composants Image et Picture d’Astro
Différences entre Image et Picture
<Image> : Composant simple pour une seule image optimisée

Génère une balise <img> avec un seul format
Idéal pour les images fixes de taille connue
Supporte les transformations (resize, format, qualité)
<Picture> : Composant avancé pour responsive images

Génère une balise <picture> avec plusieurs <source>
Supporte plusieurs formats (WebP, AVIF, fallback)
Gère automatiquement les différentes résolutions (1x, 2x)
Idéal pour les images pleine largeur ou critiques pour le LCP
Exemple d’utilisation basique
---
import { Image, Picture } from "astro:assets";
import monImage from "../assets/img/photo.jpg";
---

<!-- Image simple -->
<Image
  src={monImage}
  alt="Description"
  width={800}
  height={600}
/>

<!-- Picture avec formats multiples -->
<Picture
  src={monImage}
  alt="Description"
  formats={['avif', 'webp']}
  widths={[400, 800, 1200]}
/>

Avantages d’Astro :

Optimisation automatique à la compilation
Génération de plusieurs formats et tailles
Pas de bundle JavaScript nécessaire
Support TypeScript pour les imports d’images
Attributs width et height automatiques (évite le CLS)
Performance

Le composant <Picture> est recommandé pour les images hero et les images de contenu importantes. Il génère automatiquement des formats modernes (AVIF, WebP) avec fallback, réduisant significativement le poids des images.

Étape 2 : Intégration de Picture dans le Hero
Modifiez la page d’accueil depuis src/pages/index.astro de la manière suivante :

src/pages/index.astro
---
import { Picture } from "astro:assets";

import Layout from "../layouts/Layout.astro";
import Hero from "../components/Hero.astro";

import IconMusique from "../assets/icones/icon_musique.svg";
import IconTheatre from "../assets/icones/icon_theatre.svg";
import IconDanse from "../assets/icones/icon_danse.svg";
import imgHero from "../assets/img/musique-01.jpg";

const title = "Conservatoire Henri Dutilleux";
const subTitle = "Conservatoire à Rayonnement Départemental du Grand Belfort";
const description =
  "Le Conservatoire Henri Dutilleux de Belfort vous accueille pour découvrir la musique, la danse et le théâtre.";
---

<Layout title={title} description={description}>
  <Hero title={title} subTitle={subTitle}>
    <div class="flex-1 font-mono lg:text-3xl" slot="chapo">
      <ul
        class="grid grid-cols-3 gap-12 *:flex *:flex-col *:items-center *:gap-4 *:lg:flex-row"
      >
        <li><IconMusique /> Musique</li>
        <li><IconTheatre /> Théâtre</li>
        <li><IconDanse /> Danse</li>
      </ul>
    </div>
    <Picture
      slot="image"
      src={imgHero}
      alt="Violoncelles"
      layout="full-width"
      pictureAttributes={{ class: "absolute inset-0 object-cover" }}
    />
  </Hero>
</Layout>

Explications des attributs Picture :

layout="full-width" : Définit le comportement responsive de l’image (voir ci-dessous)
pictureAttributes : Attributs appliqués à la balise <picture>
Classes de positionnement :

absolute inset-0 : Positionne la picture en absolu sur tout le container
object-cover : L’image couvre tout l’espace en conservant ses proportions
Valeurs de l’attribut layout
L’attribut layout contrôle comment l’image s’adapte aux différentes tailles d’écran :

layout="constrained" :

L’image se réduit pour s’adapter au conteneur en conservant son ratio d’aspect
Ne s’agrandit jamais au-delà de width et height spécifiés ou des dimensions originales
Nécessite width et height pour calculer le ratio et éviter le CLS (Cumulative Layout Shift)
Génère plusieurs tailles d’images pour différents écrans
Idéal pour les images de contenu, articles, galeries
Comportement par défaut avec Tailwind
layout="full-width" :

L’image remplit toute la largeur de son conteneur parent
S’adapte en largeur tout en conservant le ratio d’aspect
Génère automatiquement plusieurs tailles (640, 750, 828, 1080, 1200, 1920, 2048, 3840px)
Idéal pour les images hero, bannières pleine largeur, images de fond
layout="fixed" :

L’image conserve les dimensions demandées définies par width et height
Ne se redimensionne pas selon le container
Génère des variantes 1x et 2x pour les écrans haute densité (Retina)
Idéal pour les logos, icônes, avatars de taille fixe
layout="none" :

Désactive les images adaptatives
Aucun attribut srcset ou sizes généré automatiquement
Aucun style appliqué
Utile pour contrôle manuel complet
Choix du layout

Images de contenu, articles → layout="constrained" (recommandé en cas de doute)
Hero, bannières pleine largeur → layout="full-width"
Logos, icônes, avatars → layout="fixed"
Contrôle manuel complet → layout="none"
Comportement des images adaptatives

Depuis Astro v5, le composant <Picture> génère automatiquement des tailles d’images adaptatives basées sur les breakpoints standards (640, 750, 828, 1080, 1200, 1920, 2048, 3840). Vous pouvez également spécifier manuellement les widths pour un contrôle plus fin.

Le navigateur choisit automatiquement la taille la plus adaptée selon :

La résolution de l’écran (DPR : Device Pixel Ratio)
La largeur d’affichage réelle du container
Les conditions réseau (sur certains navigateurs)
En savoir plus sur le comportement adaptatif

Étape 3 : Ajout de l’effet Duotone (Bichromie)
L’effet duotone transforme une image en deux tons de couleur. C’est un effet visuel élégant pour les images de fond.

Ajout du composant CSS
Dans src/styles/global.css, ajoutez le composant duotone dans la layer @layer components :

src/styles/global.css
@layer components {
  .duotone {
    @apply relative flex overflow-hidden bg-pink before:absolute before:inset-0 before:z-1 before:bg-indigo before:mix-blend-lighten before:transition-all before:duration-300 before:ease-in-out;
    img {
      @apply flex-[1_0_100%] object-cover mix-blend-multiply grayscale transition-all duration-300 ease-in-out;
    }
  }
}

test
Décomposition de l’effet duotone
Container .duotone :

relative : Contexte de positionnement pour le pseudo-élément
flex overflow-hidden : Conteneur flex qui masque les débordements
bg-pink : Fond rose (première couleur du duotone)
Pseudo-élément ::before :

before:absolute before:inset-0 before:z-1 : Calque absolu qui couvre toute la surface
before:bg-indigo : Fond indigo (seconde couleur du duotone)
before:mix-blend-lighten : Mode de fusion “lighten” pour créer l’effet bicolore
Image img :

flex-[1_0_100%] : Flex basis de 100% (prend tout l’espace disponible)
object-cover : Couvre l’espace en conservant le ratio
mix-blend-multiply : Mode de fusion “multiply” avec les couleurs du fond
grayscale : Convertit l’image en niveaux de gris
Transitions :

transition-all duration-300 ease-in-out : Animations douces pour interactions futures
Comment fonctionne l’effet duotone ?

L’image est convertie en niveaux de gris (grayscale)
Le mode multiply multiplie les pixels de l’image avec le fond rose
Le pseudo-élément indigo avec lighten éclaircit les zones claires
Résultat : Les zones sombres deviennent roses, les zones claires deviennent indigo/blanc
Application de l’effet duotone
Modifiez le composant Picture pour ajouter la classe duotone :

src/pages/index.astro
<Picture
  src={imgHero}
  alt="Violoncelles"
  layout="full-width"
  pictureAttributes={{ class:"duotone absolute inset-0 object-cover" }}
/>

L’effet duotone est maintenant appliqué à l’image de fond du Hero !

Récapitulatif
Nous avons vu :

Les composants Astro : <Image> pour les images simples, <Picture> pour les images optimisées responsive
L’optimisation automatique : Génération de plusieurs formats (AVIF, WebP) et tailles
L’effet duotone : Transformation bicolore d’une image via CSS et modes de fusion
La composition : Combinaison de Picture + duotone + positionnement absolu pour un Hero impactant
Cette approche combine performance (images optimisées) et esthétique (effet duotone) pour créer un Hero visuellement fort tout en restant rapide à charger.




 H3/Composant Patterns
     Motifs animés avec SVG et Web Animations API
Branche Git

Branche : 11.-Composant-AnimatedPatterns
N° : 11

Le composant Patterns affiche des motifs SVG décoratifs avec une animation de dessin progressif. Chaque ligne courbe apparaît séquentiellement grâce à la technique du stroke-dashoffset et à la Web Animations API.

Étape 1 : Contenu du fichier SVG
Le fichier SVG contient des chemins (<path>) avec un attribut stroke (contour) plutôt que fill (remplissage). L’effet de dessin fonctionne en animant le contour des chemins.

Structure attendue du SVG :

src/assets/icones/patterns.svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600">
  <g class="curveLines">
    <path d="M 10 100 Q 150 50, 300 100" stroke="#000" fill="none" />
    <path d="M 50 200 Q 200 150, 350 200" stroke="#000" fill="none" />
    <path d="M 100 300 Q 250 250, 400 300" stroke="#000" fill="none" />
    <!-- Plus de chemins pour créer le motif -->
  </g>
</svg>

Points clés :

class="curveLines" : Sur le groupe <g> pour cibler les chemins en JavaScript
stroke="#000" : Contour visible (couleur adaptable)
fill="none" : Pas de remplissage, uniquement le contour
Plusieurs <path> : Chaque path sera animé individuellement
Étape 2 : Structure de base du composant
Créez le fichier AnimatedPatterns.astro dans src/components/ :

src/components/AnimatedPatterns.astro
---
import Patterns from "../assets/icones/patterns.svg";
---

<Patterns />

Étape 3 : Masquage initial des chemins avec CSS
Ajoutez un bloc <style> pour masquer les chemins avant l’animation :

src/components/AnimatedPatterns.astro
---
import Patterns from "../assets/icones/patterns.svg";
---

<Patterns />

<style>
  .curveLines path {
    opacity: 0;
  }
</style>

Explication :

.curveLines path : Cible tous les <path> dans le groupe avec la classe curveLines
opacity: 0 : Masque les chemins au chargement
Les chemins deviendront visibles via l’animation JavaScript
Pourquoi masquer initialement ? :

Évite un “flash” où les chemins sont visibles avant l’animation
Crée un effet de révélation progressif
L’animation va animer l’opacité de 0 à 1 en même temps que le dessin
Scoped styles dans Astro

Les styles dans les composants Astro sont scopés par défaut aux éléments du composant. Cependant, ici on cible des éléments SVG importés, donc le style s’applique directement.

Étape 4 : Sélection des chemins et vérification
Ajoutez un bloc <script> pour sélectionner les chemins SVG :

src/components/AnimatedPatterns.astro
---
import Patterns from "../assets/icones/patterns.svg";
---

<Patterns />

<style>
  .curveLines path {
    opacity: 0;
  }
</style>

<script>
  const lines = document.querySelectorAll(".curveLines path");

  // Vérifier que des paths existent avant d'animer
  if (lines.length > 0) {
    // Animation à venir
  }
</script>

Explication :

document.querySelectorAll(".curveLines path") : Sélectionne tous les <path> dans .curveLines
Retourne une NodeList (liste de nœuds DOM)
if (lines.length > 0) : Sécurité pour vérifier que des chemins existent avant d’animer
Pourquoi cette vérification ? :

Si le SVG n’a pas de chemins ou si la classe est incorrecte, évite une erreur JavaScript
Bon pattern défensif pour les composants réutilisables
Évite des erreurs si le SVG change de structure
Scripts dans Astro

Les scripts dans les composants Astro s’exécutent côté client après le chargement de la page. Utilisez <script> pour les interactions DOM et animations côté navigateur.

Étape 5 : Principe de l’animation stroke-dashoffset
L’animation de dessin SVG repose sur deux propriétés CSS : stroke-dasharray (définit un motif de tirets) et stroke-dashoffset (décale ce motif).

Technique :

Mesurer la longueur du chemin : getTotalLength()
Créer un tiret unique de cette longueur : stroke-dasharray = longueur
Décaler ce tiret hors de vue : stroke-dashoffset = longueur
Animer le décalage vers 0 : le tiret “avance” et dessine le chemin
Résultat : Le chemin se dessine progressivement de 0% à 100%.

getTotalLength()

La méthode getTotalLength() est une API SVG native qui retourne la longueur totale d’un chemin en pixels. Elle fonctionne uniquement sur des éléments <path>.

Documentation MDN

Étape 6 : Configuration du stroke-dasharray
Ajoutez la boucle pour configurer chaque chemin :

src/components/AnimatedPatterns.astro
<script>
  const lines = document.querySelectorAll(".curveLines path");

  if (lines.length > 0) {
    lines.forEach((el, index) => {
      const totalLength = el.getTotalLength();
      el.style.strokeDasharray = totalLength.toString();
      // Animation à venir
    });
  }
</script>

Explication :

lines.forEach((el, index) => {...}) : Parcourt chaque élément <path>
el.getTotalLength() : Mesure la longueur totale du chemin en pixels
el.style.strokeDasharray = totalLength.toString() : Définit un tiret de la longueur totale
index : Position du chemin dans la liste (utilisé pour le délai d’animation)
Résultat : Chaque chemin a maintenant un stroke-dasharray égal à sa longueur totale, prêt pour l’animation du stroke-dashoffset.

Étape 7 : Animation avec Web Animations API
La Web Animations API est une API JavaScript moderne pour créer des animations performantes. Elle offre plus de contrôle que les transitions CSS et est plus légère que des bibliothèques comme GSAP.

Syntaxe de base
element.animate(keyframes, options);

keyframes : Tableau d’objets définissant les états d’animation (comme @keyframes en CSS)
options : Objet configurant la durée, le délai, l’easing, etc.
Implémentation complète de l’animation
src/components/AnimatedPatterns.astro
<script>
  const lines = document.querySelectorAll(".curveLines path");

  if (lines.length > 0) {
    lines.forEach((el, index) => {
      const totalLength = el.getTotalLength();
      el.style.strokeDasharray = totalLength.toString();
      el.animate(
        [
          { strokeDashoffset: totalLength, opacity: 0 },
          { strokeDashoffset: 0, opacity: 1 },
        ],
        {
          duration: 1200,
          delay: index * 150,
          easing: "cubic-bezier(0.33, 0.33, 0.4, 0.99)",
          fill: "backwards",
        },
      );
    });
  }
</script>

Décomposition de l’animation
Keyframes (états de l’animation) :

[
  { strokeDashoffset: totalLength, opacity: 0 },  // État initial
  { strokeDashoffset: 0, opacity: 1 },            // État final
]

État initial :

strokeDashoffset: totalLength : Tiret complètement décalé (invisible)
opacity: 0 : Chemin transparent
État final :

strokeDashoffset: 0 : Tiret en position normale (chemin dessiné)
opacity: 1 : Chemin opaque
Options de l’animation :

{
  duration: 1200,                                    // Durée de 1200ms (1.2s)
  delay: index * 150,                                // Délai progressif
  easing: "cubic-bezier(0.33, 0.33, 0.4, 0.99)",   // Courbe d'accélération
  fill: "backwards",                                 // Mode de remplissage
}

duration: 1200 :

Durée de l’animation en millisecondes
1200ms = 1.2 secondes pour dessiner chaque ligne
delay: index * 150 :

Délai avant le démarrage de l’animation
Calculé selon la position du chemin dans la liste
index * 150 : Délai progressif de 150ms entre chaque chemin
Exemples :
Chemin 0 : délai 0ms (démarre immédiatement)
Chemin 1 : délai 150ms
Chemin 2 : délai 300ms
Chemin 3 : délai 450ms
Crée un effet de cascade/séquence
easing: "cubic-bezier(0.33, 0.33, 0.4, 0.99)" :

Courbe d’accélération personnalisée (timing function)
cubic-bezier(x1, y1, x2, y2) : Définit une courbe de Bézier
Valeurs (0.33, 0.33, 0.4, 0.99) : Effet de décélération douce (ease-out)
Le dessin démarre rapidement puis ralentit progressivement
Visualiser la courbe
fill: "backwards" :

Mode de remplissage de l’animation
"backwards" : Applique les valeurs du premier keyframe pendant le délai
Garantit que le chemin reste invisible (opacity: 0, strokeDashoffset: totalLength) pendant le délai avant le démarrage
Sans cette propriété, le chemin serait visible pendant le délai
Modes de remplissage

Les valeurs possibles de fill :

"none" : Pas d’effet avant/après l’animation
"forwards" : Conserve l’état final après l’animation
"backwards" : Applique l’état initial pendant le délai
"both" : Combine forwards et backwards
Documentation MDN

Étape 8 : Intégration des motifs sur la page d’accueil
Intégrez le composant AnimatedPatterns dans le slot patterns :

src/pages/index.astro
---
import { Picture } from "astro:assets";

import Layout from "../layouts/Layout.astro";
import Hero from "../components/Hero.astro";
import AnimatedPatterns from "../components/AnimatedPatterns.astro";

import IconMusique from "../assets/icones/icon_musique.svg";
import IconTheatre from "../assets/icones/icon_theatre.svg";
import IconDanse from "../assets/icones/icon_danse.svg";
import imgHero from "../assets/img/musique-01.jpg";

const title = "Conservatoire Henri Dutilleux";
const subTitle = "Conservatoire à Rayonnement Départemental du Grand Belfort";
const description =
  "Le Conservatoire Henri Dutilleux de Belfort vous accueille pour découvrir la musique, la danse et le théâtre.";
---

<Layout title={title} description={description}>
  <Hero title={title} subTitle={subTitle}>
    <div class="flex-1 font-mono lg:text-3xl" slot="chapo">
      <ul
        class="grid grid-cols-3 gap-12 *:flex *:flex-col *:items-center *:gap-4 *:lg:flex-row"
      >
        <li><IconMusique /> Musique</li>
        <li><IconTheatre /> Théâtre</li>
        <li><IconDanse /> Danse</li>
      </ul>
    </div>
    <div
      class="absolute inset-0 z-0 flex items-center justify-end overflow-hidden stroke-pink stroke-24 opacity-80 mix-blend-difference"
      slot="patterns"
    >
      <AnimatedPatterns class="-ml-60 lg:ml-auto lg:w-[96vw]" />
    </div>
    <Picture
      slot="image"
      src={imgHero}
      alt="Violoncelles"
      layout="full-width"
      pictureAttributes={{ class: "duotone absolute inset-0 object-cover" }}
    />
  </Hero>
</Layout>

Conteneur des patterns :

slot="patterns" : Insertion dans le slot patterns du Hero
absolute inset-0 : Position absolue couvrant tout le Hero
z-0 : Derrière le contenu (z-index: 0)
flex items-center justify-end : Alignement vertical centré, horizontal à droite
overflow-hidden : Masque les débordements
Styles SVG :

stroke-pink : Couleur rose pour les traits
stroke-24 : Épaisseur du trait (personnalisé dans le theme)
opacity-80 : Opacité 80%
mix-blend-difference : Mode de fusion “difference” (inversion des couleurs)
Positionnement du composant Patterns :

-mr-[2vw] : Marge droite négative de 2vw (sort légèrement du container)
-ml-60 : Marge gauche négative de 240px (mobile)
lg:ml-auto : Marge gauche automatique sur desktop (pousse à droite)
lg:w-[96vw] : Largeur de 96% de la viewport sur desktop
Mode de fusion mix-blend

Le mode mix-blend-difference inverse les couleurs là où les patterns se superposent au contenu, créant un effet visuel dynamique et moderne.

Documentation MDN



 H3/Composant Card
     Composant Card
Branche Git

Branche : 12.-Composant-Card
N° : 12

Le composant Card est une carte événement qui combine une image de fond, un titre superposé et une boîte de contenu positionnée avec CSS Grid. L’effet duotone s’anime au survol pour révéler les couleurs originales de l’image.

card
Étape 1 : Création du composant et structure de base
Créez le fichier Card.astro dans src/components/ avec la structure HTML de base :

src/components/Card.astro
---
import { Picture } from "astro:assets";
const event = Astro.props;
---

<article>
  <Picture src={event.imgFile} alt={event.imgAlt}/>
  <h3>
    <a href="#">{event.title}</a>
  </h3>
  <div>
    <p>{event.date}</p>
    <p>{event.excerpt}</p>
    <a href="#">Plus d'info</a>
  </div>
</article>

Utilisation d’une props unique event
Le composant Card utilise une approche objet unique pour gérer ses props : const event = Astro.props; plutôt que de déstructurer chaque propriété individuellement.

Approche objet unique (utilisée ici) :

const event = Astro.props;
// Accès : event.title, event.date, event.excerpt...

Approche déstructurée (alternative) :

const { title, date, excerpt, imgFile, imgAlt } = Astro.props;
// Accès : title, date, excerpt...

Avantages de l’approche objet unique :

Clarté sémantique : event.title est plus explicite que title seul
Évolutivité : Ajouter de nouvelles propriétés ne nécessite pas de modifier la signature
Compatibilité future : Prépare le composant à recevoir des objets depuis une base de données (PocketBase)
Pas de conflit de noms : Évite les collisions avec d’autres variables locales
Dans les chapitres suivants sur PocketBase, nous verrons comment passer directement un enregistrement de base de données au composant :

<Card event={eventRecord} />

Cette approche rend le composant flexible et prêt à fonctionner avec différentes sources de données.

Étape 2 : Configuration du grid CSS
card grille
Ajoutez le système de grille pour positionner les éléments :

src/components/Card.astro
---
import { Picture } from "astro:assets";
const event = Astro.props;
---

<article class="group col-span-4 grid grid-cols-[24px_1fr] grid-rows-[200px_48px_1fr] lg:grid-cols-[2fr_11fr]">
  <Picture src={event.imgFile} alt={event.imgAlt}/>
  <h3>
    <a href="#">{event.title}</a>
  </h3>
  <div>
    <p>{event.date}</p>
    <p>{event.excerpt}</p>
    <a href="#">Plus d'info</a>
  </div>
</article>

Décomposition du grid mobile (grid-cols-[24px_1fr] et grid-rows-[200px_48px_1fr]) :

Colonnes :

Colonne 1 : 24px (marge gauche fixe)
Colonne 2 : 1fr (contenu flexible)
Lignes :

Ligne 1 : 200px (hauteur de l’image)
Ligne 2 : 48px (zone de chevauchement titre/contenu)
Ligne 3 : 1fr (reste du contenu)
Grid desktop (lg:grid-cols-[2fr_11fr]) :

Colonne 1 : 2fr (image à gauche, 2 parts)
Colonne 2 : 11fr (contenu à droite, 11 parts)
Largeur de la card (col-span-4) :

Occupe 4 colonnes de la grille parente (définie dans la page)
Valeurs grid personnalisées avec Tailwind

La syntaxe grid-cols-[24px_1fr] permet de définir des valeurs de grille personnalisées directement dans les classes utilitaires. Les valeurs entre crochets sont injectées comme CSS custom properties.

Étape 3 : Ajout de l’image avec Picture et duotone
Importez le composant Picture et l’image, puis positionnez-la sur la grille :

src/components/Card.astro
---
import { Picture } from "astro:assets";
const event = Astro.props;
---

<article
  class="group col-span-4 grid grid-cols-[24px_1fr] grid-rows-[200px_48px_1fr] lg:grid-cols-[2fr_11fr]"
>
  <Picture
    src={event.imgFile}
    alt={event.imgAlt}
    pictureAttributes={{ class: "duotone col-start-1 row-start-1 col-span-2 row-span-2" }}
  />
  <h3>
    <a href="#">{event.title}</a>
  </h3>
  <div>
    <p>{event.date}</p>
    <p>{event.excerpt}</p>
    <a href="#">Plus d'info</a>
  </div>
</article>

Positionnement de l’image :

col-start-1 : Démarre à la colonne 1
row-start-1 : Démarre à la ligne 1
col-span-2 : S’étend sur 2 colonnes (toute la largeur)
row-span-2 : S’étend sur 2 lignes (image + zone de chevauchement)
duotone : Applique l’effet bichromie (voir chapitre Picture)
Résultat visuel :

┌─────────────────┐
│     Image       │ ← ligne 1 (200px)
│    (duotone)    │
├─────────────────┤
│  Chevauchement  │ ← ligne 2 (48px)
├─────────────────┤
│    Contenu      │ ← ligne 3 (1fr)
└─────────────────┘

Étape 4 : Positionnement du titre superposé
Ajoutez les classes de positionnement et de style au titre :

src/components/Card.astro
---
import { Picture } from "astro:assets";
const event = Astro.props;
---

<article
  class="group col-span-4 grid grid-cols-[24px_1fr] grid-rows-[200px_48px_1fr] lg:grid-cols-[2fr_11fr]"
>
  <Picture
    src={event.imgFile}
    alt={event.imgAlt}
    pictureAttributes={{ class: "duotone col-start-1 row-start-1 col-span-2 row-span-2" }}
  />
  <h3 class="z-1 col-start-2 row-start-1 my-6 mr-4 self-end font-mono text-3xl text-white">
    <a href="#">{event.title}</a>
  </h3>
  <div>
    <p>{event.date}</p>
    <p>{event.excerpt}</p>
    <a href="#">Plus d'info</a>
  </div>
</article>

Positionnement sur le grid :

col-start-2 : Colonne 2 (après la marge de 24px)
row-start-1 : Ligne 1 (sur l’image)
z-1 : Au-dessus de l’image (z-index: 1)
Alignement vertical :

self-end : Alignement en bas de la cellule grid
my-6 : Marge verticale (24px haut et bas)
mr-4 : Marge droite (16px)
Styles de texte :

font-mono : Police monospace (Space Mono)
text-3xl : Taille de texte 30px
text-white : Couleur blanche pour contraster avec l’image
z-index avec Tailwind

Les classes z-{n} de Tailwind génèrent des z-index CSS. z-1 génère z-index: 1. L’image reste à z-index: 0 (par défaut), le titre à z-1, et la boîte de contenu à z-2.

Étape 5 : Ajout de la boîte de contenu
Positionnez et stylisez la boîte de contenu :

src/components/Card.astro
---
import { Picture } from "astro:assets";
const event = Astro.props;
---

<article
  class="group col-span-4 grid grid-cols-[24px_1fr] grid-rows-[200px_48px_1fr] lg:grid-cols-[2fr_11fr]"
>
  <Picture
    src={event.imgFile}
    alt={event.imgAlt}
    pictureAttributes={{ class: "duotone col-start-1 row-start-1 col-span-2 row-span-2" }}
  />
  <h3 class="z-1 col-start-2 row-start-1 my-6 mr-4 self-end font-mono text-3xl text-white">
    <a href="#">{event.title}</a>
  </h3>
  <div class="z-2 col-span-1 col-start-2 row-span-2 row-start-2 space-y-4 bg-white p-6">
    <p class="uppercase">{event.date}</p>
    <p>{event.excerpt}</p>
    <a
      class="inline-block border-b-2 border-black uppercase"
      href="#">Plus d'info</a>
  </div>
</article>

Positionnement sur le grid :

col-start-2 : Colonne 2 (alignée avec le titre)
col-span-1 : Une seule colonne
row-start-2 : Ligne 2 (zone de chevauchement)
row-span-2 : S’étend sur lignes 2 et 3
z-2 : Au-dessus du titre et de l’image (z-index: 2)
Styles de la boîte :

bg-white : Fond blanc opaque
p-6 : Padding 24px sur tous les côtés
space-y-4 : Espacement vertical 16px entre les enfants
Styles du contenu :

Date : uppercase (majuscules)
Lien : inline-block border-b-2 border-black uppercase (soulignement, majuscules)
Résultat visuel (superposition des éléments) :

┌─────────────────┐
│   Image (z-0)   │
│                 │
│   Titre (z-1) ←─┼─ Superposé sur l'image
├────┬────────────┤
│Img │  Box (z-2) │ ← Chevauche l'image
│    │  Contenu   │
│    └────────────┤
└─────────────────┘

Étape 6 : Ajout des effets hover
Ajoutez les animations au survol pour révéler les couleurs originales de l’image :

src/components/Card.astro
---
import { Picture } from "astro:assets";
const event = Astro.props;
---

<article
  class="group col-span-4 grid grid-cols-[24px_1fr] grid-rows-[200px_48px_1fr] lg:grid-cols-[2fr_11fr]"
>
  <Picture
    src={event.imgFile}
    alt={event.imgAlt}
    pictureAttributes={{ class: "duotone col-start-1 row-start-1 col-span-2 row-span-2 group-hover:before:bg-black" }}
    class="group-hover:grayscale-0 group-hover:mix-blend-normal"
  />
  <h3 class="z-1 col-start-2 row-start-1 my-6 mr-4 self-end font-mono text-3xl text-white">
    <a href="#">{event.title}</a>
  </h3>
  <div class="z-2 col-span-1 col-start-2 row-span-2 row-start-2 space-y-4 bg-white p-6">
    <p class="uppercase">{event.date}</p>
    <p>{event.excerpt}</p>
    <a
      class="inline-block border-b-2 border-black uppercase"
      href="#">Plus d'info</a>
  </div>
</article>

Effets sur le pseudo-élément ::before du duotone :

group-hover:before:bg-black : Au survol de .group, le calque indigo devient noir
Effets sur l’image <img> à l’intérieur de Picture :

group-hover:grayscale-0 : Retire le filtre grayscale (révèle les couleurs)
group-hover:mix-blend-normal : Désactive le mode de fusion multiply
Comment ça fonctionne :

État normal :

Image en niveaux de gris (grayscale)
Mode de fusion multiply avec fond rose → tons roses/indigo (duotone)
Pseudo-élément ::before avec fond indigo et mode lighten
État hover :

Image en couleurs (grayscale-0)
Mode de fusion normal → couleurs originales visibles
Pseudo-élément avec fond noir → assombrit l’image pour créer du contraste
Résultat visuel :

Normal : Image duotone (rose/indigo)
Hover  : Image en couleurs avec overlay noir semi-transparent

Transitions duotone

Les transitions CSS définies dans la classe .duotone (voir c4-picture.mdx) rendent l’animation fluide avec transition-all duration-300 ease-in-out.




 H3/Composant Button
   Le composant Button est un bouton réutilisable qui propose plusieurs variantes de style (default, dark, outlined). C’est la première fois que nous introduisons le concept de variants, un pattern de design system permettant de créer des variations d’un même composant avec des styles différents.

Composant bouton (version mobile)
Bouton verion mobile
Composant bouton (version desktop)
Bouton verion desktop
Étape 1 : Structure de base et props
Créez le fichier Button.astro dans src/components/ avec la structure de base :

src/components/Button.astro
---
import Arrow from "../assets/icones/icon_arrowline.svg";
const { href, text } = Astro.props;
---

<a href={href}>
  <Arrow />
  {text}
</a>

Extraction des props :

href : URL de destination du lien
text : Texte affiché dans le bouton
Étape 2 : Introduction du système de variants
Le système de variants permet de créer différentes versions d’un composant avec des styles prédéfinis. C’est un pattern fondamental en design system.

Concept des variants
Un variant est une variation de style d’un composant. Au lieu de créer plusieurs composants (ButtonDefault.astro, ButtonDark.astro, ButtonOutlined.astro), on crée un seul composant avec une prop variant qui détermine le style appliqué.

Avantages :

Cohérence : Tous les boutons partagent la même structure HTML
Maintenabilité : Un seul composant à maintenir
Scalabilité : Ajouter un nouveau variant = ajouter une entrée dans un objet
API claire : <Button variant="dark" /> est explicite et lisible
Implémentation des variants
Ajoutez la prop variant et créez l’objet variantClass :

src/components/Button.astro
---
import Arrow from "../assets/icones/icon_arrowline.svg";
const { href, text, variant = "default" } = Astro.props;
const variantClass = {
  default: "border border-pink hover:inset-ring-8 hover:inset-ring-pink",
  dark: "bg-black text-white",
  outlined: "text-white border border-white hover:inset-ring-8 hover:inset-ring-white",
};
---

<a href={href}>
  <Arrow />
  {text}
</a>

Prop variant avec valeur par défaut :

variant = "default" : Si aucun variant n’est spécifié, utilise “default”
Syntaxe de déstructuration avec valeur par défaut en JavaScript
Objet variantClass :

Clé = nom du variant (default, dark, outlined)
Valeur = chaîne de classes Tailwind pour ce variant
Permet de mapper un nom de variant à ses styles
Détail des variants :

default :

border border-pink : Bordure rose de 1px
hover:inset-ring-8 hover:inset-ring-pink : Au survol, ombre interne de 8px rose (effet de remplissage)
dark :

bg-black : Fond noir
text-white : Texte blanc
outlined :

text-white : Texte blanc
border border-white : Bordure blanche
hover:inset-ring-8 hover:inset-ring-white : Au survol, ombre interne blanche
Étape 3 : Application du variant avec class:list
La directive class:list d’Astro permet de combiner plusieurs sources de classes de manière élégante :

src/components/Button.astro
---
import Arrow from "../assets/icones/icon_arrowline.svg";
const { href, text, variant = "default", classes } = Astro.props;
const variantClass = {
  default: "border border-pink hover:inset-ring-8 hover:inset-ring-pink",
  dark: "bg-black text-white",
  outlined: "text-white border border-white hover:inset-ring-8 hover:inset-ring-white",
};
---

<a
  class:list={[
    "inline-flex items-center gap-4 px-6 py-4 text-xs font-bold tracking-wide uppercase transition duration-300 ease-in-out lg:px-8 lg:py-6 lg:text-sm",
    variantClass[variant],
    classes,
  ]}
  href={href}
>
  <Arrow />
  {text}
</a>

Prop classes :

classes : Permet de passer des classes supplémentaires depuis le parent
Utile pour des ajustements contextuels sans modifier le composant
Décomposition de class:list
class:list accepte un tableau et combine toutes les classes :

[
  // 1. Classes de base (communes à tous les variants)
  "inline-flex items-center gap-4 px-6 py-4 text-xs font-bold tracking-wide uppercase transition duration-300 ease-in-out lg:px-8 lg:py-6 lg:text-sm",

  // 2. Classes du variant sélectionné
  variantClass[variant],  // Ex: "border border-pink hover:shadow-[...]"

  // 3. Classes personnalisées passées en prop
  classes,  // Ex: "mt-4 lg:mt-8"
]

Comment ça fonctionne :

Les classes de base sont toujours appliquées
variantClass[variant] : Accès à la valeur de l’objet selon la clé variant
Si variant="dark" → variantClass["dark"] → "bg-black text-white"
Les classes personnalisées s’ajoutent en dernier
Exemple d’utilisation :

<Button variant="dark" href="/contact" text="Contactez-nous" classes="mt-8" />

class:list vs class

class:list est plus puissant que class car il :

Accepte des tableaux, objets, et valeurs conditionnelles
Filtre automatiquement les valeurs null, undefined, false
Déduplique les classes en cas de conflit
Gère les classes dynamiques élégamment
Documentation class:list

Détail des classes de base
Analysons les classes communes à tous les variants :

Layout et positionnement :

inline-flex : Conteneur flex inline (s’adapte au contenu)
items-center : Alignement vertical centré (icône + texte)
gap-4 : Espacement 16px entre l’icône et le texte
Spacing :

px-6 py-4 : Padding horizontal 24px, vertical 16px (mobile)
lg:px-8 lg:py-6 : Padding horizontal 32px, vertical 24px (desktop)
Typographie :

text-xs : Taille de texte 12px (mobile)
lg:text-sm : Taille de texte 14px (desktop)
font-bold : Graisse de police bold
tracking-wide : Espacement des lettres augmenté (letter-spacing)
uppercase : Texte en majuscules
Animation :

transition : Active les transitions CSS
duration-300 : Durée 300ms
ease-in-out : Courbe d’accélération progressive
Responsive design

Les classes préfixées lg: s’appliquent uniquement sur les écrans ≥ 1024px. Tailwind adopte une approche “mobile-first” : les classes sans préfixe sont pour mobile, puis on ajoute des breakpoints pour les écrans plus grands.

Étape 4 : Utilisation du composant
Utilisez le composant Button avec différents variants :

---
import Button from "../components/Button.astro";
---

<!-- Variant default -->
<Button
  variant="default"
  href="/evenements"
  text="Voir les événements"
/>

<!-- Variant dark -->
<Button
  variant="dark"
  href="/contact"
  text="Nous contacter"
/>

<!-- Variant outlined (sur fond sombre) -->
<Button
  variant="outlined"
  href="/inscription"
  text="S'inscrire"
/>

<!-- Avec classes personnalisées -->
<Button
  variant="default"
  href="/billetterie"
  text="Réserver"
  classes="mt-8 lg:mt-12"
/>

Omission de la prop variant :

<!-- Équivalent à variant="default" -->
<Button href="/evenements" text="Voir les événements" />

Récapitulatif
Pattern variants - Points clés :

Un seul composant pour plusieurs variations de style
Objet JavaScript mappant des noms vers des classes CSS
Accès dynamique avec variantClass[variant]
Extensibilité : ajouter un variant = ajouter une ligne
API claire et cohérente pour les utilisateurs du composant
Avantages du pattern :

Cohérence : Structure HTML identique pour tous les variants
Maintenabilité : Un seul fichier à maintenir
Type-safety : Facile à typer avec TypeScript (union de strings)
Scalabilité : Ajout de variants sans modification structurelle
Lisibilité : <Button variant="dark" /> est auto-documenté
Nous utiliserons ce composant au moment de la construction de la page d’accueil dans laquelle il est utilisé à plusieurs reprises.


H2/Page d'accueil 
 H3/Hero
   La construction du Hero de la page d’accueil a été réalisée au fil des chapitres précédents sur les UI primitives.

Rappel des étapes de construction :

Au chapitre Composant Hero, nous avons créé la structure de base du composant avec :

La mise en page responsive avec CSS Grid (version mobile et version desktop)
Le système de slots nommés pour personnaliser le contenu
L’intégration initiale dans la page d’accueil avec le slot chapo
Les métadonnées SEO
Au chapitre Composant Picture, nous avons développé un composant d’image optimisé que l’on a utilisé pour l’image de fond du Hero.

Au chapitre Composant Patterns, nous avons créé les motifs SVG décoratifs avant de les intégrer au Hero.



 H3/Section Découverte
    Section Découverte avec statistiques
Branche Git

Branche : 14.-Section-decouverte
N° : 14

Après le Hero, la première section présente le conservatoire avec une grande image, un texte d’accroche et des statistiques clés. Cette section utilise un layout CSS Grid complexe pour créer une composition asymétrique.

Section conservatoire
Étape 1 : Structure de base de la section
Ajoutez une section après le Hero dans src/pages/index.astro :

src/pages/index.astro
<Layout title={title} description={description}>
  <Hero title={title} subTitle={subTitle}>
    <!-- Contenu du Hero -->
  </Hero>

  <section class="grille my-24">
    <!-- Contenu à venir -->
  </section>
</Layout>

Classes de base :

grille : Classe personnalisée définie dans global.css (grille 12 colonnes)
my-24 : Marge verticale de 96px (espacement entre sections)
Étape 2 : Import et ajout de l’image principale
Importez l’image, l’icône points SVG et créez un tableau de statistiques :

src/pages/index.astro
---
import imgHero from "../assets/img/musique-01.jpg";
import imgCrdInt from "../assets/img/conservatoire-interieur-05.jpg";
import points from "../assets/icones/points.svg";
---

<section class="grille my-24 space-y-8 lg:mt-48 lg:space-y-0 lg:before:col-span-7 lg:before:col-start-1 lg:before:row-span-1 lg:before:row-start-2 lg:before:-mr-10 lg:before:-mb-10 lg:before:bg-pink">
  <Picture
    src={imgCrdInt}
    alt="Salle de musique du conservatoire"
    layout="full-width"
    class="h-full object-cover"
    pictureAttributes={{
      class: "max-h-[1100px] lg:col-span-7 lg:col-start-1 lg:row-span-2 lg:row-start-1 xl:ml-[calc((1296px-100vw)/2)]",
    }}
  />
</section>

Classes ajoutées à la section :

space-y-8 : Espacement vertical de 32px entre enfants (mobile)
lg:mt-48 : Marge top de 192px sur desktop
lg:space-y-0 : Supprime l’espacement vertical sur desktop (géré par grid)
Pseudo-élément décoratif (before:) :

lg:before:col-span-7 : Occupe 7 colonnes
lg:before:col-start-1 : Démarre à la colonne 1
lg:before:row-span-1 : Occupe 1 ligne
lg:before:row-start-2 : Ligne 2 (bas)
lg:before:-mr-10 : Marge négative droite de 40px (débord)
lg:before:-mb-10 : Marge négative bas de 40px (débord)
lg:before:bg-pink : Fond rose
Comportement de l’image (à l’intérieur de Picture) :

h-full object-cover : Hauteur 100% et couverture de l’espace
Positionnement de Picture sur la grille desktop :

max-h-[1100px] : Hauteur maximale de 1100px
lg:col-span-7 : Occupe 7 colonnes (sur 12)
lg:col-start-1 : Démarre à la colonne 1
lg:row-span-2 : S’étend sur les 2 lignes
lg:row-start-1 : Démarre à la ligne 1
xl:ml-[calc((1296px-100vw)/2)] : Décalage pour alignement max-width
Layout asymétrique avec pseudo-élément

La grille crée un layout asymétrique : l’image occupe 7 colonnes sur toute la hauteur, avec un pseudo-élément rose décoratif qui déborde en bas à droite, créant un effet de superposition visuelle.

Étape 3 : Ajout du header avec texte et bouton
Ajoutez un header avec le texte d’accroche, un motif décoratif et un bouton :

src/pages/index.astro
---
import AnimatedPatterns from "../components/AnimatedPatterns.astro";
import Button from "../components/Button.astro";
---


  <header
    class="space-y-8 bg-white lg:col-span-8 lg:col-start-5 lg:row-span-1 lg:row-start-1 lg:bg-(image:--bg-points) lg:bg-position-[right_100px_center] lg:bg-no-repeat lg:p-28 lg:pr-40"
    style={`--bg-points: url(${points.src})`}
  >
    <h2 class="mt-10 text-2xl leading-normal lg:text-3xl xl:text-4xl">
      Découvrez le Conservatoire, ses enseignements, ses équipes dans un
      nouveau lieu dédié à la culture artistique.
    </h2>
    <Button href="#" text="Plus d'info" />
  </header>
</section>

Positionnement du header sur la grille desktop :

lg:col-span-8 : Occupe 8 colonnes (au lieu de 7)
lg:col-start-5 : Démarre à la colonne 5 (se superpose à l’image sur colonnes 5-7)
lg:row-span-1 : Occupe 1 ligne
lg:row-start-1 : Ligne 1 (haut)
Background décoratif avec SVG :

lg:bg-(image:--bg-points) : Utilise la variable CSS --bg-points comme image de fond
lg:bg-position-[right_100px_center] : Positionne l’image à 100px du bord droit, centrée verticalement
lg:bg-no-repeat : L’image ne se répète pas
style={--bg-points: url(${points.src})} : Définit la variable CSS avec l’URL du SVG importé
Padding et espacement :

lg:p-28 : Padding de 112px
lg:pr-40 : Padding droit de 160px (pour laisser de l’espace au motif points)
space-y-8 : Espacement de 32px entre titre et bouton
Styles du titre :

mt-10 : Marge top de 40px
text-2xl : Taille 24px (mobile)
lg:text-3xl : Taille 30px (desktop)
xl:text-4xl : Taille 36px (extra large)
leading-normal : Interlignage normal (1.5)
Variables CSS dans Astro

L’utilisation de style={--bg-points: url(${points.src})} permet d’injecter dynamiquement l’URL du SVG importé dans une variable CSS, qui est ensuite utilisée par Tailwind avec la syntaxe bg-(image:--bg-points). Cette technique combine le meilleur des deux mondes : gestion d’assets par Astro et styling par Tailwind.

Étape 4 : Ajout des statistiques avec itération
Ajoutez une liste de statistiques en bas à droite en utilisant le tableau stats :

src/pages/index.astro
---
const stats = [
  { number: 9, label: "sites" },
  { number: 84, label: "enseignants" },
  { number: 1500, label: "élèves" },
  { number: 50, label: "disciplines" },
];
---

  <ul
    class="grid grid-cols-2 gap-12 lg:col-span-4 lg:col-start-9 lg:row-start-2"
  >
    {
      stats.map(({ number, label }) => (
        <li>
          <span class="block text-4xl text-pink lg:mb-12 lg:text-6xl">
            {number}
          </span>
          <span>{label}</span>
        </li>
      ))
    }
  </ul>
</section>

Tableau stats : Le tableau stats centralise les données des statistiques, facilitant leur maintenance et leur itération avec .map().

Itération avec .map() : Au lieu de répéter manuellement chaque <li>, on utilise stats.map() pour générer dynamiquement les éléments :

({ number, label }) : Déstructuration de chaque objet du tableau
Le code JSX entre parenthèses est retourné pour chaque itération
Plus maintenable : ajouter une stat = ajouter une ligne au tableau
Positionnement de la liste de stats sur la grille desktop :

lg:col-span-4 : Occupe 4 colonnes (9-12)
lg:col-start-9 : Démarre à la colonne 9
lg:row-start-2 : Ligne 2 (bas)
Grille interne des stats :

grid grid-cols-2 : Grille de 2 colonnes pour les 4 items
gap-12 : Espacement de 48px entre les items
Styles des chiffres :

block : Affichage bloc (sur sa propre ligne)
text-4xl : Taille 36px (mobile)
lg:text-6xl : Taille 60px (desktop)
text-pink : Couleur rose définie dans le Design System
lg:mb-12 : Marge bottom de 48px sur desktop (espace entre chiffre et label)
Code final de la section
src/pages/index.astro
<section
  class="grille my-24 space-y-8 lg:mt-48 lg:space-y-0 lg:before:col-span-7 lg:before:col-start-1 lg:before:row-span-1 lg:before:row-start-2 lg:before:-mr-10 lg:before:-mb-10 lg:before:bg-pink"
>
  <Picture
    src={imgCrdInt}
    alt="Salle de musique du conservatoire"
    layout="full-width"
    class="h-full object-cover"
    pictureAttributes={{
      class:
        "max-h-[1100px] lg:col-span-7 lg:col-start-1 lg:row-span-2 lg:row-start-1 xl:ml-[calc((1296px-100vw)/2)]",
    }}
  />
  <header
    class="space-y-8 bg-white lg:col-span-8 lg:col-start-5 lg:row-span-1 lg:row-start-1 lg:bg-(image:--bg-points) lg:bg-position-[right_100px_center] lg:bg-no-repeat lg:p-28 lg:pr-40"
    style={`--bg-points: url(${points.src})`}
  >
    <h2 class="mt-10 text-2xl leading-normal lg:text-3xl xl:text-4xl">
      Découvrez le Conservatoire, ses enseignements, ses équipes dans un
      nouveau lieu dédié à la culture artistique.
    </h2>
    <Button href="#" text="Plus d'info" />
  </header>

  <ul
    class="grid grid-cols-2 gap-12 lg:col-span-4 lg:col-start-9 lg:row-start-2"
  >
    {
      stats.map(({ number, label }) => (
        <li>
          <span class="block text-4xl text-pink lg:mb-12 lg:text-6xl">
            {number}
          </span>
          <span>{label}</span>
        </li>
      ))
    }
  </ul>
</section>

Cette section démontre la puissance de CSS Grid pour créer des layouts sophistiqués et asymétriques avec des effets de superposition, tout en restant maintenable grâce à l’utilisation de tableaux de données et de l’itération .map().



 H3/Section Agenda
    Section Agenda avec Cards
Branche Git

Branche : 15.-Section-Agenda
N° : 15

La section Agenda présente les événements à venir du conservatoire. Elle utilise le composant Card créé précédemment et démontre comment générer dynamiquement plusieurs instances avec une boucle JavaScript.

Section agenda
Étape 1 : Structure de base avec header
Ajoutez la section Agenda après la section Découverte :

src/pages/index.astro
  </section>

  <section
    class="grille space-y-8 py-24 lg:before:col-span-2 lg:before:col-start-1 lg:before:mt-12 lg:before:h-px lg:before:bg-black"
  >
    <header class="space-y-6 lg:col-span-6 lg:col-start-3">
      <h2 class="text-4xl lg:text-6xl">Agenda</h2>
      <p class="text-xl leading-normal lg:text-3xl">
        Lieu de création artistique, le conservatoire propose régulièrement des
        actions culturelles ouvertes à tous.
      </p>
    </header>
  </section>
</Layout>

Classes de la section :

grille : Grille 12 colonnes
space-y-8 : Espacement vertical de 32px entre enfants
py-24 : Padding vertical de 96px
Pseudo-élément ::before pour le séparateur :

lg:before:col-span-2 : Le pseudo-élément occupe 2 colonnes
lg:before:col-start-1 : Démarre à la colonne 1
lg:before:mt-12 : Marge top de 48px
lg:before:h-px : Hauteur de 1px (ligne fine)
lg:before:bg-black : Couleur noire
Pseudo-éléments avec Grid

Le pseudo-élément ::before participe au grid layout et peut recevoir des propriétés de positionnement grid (col-span, col-start). Cela crée un séparateur horizontal intégré au layout.

Positionnement du header :

space-y-6 : Espacement de 24px entre titre et paragraphe
lg:col-span-6 : Occupe 6 colonnes (sur 12)
lg:col-start-3 : Démarre à la colonne 3 (centré avec marge gauche)
Étape 2 : Ajout du bouton “Tous les événements”
Ajoutez un bouton aligné à droite pour voir tous les événements :

src/pages/index.astro
<section
  class="grille space-y-8 py-24 lg:before:col-span-2 lg:before:col-start-1 lg:before:mt-12 lg:before:h-px lg:before:bg-black"
>
  <header class="space-y-6 lg:col-span-6 lg:col-start-3">
    <h2 class="text-4xl lg:text-6xl">Agenda</h2>
    <p class="text-xl leading-normal lg:text-3xl">
      Lieu de création artistique, le conservatoire propose régulièrement des
      actions culturelles ouvertes à tous.
    </p>
  </header>

  <Button
    href="#"
    text="Tous les évènements"
    classes="lg:col-span-4 lg:col-start-9 lg:self-start lg:justify-self-end"
  />
</section>

Positionnement du bouton sur la grille :

lg:col-span-4 : Occupe 4 colonnes
lg:col-start-9 : Démarre à la colonne 9 (à droite)
lg:self-start : Alignement vertical en haut de la cellule
lg:justify-self-end : Alignement horizontal à droite de la cellule
Prop classes personnalisée : Le composant Button accepte une prop classes pour ajouter des styles contextuels sans modifier le composant lui-même.

self et justify-self

Les propriétés self-start et justify-self-end permettent d’aligner un élément grid individuel indépendamment des autres éléments. Ici, le bouton est en haut à droite de sa zone.

Étape 3 : Import du composant Card et génération avec une boucle
Importez le composant Card créé dans le chapitre Card et utilisez une boucle JavaScript pour générer plusieurs cards :

src/pages/index.astro
---
import Button from "../components/Button.astro";
import Card from "../components/Card.astro";
---

  {
    [1, 2, 3].map((i) => (
      <Card
        title={`Titre de l'événement ${i}`}
        date="2026-02-15"
        excerpt="Description courte de l'événement à venir au conservatoire."
        imgFile={imgHero}
        imgAlt="Image de l'événement"
      />
    ))
  }
</section>

Boucle avec map() :

[1, 2, 3] : Tableau de 3 éléments
.map((i) => ...) : Itère sur chaque élément
Retourne un composant <Card> pour chaque élément
i : Index utilisé pour numéroter les titres
Props passées au Card :

title : Titre de l’événement (avec interpolation ${i})
date : Date au format ISO (2026-02-15)
excerpt : Description courte
imgFile : Image importée (réutilise imgHero)
imgAlt : Texte alternatif pour l’image
JSX dans Astro

Astro supporte la syntaxe JSX dans le template. Les accolades {} permettent d’exécuter du JavaScript, incluant les boucles .map(), conditions, etc.

Contenu statique temporaire

Dans cet exemple, le contenu des Cards est statique (tableau [1, 2, 3] et données en dur). Dans les chapitres suivants sur PocketBase, nous remplacerons cette boucle simple par une itération sur des données réelles récupérées depuis la base de données, permettant d’afficher dynamiquement les événements du conservatoire.

Étape 4 : Comportement responsive des Cards
Le composant Card est défini avec col-span-4, ce qui signifie :

Mobile (grid-cols-4 par défaut) :

Chaque Card occupe 4 colonnes
1 Card par ligne (pleine largeur)
Empilement vertical
Desktop (lg:grid-cols-12) :

Chaque Card occupe 4 colonnes (sur 12)
3 Cards par ligne (4 + 4 + 4 = 12)
Disposition horizontale
Code final de la section
src/pages/index.astro
<section
  class="grille space-y-8 py-24 lg:before:col-span-2 lg:before:col-start-1 lg:before:mt-12 lg:before:h-px lg:before:bg-black"
>
  <header class="space-y-6 lg:col-span-6 lg:col-start-3">
    <h2 class="text-4xl lg:text-6xl">Agenda</h2>
    <p class="text-xl leading-normal lg:text-3xl">
      Lieu de création artistique, le conservatoire propose régulièrement des
      actions culturelles ouvertes à tous.
    </p>
  </header>
  <Button
    href="#"
    text="Tous les évènements"
    classes="lg:col-span-4 lg:col-start-9 lg:self-start lg:justify-self-end"
  />
  {
    [1, 2, 3].map((i) => (
      <Card
        title={`Titre de l'événement ${i}`}
        date="Lundi 15 mars à 20h30"
        excerpt="Description courte de l'événement à venir au conservatoire."
        imgFile={imgHero}
        imgAlt="Image de l'événement"
      />
    ))
  }
  </section>


 H3/Section Inscriptions
    Section Inscriptions avec fond d'image
Branche Git

Branche : 16.-Section-inscriptions
N° : 16

La dernière section de la page d’accueil invite à l’inscription avec un fond d’image immersif, un overlay sombre et du contenu blanc. Cette section démontre l’utilisation avancée du duotone avec un overlay supplémentaire.

Section inscription
Étape 1 : Structure de base de la section
Ajoutez la section Inscriptions après la section Agenda :

src/pages/index.astro
  </section>

  <section
    class="grille relative space-y-8 py-54 text-white lg:before:col-span-2 lg:before:col-start-1 lg:before:mt-12 lg:before:h-px lg:before:bg-white"
  >
    <!-- Contenu à venir -->
  </section>
</Layout>

Classes de la section :

grille : Grille 12 colonnes
relative : Contexte de positionnement pour l’image en position absolue
space-y-8 : Espacement vertical de 32px entre enfants
py-54 : Padding vertical de 216px (valeur custom, espace important)
text-white : Texte blanc pour contraster avec l’image de fond
Séparateur blanc :

lg:before:col-span-2 : Pseudo-élément occupant 2 colonnes
lg:before:col-start-1 : Démarre à la colonne 1
lg:before:mt-12 : Marge top de 48px
lg:before:h-px : Hauteur de 1px
lg:before:bg-white : Couleur blanche (contrairement aux sections précédentes en noir)
Étape 2 : Ajout du header
Ajoutez le titre et la description :

src/pages/index.astro
<section
  class="grille relative space-y-8 py-54 text-white lg:before:col-span-2 lg:before:col-start-1 lg:before:mt-12 lg:before:h-px lg:before:bg-white"
>
  <header class="space-y-6 lg:col-span-6 lg:col-start-3">
    <h2 class="text-4xl lg:text-6xl">Inscriptions</h2>
    <p class="text-xl leading-normal lg:text-3xl">
      Vous êtes désireux d'entrer au conservatoire&nbsp;? Vous trouverez ici toutes
      les informations sur les modalités d'inscriptions.
    </p>
  </header>
</section>

Positionnement identique aux sections précédentes :

space-y-6 : Espacement entre titre et paragraphe
lg:col-span-6 : 6 colonnes
lg:col-start-3 : Démarre à la colonne 3
Styles du texte :

Héritage de text-white de la section parente
Tailles identiques aux autres sections pour cohérence
Étape 3 : Ajout du bouton avec variant outlined
Ajoutez un bouton avec le variant “outlined” adapté aux fonds sombres :

src/pages/index.astro
<section
  class="grille relative space-y-8 py-54 text-white lg:before:col-span-2 lg:before:col-start-1 lg:before:mt-12 lg:before:h-px lg:before:bg-white"
>
  <header class="space-y-6 lg:col-span-6 lg:col-start-3">
    <h2 class="text-4xl lg:text-6xl">Inscriptions</h2>
    <p class="text-xl leading-normal lg:text-3xl">
      Vous êtes désireux d'entrer au conservatoire&nbsp;? Vous trouverez ici toutes
      les informations sur les modalités d'inscriptions.
    </p>
  </header>

  <Button
    classes="lg:col-span-4 lg:col-start-9 lg:self-start lg:justify-self-end"
    href="/inscription"
    text="S'inscrire"
    variant="outlined"
  />
</section>

Variant outlined :

variant="outlined" : Bordure blanche + texte blanc (voir chapitre Button)
Adapté aux fonds sombres
Hover : remplissage blanc avec effet inset shadow
Positionnement du bouton :

Identique à la section Agenda (en haut à droite)
Classes personnalisées via prop classes
Choix du variant

Sur un fond sombre, le variant “outlined” offre un meilleur contraste qu’un bouton plein. Le variant “default” (bordure rose) serait moins visible sur l’image de fond.

Étape 4 : Import et ajout de l’image de fond
Importez l’image et ajoutez-la avec Picture en position absolue :

src/pages/index.astro
---
// ... autres imports
import imgCrdExt from "../assets/img/conservatoire-exterieur-03.jpg";
---

<section
  class="grille relative space-y-8 py-54 text-white lg:before:col-span-2 lg:before:col-start-1 lg:before:mt-12 lg:before:h-px lg:before:bg-white"
>
  <header class="space-y-6 lg:col-span-6 lg:col-start-3">
    <h2 class="text-4xl lg:text-6xl">Inscriptions</h2>
    <p class="text-xl leading-normal lg:text-3xl">
      Vous êtes désireux d'entrer au conservatoire&nbsp;? Vous trouverez ici toutes
      les informations sur les modalités d'inscriptions.
    </p>
  </header>
  <Button
    classes="lg:col-span-4 lg:col-start-9 lg:self-start lg:justify-self-end"
    href="/inscription"
    text="S'inscrire"
    variant="outlined"
  />

  <Picture
    pictureAttributes={{
      class:
        "duotone absolute -z-1 inset-0 object-cover after:absolute after:inset-0 after:bg-indigo/50",
    }}
    src={imgCrdExt}
    alt="Façade Est du conservatoire avec des pins devant"
    layout="full-width"
  />
</section>

Positionnement de l’image :

absolute : Position absolue (sort du flux)
-z-1 : Derrière le contenu (z-index: -1)
inset-0 : Couvre toute la section (top/right/bottom/left: 0)
object-cover : L’image couvre l’espace en conservant le ratio
Effet duotone :

duotone : Classe appliquant l’effet bichromie (rose/indigo)
Overlay supplémentaire avec pseudo-élément ::after :

after:absolute after:inset-0 : Pseudo-élément couvrant toute l’image
after:bg-indigo/50 : Fond indigo avec opacité 50%
Assombrit l’image pour améliorer la lisibilité du texte blanc
Syntaxe opacity avec /

bg-indigo/50 est équivalent à bg-indigo bg-opacity-50. La syntaxe /50 est plus concise et s’applique directement à la couleur.

Documentation Tailwind

Étape 5 : Superposition des couches
L’ordre des couches (du fond vers le premier plan) :

1. Image (z-index: auto)
   └── duotone (effet bichromie)
       └── ::after (overlay indigo/50)

2. Séparateur (::before de la section)

3. Contenu (z-index: auto, au-dessus de l'image grâce à -z-1)
   ├── Header (titre + description)
   └── Button

Effet visuel :

L’image en duotone est assombrie par l’overlay indigo semi-transparent
Le texte blanc contraste fortement avec le fond sombre
Le bouton outlined ressort sur le fond sombre
Le séparateur blanc ajoute une touche graphique
Code final de la section
src/pages/index.astro
<section
  class="grille relative space-y-8 py-54 text-white lg:before:col-span-2 lg:before:col-start-1 lg:before:mt-12 lg:before:h-px lg:before:bg-white"
>
  <header class="space-y-6 lg:col-span-6 lg:col-start-3">
    <h2 class="text-4xl lg:text-6xl">Inscriptions</h2>
    <p class="text-xl leading-normal lg:text-3xl">
      Vous êtes désireux d'entrer au conservatoire&nbsp;? Vous trouverez ici toutes
      les informations sur les modalités d'inscriptions.
    </p>
  </header>
  <Button
    classes="lg:col-span-4 lg:col-start-9 lg:self-start lg:justify-self-end"
    href="/inscription"
    text="S'inscrire"
    variant="outlined"
  />
  <Picture
    pictureAttributes={{
      class:
        "duotone absolute -z-1 inset-0 object-cover after:absolute after:inset-0 after:bg-indigo/50",
    }}
    src={imgCrdExt}
    alt="Façade Est du conservatoire avec des pins devant"
    layout="full-width"
  />
</section>

Cette section clôture la page d’accueil avec un CTA fort et visuellement impactant, invitant les visiteurs à s’inscrire au conservatoire.


H2/Pocketbase
 H3/Installation et config
    Installation et config
Branche Git

Branche : 17.-Installation-Pocketbase
N° : 17

Installation de PocketBase
Téléchargement
Créer un répertoire nommé pocketbase à la racine du projet.
Télécharger Pocketbase et déplacer l’application dans le répertoire pocketbase.
Documentation PocketBase

PocketBase - Backend Open Source en un seul fichier
Backend Open Source en un seul fichier avec base de données temps réel, authentification, stockage de fichiers et tableau de bord d’administration

Démarrez Pocketbase avec les commandes suivantes :

Fenêtre de terminal
# Aller dans le dossier pocketbase
cd pocketbase

# Lancez PocketBase
./pocketbase serve

Configuration initiale
Créer un compte admin
Ouvrir http://127.0.0.1:8090/\_/
Créer un compte administrateur (e-mail et mot de passe)
Configurer les paramètres de base
Répertoires automatiques

L’exécutable PocketBase créera automatiquement 2 nouveaux répertoires :

pb_data - stocke les données de votre application, les fichiers téléchargés, etc. (doivent généralement être ajoutés dans .gitignore)
pb_migrations - contient les fichiers de migration JS avec les modifications de votre collection (peuvent être validés en toute sécurité dans votre référentiel)
Vous pouvez trouver toutes les commandes disponibles en exécutant ./pocketbase --help ou ./pocketbase [command] --help

Structure du répertoire Pocketbase
Répertoireproject/
Répertoirepocketbase/
pocketbase
#Binaire exécutable
Répertoirepb_data/
#Base de données et fichiers
data.db
#SQLite database
Répertoirestorage/
#Fichiers uploadés
logs.db
#Logs
Répertoirepb_migrations/
#Fichiers de migration JS
Rendez-vous à l’url indiquée pour l’API (http://127.0.0.1:8090/_/).

Fichier .gitignore pour pocketbase
Pourquoi ignorer ces fichiers ?

Les fichiers de données PocketBase (pb_data/), l’exécutable et les fichiers temporaires ne doivent pas être versionnés car ils contiennent des données locales, des fichiers uploadés et varient selon l’environnement. Seuls les fichiers de migration (pb_migrations/) doivent être versionnés pour partager la structure de la base de données entre développeurs.

Ajoutez les lignes suivantes à la fin du fichier .gitignore du projet :

.gitignore
# PocketBase
pocketbase/pb_data/*
!pocketbase/pb_data/types.d.ts
pocketbase/pocketbase
pocketbase/pocketbase.exe
pocketbase/pb_data.zip
pocketbase/CHANGELOG.md
pocketbase/LICENSE.md
pocketbase/pb_public

Variables d’environnement
Pourquoi utiliser les variables d’environnement ?

Les variables d’environnement permettent de séparer la configuration selon l’environnement (développement, production). Cela évite de coder en dur les URL et facilite le déploiement. Le préfixe PUBLIC_ rend la variable accessible côté client dans Astro voir documentation.

Créer .env à la racine du projet Astro :

.env
PUBLIC_POCKETBASE_URL=http://127.0.0.1:8090

Scripts de développement
Pour faciliter le développement, nous allons configurer des scripts qui permettent de démarrer Astro et PocketBase simultanément.

Installer concurrently Installer le package concurrently qui permet d’exécuter plusieurs commandes en parallèle :

Fenêtre de terminal
npm install -D concurrently

Qu’est-ce que concurrently ?

concurrently est un outil qui permet de lancer plusieurs processus en parallèle dans un seul terminal. Parfait pour démarrer le serveur Astro et PocketBase en même temps.

Configurer les scripts Ajouter les scripts suivants dans package.json :

{
  "scripts": {
    "dev": "astro dev",
    "start": "astro dev",
    "build": "astro build",
    "preview": "astro preview",
    "astro": "astro",
    "pb:serve": "cd pocketbase && ./pocketbase serve",
    "dev:all": "concurrently \"npm run dev\" \"npm run pb:serve\""
  }
}

Explication des scripts :

pb:serve : Lance uniquement le serveur PocketBase
dev:all : Lance à la fois Astro et PocketBase en parallèle
Démarrer l’environnement de développement Pour démarrer les deux serveurs en une seule commande :

Fenêtre de terminal
npm run dev:all

Vous verrez les logs des deux serveurs s’afficher dans le même terminal. Astro sera accessible sur http://localhost:4321 et PocketBase sur http://127.0.0.1:8090.


 H3/Modèles de données
    Les collections et les tables
Les collections représentent les données de votre application. Il s’agit de tables simples qui sont générées automatiquement avec le nom de la collection et les champs (propriétés ou colonnes des tables). Une seule entrée d’une collection est appelée enregistrement, c’est-à-dire une seule ligne dans la table.

Documentation officielle

Pour plus de détails sur chaque type de champ, consultez la documentation PocketBase sur les collections.

Collection des évènements
Créez la collection event. Cette collection stockera les évènements du conservatoire (concerts, auditions, masterclasses, etc.).

Interface PocketBase
Champs de la collection event
Champ	Type	Options
published	Bolean	
title	Text	Required, Min: 3, Max: 200
date	Date	Required
imgFile	File	Required / Single / jpg, webp / Thumb sizes: 1024x1024, 1024x680
imgAlt	Text	Required
lieu	Select	Conservatoire / Maison du peuple
category	Select	Danse / Théâtre / Musique.
excerpt	Text	Required / Max: 200
description	Rich editor	Required
created	create	
updated	create/update	
Création de la collection event
Configuration spécifique
Configuration du champ imgUrl

Pour le champ imgUrl, autorisez uniquement le JPEG et le Webp (pris en compte ensuite pour le redimensionnement) et ajoutez deux tailles d’image :

1024x1024
1024x680
Collection page
La collection page stocke les pages statiques du site (À propos, Contact, Mentions légales, etc.).

Création de la collection page
Champs de la collection page
Champ	Type	Options
published	Bolean	
title	Text	Required, Max: 200
imgFile	File	Required / Single / jpg, webp / Thumb sizes: 1024x1024, 1024x680
imgAlt	Text	Required
excerpt	Text	Max: 300
description	Rich editor	Required
created	create	
updated	create/update	
Différence entre event et page
Aspect	Collection event	Collection page
Usage	Contenu dynamique avec dates	Contenu statique
Fréquence	Créés régulièrement	Rarement modifiés
Durée	Éphémère (événement passé)	Permanent
Ordre	Chronologique (date)	Personnalisé (order)
Exemples	Concerts, auditions	À propos, Contact, CGU
Diagramme UML
Vous pouvez générer un diagramme UML de votre base de données PocketBase en utilisant l’application suivante :

PocketBaseUML
Visualize your PocketBase databases
Export de la collection

Utilisez l’export de la collection générée par l’API : http://127.0.0.1:8090/_/#/settings/export-collections

Diagramme UML de la base de données
Création des données de test
Évènements de test
Renseignez au moins 7 évènements pour tester votre application.

Évènements de test créés
Pages de test
Créez au moins 3 pages statiques :

À propos : Présentation du conservatoire
Contact : Coordonnées et formulaire
Mentions légales : Informations légales


 H3/Règles d'accès
    Règles d'accès
Les règles API
Les règles API sont les contrôles d’accès et les filtres de données de votre collection. Elles déterminent qui peut effectuer quelles actions sur vos données.

Introduction - API rules and filters
Les 5 règles disponibles
Chaque collection dispose de 5 règles, correspondant à une action API spécifique :

listRule : Récupérer la liste des enregistrements
viewRule : Consulter un enregistrement précis
createRule : Créer un nouvel enregistrement
updateRule : Modifier un enregistrement existant
deleteRule : Supprimer un enregistrement
Configuration des règles
Étape 1 : Accéder aux règles
Aller dans Collections
Sélectionner une collection
Cliquer sur API Rules
Configurer chaque type de règle
Étape 2 : Rendre accessible la règle list/search
Pour permettre à tous de récupérer les données, configurez la règle List/Search avec une chaîne vide ou une expression de filtre.

Collection event et page
Configuration recommandée pour les évènements publics :

API Rules
Règle	Condition
List	published = true
View	published = true
Create	Verrouillé
Update	Verrouillé
Delete	Verrouillé
Explication :

List/View : Seuls les évènements publiés sont visibles publiquement
Create/Update/Delete : Accessible par un administrateur uniquement
Tester les règles d’accès
Vérifier l’accès aux données
Tester l’URL API dans le navigateur :

http://127.0.0.1:8090/api/collections/event/records
http://127.0.0.1:8090/api/collections/page/records

Tester avec curl
Fenêtre de terminal
# Récupérer les évènements
curl http://127.0.0.1:8090/api/collections/event/records

# Récupérer une page spécifique
curl http://127.0.0.1:8090/api/collections/page/records/RECORD_ID

Tester les filtres
Fenêtre de terminal
# Évènements publiés uniquement
curl "http://127.0.0.1:8090/api/collections/event/records?filter=status='published'"

# Évènements futurs
curl "http://127.0.0.1:8090/api/collections/event/records?filter=date>='@now'"



 H3/Collecte des données
    Collecte des données
Branche Git

Branche : 18.-Collecte-des-données
N° : 18

Introduction
PocketBase expose une API REST complète qui permet d’interagir avec vos collections de données directement depuis votre application Astro. Cette API offre toutes les opérations CRUD (Create, Read, Update, Delete) nécessaires pour manipuler vos données de manière simple et sécurisée.

Le SDK JavaScript de PocketBase facilite grandement l’utilisation de cette API en fournissant des méthodes pratiques et typées. Dans ce chapitre, nous allons voir comment :

Configurer la connexion à votre instance PocketBase
Récupérer la liste complète d’une collection
Filtrer et trier les données (événements à venir)
Obtenir un élément spécifique par son identifiant
Ces fonctions constituent la base de toute interaction avec votre backend PocketBase et seront réutilisées dans les pages dynamiques de votre site.

Cas d’usage des fonctions
Chaque fonction a un rôle spécifique dans l’architecture de votre application :

getCollection() : récupère tous les éléments d’une collection. Utile en mode static pour générer les fichiers HTML de chaque événement au moment du build.
getUpcomingEvents() : récupère tous les événements à venir sans limite. Sera utilisée pour afficher la liste complète des événements sur la page agenda.
getNextEvents() : récupère un nombre limité d’événements à venir (par défaut 3). Sera utilisée pour afficher les prochains événements sur la page d’accueil.
getOneById() : récupère un événement spécifique par son identifiant. Permet d’afficher les détails complets d’un événement dans son template dédié.
API Records Pocketbase
Web APIs reference - API Records
Connexion à PocketBase
Installation du SDK
Commencez par installer PocketBase avec la commande suivante :

Fenêtre de terminal
npm install pocketbase --save

Créer le fichier backend
Dans le répertoire js, ajoutez un fichier backend.mjs :

src/js/backend.mjs
// Importation de la bibliothèque PocketBase
import PocketBase from "pocketbase";

// Définition de l'URL de l'instance PocketBase
const POCKETBASE_URL = import.meta.env?.PUBLIC_POCKETBASE_URL || "http://127.0.0.1:8090";

// Création de l'instance PocketBase avec l'URL définie plus haut
const pb = new PocketBase(POCKETBASE_URL);

// Exportation de l'instance PocketBase pour l'utiliser dans d'autres fichiers
export { pb };

Récupérer la liste d’une collection
Fonction simple getCollection()
Dans le fichier backend.mjs, ajoutez la fonction getCollection() qui récupère la liste de tous les contenus d’une collection.

// Fonction pour récupérer tous les contenus de la collection spécifiée
// Utilise la méthode `getFullList` de PocketBase qui renvoie tous les éléments de la collection
export async function getCollection(collection) {
  try {
    // Tentative de récupération de la liste complète des événements de la collection donnée
    return await pb.collection(collection).getFullList();
  } catch (error) {
    // Si une erreur survient, elle est loguée dans la console
    console.error("Erreur lors de la récupération des contenus :", error);
    // Retourne un tableau vide en cas d'échec
    return [];
  }
}

Vérifier l’accès aux données
Vous pouvez afficher les éléments en suivant l’URL fournie par l’API :

http://127.0.0.1:8090/api/collections/event/records

Vous pouvez également ajouter le code ci-dessous pour tester la fonction getCollection() :

src/js/backend.mjs
try {
  const records = await getCollection("event");
  console.log(records);
} catch (e) {
  console.error(e);
}

Lancez ensuite les commandes suivantes dans le terminal :

Fenêtre de terminal
cd src/js
node backend.mjs

Récupérer la liste des prochains évènements
/**
 * Récupère tous les événements à venir (sans pagination)
 * @param {string} collection - Nom de la collection (défaut: "event")
 * @returns {Promise<Array>} Liste de tous les événements à venir ou tableau vide
 */
export async function getUpcomingEvents(collection = "event") {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const items = await pb.collection(collection).getFullList({
      filter: `date >= "${today.toISOString()}"`,
      sort: "+date",
    });

    return items;
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des événements à venir :",
      error,
    );
    return [];
  }
}

Vérifier l’accès aux données
src/js/backend.mjs
try {
  const records = await getUpcomingEvents("event");
  console.log(records);
} catch (e) {
  console.error(e);
}

Lancez ensuite les commandes suivantes dans le terminal :

Fenêtre de terminal
cd src/js
node backend.mjs

Récupérer un nombre limité d’événements à venir
Cette fonction est similaire à getUpcomingEvents(), mais elle permet de limiter le nombre de résultats. Elle est particulièrement utile pour afficher un aperçu des prochains événements sur la page d’accueil, par exemple les 3 prochains événements.

/**
 * Récupère les prochains événements à venir (limité à un nombre spécifique)
 * @param {number} limit - Nombre d'événements à récupérer (défaut: 3)
 * @param {string} collection - Nom de la collection (défaut: "event")
 * @returns {Promise<Array>} Liste des prochains événements ou tableau vide
 */
export async function getNextEvents(limit = 3, collection = "event") {
  try {
    // Crée un objet Date représentant la date d'aujourd'hui
    const today = new Date();
    // Réinitialise l'heure à 00:00:00 (pour ne pas inclure d'événements passés)
    today.setHours(0, 0, 0, 0);

    // Récupère les événements de la collection spécifiée, en les filtrant par date
    // et en limitant le nombre de résultats
    const items = await pb.collection(collection).getList(1, limit, {
      filter: `date >= "${today.toISOString()}"`, // Filtre basé sur la date actuelle
      sort: "+date", // Tri croissant des événements par date
    });
    // Retourne les événements récupérés
    return items.items;
  } catch (error) {
    // Si une erreur survient lors de la récupération des événements, elle est loguée dans la console
    console.error(
      "Erreur lors de la récupération des prochains événements :",
      error,
    );
    return [];
  }
}

Différence avec getUpcomingEvents()
La principale différence entre getNextEvents() et getUpcomingEvents() réside dans la méthode utilisée :

getNextEvents() utilise getList() avec pagination et limite le nombre de résultats
getUpcomingEvents() utilise getFullList() qui récupère tous les événements à venir sans limite
Vérifier l’accès aux données
src/js/backend.mjs
try {
  const records = await getNextEvents(3, "event");
  console.log(records);
} catch (e) {
  console.error(e);
}

Lancez ensuite les commandes suivantes dans le terminal :

Fenêtre de terminal
cd src/js
node backend.mjs

Récupérer un élément spécifique par son ID
/**
 * Récupère un élément spécifique par son ID
 * @param {string} id - Identifiant de l'élément
 * @param {string} collection - Nom de la collection
 * @returns {Promise<Object|null>} L'élément trouvé ou null en cas d'erreur
 */
export async function getOneById(id, collection) {
  try {
    const item = await pb.collection(collection).getOne(id);
    return item;
  } catch (error) {
    console.error(
      `Erreur lors de la récupération de l'élément "${id}" de la collection "${collection}" :`,
      error,
    );
    return null;
  }
}

Vérifier l’accès aux données
Remplacez l’id par un id existant dans votre base de données

src/js/backend.mjs
try {
  const records = await getOneById("4tvlzgedjmy6skf", "event");
  console.log(records);
} catch (e) {
  console.error(e);
}

Lancez ensuite les commandes suivantes dans le terminal :

Fenêtre de terminal
cd src/js
node backend.mjs

 H3/Composant ImagePB
    Composant ImagePB
Branche Git

Branche : 19.-Composant-Image-PB
N° : 19

Lors de l’intégration de PocketBase dans un projet Astro, plusieurs stratégies peuvent être adoptées pour récupérer et afficher les images stockées. Plutôt que d’inclure la logique de construction des URLs directement dans la collecte des données (backend.mjs), il est préférable d’encapsuler cette logique dans un composant spécifique. Voici pourquoi :

1. Meilleure séparation des responsabilités (SoC)

Le backend (backend.mjs) doit se concentrer sur la récupération des données, tandis que l’affichage et l’optimisation des images relèvent du frontend. Cela évite un mélange de logique et améliore la clarté du code.

2. Réutilisabilité et simplicité du code

Un composant unique évite la répétition du code et facilite la gestion des mises à jour. Si la structure des URLs change, il suffit de modifier un seul fichier.

3. Optimisation et flexibilité

Un composant permet d’intégrer facilement :

L’optimisation des images (avif, webp, lazy loading)
Des miniatures (thumb), des classes CSS dynamiques, et des fallbacks
Des évolutions (authentification, taille d’image dynamique)
Étape 1 : Création du composant ImagePB
Créez le fichier ImagePB.astro dans le répertoire src/components avec la structure de base suivante :

src/components/ImagePB.astro
---
import { Picture } from 'astro:assets';

const {
  record,
  field,
  alt,
  classPicture,
  classImg,
  thumb,
  layout,
} = Astro.props;

// Layouts disponibles pour les images responsives Astro
// @see https://docs.astro.build/fr/reference/modules/astro-assets/#layout
const VALID_LAYOUTS = ["constrained", "full-width", "fixed", "none"];
// Vérifie que le layout est valide, sinon utilise "constrained" par défaut
const resolvedLayout = VALID_LAYOUTS.includes(layout) ? layout : "constrained";
---

{imageUrl && (
  <Picture
    pictureAttributes={{ class: classPicture }}
    class={classImg}
    inferSize={true}
    layout={resolvedLayout}
    formats={['avif', 'webp']}
    alt={alt || ""}
  />
)}

Props du composant :

record : Un objet représentant un enregistrement de PocketBase
field : Nom du champ contenant le fichier image dans le record PocketBase
alt : Texte alternatif pour l’image (chaîne vide par défaut)
classPicture : Classe CSS appliquée au <picture>
classImg : Classe CSS appliquée à l’<img>
thumb : Taille du thumbnail PocketBase (ex : "1024x1024")
layout : Mode de rendu responsive de l’image ("constrained", "full-width", "fixed" ou "none" — "constrained" par défaut)
Layouts responsives Astro
La prop layout permet de contrôler le comportement responsive de l’image via le composant <Picture> d’Astro :

constrained (par défaut) : L’image est redimensionnée pour s’adapter à son conteneur, sans jamais dépasser ses dimensions intrinsèques.
full-width : L’image occupe toute la largeur de son conteneur, idéale pour les images hero ou bannières.
fixed : L’image conserve ses dimensions exactes, sans adaptation responsive.
none : Aucun layout appliqué, le comportement est celui d’une image classique.
La validation via VALID_LAYOUTS garantit qu’une valeur invalide ou absente sera remplacée par "constrained", évitant ainsi les erreurs de rendu.

Astro - Layout d'images responsives
Documentation officielle sur les modes de layout pour les composants Image et Picture
Étape 2 : Récupération de l’URL depuis PocketBase
Structure des URLs PocketBase

Dans PocketBase, les fichiers (y compris les images) sont stockés dans des collections sous forme de champs de type file. Pour récupérer les URL des images stockées, il faut respecter la structure des URLs générées par PocketBase.

L’URL d’une image stockée dans PocketBase suit le format suivant :

http://<URL_POCKETBASE>/api/files/COLLECTION_ID_OR_NAME/RECORD_ID/FILENAME

URL_POCKETBASE : Adresse de votre instance PocketBase
COLLECTION_ID_OR_NAME : Nom (ou ID) de la collection où est stocké le fichier
RECORD_ID : Identifiant unique du document contenant l’image
FILENAME : Nom du fichier image
PocketBase - Files Handling
Documentation officielle sur la gestion des fichiers et la construction des URLs
2.1 Fonction utilitaire getFileURL dans backend.mjs
Plutôt que d’importer directement l’instance pb dans le composant, nous allons encapsuler la logique de construction d’URL dans une fonction utilitaire dédiée dans backend.mjs. Cela renforce la séparation des responsabilités : le backend gère les interactions avec PocketBase, le composant se concentre sur l’affichage.

Ajoutez la fonction suivante dans backend.mjs :

src/js/backend.mjs
/**
 * Retourne l'URL d'un fichier PocketBase à partir d'un record et d'un champ.
 * @param {object} record - L'enregistrement PocketBase
 * @param {string} field - Le nom du champ fichier
 * @param {string} [thumb="1024x1024"] - La taille du thumbnail
 * @returns {string|null} L'URL du fichier ou null
 */
export function getFileURL(record, field, thumb) {
  return field ? pb.files.getURL(record, field, { thumb }) : null;
}

Pourquoi cette approche ?

Le composant ImagePB n’a plus besoin de connaître l’instance pb directement
La logique de construction d’URL est centralisée et testable
Si la méthode PocketBase change, une seule modification suffit
2.2 Intégration dans le composant ImagePB
Maintenant que la fonction getFileURL est disponible, mettons à jour le composant ImagePB.astro pour l’utiliser :

src/components/ImagePB.astro
---
import { Picture } from "astro:assets";
import { getFileURL } from "../js/backend.mjs";

const { record, field, alt, classPicture, classImg, thumb, layout } =
  Astro.props;

// Layouts disponibles pour les images responsives Astro
// @see https://docs.astro.build/fr/reference/modules/astro-assets/#layout
const VALID_LAYOUTS = ["constrained", "full-width", "fixed", "none"];
// Vérifie que le layout est valide, sinon utilise "constrained" par défaut
const resolvedLayout = VALID_LAYOUTS.includes(layout) ? layout : "constrained";

const imageUrl = record && field ? getFileURL(record, field, thumb) : null;
---

{
  imageUrl && (
    <Picture
      pictureAttributes={{ class: classPicture }}
      class={classImg}
      inferSize={true}
      layout={resolvedLayout}
      formats={["avif", "webp"]}
      src={imageUrl}
      alt={alt || ""}
    />
  )
}

Explication de la logique :

Import : On importe getFileURL depuis backend.mjs au lieu de l’instance pb directement. La logique de construction d’URL est ainsi centralisée dans le backend.

Props : La déstructuration inclut désormais thumb (sans valeur par défaut) et layout pour contrôler le mode de rendu responsive.

Validation du layout : Le tableau VALID_LAYOUTS liste les modes supportés par Astro. Si le layout passé en prop n’est pas valide (ou absent), "constrained" est utilisé par défaut.

Construction de l’URL :

record && field : Vérifie que le record et le champ sont définis avant de tenter la construction de l’URL
Si les deux sont présents → appel à getFileURL(record, field, thumb) qui délègue à pb.files.getURL(...)
Sinon → retourne null, et l’image ne s’affiche pas
Attribut layout : Passé au composant <Picture> d’Astro pour gérer le comportement responsive de l’image.

Fonctionnalité de recadrage (thumb)
PocketBase propose une fonctionnalité de génération automatique de miniatures et de recadrage d’images via le paramètre thumb. Cette fonctionnalité permet d’optimiser les performances en servant des versions redimensionnées des images plutôt que les fichiers originaux.

Limitations des formats

La fonctionnalité thumb est limitée aux formats suivants :

jpg : Support complet
png : Support complet
gif : Seule la première frame est traitée
webp : Support partiel (l’image est convertie et stockée en png)
Les autres formats (avif, svg, etc.) retourneront l’image originale sans transformation.

Formats de recadrage supportés :

WxH (ex: 100x300) : Recadrage vers une boîte de visualisation WxH (depuis le centre)
WxHt (ex: 100x300t) : Recadrage vers une boîte de visualisation WxH (depuis le haut)
WxHb (ex: 100x300b) : Recadrage vers une boîte de visualisation WxH (depuis le bas)
WxHf (ex: 100x300f) : Ajustement dans une boîte de visualisation WxH (sans recadrage)
0xH (ex: 0x300) : Redimensionnement à la hauteur H en préservant le ratio
Wx0 (ex: 100x0) : Redimensionnement à la largeur W en préservant le ratio
Configuration dans PocketBase

Les tailles de miniatures disponibles doivent être définies à l’avance dans les options du champ de type file dans l’interface d’administration de PocketBase. Seules les tailles configurées pourront être utilisées via le paramètre thumb.

Champs image
Si une taille non configurée est demandée, PocketBase retournera l’image originale.

Tailles d’images dans la maquette
Dans le cadre de ce projet, deux tailles d’images ont été définies selon leur utilisation dans l’interface :

1024x1024 : Image carrée affichée sur la page détail d’un événement
1024x680 : Image rectangulaire affichée dans les composants Card (listing des événements)
Ces dimensions doivent être configurées dans PocketBase pour permettre au composant ImagePB de les utiliser via le paramètre thumb.

Prochaine étape : intégration dans Card.astro
Dans les chapitres suivants, nous verons comment utiliser ce composant Image spécifique pour importer les images de PocketBase dans composant Card et Hero.



H2/Pages dynamiques
 H3/Modification de Card
    Page Agenda
Pour gérer correctement les données provenant de PocketBase, le composant Card nécessite quelques adaptations.

Remplacement de l’image statique
src/components/Card.astro
---
import { Picture } from "astro:assets";
import ImagePB from "./ImagePB.astro";
const event = Astro.props;
---

<article class="group col-span-4 grid grid-cols-[24px_1fr] grid-rows-[200px_48px_1fr] lg:grid-cols-[2fr_11fr]">
  <Picture
    src={event.imgFile}
    alt={event.imgAlt}
    pictureAttributes={{
      class: "duotone col-start-1 row-start-1 col-span-2 row-span-2 group-hover:before:bg-black",
    }}
    class="group-hover:mix-blend-normal group-hover:grayscale-0"
  />
  <ImagePB
     record={event}
     field={event.imgFile}
     alt={event.imgAlt}
     classPicture="duotone col-start-1 row-start-1 col-span-2 row-span-2 group-hover:before:bg-black"
     classImg="group-hover:grayscale-0 group-hover:mix-blend-normal"
     thumb="1024x680"
  />
  {/* ... reste du composant ... */}
</article>

Le composant ImagePB remplace le composant Picture classique et gère automatiquement la construction des URLs PocketBase ainsi que l’optimisation des images avec le paramètre thumb.

Formatage de la date
La date stockée dans PocketBase est au format ISO 8601. Pour l’afficher de manière lisible en français, nous devons la formater.

Création du helper de formatage
Pour formater les dates de manière cohérente dans toute l’application, créez un fichier utilitaire src/js/helpers.js :

src/js/helpers.js
/**
 * Formatter Intl.DateTimeFormat singleton pour éviter de recréer l'objet à chaque appel
 */
const formatter = new Intl.DateTimeFormat("fr-FR", {
  day: "numeric",
  month: "long",
  year: "numeric",
  hour: "numeric",
  minute: "numeric",
  hour12: false,
  timeZone: "Europe/Paris",
});

/**
 * Formate une date en français avec heure
 * @param {string|Date} dateString - Date à formater
 * @returns {string} Date formatée
 */
export function formatDate(dateString) {
  const date = new Date(dateString);
  return formatter.format(date);
}

Avantages de cette approche :

Performance : Le formatter est créé une seule fois (singleton) et réutilisé à chaque appel
Cohérence : Le format de date est uniforme dans toute l’application
Réutilisabilité : La fonction peut être importée partout où c’est nécessaire
Internationalisation : Utilise l’API native Intl.DateTimeFormat qui gère correctement les formats locaux
Format de sortie

Avec cette configuration, une date comme 2026-02-15T20:00:00.000Z sera formatée en : 15 février 2026 à 21:00

Utilisation de la fonction de formatage
src/components/Card.astro
---
import { formatDate } from "../js/helpers";
import ImagePB from "./ImagePB.astro";

const event = Astro.props;
---
  <p class="uppercase">{ formatDate(event.date) }</p>

Code final complet
src/components/Card.astro
---
import { formatDate } from "../js/helpers";
import ImagePB from "./ImagePB.astro";
const event = Astro.props;
---

<article
  class="group col-span-4 grid grid-cols-[24px_1fr] grid-rows-[200px_48px_1fr] lg:grid-cols-[2fr_11fr]"
>
  <ImagePB
    record={event}
    field={event.imgFile}
    alt={event.imgAlt}
    classPicture="duotone col-start-1 row-start-1 col-span-2 row-span-2 group-hover:before:bg-black"
    classImg="group-hover:grayscale-0 group-hover:mix-blend-normal"
    thumb="1024x680"
  />
  <h3
    class="z-1 col-start-2 row-start-1 my-6 mr-4 self-end font-mono text-3xl text-white"
  >
    <a href="#">{event.title}</a>
  </h3>
  <div
    class="z-2 col-span-1 col-start-2 row-span-2 row-start-2 space-y-4 bg-white p-6"
  >
    <p class="uppercase">{formatDate(event.date)}</p>
    <p>{event.excerpt}</p>
    <a class="inline-block border-b-2 border-black uppercase" href="#"
      >Plus d'info</a
    >
  </div>
</article>

La page Agenda est maintenant fonctionnelle et affiche dynamiquement tous les événements à venir récupérés depuis PocketBase, avec leurs images optimisées et leurs dates formatées en français.



 H3/Page agenda
    Page Agenda
Branche Git

Branche : 20.-Page-Agenda
N° : 20

La page Agenda permet d’afficher la liste de tous les événements à venir du conservatoire. Cette page est construite en utilisant les composants existants (Layout, Hero, Card) et en intégrant les données récupérées depuis PocketBase.

Structure de base de la page
Créez le fichier src/pages/agenda/index.astro avec la structure suivante :

src/pages/agenda/index.astro
---
import { Picture } from "astro:assets";

import Layout from "../../layouts/Layout.astro";
import Hero from "../../components/Hero.astro";
import Card from "../../components/Card.astro";

import imgHero from "../../assets/img/musique-02.jpg";

const title = "Agenda";
const description =
  "Lieu de création artistique, le conservatoire propose régulièrement des actions culturelles ouvertes à tous.";
---

<Layout title={title} description={description}>
  <Hero title={title}>
    <p slot="chapo">
      Lieu de création artistique, le conservatoire propose régulièrement des
      actions culturelles ouvertes à tous.
    </p>
    <Picture
      slot="image"
      src={imgHero}
      alt="Violoncelles"
      layout="full-width"
      pictureAttributes={{ class: "duotone !absolute inset-0 object-cover" }}
    />
  </Hero>
  {/* Le contenu sera ajouté ici */}
</Layout>

Cette structure reprend les éléments classiques déjà utilisés dans le projet : un layout global, un hero avec image et texte d’introduction.

Import des données depuis PocketBase
Pour afficher les événements à venir, nous allons utiliser la fonction getUpcomingEvents que nous avons créée précédemment dans backend.mjs.

Ajoutez l’import et l’appel de la fonction dans le frontmatter :

src/pages/agenda/index.astro
---
import { Picture } from "astro:assets";

import Layout from "../../layouts/Layout.astro";
import Hero from "../../components/Hero.astro";
import Card from "../../components/Card.astro";

import imgHero from "../../assets/img/musique-02.jpg";

import { getUpcomingEvents } from "../../js/backend.mjs";

const events = await getUpcomingEvents("event");

const title = "Agenda";
const description =
  "Lieu de création artistique, le conservatoire propose régulièrement des actions culturelles ouvertes à tous.";
---

Points importants :

L’appel à getUpcomingEvents("event") est asynchrone (utilisation de await)
Le résultat est stocké dans la constante events qui contient un tableau d’objets
Chaque objet représente un événement avec ses propriétés (title, date, excerpt, imgFile, imgAlt, etc.)
Affichage des événements avec une boucle
Après le composant Hero, ajoutez une section pour afficher les événements sous forme de grille :

src/pages/agenda/index.astro
<Layout title={title} description={description}>
  <Hero title={title}>
    {/* ... Hero content ... */}
  </Hero>
  <div class="grille my-24">
    {
      events.length > 0 ? (
        events.map((event) => <Card {...event} />)
      ) : (
        <p class="col-span-4">Aucun événement à afficher.</p>
      )
    }
  </div>
</Layout>

Explication de la logique :

Vérification : events.length > 0 vérifie s’il y a des événements à afficher
Boucle avec map : Si des événements existent, events.map((event) => ...) parcourt le tableau et génère un composant Card pour chaque événement
Spread operator : {...event} passe toutes les propriétés de l’objet event comme props au composant Card
Fallback : Si aucun événement n’existe, un message informatif est affiché
L’opérateur spread

L’opérateur {...event} est équivalent à passer chaque propriété individuellement :

<Card title={event.title} date={event.date} excerpt={event.excerpt} imgFile={event.imgFile} ... />

Cela simplifie considérablement le code, surtout quand l’objet contient de nombreuses propriétés.

Utilisation de la fonction de formatage
src/components/Card.astro
---
import { formatDate } from "../js/helpers";
import ImagePB from "./ImagePB.astro";

const event = Astro.props;
---
  <p class="uppercase">{ formatDate(event.date) }</p>

Code final complet
Voici le code final de la page Agenda avec toutes les modifications intégrées :

src/pages/agenda/index.astro
---
import { Picture } from "astro:assets";

import Layout from "../../layouts/Layout.astro";
import Hero from "../../components/Hero.astro";
import Card from "../../components/Card.astro";

import imgHero from "../../assets/img/musique-02.jpg";

import { getUpcomingEvents } from "../../js/backend.mjs";

const events = await getUpcomingEvents("event");

const title = "Agenda";
const description =
  "Lieu de création artistique, le conservatoire propose régulièrement des actions culturelles ouvertes à tous.";
---

<Layout title={title} description={description}>
  <Hero title={title}>
    <p slot="chapo">
      Lieu de création artistique, le conservatoire propose régulièrement des
      actions culturelles ouvertes à tous.
    </p>
    <Picture
      slot="image"
      src={imgHero}
      alt="Violoncelles"
      layout="full-width"
      pictureAttributes={{ class: "duotone !absolute inset-0 object-cover" }}
    />
  </Hero>
  <div class="grille my-24">
    {
      events.length > 0 ? (
        events.map((event) => <Card {...event} />)
      ) : (
        <p class="col-span-4">Aucun événement à afficher.</p>
      )
    }
  </div>
</Layout>

La page Agenda est maintenant fonctionnelle et affiche dynamiquement tous les événements à venir récupérés depuis PocketBase, avec leurs images optimisées et leurs dates formatées en français.



 H3/Modification de la page d'accueil
     Mise à jour de la page d'accueil
Branche Git

Branche : 20.-Page-Agenda
N° : 20

Introduction
Maintenant que nous avons mis en place les fonctions de collecte de données PocketBase, nous pouvons remplacer les données statiques de la page d’accueil par des données réelles provenant de notre backend.

Dans ce chapitre, nous allons :

Importer la fonction getNextEvents() pour récupérer les 3 prochains événements
Remplacer le tableau statique [1, 2, 3] par les données dynamiques
Afficher les événements avec le composant Card
Gérer le cas où aucun événement n’est disponible
Code de départ
Voici la section “Agenda” de la page d’accueil avec des données statiques :

src/pages/index.astro
---
import imgCrdExt from "../assets/img/conservatoire-exterieur-03.jpg";

import { getNextEvents } from "../js/backend.mjs";

const events = await getNextEvents();

const title = "Conservatoire Henri Dutilleux";
const subTitle = "Conservatoire à Rayonnement Départemental du Grand Belfort";
const description =
  "Le Conservatoire Henri Dutilleux de Belfort vous accueille pour découvrir la musique, la danse et le théâtre.";

const stats = [
  { number: 9, label: "sites" },
  { number: 84, label: "enseignants" },
  { number: 1500, label: "élèves" },
  { number: 50, label: "disciplines" },
];
---

<Layout title={title} description={description}>
  <!-- Hero section... -->

  <!-- Section découverte... -->

  <section
    class="grille space-y-8 py-24 lg:before:col-span-2 lg:before:col-start-1 lg:before:mt-12 lg:before:h-px lg:before:bg-black"
  >
    <header class="space-y-6 lg:col-span-6 lg:col-start-3">
      <h2 class="text-4xl lg:text-6xl">Agenda</h2>
      <p class="text-xl leading-normal lg:text-3xl">
        Lieu de création artistique, le conservatoire propose régulièrement des
        actions culturelles ouvertes à tous.
      </p>
    </header>
    <Button
      href="#"
      text="Tous les évènements"
      classes="lg:col-span-4 lg:col-start-9 lg:self-start lg:justify-self-end"
    />
    {
      [1, 2, 3].map((i) => (
        <Card
          title={`Titre de l'événement ${i}`}
          date="Lundi 15 mars à 20h30"
          excerpt="Description courte de l'événement à venir au conservatoire."
          imgFile={imgHero}
          imgAlt="Image de l'événement"
        />
      ))
      events.length > 0 ? (
        events.map((event) => <Card {...event} />)
      ) : (
        <p class="col-span-4">Aucun événement à afficher.</p>
      )
    }
  </section>

  <!-- Section inscriptions... -->
</Layout>

Utilisation de getNextEvents()
La fonction getNextEvents() récupère par défaut les 3 prochains événements à venir depuis PocketBase. Elle retourne un tableau d’objets contenant toutes les propriétés nécessaires au composant Card.

Spread operator
L’utilisation de {...event} permet de passer toutes les propriétés de l’objet event comme props au composant Card. Cela évite d’avoir à écrire chaque prop individuellement :

// Au lieu de :
<Card title={event.title} date={event.date} excerpt={event.excerpt} ... />

// On peut écrire :
<Card {...event} />

Gestion de l’absence d’événements
Le ternaire vérifie si le tableau events contient des éléments :

Si oui : on affiche les cartes avec .map()
Si non : on affiche un message “Aucun événement à afficher”
Cette gestion permet d’éviter d’afficher une section vide et améliore l’expérience utilisateur.

Vérification
Pour vérifier que tout fonctionne correctement :

Assurez-vous que PocketBase est lancé avec des événements dans la collection
Lancez le serveur de développement :
Fenêtre de terminal
npm run dev

Accédez à http://localhost:4321
Vérifiez que les 3 prochains événements s’affichent correctement dans la section Agenda
Astuce

Si aucun événement ne s’affiche, vérifiez que :

PocketBase est bien lancé
La collection event contient des événements avec une date future
L’URL de PocketBase dans .env est correcte



 H3/Template évènement
   Template d'événement
Branche Git

Branche : 21.-Template-évènement
N° : 21

Introduction
Maintenant que nous avons mis en place la collecte de données et l’affichage des événements sur la page d’accueil, nous allons créer un template de page dynamique qui permettra d’afficher les détails complets de chaque événement.

Dans ce chapitre, nous allons découvrir :

La syntaxe [slug].astro pour créer des routes dynamiques
Le mode static d’Astro et la fonction getStaticPaths()
Comment générer automatiquement une page HTML pour chaque événement au moment du build
L’ajout de liens dans le composant Card pour naviguer vers les pages d’événements
Pages dynamiques avec [slug].astro
Qu’est-ce qu’une route dynamique ?
Dans une application web classique, chaque page correspond à un fichier HTML. Mais lorsque vous avez des dizaines ou des centaines de contenus similaires (articles, produits, événements…), il serait fastidieux de créer manuellement un fichier pour chacun.

Les routes dynamiques permettent de créer un modèle de page unique qui sera utilisé pour générer automatiquement toutes les pages de vos événements.

La syntaxe [slug].astro
En nommant un fichier avec des crochets [slug].astro, vous indiquez à Astro que ce fichier est un template dynamique. Le mot entre crochets (slug dans notre cas) devient un paramètre qui sera extrait de l’URL.

Exemple d’URLs générées :

/agenda/event/abc123 → params.slug = "abc123"
/agenda/event/xyz789 → params.slug = "xyz789"

Dans notre cas, nous utilisons l’ID de l’événement comme slug, ce qui nous permet de récupérer facilement les données correspondantes depuis PocketBase.

Mode static et getStaticPaths()
Le mode static d’Astro
Astro fonctionne par défaut en mode static (SSG - Static Site Generation). Cela signifie que toutes les pages HTML sont générées au moment du build, et non à chaque requête du navigateur.

Avantages du mode static :

Performance maximale : les pages sont déjà prêtes, pas de calcul côté serveur
Hébergement simple : n’importe quel serveur web peut servir des fichiers HTML statiques
Référencement optimal : le contenu est immédiatement disponible pour les moteurs de recherche
La fonction getStaticPaths()
Pour générer des pages statiques à partir de données dynamiques, Astro a besoin de savoir quelles pages créer. C’est le rôle de la fonction getStaticPaths().

Cette fonction doit :

Récupérer la liste complète des éléments (tous les événements)
Retourner un tableau d’objets contenant :
params : les paramètres de l’URL (ici le slug)
props : les données à transmettre au template
export async function getStaticPaths() {
  const events = await getCollection("event");

  return events.map((event) => ({
    params: { slug: event.id },  // Le slug sera l'ID de l'événement
    props: { event },            // Les données complètes de l'événement
  }));
}

Au moment du build, Astro va :

Exécuter getStaticPaths()
Récupérer tous les événements de PocketBase
Générer un fichier HTML pour chaque événement
Chaque page sera accessible via /agenda/event/[ID-de-l-événement]
Création du template d’événement
Structure du fichier
Créez le fichier suivant : src/pages/agenda/event/[slug].astro

src/pages/agenda/event/[slug].astro
---
import ImagePB from "../../../components/ImagePB.astro";
import Layout from "../../../layouts/Layout.astro";
import Patterns from "../../../components/AnimatedPatterns.astro";
import { formatDate } from "../../../js/helpers";

import { getCollection } from "../../../js/backend.mjs";

export async function getStaticPaths() {
  const events = await getCollection("event");

  return events.map((event) => ({
    params: { slug: event.id },
    props: { event },
  }));
}

const { event } = Astro.props;

if (!event) {
  return Astro.redirect("/404");
}

const title = event.title;
const description = event.excerpt;
---

<Layout title={title} description={description}>
  <div class="grille relative lg:pt-28">
    <ImagePB
      record={event}
      field={event.imgFile}
      alt={event.imgAlt}
      classPicture="duotone lg:col-span-5 -ml-6 -mr-6 lg:mx-0"
      thumb="1024x1024"
    />
    <header class="lg:col-span-6 lg:col-start-7">
      <h1 class="my-12">{event.title}</h1>
      <ul
        class="divide-y divide-gray-300 *:grid *:grid-cols-4 *:items-center *:py-4"
      >
        <li>
          <span class="col-span-1 text-sm font-bold uppercase">Date</span>
          <span class="col-span-3">{formatDate(event.date)}</span>
        </li>
        <li>
          <span class="col-span-1 text-sm font-bold uppercase">Lieux</span>
          <span class="col-span-3">{event.lieu}</span>
        </li>
        <li>
          <span class="col-span-1 text-sm font-bold uppercase">Catégorie</span>
          <span class="col-span-3">{event.category}</span>
        </li>
      </ul>
    </header>
  </div>
  <p
    class="my-12 px-6 text-2xl leading-normal lg:mx-auto lg:max-w-4xl lg:text-3xl lg:leading-relaxed"
  >
    {event.excerpt}
  </p>
  <div
    class="my-12 space-y-3 px-6 lg:mx-auto lg:max-w-2xl"
    set:html={event.description}
  />
  <div
    class="absolute inset-0 z-[-1] flex items-center justify-end overflow-hidden stroke-pink stroke-[24px] opacity-40"
  >
    <Patterns class="-mr-[5vw] -ml-60 lg:ml-auto" />
  </div>
</Layout>

Explications du code
1. Fonction getStaticPaths()
export async function getStaticPaths() {
  const events = await getCollection("event");

  return events.map((event) => ({
    params: { slug: event.id },
    props: { event },
  }));
}

getCollection("event") récupère tous les événements (pas de limite)
Pour chaque événement, on retourne :
params.slug : l’ID qui sera dans l’URL
props.event : les données complètes accessibles via Astro.props
2. Récupération des données
const { event } = Astro.props;

if (!event) {
  return Astro.redirect("/404");
}

Astro.props contient les données passées via props dans getStaticPaths()
La vérification if (!event) est une sécurité (normalement toujours présent)
3. Affichage des métadonnées
const title = event.title;
const description = event.excerpt;

Ces variables sont passées au composant Layout pour le SEO (balises <title>, <meta>).

4. Structure HTML
Le template affiche :

Une image avec le composant ImagePB
Un en-tête avec le titre et les informations (date, lieu, catégorie)
L’excerpt en grand format
La description complète avec set:html (pour le contenu HTML riche)
Les patterns animés en arrière-plan
Personnalisation du contenu Rich Editor
Le problème du contenu non stylisé
PocketBase propose un Rich Editor (TinyMCE) qui permet de créer du contenu enrichi avec des titres, des listes, des images, etc. Cependant, lorsque ce contenu HTML est injecté dans votre page avec set:html, il arrive sans styles appliqués.

Par exemple, un paragraphe (<p>) n’aura pas d’espacement, une liste (<ul>) n’aura pas de puces, etc. C’est pourquoi nous devons créer une classe CSS spécifique pour styliser ces éléments.

Ajout de la classe rich-editor
Dans le template [slug].astro, modifiez la section de description pour ajouter la classe rich-editor :

src/pages/agenda/event/[slug].astro
<div
  class="rich-editor my-12 space-y-3 px-6 lg:mx-auto lg:max-w-2xl"
  set:html={event.description}
/>

La classe rich-editor va nous permettre de cibler tous les éléments HTML à l’intérieur de cette <div> pour les styliser correctement.

Création des styles CSS
Dans votre fichier src/styles/global.css, ajoutez les styles suivants dans la section @layer components :

src/styles/global.css
@layer components {
  /* ... autres styles ... */

  .rich-editor {
    p {
      @apply mb-4;
    }
    h2,
    h3,
    h4 {
      @apply mb-4;
    }
    h2:not(:first-child),
    h3:not(:first-child),
    h4:not(:first-child) {
      @apply mt-8;
    }
    ul {
      @apply my-4 list-disc pl-5;
    }
    ol {
      @apply my-4 list-decimal pl-5;
    }
    figure,
    p:has(img) {
      @apply lg:-mx-50;
    }
    figcaption {
      @apply mt-2 text-sm text-gray-500;
    }
  }
}

Pourquoi @layer components ?
L’utilisation de @layer components dans Tailwind CSS permet de :

Organiser le CSS : séparer les composants personnalisés des utilitaires
Contrôler la priorité : s’assurer que ces styles peuvent être surchargés par des classes utilitaires si nécessaire
Maintenir la cohérence : regrouper tous les styles de composants au même endroit
Résultat
Avec ces styles appliqués, le contenu provenant du Rich Editor de PocketBase sera correctement formaté avec :

Des espacements cohérents
Des listes avec puces/numéros
Des titres bien hiérarchisés
Des images qui tirent parti de l’espace disponible
Ajout des liens dans le composant Card
Pour permettre la navigation vers les pages d’événements, nous devons ajouter des liens dans le composant Card.

Code mis à jour
src/components/Card.astro
---
import { formatDate } from "../js/helpers";
import ImagePB from "./ImagePB.astro";
const event = Astro.props;
---

<article
  class="group col-span-4 grid grid-cols-[24px_1fr] grid-rows-[200px_48px_1fr] lg:grid-cols-[2fr_11fr]"
>
  <ImagePB
    record={event}
    field={event.imgFile}
    alt={event.imgAlt}
    classPicture="duotone col-start-1 row-start-1 col-span-2 row-span-2 group-hover:before:bg-black"
    classImg="group-hover:grayscale-0 group-hover:mix-blend-normal"
    thumb="1024x680"
  />
  <h3
    class="z-1 col-start-2 row-start-1 my-6 mr-4 self-end font-mono text-3xl text-white"
  >
    <a href={`/agenda/event/${event.id}`}>{event.title}</a>
  </h3>
  <div
    class="z-2 col-span-1 col-start-2 row-span-2 row-start-2 space-y-4 bg-white p-6"
  >
    <p class="uppercase">{formatDate(event.date)}</p>
    <p>{event.excerpt}</p>
    <a
      class="inline-block border-b-2 border-black uppercase"
      href={`/agenda/event/${event.id}`}>Plus d'info</a
    >
  </div>
</article>

Vérification
1. Build du site
Pour générer les pages statiques, lancez la commande de build :

Fenêtre de terminal
npm run build

Astro va :

Exécuter getStaticPaths() dans [slug].astro
Récupérer tous les événements de PocketBase
Générer un fichier HTML pour chaque événement dans dist/agenda/event/
Accédez à la page d’accueil et cliquez sur une carte d’événement pour voir le template en action.

Récapitulatif
Ce que nous avons appris
Routes dynamiques : la syntaxe [slug].astro permet de créer un modèle de page réutilisable
Mode static : Astro génère toutes les pages HTML au moment du build pour des performances optimales
getStaticPaths() : cette fonction indique à Astro quelles pages générer en mode static
Navigation : ajout de liens dans les composants pour créer une navigation fluide entre les pages
Avantages de cette approche
Performance : les pages sont pré-générées, temps de chargement minimal
SEO : chaque événement a sa propre URL et son contenu est indexable
Maintenance : un seul template pour tous les événements
Scalabilité : ajouter de nouveaux événements ne nécessite aucun code supplémentaire
Mode SSR vs Static

Dans ce projet, nous utilisons le mode static car le site est un site vitrine avec du contenu qui ne change pas à chaque seconde. Pour un site nécessitant des données en temps réel, vous pourriez utiliser le mode SSR (Server-Side Rendering) qui génère les pages à la demande.

Prochaines étapes
Dans le prochain chapitre, nous verrons comment créer une page listant tous les événements à venir, en utilisant la fonction getUpcomingEvents().



 H3/Page 404
    Création de la page 404
Branche Git

Branche : 22.-Page-404
N° : 22

Introduction
Dans le template d’événement que nous avons créé précédemment, nous avons ajouté une vérification pour gérer le cas où un événement n’existe pas :

src/pages/agenda/event/[slug].astro
const { event } = Astro.props;

if (!event) {
  return Astro.redirect("/404");
}

Cette redirection pointe vers une page 404 personnalisée que nous allons maintenant créer. Une bonne page d’erreur 404 :

Informe l’utilisateur que la page n’existe pas de manière claire et sympathique
Maintient l’identité visuelle du site
Aide l’utilisateur à retrouver son chemin (liens de navigation, boutons…)
Pages d’erreur dans Astro

Astro affiche automatiquement la page src/pages/404.astro lorsqu’une route n’est pas trouvée. C’est le standard pour les pages d’erreur 404.

Création de la page 404
Structure du fichier
Créez le fichier src/pages/404.astro avec le code suivant :

src/pages/404.astro
---
import { Picture } from "astro:assets";

import Layout from "../layouts/Layout.astro";
import Hero from "../components/Hero.astro";

import imgHero from "../assets/img/musique-01.jpg";

const title = "Page introuvable";
const description =
  "La page que vous recherchez n'existe pas ou a été déplacée.";
---

<Layout title={title} description={description}>
  <Hero title="Oups ! Cette page n'existe pas">
    <p slot="chapo">
      La page que vous recherchez semble avoir pris une fausse note... Elle
      n'existe plus ou a changé d'adresse.
    </p>
    <Picture
      slot="image"
      src={imgHero}
      alt="Violoncelles"
      layout="full-width"
      pictureAttributes={{ class: "duotone !absolute inset-0 object-cover" }}
    />
  </Hero>
</Layout>

Fonctionnement dans Astro
Redirection automatique
Astro gère automatiquement les pages 404 :

En développement (npm run dev) : si vous accédez à une URL inexistante, Astro affiche 404.astro
En production : le serveur web retourne le code HTTP 404 avec le contenu de cette page
Cas d’usage de la redirection
La redirection Astro.redirect("/404") dans le template d’événement est utile dans plusieurs cas :

Accès à un ID d’événement qui n’existe pas ou plus
ID malformé ou corrompu dans l’URL
Événement supprimé de la base de données
// Dans [slug].astro
const { event } = Astro.props;

if (!event) {
  return Astro.redirect("/404");  // Redirige vers notre page personnalisée
}

Mode Static vs SSR

Dans notre configuration en mode static, cette vérification n’est qu’une sécurité supplémentaire car toutes les pages sont générées au build via getStaticPaths(). Elle serait plus utile en mode SSR où les pages sont générées à la demande.

Améliorations possibles
Voici quelques améliorations que vous pourriez apporter à cette page 404 :

1. Ajouter des liens de navigation
<div slot="cta">
  <Button href="/" text="Retour à l'accueil" />
  <Button href="/agenda" text="Voir l'agenda" variant="outlined" />
</div>

2. Afficher des événements suggérés
---
import { getNextEvents } from "../js/backend.mjs";
const events = await getNextEvents(3);
---

<!-- Dans le body -->
<section>
  <h2>Découvrez nos prochains événements</h2>
  {events.map(event => <Card {...event} />)}
</section>

3. Ajouter un moteur de recherche
<div slot="search">
  <input type="search" placeholder="Rechercher..." />
</div>

Test de la page 404
Pour tester votre page 404 :

Accédez à une URL inexistante, par exemple :

http://localhost:4321/page-qui-nexiste-pas
http://localhost:4321/agenda/event/id-inexistant
Vérifiez que votre page 404 personnalisée s’affiche correctement
 

 H3/Pages standard
    Template des pages standard
Branche Git

Branche : 23.-Pages-standard
N° : 23

Introduction
Maintenant que nous maîtrisons la création de pages dynamiques avec le template d’événement, nous allons appliquer le même principe pour créer un template de pages standard. Ces pages correspondent à la collection page dans PocketBase et permettront de gérer tout le contenu éditorial du site (à propos, mentions légales, contact, etc.).

Le fonctionnement est identique à celui du template événement :

Une route dynamique avec [page].astro
La fonction getStaticPaths() pour générer toutes les pages au build
Utilisation du composant Hero pour l’en-tête
Affichage du contenu Rich Editor avec la classe rich-editor
La principale différence est que ce template est plus simple : pas d’informations complémentaires (date, lieu, catégorie), juste un titre, un extrait et le contenu.

Création du template de page
Structure du fichier
Créez le fichier src/pages/[page].astro à la racine du dossier pages :

src/pages/[page].astro
---
import Layout from "../layouts/Layout.astro";
import Hero from "../components/Hero.astro";
import ImagePB from "../components/ImagePB.astro";

import { getCollection } from "../js/backend.mjs";

export async function getStaticPaths() {
  const pages = await getCollection("page");

  return pages.map((page) => ({
    params: { page: page.id },
    props: { page },
  }));
}

const { page } = Astro.props;

if (!page) {
  return Astro.redirect("/404");
}

const title = page.title;
const description = page.excerpt;
---

<Layout title={title} description={description}>
  <Hero title={title}>
    <p slot="chapo">{page.excerpt}</p>
    <ImagePB
      slot="image"
      record={page}
      field={page.imgFile}
      alt={page?.imgAlt}
      classPicture="duotone !absolute inset-0 object-cover"
      layout="full-width"
    />
  </Hero>
  <div
    class="rich-editor mx-6 my-16 max-w-2xl lg:mx-auto"
    set:html={page.description}
  />
</Layout>

Modification des liens dans le menu
Liens vers les pages dynamiques
Maintenant que nos pages dynamiques sont créées, nous devons mettre à jour les liens dans le composant Header pour pointer vers ces pages. Pour l’instant, nous allons utiliser les IDs PocketBase directement dans les URLs.

URLs temporaires

Dans cette première version, nous utilisons les IDs PocketBase (comme ovsk2ybob0vye6o) pour simplifier l’implémentation. Ces IDs ne sont pas très lisibles ni mémorables pour les utilisateurs. Dans un chapitre ultérieur, nous verrons comment générer automatiquement des slugs propres (comme /le-conservatoire ou /contact) pour améliorer l’expérience utilisateur et le SEO.

Code mis à jour du Header
Modifiez votre fichier src/components/Header.astro pour mettre à jour les liens du menu :

src/components/Header.astro
---
import Logo from "../assets/icones/logo.svg";
import IconSearch from "../assets/icones/icon_search.svg";
---

<header
  class="fixed z-10 flex w-full items-stretch justify-between px-6 py-4 transition-all duration-300 ease-in-out lg:bg-white lg:py-0"
  id="header"
>
  <div class="relative z-20 flex items-center">
    <a href="/" aria-label="Accueil">
      <Logo />
    </a>
  </div>

  <div class="flex items-center gap-4 lg:flex-row-reverse">
        <li>
          <a class="block px-5 py-4 lg:py-8" href="/ovsk2ybob0vye6o"
            >Le conservatoire</a
          >
        </li>
        <li>
          <a class="block px-5 py-4 lg:py-8" href="/jcojqb2t23v23ok"
            >Enseignements</a
          >
        </li>
        <li>
          <a class="block px-5 py-4 lg:py-8" href="/agenda">Agenda</a>
        </li>
        <li>
          <a class="block px-5 py-4 lg:py-8" href="/vmvhtgj92xtun6u">Contact</a>
        </li>
        <li>
          <a
            class="block px-5 py-4 lg:bg-black lg:px-8 lg:py-8 lg:text-white"
            href="/owvjomdsz9hkg87">S'inscrire</a
          >
        </li>
      </ul>
    </nav>
  </div>
</header>

<script src="../js/header.js"></script>

Correspondance liens / pages
Chaque lien du menu correspond à une page créée dans PocketBase :

Label du menu	URL	ID PocketBase	Page correspondante
Le conservatoire	/ovsk2ybob0vye6o	ovsk2ybob0vye6o	Page “À propos”
Enseignements	/jcojqb2t23v23ok	jcojqb2t23v23ok	Page “Enseignements”
Agenda	/agenda	-	Page statique
Contact	/vmvhtgj92xtun6u	vmvhtgj92xtun6u	Page “Contact”
S’inscrire	/owvjomdsz9hkg87	owvjomdsz9hkg87	Page “Inscription”
Récupérer les IDs de vos pages
Pour obtenir les IDs de vos pages PocketBase :

Via l’interface admin :

Ouvrez PocketBase Admin (http://127.0.0.1:8090/_/)
Accédez à la collection page
Cliquez sur une page pour voir ses détails
L’ID est affiché dans l’URL ou dans le champ id
Via l’API :

Accédez à http://127.0.0.1:8090/api/collections/page/records
Vous verrez un JSON avec toutes les pages et leurs IDs
Via le code :

// Dans backend.mjs (temporaire, pour debug)
const pages = await getCollection("page");
pages.forEach(page => {
  console.log(`${page.title}: ${page.id}`);
});

Limitations de cette approche
Inconvénients des IDs comme URLs
❌ Peu lisibles : /ovsk2ybob0vye6o n’est pas parlant pour l’utilisateur
❌ Impossible à mémoriser : difficile de retenir ou partager l’URL
❌ SEO sous-optimal : les moteurs de recherche préfèrent les URLs descriptives
❌ Pas de contexte : l’URL ne donne aucune indication sur le contenu
Avantages temporaires
✅ Simple à implémenter : pas de gestion de slug à mettre en place
✅ Unique par conception : les IDs PocketBase sont toujours uniques
✅ Pas de collision : aucun risque de conflit entre pages
Solution future : les slugs automatiques
Dans un prochain chapitre, nous verrons comment :

Ajouter un champ slug dans PocketBase
Générer automatiquement des slugs à partir des titres ("Le Conservatoire" → "le-conservatoire")
Modifier getStaticPaths() pour utiliser les slugs au lieu des IDs
Mettre à jour les liens du menu pour utiliser les slugs
Exemple d’URLs avec slugs :

<li>
  <a href="/le-conservatoire">Le conservatoire</a>
</li>
<li>
  <a href="/enseignements">Enseignements</a>
</li>
<li>
  <a href="/contact">Contact</a>
</li>

Cette approche offrira des URLs beaucoup plus propres et professionnelles, tout en restant faciles à maintenir.

Bonne pratique

Dans un projet professionnel, les slugs devraient être implémentés dès le début. Nous procédons étape par étape ici pour bien comprendre chaque concept avant d’ajouter de la complexité.
  


 H3/Pagination agenda
    Pagination de l'agenda
Branche Git

Branche : 24.-Pagination-Agenda
N° : 24

Introduction
Jusqu’ici, la page Agenda affiche tous les événements à venir en une seule fois. Cette approche fonctionne pour un petit nombre d’événements, mais devient problématique lorsque la liste s’allonge : le temps de chargement augmente, la page devient interminable et l’expérience utilisateur se dégrade.

Dans ce chapitre, nous allons :

Découvrir la fonction paginate() intégrée à Astro
Transformer la page Agenda en route dynamique paginée
Créer un composant Pagination réutilisable
Afficher 3 événements par page avec navigation Précédent / Suivant
Documentation Astro

Ce chapitre s’appuie sur la fonctionnalité native de pagination d’Astro. Consultez la documentation officielle sur la pagination pour approfondir le sujet.

Principe de fonctionnement
La fonction paginate() d’Astro
Astro propose une fonction paginate() qui s’utilise à l’intérieur de getStaticPaths(). Elle permet de découper automatiquement un tableau de données en pages et de générer les routes correspondantes.

export async function getStaticPaths({ paginate }) {
  const items = await fetchData();
  return paginate(items, { pageSize: 3 });
}

Lorsque vous appelez paginate(items, { pageSize: 3 }), Astro va :

Découper le tableau items en groupes de 3 éléments
Générer automatiquement les routes /agenda/, /agenda/2/, /agenda/3/, etc.
Fournir un objet page via Astro.props contenant les données de la page courante et les informations de navigation
L’objet page
L’objet page retourné par paginate() contient plusieurs propriétés utiles :

Propriété	Type	Description
page.data	Array	Tableau des éléments de la page courante
page.currentPage	number	Numéro de la page courante (commence à 1)
page.lastPage	number	Numéro de la dernière page
page.total	number	Nombre total d’éléments
page.size	number	Nombre d’éléments par page
page.url.current	string	URL de la page courante
page.url.prev	string | undefined	URL de la page précédente (undefined sur la première page)
page.url.next	string | undefined	URL de la page suivante (undefined sur la dernière page)
page.url.first	string	URL de la première page
page.url.last	string	URL de la dernière page
Nommage du fichier avec [...page]
Pour que la pagination fonctionne, le fichier doit utiliser la syntaxe rest parameter [...page].astro. Cette syntaxe est nécessaire car :

La première page correspond à l’URL /agenda/ (sans suffixe)
Les pages suivantes correspondent à /agenda/2/, /agenda/3/, etc.
La syntaxe [...page] (avec les trois points) permet de capturer un paramètre optionnel, ce qui autorise Astro à générer la première page sans numéro dans l’URL.

Différence entre
[page]
et
[...page]

[page].astro → le paramètre est obligatoire : il ne peut pas correspondre à /agenda/
[...page].astro → le paramètre est optionnel : il correspond à /agenda/, /agenda/2/, etc.
Pour la pagination, utilisez toujours [...page].astro.

Transformation de la page Agenda
Renommage du fichier
La page Agenda actuelle se trouve dans src/pages/agenda/index.astro. Pour activer la pagination, renommez ce fichier :

src/pages/agenda/index.astro → src/pages/agenda/[...page].astro

Ce renommage indique à Astro que cette route est désormais dynamique et paginée.

Mise à jour du code
Remplacez le contenu de src/pages/agenda/[...page].astro par le code suivant :

src/pages/agenda/[...page].astro
---
import { Picture } from "astro:assets";

import Layout from "../../layouts/Layout.astro";
import Hero from "../../components/Hero.astro";
import Card from "../../components/Card.astro";

import imgHero from "../../assets/img/musique-02.jpg";

import { getUpcomingEvents } from "../../js/backend.mjs";

const events = await getUpcomingEvents("event");
export async function getStaticPaths({ paginate }) {
  const events = await getUpcomingEvents("event");
  return paginate(events, { pageSize: 3 });
}

const { page } = Astro.props;

const title = "Agenda";
const description =
  "Lieu de création artistique, le conservatoire propose régulièrement des actions culturelles ouvertes à tous.";
---

<Layout title={title} description={description}>
  <Hero title={title}>
    <p slot="chapo">
      Lieu de création artistique, le conservatoire propose régulièrement des
      actions culturelles ouvertes à tous.
    </p>
    <Picture
      slot="image"
      src={imgHero}
      alt="Violoncelles"
      layout="full-width"
      pictureAttributes={{ class: "duotone !absolute inset-0 object-cover" }}
    />
  </Hero>
  <div class="grille my-24">
    {
      events.length > 0 ? (
      page.data.length > 0 ? (
        events.map((event) => <Card {...event} />)
        page.data.map((event) => <Card {...event} />)
      ) : (
        <p class="col-span-4">Aucun événement à afficher.</p>
      )
    }
  </div>
</Layout>

Différences avec la version précédente
Voici les modifications clés par rapport au fichier index.astro initial :

Suppression de l’appel direct : const events = await getUpcomingEvents("event") est remplacé par getStaticPaths()
Ajout de getStaticPaths({ paginate }) : la fonction reçoit paginate en paramètre, récupère les événements et les pagine par groupes de 3
Récupération de page : au lieu des événements directement, on récupère l’objet page depuis Astro.props
Itération sur page.data : on parcourt page.data (les événements de la page courante) au lieu de events (tous les événements)
pageSize

Le paramètre pageSize: 3 détermine le nombre d’événements par page. Vous pouvez ajuster cette valeur selon vos besoins. Une valeur de 6 ou 9 est courante pour des grilles de cards (multiples de 3 pour maintenir l’alignement).

Création du composant Pagination
Structure du composant
Créez le fichier src/components/Pagination.astro :

src/components/Pagination.astro
---
const { page } = Astro.props;
---

{
  page.lastPage > 1 && (
    <nav
      aria-label="Pagination"
      class="my-8 flex items-center justify-center space-x-4 text-sm uppercase"
    >
      {page.url.prev && <a href={page.url.prev}>Précédent</a>}

      <span>
        Page {page.currentPage} / {page.lastPage}
      </span>

      {page.url.next && <a href={page.url.next}>Suivant</a>}
    </nav>
  )
}

Ajout du composant Pagination
src/pages/agenda/[...page].astro
---
import { Picture } from "astro:assets";

import Layout from "../../layouts/Layout.astro";
import Hero from "../../components/Hero.astro";
import Card from "../../components/Card.astro";
import Pagination from "../../components/Pagination.astro";

---

<Layout title={title} description={description}>
  <div class="grille my-24">
    {
      page.data.length > 0 ? (
        page.data.map((event) => <Card {...event} />)
      ) : (
        <p class="col-span-4">Aucun événement à afficher.</p>
      )
    }
  </div>
  <Pagination page={page} />
</Layout>

Routes générées
Après le build, Astro génère automatiquement les fichiers HTML suivants (pour 9 événements avec pageSize: 3) :

dist/
└── agenda/
    ├── index.html          ← Page 1 (/agenda/)
    ├── 2/
    │   └── index.html      ← Page 2 (/agenda/2/)
    └── 3/
        └── index.html      ← Page 3 (/agenda/3/)

Les URLs sont propres et lisibles :

/agenda/ → première page
/agenda/2/ → deuxième page
/agenda/3/ → troisième page



H2/SEO
  H3/URLs friendly
     URLs SEO-friendly
Branche Git

Branche : 25.-URLs-user-friendly-slug
N° : 25

Introduction
Dans le chapitre sur les pages standard, nous avions identifié un problème majeur : les URLs de nos pages utilisaient les IDs PocketBase comme paramètres de route (/ovsk2ybob0vye6o, /jcojqb2t23v23ok…).

Ces URLs sont :

Illisibles pour l’utilisateur
Impossibles à mémoriser ou à partager
Contre-productives pour le SEO — les moteurs de recherche privilégient les URLs descriptives
Dans ce chapitre, nous allons :

Créer deux fonctions utilitaires slugify() et slugifyCollection() dans helpers.js
Modifier toutes les routes dynamiques pour utiliser des slugs au lieu des IDs
Rendre le menu de navigation dynamique à partir des données PocketBase
Ajouter quelques améliorations SEO au passage (canonical URL, lang="fr", site dans la config Astro)
Principe des slugs
Qu’est-ce qu’un slug ?
Un slug est une version normalisée d’une chaîne de caractères, destinée à être utilisée dans une URL. Il est généré en appliquant une série de transformations au titre du contenu :

Titre original	Slug généré
Concert de Noël	concert-de-noel
Le Conservatoire	le-conservatoire
Théâtre & Danse : Été 2026	theatre-danse-ete-2026
Pourquoi ne pas stocker le slug dans PocketBase ?
On pourrait ajouter un champ slug directement dans les collections PocketBase. Mais cette approche a un inconvénient : elle nécessite que l’administrateur remplisse (ou qu’un hook génère) le slug à chaque création de contenu.

Notre approche est différente : le slug est calculé côté front, au moment du build. Cela signifie :

Aucune modification de la base de données
Le slug est toujours synchronisé avec le titre
La logique est centralisée dans une seule fonction JavaScript
Fonction slugify()
Création de la fonction
Ajoutez la fonction suivante à la fin de votre fichier src/js/helpers.js :

src/js/helpers.js
/**
 * Génère un slug URL-friendly à partir d'une chaîne de caractères
 * Gère les caractères accentués français (é, è, ê, à, ç, etc.)
 * @param {string} text - Texte à transformer en slug
 * @returns {string} Slug normalisé (ex: "Concert de Noël" → "concert-de-noel")
 */
export function slugify(text) {
  return text
    .normalize("NFD")              // décompose les accents (é → e + ◌́)
    .replace(/[\u0300-\u036f]/g, "") // supprime les diacritiques
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")   // tout caractère non alphanumérique → tiret
    .replace(/(^-|-$)+/g, "");     // supprime les tirets en début/fin
}

Exemples de résultats
slugify("Concert de Noël")        // → "concert-de-noel"
slugify("Théâtre & Danse")        // → "theatre-danse"
slugify("  Été 2026 !  ")         // → "ete-2026"
slugify("L'Orchestre à cordes")   // → "l-orchestre-a-cordes"

Fonction slugifyCollection()
Le problème des doublons
La fonction slugify() transforme un titre en slug, mais que se passe-t-il si deux contenus ont le même titre ? On obtiendrait deux routes identiques, ce qui provoquerait une erreur au build.

Création de la fonction
Ajoutez la fonction suivante dans src/js/helpers.js, juste après slugify() :

src/js/helpers.js
/**
 * Attribue un slug unique à chaque élément d'une collection
 * En cas de doublons, ajoute un suffixe numérique (-2, -3, etc.)
 * @param {Array<Object>} items - Tableau d'objets avec une propriété `title`
 * @returns {Array<Object>} Les mêmes objets enrichis d'une propriété `slug`
 */
export function slugifyCollection(items) {
  const slugCount = {};

  return items.map((item) => {
    const base = slugify(item.title);
    slugCount[base] = (slugCount[base] || 0) + 1;
    const slug = slugCount[base] === 1 ? base : `${base}-${slugCount[base]}`;
    return { ...item, slug };
  });
}

Fonctionnement
Un compteur slugCount garde en mémoire le nombre d’occurrences de chaque slug de base
Pour chaque élément, on génère le slug de base via slugify(item.title)
Si c’est la première occurrence, le slug est utilisé tel quel
Si c’est un doublon, on ajoute un suffixe numérique (-2, -3, etc.)
L’objet original est retourné avec une nouvelle propriété slug ajoutée via le spread operator
Exemple avec doublons
const items = [
  { title: "Concert de Noël" },
  { title: "Portes ouvertes" },
  { title: "Concert de Noël" },  // doublon !
];

slugifyCollection(items);
// [
//   { title: "Concert de Noël",    slug: "concert-de-noel" },
//   { title: "Portes ouvertes",    slug: "portes-ouvertes" },
//   { title: "Concert de Noël",    slug: "concert-de-noel-2" },
// ]

Mise à jour des routes dynamiques
Maintenant que nos fonctions de slug sont prêtes, nous devons modifier les fichiers qui utilisent getStaticPaths() pour passer des IDs aux slugs.

Template d’événement ([slug].astro)
Dans src/pages/agenda/event/[slug].astro, importez slugifyCollection et modifiez getStaticPaths() :

src/pages/agenda/event/[slug].astro
---
import ImagePB from "../../../components/ImagePB.astro";
import Layout from "../../../layouts/Layout.astro";
import Patterns from "../../../components/AnimatedPatterns.astro";
import { formatDate, slugifyCollection } from "../../../js/helpers";

import { getCollection } from "../../../js/backend.mjs";

export async function getStaticPaths() {
  const events = await getCollection("event");
  const eventsWithSlug = slugifyCollection(events);

  return events.map((event) => ({
    params: { slug: event.id },
  return eventsWithSlug.map((event) => ({
    params: { slug: event.slug },
    props: { event },
  }));
}

const { event } = Astro.props;
// ... reste du template inchangé
---

Changements clés :

Import de slugifyCollection en plus de formatDate
Les événements sont enrichis d’un slug via slugifyCollection(events)
params: { slug: event.slug } remplace params: { slug: event.id }
Résultat : l’URL /agenda/event/abc123def456 devient /agenda/event/concert-de-noel.

Page agenda paginée ([…page].astro)
Dans src/pages/agenda/[...page].astro :

src/pages/agenda/[...page].astro
---
import { Picture } from "astro:assets";

import Layout from "../../layouts/Layout.astro";
import Hero from "../../components/Hero.astro";
import Card from "../../components/Card.astro";
import Pagination from "../../components/Pagination.astro";

import imgHero from "../../assets/img/musique-02.jpg";

import { getUpcomingEvents } from "../../js/backend.mjs";
import { slugifyCollection } from "../../js/helpers";

export async function getStaticPaths({ paginate }) {
  const events = await getUpcomingEvents("event");
  return paginate(events, { pageSize: 3 });
  const eventsWithSlug = slugifyCollection(events);
  return paginate(eventsWithSlug, { pageSize: 3 });
}
---

Les événements paginés ont désormais une propriété slug, utilisée par le composant Card pour construire les liens.

Template de pages standard ([page].astro)
Dans src/pages/[page].astro :

src/pages/[page].astro
---
import Layout from "../layouts/Layout.astro";
import Hero from "../components/Hero.astro";
import ImagePB from "../components/ImagePB.astro";

import { getCollection } from "../js/backend.mjs";
import { slugifyCollection } from "../js/helpers";

export async function getStaticPaths() {
  const pages = await getCollection("page");
  const pagesWithSlug = slugifyCollection(pages);

  return pages.map((page) => ({
    params: { page: page.id },
  return pagesWithSlug.map((page) => ({
    params: { page: page.slug },
    props: { page },
  }));
}
---

Résultat : l’URL /ovsk2ybob0vye6o devient /le-conservatoire.

Page d’accueil (index.astro)
Dans src/pages/index.astro, les 3 prochains événements affichés doivent aussi avoir un slug pour que les liens des cards fonctionnent :

src/pages/index.astro
---
import { getNextEvents } from "../js/backend.mjs";
import { slugifyCollection } from "../js/helpers";

const events = await getNextEvents();
const events = slugifyCollection(await getNextEvents());
---

La fonction slugifyCollection() enrichit chaque événement d’une propriété slug avant que les composants Card ne les utilisent.

Mise à jour du composant Card
Le composant Card doit maintenant utiliser event.slug au lieu de event.id dans ses liens :

src/components/Card.astro
  <h3
    class="z-1 col-start-2 row-start-1 my-6 mr-4 self-end font-mono text-3xl text-white"
  >
    <a href={`/agenda/event/${event.id}`}>{event.title}</a>
    <a href={`/agenda/event/${event.slug}`}>{event.title}</a>
  </h3>
  <!-- ... -->
    <a
      class="inline-block border-b-2 border-black uppercase"
      href={`/agenda/event/${event.id}`}>Plus d'info</a>
      href={`/agenda/event/${event.slug}`}>Plus d'info</a>

Ce changement est simple mais impacte toutes les occurrences du composant Card à travers le site (page d’accueil, page agenda, etc.).

Navigation dynamique dans le Header
Le problème des liens en dur
Jusqu’ici, les liens du menu étaient écrits en dur avec les IDs PocketBase. Maintenant que nous avons des slugs, nous pouvons aller plus loin et rendre la navigation entièrement dynamique en récupérant les pages depuis PocketBase au moment du build.

Ajout de champs pour le menu dans la collection page
Pour que le Header puisse construire la navigation dynamiquement, nous avons besoin d’informations supplémentaires dans chaque page PocketBase : l’ordre d’affichage dans le menu, un éventuel libellé alternatif et des classes CSS optionnelles.

Ouvrez l’interface d’administration de PocketBase (http://127.0.0.1:8090/_/) et ajoutez les 3 champs suivants à la collection page :

Champ	Type	Obligatoire	Description
menuOrder	Number	Non	Position dans le menu (1, 2, 3…). Si vide, la page n’apparaît pas dans la navigation
menuLabel	Plain text	Non	Libellé affiché dans le menu. Si vide, le title de la page est utilisé
menuClass	Plain text	Non	Classes CSS additionnelles pour personnaliser l’apparence du lien
Ajout des champs menuOrder, menuLabel et menuClass dans la collection page de PocketBase
Pourquoi ces champs sont optionnels
Le champ menuOrder joue un double rôle :

Ordre d’affichage : il détermine la position du lien dans le menu (1 = premier, 2 = deuxième, etc.)
Filtre d’inclusion : si le champ est vide, la page est exclue du menu. Cela permet d’avoir des pages accessibles par URL (mentions légales, politique de confidentialité) sans les afficher dans la navigation principale
Le champ menuLabel est utile quand le titre de la page est trop long ou trop formel pour un menu. Par exemple, une page intitulée « Le Conservatoire Henri Dutilleux » pourra afficher simplement « Le conservatoire » dans le menu.

Le champ menuClass permet d’appliquer un style spécifique à un lien du menu. Dans notre cas, le bouton « S’inscrire » a un fond noir en desktop — la valeur lg:bg-black lg:px-8 lg:text-white est renseignée dans ce champ.

Nouveau frontmatter du Header
Remplacez le frontmatter de src/components/Header.astro :

src/components/Header.astro
---
import Logo from "../assets/icones/logo.svg";
import IconSearch from "../assets/icones/icon_search.svg";

import { getCollection } from "../js/backend.mjs";
import { slugifyCollection } from "../js/helpers";

// Récupère les pages avec un menuOrder défini (= pages du menu)
const pages = slugifyCollection(await getCollection("page"));
const pageItems = pages
  .filter((p) => p.menuOrder)
  .map((p) => ({
    href: `/${p.slug}`,
    label: p.menuLabel || p.title,
    class: p.menuClass || "",
    order: p.menuOrder,
  }));

// Items fixes (routes non-PocketBase)
const fixedItems = [{ href: "/agenda", label: "Agenda", class: "", order: 3 }];

// Fusion et tri par ordre
const navItems = [...pageItems, ...fixedItems].sort(
  (a, b) => a.order - b.order,
);
---

Explications
Récupération des pages : on charge toutes les pages de la collection page et on leur attribue un slug
Filtrage par menuOrder : seules les pages qui ont un champ menuOrder rempli dans PocketBase apparaissent dans le menu. Cela permet à l’administrateur de contrôler quelles pages sont visibles dans la navigation
Mapping des propriétés :
href : construit avec le slug (/le-conservatoire, /contact, etc.)
label : utilise menuLabel si défini, sinon le titre de la page
class : permet d’ajouter des classes CSS spécifiques (ex : bouton « S’inscrire » en fond noir)
order : détermine la position dans le menu
Items fixes : la page Agenda est une route statique (pas dans PocketBase), elle est ajoutée manuellement
Fusion et tri : les deux sources sont combinées et triées par order pour garantir l’ordre souhaité
Boucle dynamique dans le template
Remplacez la liste statique du menu par une boucle sur navItems :

src/components/Header.astro
      <ul
        class="mx-16 mt-[25vh] *:relative *:overflow-hidden lg:m-0 lg:flex *:lg:before:absolute *:lg:before:bottom-0 *:lg:before:left-0 *:lg:before:h-2 *:lg:before:w-full *:lg:before:translate-y-2 *:lg:before:bg-black *:lg:before:transition-all *:lg:before:duration-300 *:lg:before:ease-in-out *:lg:hover:before:translate-y-0"
      >
        {
          navItems.map((item) => (
            <li>
              <a
                class={`block px-5 py-4 lg:py-8 ${item.class || ""}`}
                href={item.href}
              >
                {item.label}
              </a>
            </li>
          ))
        }
      </ul>

Avant : 5 éléments <li> écrits en dur avec des IDs PocketBase.
Après : une boucle navItems.map() qui génère les éléments dynamiquement avec des slugs lisibles.



  H3/SEO
  SEO
Branche Git

Branche : 26.-Améliorations-SEO
N° : 26

Introduction
Dans le chapitre précédent, nous avons posé les premières bases du SEO : URLs lisibles, balise lang="fr", URL canonique et fichier robots.txt. Nous allons maintenant aller plus loin en mettant en place :

Un composant SEO.astro centralisé pour gérer toutes les balises meta
Les balises Open Graph pour un affichage enrichi sur les réseaux sociaux
Les balises Twitter Cards pour un aperçu visuel sur X (Twitter)
Un sitemap automatique avec l’intégration @astrojs/sitemap
Une image par défaut pour les partages sociaux
Pourquoi centraliser le SEO ?
Jusqu’ici, les balises <title>, <meta description> et <link rel="canonical"> étaient gérées directement dans Layout.astro. Cette approche fonctionne, mais pose plusieurs problèmes à mesure que les besoins SEO grandissent :

Duplication de logique : le calcul du titre, de l’URL canonique et de l’image OG doit être regroupé
Maintenabilité : ajouter une balise meta nécessite de modifier le Layout
Lisibilité : le <head> devient vite encombré
La solution : extraire toute la logique SEO dans un composant dédié.

Création du composant SEO
Structure du composant
Créez le fichier src/components/SEO.astro :

src/components/SEO.astro
---
/**
 * Composant SEO centralisé
 * Génère les balises meta, Open Graph, Twitter Cards et canonical URL
 */

const { title, description, image, type = "website" } = Astro.props;

const siteName = "Conservatoire Henri Dutilleux";

// Titre affiché dans l'onglet du navigateur
const titleHead =
  Astro.url.pathname === "/" ? siteName : `${title} — ${siteName}`;

// URL canonique absolue
const canonicalURL = new URL(Astro.url.pathname, Astro.site);

// Image OG : soit une image spécifique (événement), soit l'image par défaut
const ogImage = image
  ? new URL(image, Astro.site).href
  : new URL("/og-default.jpg", Astro.site).href;
---

<!-- SEO de base -->
<title>{titleHead}</title>
<meta name="description" content={description} />
<link rel="canonical" href={canonicalURL} />

<!-- Open Graph -->
<meta property="og:title" content={titleHead} />
<meta property="og:description" content={description} />
<meta property="og:type" content={type} />
<meta property="og:url" content={canonicalURL} />
<meta property="og:image" content={ogImage} />
<meta property="og:site_name" content={siteName} />
<meta property="og:locale" content="fr_FR" />

<!-- Twitter Cards -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content={titleHead} />
<meta name="twitter:description" content={description} />
<meta name="twitter:image" content={ogImage} />

Explications du frontmatter
Props du composant
const { title, description, image, type = "website" } = Astro.props;

Prop	Type	Par défaut	Description
title	string	—	Titre de la page
description	string	—	Description pour les moteurs de recherche
image	string	—	URL relative de l’image OG (optionnel)
type	string	"website"	Type de contenu Open Graph (website ou article)
Construction du titre
const titleHead =
  Astro.url.pathname === "/" ? siteName : `${title} — ${siteName}`;

Page d’accueil (/) : affiche uniquement le nom du site → Conservatoire Henri Dutilleux
Autres pages : ajoute le nom du site en suffixe → Concert de Noël — Conservatoire Henri Dutilleux
Cette logique existait déjà dans Layout.astro — elle est simplement déplacée dans le composant SEO.

URL canonique
const canonicalURL = new URL(Astro.url.pathname, Astro.site);

Construit une URL absolue à partir du chemin relatif et de la propriété site définie dans astro.config.mjs. Par exemple : https://conservatoire-belfort.fr/agenda/event/concert-de-noel.

Image Open Graph
const ogImage = image
  ? new URL(image, Astro.site).href
  : new URL("/og-default.jpg", Astro.site).href;

Si une image est passée en prop, elle est convertie en URL absolue
Sinon, l’image par défaut og-default.jpg est utilisée
Les balises meta générées
SEO de base
Balise	Rôle
<title>	Titre affiché dans les résultats de recherche et l’onglet du navigateur
<meta name="description">	Description affichée sous le titre dans les résultats de recherche
<link rel="canonical">	Indique l’URL de référence pour éviter le contenu dupliqué
Open Graph (réseaux sociaux)
Les balises Open Graph (og:) contrôlent l’aperçu qui s’affiche quand quelqu’un partage un lien sur Facebook, LinkedIn, WhatsApp, etc.

Balise	Rôle
og:title	Titre affiché dans l’aperçu
og:description	Description dans l’aperçu
og:type	Type de contenu : website (page générale) ou article (contenu éditorial)
og:url	URL canonique de la page
og:image	Image affichée dans l’aperçu (format recommandé : 1200×630 px)
og:site_name	Nom du site
og:locale	Langue du contenu (fr_FR)
Twitter Cards
Les balises Twitter Cards (twitter:) fonctionnent de manière similaire pour X (anciennement Twitter) :

Balise	Rôle
twitter:card	Type de carte : summary_large_image affiche une grande image
twitter:title	Titre de l’aperçu
twitter:description	Description de l’aperçu
twitter:image	Image de l’aperçu
Image par défaut

Placez une image og-default.jpg dans le dossier public/. Cette image sera utilisée pour toutes les pages qui n’ont pas d’image spécifique (page d’accueil, page agenda, etc.). Le format recommandé est 1200×630 pixels en JPEG.

Mise à jour du Layout
Simplification du <head>
Le composant SEO prend en charge toute la logique SEO. Le Layout n’a plus qu’à transmettre les props et inclure le composant dans le <head> :

src/layouts/Layout.astro
---
import "../styles/global.css";
import "@fontsource/space-mono";
import "@fontsource-variable/mulish";

import Header from "../components/Header.astro";
import Footer from "../components/Footer.astro";
import SEO from "../components/SEO.astro";

const { title, description } = Astro.props;
const siteName = "Conservatoire Henri Dutilleux";
const titleHead =
  Astro.url.pathname === "/" ? siteName : `${title} — ${siteName}`;
const canonicalURL = new URL(Astro.url.pathname, Astro.site);

const { title, description, image, type } = Astro.props;
---

Le frontmatter ne contient plus que la déstructuration des props — toute la logique a été déplacée dans SEO.astro.

Remplacement dans le <head>
src/layouts/Layout.astro
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <link rel="canonical" href={canonicalURL} />
    <!-- ... favicons et manifest ... -->
    <meta name="generator" content={Astro.generator} />
    <title>{titleHead}</title>
    <meta name="description" content={description} />
    <SEO title={title} description={description} image={image} type={type} />
  </head>

Les trois lignes (canonical, title, description) sont remplacées par un seul composant <SEO /> qui génère toutes les balises nécessaires.

Nouvelles props du Layout
Le composant Layout accepte maintenant deux nouvelles props optionnelles, transmises à SEO.astro :

Prop	Type	Description
image	string	Image OG spécifique à la page
type	string	Type Open Graph (website par défaut, article pour les contenus éditoriaux)
Mise à jour des pages de contenu
Pages standard et événements
Les pages de contenu éditorial (pages standard et événements) doivent passer type="article" au Layout pour indiquer aux réseaux sociaux qu’il s’agit d’un article, et non d’un site web.

Template de page standard ([page].astro)
src/pages/[page].astro
<Layout title={title} description={description} type="article">
<Layout title={title} description={description}>
  <Hero title={title}>

Template d’événement ([slug].astro)
src/pages/agenda/event/[slug].astro
<Layout title={title} description={description} type="article">
<Layout title={title} description={description}>
  <div class="grille relative lg:pt-28">

Le type "article" génère la balise <meta property="og:type" content="article" />, ce qui indique aux réseaux sociaux que cette page est un contenu éditorial (et non la page d’accueil d’un site). Cela peut influencer la manière dont l’aperçu est affiché.

Quand utiliser
type="article"
?

website (par défaut) : page d’accueil, page agenda, pages listant du contenu
article : pages de détail avec un contenu éditorial propre (événement, page standard, article de blog)
Sitemap automatique
Installation de l’intégration
Ajoutez l’intégration @astrojs/sitemap au projet :

Fenêtre de terminal
npx astro add sitemap

Cette commande installe le package et met à jour la configuration automatiquement.

Configuration dans astro.config.mjs
Après l’installation, le fichier de configuration doit inclure l’intégration sitemap() :

astro.config.mjs
// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "<url_du_site>",
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [sitemap()],
});

Fonctionnement
Au moment du build, l’intégration génère automatiquement :

dist/sitemap-index.xml : fichier d’index référençant les sitemaps
dist/sitemap-0.xml : sitemap contenant toutes les URLs du site
Le fichier robots.txt créé dans le chapitre précédent référence déjà ce sitemap :

public/robots.txt
Sitemap: https://conservatoire-belfort.fr/sitemap-index.xml

Propriété
site
obligatoire

L’intégration @astrojs/sitemap nécessite que la propriété site soit définie dans astro.config.mjs. Sans cette propriété, le build échouera car le sitemap a besoin d’URLs absolues.

Vérification du sitemap
Après un build (npm run build), inspectez le fichier généré :

Fenêtre de terminal
cat dist/sitemap-0.xml

Vous devriez voir un fichier XML listant toutes les URLs du site :

<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://conservatoire-belfort.fr/</loc></url>
  <url><loc>https://conservatoire-belfort.fr/le-conservatoire/</loc></url>
  <url><loc>https://conservatoire-belfort.fr/enseignements/</loc></url>
  <url><loc>https://conservatoire-belfort.fr/agenda/</loc></url>
  <url><loc>https://conservatoire-belfort.fr/agenda/event/concert-de-noel/</loc></url>
  <!-- ... -->
</urlset>