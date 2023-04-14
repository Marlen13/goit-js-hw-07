import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");
(function () {
  const markup = galleryItems
    .map(
      ({ preview, original, description }) =>
        ` <li class="gallery-item">
        <a class="gallery-дink" href="${original}">
        <img
        class="gallery-image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        width = "300px"
        />
        </a>
        </li> `
    )
    .join("");

  gallery.insertAdjacentHTML("beforeend", markup);
})();
console.log(galleryItems);
gallery.addEventListener("click", onClick);
function onClick(evt) {
  evt.preventDefault();
  const imgGalleryItem = evt.target.classList.contains("gallery-image");
  if (!imgGalleryItem) {
    return;
  }
  const instance = basicLightbox.create(`
      <img
      src="${evt.target.dataset.source}"
      width = "600px"
      />
     `);
  instance.show();
}
