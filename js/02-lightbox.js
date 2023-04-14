import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");
(function () {
  const markup = galleryItems
    .map(
      ({ preview, original, description }) =>
        ` <li class="gallery__item">
        <a class="gallery__link" href="${original}">
           <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
     </li>
    `
    )
    .join("");
  gallery.insertAdjacentHTML("beforeend", markup);
})();
console.log(galleryItems);

gallery.addEventListener("click", onImgGalleryClick);
function onImgGalleryClick(evt) {
  evt.preventDefault();
  const imgGalleryItem = evt.target.classList.contains("gallery__image");
  if (!imgGalleryItem) {
    return;
  }
  const lightBox = new SimpleLightbox(".gallery a", {
    /* options */
    captionSelector: "img",
    captionType: "attr",
    captionsData: "alt",
    captionDelay: 250,
  });
}
