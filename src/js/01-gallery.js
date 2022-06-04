import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const ulEl = document.createElement("ul");
galleryContainer.appendChild(ulEl);
ulEl.classList.add('gallery')

const photoSet = createPhotoMarcup(galleryItems);
ulEl.insertAdjacentHTML("beforeend", photoSet);

console.log(createPhotoMarcup(galleryItems));

function createPhotoMarcup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return`
        <li class="gallery__item">
<a class="gallery__link">
            <img 
        class="gallery__image"
        src = "${preview}"
        alt = "${description}"
            /></a>
            </li>`;
    }).join('');
    


};



// preview.addEventListener('click', modalOpen);
// function modalOpen(e) {
    
// }


