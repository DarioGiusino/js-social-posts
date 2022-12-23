/*
# Descrizione
Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro script JS in cui:
# Milestone 1
Creiamo il nostro array di oggetti che rappresentano ciascun post.
Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
- id del post, numero progressivo da 1 a n
- nome autore,
- foto autore (potrebbe mancare a qualcuno),
- data in formato americano (mm-gg-yyyy),
- testo del post,
- immagine (non tutti i post devono avere una immagine),
- numero di likes.
*Non è necessario creare date casuali, inventatele*
*Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=3)*
#Milestone 2
Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.
#Milestone 3
Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.
# ****BONUS**
 1. Formattare le date in formato italiano (gg/mm/aaaa)
 2. Gestire l'assenza dell'immagine profilo con un elemento di fallback che contiene le iniziali dell'utente (es. Luca Formicola  => LF).
 3. Al click su un pulsante "Mi Piace" di un post, se abbiamo già cliccato dobbiamo decrementare il contatore e cambiare il colore del bottone.
*/

//# creo lista di post
const postList = [
    {
        id: 1,
        name: 'Random Man',
        profileImg: 'https://picsum.photos/300/300?random=1',
        date: '12-27-2014',
        text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        postImg: 'https://picsum.photos/300/300?random=2',
        like: 57,
    },
    {
        id: 2,
        name: 'Random Girl',
        profileImg: 'https://picsum.photos/300/300?random=3',
        date: '07-12-2005',
        text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        postImg: 'https://picsum.photos/300/300?random=4',
        like: 14,
    },
    {
        id: 3,
        name: 'Random Kid',
        profileImg: 'https://picsum.photos/300/300?random=5',
        date: '11-16-2019',
        text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        postImg: 'https://picsum.photos/300/300?random=6',
        like: 32,
    },
]

//# funzioni
//funzione che, dato un array di oggetti, crea un feed di post
const createFeed = (array) => {
    const feed = array.reduce((acc, {name, profileImg, date, text, postImg, like}) => 
    acc + `
    <div class="post">
    <div class="post__header">
      <div class="post-meta">
        <div class="post-meta__icon">
          <img class="profile-pic" src="${profileImg}" alt="${name}" />
        </div>
        <div class="post-meta__data">
          <div class="post-meta__author">${name}</div>
          <div class="post-meta__time">${date}</div>
        </div>
      </div>
    </div>
    <div class="post__text">${text}</div>
    <div class="post__image">
      <img src="${postImg}" alt="" />
    </div>
    <div class="post__footer">
      <div class="likes js-likes">
        <div class="likes__cta">
          <button class="like-button js-like-button" href="#" data-postid="1">
            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
            <span class="like-button__label">Mi Piace</span>
          </button>
        </div>
        <div class="likes__counter">Piace a <b id="like-counter-1" class="js-likes-counter">${like}</b> persone</div>
      </div>
    </div>
    </div>
    `
, '');
    return feed;
}

//# recupero elementi dal dom
const containerElement = document.getElementById('container');

//# avvio pagina
//creo feed di post all'interno dell'elemento preso
containerElement.innerHTML = createFeed(postList);