import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');

const photoSet = createPhotoMarcup(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", photoSet)

console.log(createPhotoMarcup(galleryItems));

function createPhotoMarcup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return`
            <img 
        class="gallery__image"
        src = "${preview}"
        alt = "${description}"
            />`;
    }).join('');
    


};



preview.addEventListener('click', modalOpen);
function modalOpen(e) {
    
}


