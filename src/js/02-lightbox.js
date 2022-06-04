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
        <a class="gallery__link"
        href="${original}">
            <img 
        class="gallery__image"
        src = "${preview}"
        data-source="${original}"
        alt = "${description}"
            /></a>`;
    }).join('');
    
};
