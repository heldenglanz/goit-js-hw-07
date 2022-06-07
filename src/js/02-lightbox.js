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
        return `<a class="gallery__item" href="${original}">
<img class="gallery__image" src="${preview}" alt="${description}" />
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
let gallery = new SimpleLightbox('.gallery a', {
    captionPosition: "bottom",
    captionsData: "alt",
    captionDelay: 250,
});




