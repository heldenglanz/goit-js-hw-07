import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryContainer = document.querySelector('.gallery');

const photoSet = createPhotoMarcup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", photoSet);

galleryContainer.addEventListener('click', clickOnTheImg);

console.log(createPhotoMarcup(galleryItems));

// рендеринг
function createPhotoMarcup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return`
        <li>
        <a class="gallery__link"
        href="${original}">
            <img 
        class="gallery__image"
        src = "${preview}"
        data-lightbox="${original}"
        data-title="${description}"
        alt = "${description}"
            /></a></li>`;
    }).join('');
    
};

function clickOnTheImg(e) {
    e.preventDefault();
    if (e.target.nodeName !== 'IMG') {
        return
    }
}

    const description = e.target.dataset.title;
const large = e.target.dataset.source;
openTheLightbox(description, large);

function loadThePicture({preview, original, description}) {
    <div class="gallery">
    <a href="${preview}"><img src="images/thumbs/thumb1.jpg" alt="" title=""/></a>
    <a href="${preview}"><img src="images/thumbs/thumb2.jpg" alt="" title="Beautiful Image"/></a>
</div>
}

function openTheLightbox(description, large){
let lightbox = new SimpleLightbox('.gallery a',{
    captionPosition: "bottom",
    captionsData: "description",
    captionDelay: 250,
 
});
}


// import SimpleLightbox from "./simple-lightbox.esm";





    const preview = e.target.dataset.src;
const large = e.target.dataset.source;
loadThePicture(preview, large);

// function loadTheLightbox(preview, original) {
//     var lightbox = $('.gallery a').simpleLightbox({ 
        
//     });
// }


// let lightbox = $('gallery').simpleLightbox(preview, original);
// lightbox.on('show.simplelightbox', function (large) {
//     large = ${original}
// });





// function loadThePicture(preview, original) {
//     <div class="gallery">
//     <a href="${preview}"><img src="images/thumbs/thumb1.jpg" alt="" title=""/></a>
//     <a href="${preview}"><img src="images/thumbs/thumb2.jpg" alt="" title="Beautiful Image"/></a>
// </div>
// }
