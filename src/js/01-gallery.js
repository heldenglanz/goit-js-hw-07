import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
let instance = '';
const photoSet = createPhotoMarcup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", photoSet);

galleryContainer.addEventListener('click', clickOnTheImg);

console.log(createPhotoMarcup(galleryItems));
// рендеринг
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
    
 


function openedModal(large) {
    // document.body.addEventListener('click' , onlyBackdrop );
    instance = basicLightbox.create(
        `<img 
        src="${large}"
    />
`);
    instance.show();
    window.addEventListener('keydown', pressedKey);
}


// function closeModal() {
     
// }
// function onlyBackdrop(e) {
//     if (e.currentTarget === e.target) {
//        instance.close();
//         document.body.removeEventListener('click', closeModal);
//       }
// }
function pressedKey(e) {
    if (e.code === 'Escape') {
        instance.close();
        window.removeEventListener('keydown', pressedKey);
        console.log("Escape");
}
}