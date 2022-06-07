import { galleryItems } from './gallery-items.js';
// Change code below this line


// import SimpleLightbox from "./simple-lightbox.esm";


// const original = e.target.dataset.lightbox;
// openTheLightbox(description, large, original);


//     const preview = e.target.dataset.src;
// const large = e.target.dataset.source;
// loadThePicture(preview, large);


const galleryContainer = document.querySelector('.gallery');
const photoSet = createPhotoMarcup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", photoSet);
galleryContainer.addEventListener('click', clickOnTheImg);

console.log(createPhotoMarcup(galleryItems));
// рендеринг
function createPhotoMarcup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<a class="gallery__item" href="${original}">
<img class="gallery__image" src="${preview}" data-description="${description}" alt="${description}" />
</a>`
    }).join('');
    
};

function clickOnTheImg(e) {
    e.preventDefault();
    if (e.target.nodeName !== 'IMG') {
        return
    }
    
}


// const description = e.target.dataset.alt;
let lightbox = new SimpleLightbox('.gallery a', {
    captionPosition: "bottom",
    captionsData: "${e.target.dataset.description}",
    captionDelay: 250,

});
console.log(lightbox)




