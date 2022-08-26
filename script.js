//Je sélectionne et je stocke la DIV posts
const postsContainer = document.querySelector('.posts');
console.log(postsContainer);

//Je crée un objet
/*
const utilisateur = {
    nom : "Doe",
    prenom : "John",
    service : "marketing"
}*/

const post = {
    titre : "SEO, les bonnes pratiques",
    hashtag : "#SEO",
    extrait : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla accusamus perferendis distinctio nobis inventore a harum excepturi aspernatur assumenda neque."
}

//J'accède au valeur de l'objet
//const valeur = objet.propriete;

//J'accède à la valeur de la propriété "titre"
const t = post.titre;
console.log(t);

//Initialisation d'un tableau (array)
const posts = [
    {
        titre : "SEO, les bonnes pratiques",
        hashtag : "#SEO",
        extrait : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla accusamus perferendis distinctio nobis inventore a harum excepturi aspernatur assumenda neque."
    },
    {
        titre : "Bien débuter en référencement payant",
        hashtag : "#référencement",
        extrait : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla accusamus perferendis distinctio nobis inventore a harum excepturi aspernatur assumenda neque."
    },
    {
        titre : "Content Marketing, les bons arguments",
        hashtag : "#contentmarketing",
        extrait : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla accusamus perferendis distinctio nobis inventore a harum excepturi aspernatur assumenda neque."
    }
];
console.log(posts);

//Je passe en revue chaque élément du tableau
posts.forEach(item => {
    console.log(item);

/*
const article = 
    `
        <div class="post">${variable}</div>
    `
*/ 

    //Création d'une DIV avec "Template Strings"
const article = `
        <div class="post">
        <div class="post-titre"> ${item.titre}</div>
        <div class="post-extrait">${item.extrait}</div>
        <div class="post-hashtag">${item.hashtag}</div>
        </div>
                    `
    console.log(article);
//Ajout de l'article dans la DIV dédiée postsContainer
postsContainer.innerText = article;
//Ajout de l'article dans la DIV dédiée postsContainer
postsContainer.innerHTML = article;
});

