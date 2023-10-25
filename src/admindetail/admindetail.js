import "../assets/sass/styles.scss";
import "./admindetail.scss";
import { adminsArray } from "../assets/javascripts/admins.js";
import { homePhotosArray } from "../assets/javascripts/home-photos.js";

const containerAdminImg = document.querySelector("#container-admin-img");
const containerAdminName = document.querySelector("#container-admin-name");
const containerAdminProfile = document.querySelector(
  "#container-admin-profile"
);
const containerGallery = document.querySelector("#container-gallery");
const containerButton = document.querySelector("#container-button");

const params = new URL(location.href);
let adminName = params.search;

containerGallery.innerHTML = `
<fieldset>
  <legend></legend>
  <ul></ul>
</fieldset>
`;

switch (adminName) {
  case "?name=Alice%20-%20L%27Administratrice": {
    adminName = "Alice - L'Administratrice";
    containerAdminName.innerHTML = `<p>${adminsArray[0].photographer}</p>`;
    containerAdminImg.innerHTML = `<img src="${adminsArray[0].imgDetailSrc}" alt="${adminsArray[0].imgDetailSrc}"/>`;
    containerAdminProfile.innerHTML = `<p>${adminsArray[0].profile}</p>`;
    break;
  }
  case "?name=Ernest%20-%20L%27Administrateur": {
    adminName = "Ernest - L'Administrateur";
    containerAdminName.innerHTML = `<p>${adminsArray[1].photographer}</p>`;
    containerAdminImg.innerHTML = `<img src="${adminsArray[1].imgDetailSrc}" alt="${adminsArray[1].imgDetailSrc}"/>`;
    containerAdminProfile.innerHTML = `<p>${adminsArray[1].profile}</p>`;
    break;
  }
  case "?name=Mia%20-%20L%27Administratrice": {
    adminName = "Mia - L'Administratrice";
    containerAdminName.innerHTML = `<p>${adminsArray[2].photographer}</p>`;
    containerAdminImg.innerHTML = `<img src="${adminsArray[2].imgDetailSrc}" alt="${adminsArray[2].imgDetailSrc}"/>`;
    containerAdminProfile.innerHTML = `<p>${adminsArray[2].profile}</p>`;
    break;
  }
  case "?name=Ben%20-%20L%27Administrateur": {
    adminName = "Ben - L'Administrateur";
    containerAdminName.innerHTML = `<p>${adminsArray[3].photographer}</p>`;
    containerAdminImg.innerHTML = `<img src="${adminsArray[3].imgDetailSrc}" alt="${adminsArray[3].imgDetailSrc}"/>`;
    containerAdminProfile.innerHTML = `<p>${adminsArray[3].profile}</p>`;
    break;
  }
}

const displayGalleryPhotos = async () => {
  try {
    const galleryPhotosElement = homePhotosArray
      .filter((photo) => photo.photographer === `${adminName}`)
      .map((galleryPhoto, index) => {
        return createGalleryPhotosElement(galleryPhoto, index);
      });
    const listGalleryPhotos = containerGallery.querySelector("ul");
    listGalleryPhotos.append(...galleryPhotosElement);
    if (galleryPhotosElement.length >= 5) {
      listGalleryPhotos.classList.add("mode-grid");
    } else {
      listGalleryPhotos.classList.add("mode-flex");
    }
  } catch {
    location.assign("./index.html");
  }
};

const createGalleryPhotosElement = (galleryPhoto) => {
  const galleryPhotoElement = document.createElement("li");
  galleryPhotoElement.innerHTML = `
  <img src="${galleryPhoto.photoSrc}" alt="${galleryPhoto.picture}" />
  `;
  return galleryPhotoElement;
};

displayGalleryPhotos();

const legend = containerGallery.querySelector("legend");
switch (adminName) {
  case "Alice - L'Administratrice": {
    legend.innerHTML = `Galerie d'${adminsArray[0].photographer.slice(0, 5)}`;
    break;
  }
  case "Ernest - L'Administrateur": {
    legend.innerHTML = `Galerie d'${adminsArray[1].photographer.slice(0, 6)}`;
    break;
  }
  case "Mia - L'Administratrice": {
    legend.innerHTML = `Galerie de ${adminsArray[2].photographer.slice(0, 3)}`;
    break;
  }
  case "Ben - L'Administrateur": {
    legend.innerHTML = `Galerie de ${adminsArray[3].photographer.slice(0, 3)}`;
    break;
  }
}

containerButton.innerHTML = `
          <button class="button button-back">Retour</button>`;
const buttonBack = containerButton.querySelector("button");

buttonBack.addEventListener("click", (event) => {
  event.stopPropagation();
  history.back();
});
