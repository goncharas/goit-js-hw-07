import { galleryItems } from './gallery-items.js';
console.log(galleryItems);
const imageConteiner = document.querySelector(".gallery");
const imageMarkup = createGallery(galleryItems);
imageConteiner.insertAdjacentHTML("beforeend", imageMarkup);

function createGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      rel="lightbox"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}
imageConteiner.addEventListener("click", onClickImage);

function onClickImage(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return;
  }
  const clickImg = evt.target.dataset.source;
  // console.dir(evt.target);
  const instance = basicLightbox.create(`<img src = "${clickImg}" />`, {
    onShow: (instance) => {
      window.addEventListener("keydown", keyClose);
    },
    onClose: (instance) => {
      window.removeEventListener("keydown", keyClose);
    },
  });
  instance.show();

  function keyClose(evt) {
    if (evt.code === "Escape") {
      instance.close();
    }
  }
}