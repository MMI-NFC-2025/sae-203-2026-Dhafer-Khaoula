import {
  saveRecord,
  deleteArtistById,
  deleteSceneById,
  getArtistsByDate,
  getScenesByName,
  getArtistsAlphabetical,
  getArtistById,
  getSceneById,
  getArtistsBySceneId,
  getArtistsBySceneName,
  getArtistsByGenre,
  pb,
  superUserauth,
  createUser,
  Userauth,
  logout
} from './backend.mjs';

// 1. Tous les artistes triés par date
try {
    const artistes = await getArtistsByDate();
    console.log(artistes);
} catch (e) {
    console.error(e);
}

// 2. Toutes les scènes triées par nom
try {
    const scenes = await getScenesByName();
    console.log(scenes);
} catch (e) {
    console.error(e);
}

// 3. Tous les artistes triés par ordre alphabétique
try {
    const artistes = await getArtistsAlphabetical();
    console.log(artistes);
} catch (e) {
    console.error(e);
}

// 4. Infos d'un artiste par son id
try {    
    const artiste = await getArtistById('xxib7a2qr8b574g');
    console.log(artiste);
} catch (e) {
    console.error(e);
}

// 5. Infos d'une scène par son id
try {
    const scene = await getSceneById('6mki62nnn7c47xu');
    console.log(scene);
} catch (e) {
    console.error(e);
} 

// 6. Tous les artistes se produisant sur une scène donnée par son id, triés par date
try {
    const artistes = await getArtistsBySceneId('xilam95571omclw');
    console.log(artistes);
} catch (e) {
    console.error(e);
}

// 7. Tous les artistes se produisant sur une scène donnée par son nom, triés par date
try {
    const artistes = await getArtistsBySceneName('Scène Est');
    console.log(artistes);
} catch (e) {
    console.error(e);
} 

// 8.1 Test saveRecord - Ajouter un artiste
try {
    const newArtiste = await saveRecord('Artistes', { nom_artistes: 'Test Artiste', genre: 'Pop', date_representation: '2026-06-15 20:00:00.000Z' });
    console.log("Artiste ajouté:", newArtiste);
} catch (e) {
    console.error(e);
}

// 8.2 Test saveRecord - Modifier un artiste
try {
    const updated = await saveRecord('Artistes', { nom_artistes: 'Test Artiste Modifié' }, 'xxib7a2qr8b574g');
    console.log("Artiste modifié:", updated);
} catch (e) {
    console.error(e);
}

// 8.3 Test saveRecord - Ajouter une scène
try {
    const newScene = await saveRecord('Scenes', { nom_scene: 'Scène Test' });
    console.log("Scène ajoutée:", newScene);
} catch (e) {
    console.error(e);
}

// 8.4 Test saveRecord - Modifier une scène
try {
    const updated = await saveRecord('Scenes', { nom_scene: 'Scène Test Modifiée' }, '6mki62nnn7c47xu');
    console.log("Scène modifiée:", updated);
} catch (e) {
    console.error(e);
}

// 9.Test deleteArtistById - Supprimer un artiste(test ajouté précédemment)
try {
    await deleteArtistById('qv3novxhe6kv2bi');
    console.log("Artiste supprimé");
} catch (e) {
    console.error(e);
}

// 10.Test deleteSceneById - Supprimer une scène(test ajoutée précédemment)
try {
    await deleteSceneById('fxludzh6mhp3erz');
    console.log("Scène supprimée");
} catch (e) {
    console.error(e);
}

// 11. Test connexion admin (superuser)
try {
  await superUserauth("kdhaf@outlook.fr", "Khdh1234****");
  console.log("Admin connecté:", pb.authStore.isValid);
} catch (e) {
  console.error(e);
}



// 12. Test création d'un utilisateur
try {
  const user = await createUser("test@example.com", "12345678");
  console.log("Utilisateur créé:", user);
} catch (e) {
  console.error(e);
}

// 12.2 Test déconnexion
logout();
console.log("Déconnecté:", pb.authStore.isValid);

// 13. Test connexion utilisateur
try {
  await Userauth("test@example.com", "12345678");
  console.log("User connecté:", pb.authStore.isValid);
} catch (e) {
  console.error(e);
}

// 14.Déconnexion finale
logout();
console.log("Déconnecté:", pb.authStore.isValid);

// 15. Test getArtistsByGenre
try {
    const artistes = await getArtistsByGenre('Pop');
    console.log("Artistes Pop:", artistes);
} catch (e) {
    console.error(e);
}

