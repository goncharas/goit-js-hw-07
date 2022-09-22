import { galleryItems } from './gallery-items.js';
console.log(galleryItems);

const imageConteiner = document.querySelector(".gallery");
const imageMarkup = createGallery(galleryItems);
imageConteiner.insertAdjacentHTML("beforeend", imageMarkup);

function createGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <a class="gallery__item" href="${original}" data-caption="${description}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
    .join("");
}
// console.log(markup);
imageConteiner.addEventListener("click", onClickImage);
const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
function onClickImage(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return;
  }
}