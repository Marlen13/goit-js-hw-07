import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

(function () {
  const markup = galleryItems
    .map(
      ({ preview, original, description }) =>
        ` <li class="gallery_-item">
        <a class="gallery-дink" href="${original}">
        <img
        class="gallery-image"
        src="${preview}"
        data-source="${preview}"
        alt="${description}"
        width = "300px"
        />
        </a>
        </li> `
    )
    .join("");
  //   console.dir(markup);
  gallery.insertAdjacentHTML("beforeend", markup);
})();
console.log(gallery);

gallery.addEventListener("click", onClick);
function onClick(evt) {
  console.log(evt.target);
  evt.preventDefault();
  if (!evt.target.classlist.contains(".gallery-image")) {
    return;
  }
  //   const curentImg = evt.target.closest(".gallery-item");

  // modalwindow
  const instance = basicLightbox.create(`<div>HELLO</div>`);
  instance.show();
}
// `
//     <div class="box"
//     <img
//     class="gallery-image"
//     src="${evt.target.dataset.source}"
//     data-source="${original}"

//     />
//     </div>`
