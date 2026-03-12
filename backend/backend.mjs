import PocketBase from 'pocketbase';
const pb = new PocketBase('https://festival.dhafer.fr');

export { pb };

// 1. Tous les artistes triés par date
export async function getArtistsByDate() {
    const records = await pb.collection('Artistes').getFullList({
        sort: 'date_representation',
    });
    return records;
}

// 2. Toutes les scènes triées par nom
export async function getScenesByName() {
    const records = await pb.collection('Scenes').getFullList({
        sort: 'nom_scene',
    });
    return records;
}

// 3. Tous les artistes triés par ordre alphabétique
export async function getArtistsAlphabetical() {
    const records = await pb.collection('Artistes').getFullList({
        sort: 'nom_artistes',
    });
    return records;
}

// 4. Infos d'un artiste par son id
export async function getArtistById(id) {
    const record = await pb.collection('Artistes').getOne(id, {
        expand: 'scene'
    });
    return record;
}

// 5. Infos d'une scène par son id
export async function getSceneById(id) {
    const record = await pb.collection('Scenes').getOne(id);
    return record;
}

// 6. Tous les artistes se produisant sur une scène donnée par son id, triés par date
export async function getArtistsBySceneId(sceneId) {
    const records = await pb.collection('Artistes').getFullList({
        filter: `scene = "${sceneId}"`,
        sort: 'date_representation',
    });
    return records;
}

// 7. Tous les artistes se produisant sur une scène donnée par son nom, triés par date
export async function getArtistsBySceneName(sceneName) {
    const scene = await pb.collection('Scenes').getFirstListItem(`nom_scene="${sceneName}"`);
    return await pb.collection('Artistes').getFullList({
        filter: `scene="${scene.id}"`,
        sort: 'date_representation'
    });
}

// 8. Ajouter ou modifier un artiste ou une scène
export async function saveRecord(collection, data, id) {
    if (id) {
        return await pb.collection(collection).update(id, data);
    } else {
        return await pb.collection(collection).create(data);
    }
}

// 9. Supprimer un artiste par son id
export async function deleteArtistById(id) {
    await pb.collection('Artistes').delete(id);
}

// 10. Supprimer une scène par son id
export async function deleteSceneById(id) {
    await pb.collection('Scenes').delete(id);
}

// 11. Authentification superuser (admin)
export async function superUserauth(login, mdp) {
    const authData = await pb.collection("_superusers").authWithPassword(login, mdp);
    console.log("Connexion admin réussie !");
    return authData;
}

// 12. Créer un utilisateur
export async function createUser(email, password) {
    const userData = {
        email: email,
        password: password,
        passwordConfirm: password
    };
    const user = await pb.collection('users').create(userData);
    return user;
}

// 13. Authentification utilisateur
export async function Userauth(login, mdp) {
    const authData = await pb.collection("users").authWithPassword(login, mdp);
    console.log("Connexion utilisateur réussie !");
    return authData;
}

// 14. Déconnexion
export function logout() {
    pb.authStore.clear();
}

// Ajout hors consignes SI
// 15. Tous les artistes d'un genre donné, triés par date
export async function getArtistsByGenre(genre) {
    const records = await pb.collection('Artistes').getFullList({
        filter: `genre = "${genre}"`,
        sort: 'date_representation',
    });
    return records;
}

// 16. Tous les artistes d'une date donnée (jour uniquement)
export async function getArtistsByDateFilter(date) {
    const records = await pb.collection('Artistes').getFullList({
        filter: `date_representation >= "${date} 00:00:00" && date_representation <= "${date} 23:59:59"`,
        sort: 'nom_artistes',
    });
    return records;
}

// 17. Formater une date en français
export function formatDate(date) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const DateString = new Date(date).toLocaleDateString('fr-FR', options);
    return DateString;
}

