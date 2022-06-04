import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
let instance = '';
const photoSet = createPhotoMarcup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", photoSet);

galleryContainer.addEventListener('click', clickOnTheImg);

console.log(createPhotoMarcup(galleryItems));

function createPhotoMarcup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return`<div class="gallery__item">
        <a class="gallery__link"
        href="${original}">
            <img 
        class="gallery__image"
        src = "${preview}"
        data-source="${original}"
        alt = "${description}"
            /></a></div>`;
    }).join('');
    
};


function clickOnTheImg(e) {
    e.preventDefault();
    if (e.target.nodeName !== 'IMG') {
        return
    }

const large = e.target.dataset.source;
    openedModal(large);
}
    
  document.body.addEventListener('click', onlyBackdrop);


function openedModal(large) {
window.addEventListener('keydown', pressedKey);
    document.body.classList.add('show-modal');
    instance = basicLightbox.create(
        `<img 
        src="${large}"
    />
`);
    instance.show();
}


function closeModal() {
    window.removeEventListener('keydown', pressedKey)
    document.body.classList.remove('show-modal');
}
function onlyBackdrop(e) {
    if (e.currentTarget === e.target) {
        closeModal();
      }
 
}
function pressedKey(e) {
    if (e.code === 'Escape') {
        closeModal();
}
   
}