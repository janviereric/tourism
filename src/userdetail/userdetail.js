import "../assets/sass/styles.scss";
import "./userdetail.scss";
import { usersArray } from "../assets/javascripts/link.js";

const body = document.querySelector("body");
const containerUserImg = document.querySelector("#container-user-img");
const containerUserName = document.querySelector("#container-user-name");
const containerUserProfile = document.querySelector("#container-user-profile");
const containerGallery = document.querySelector("#container-gallery");
const containerGalleryDetail = document.querySelector(
  "#container-gallery-detail"
);

const params = new URL(location.href);
let userName = params.search;

let galleryPhotos;

containerGallery.innerHTML = `
<fieldset>
  <legend></legend>
  <ul></ul>
</fieldset>
`;

containerGalleryDetail.classList.add("off");
containerGalleryDetail.innerHTML = `
<fieldset class="fieldset-detail" >
  <legend></legend>
  <p class="gallery-detail-name"></p>
  <div class="gallery-detail"></div>
  <div class="container-button">
    <button class="button button-detail">Détail</button>
    <button class="button button-back">Retour</button>
  </div>
</fieldset>
`;
const galleryDetailName = containerGalleryDetail.querySelector(
  ".gallery-detail-name"
);
const galleryDetail = containerGalleryDetail.querySelector(".gallery-detail");
const buttonDetail = containerGalleryDetail.querySelector(".button-detail");
const buttonBack = containerGalleryDetail.querySelector(".button-back");

switch (userName) {
  case "?name=Gustave%20-%20L%27Aventurier": {
    userName = "Gustave - L'Aventurier";
    containerUserName.innerHTML = `<p>${usersArray[0].photographer}</p>`;
    containerUserImg.innerHTML = `<img src="${usersArray[0].imgDetailSrc}" alt="${usersArray[0].imgDetailSrc}"/>`;
    containerUserProfile.innerHTML = `<p><span>${usersArray[0].photographer.slice(
      0,
      7
    )}</span> ${usersArray[0].profile}</p>`;
    break;
  }
  case "?name=Julie%20-%20L%27Aventuri%C3%A8re": {
    userName = "Julie - L'Aventurière";
    containerUserName.innerHTML = `<p>${usersArray[1].photographer}</p>`;
    containerUserImg.innerHTML = `<img src="${usersArray[1].imgDetailSrc}" alt="${usersArray[1].imgDetailSrc}"/>`;
    containerUserProfile.innerHTML = `<p><span>${usersArray[1].photographer.slice(
      0,
      5
    )}</span> ${usersArray[1].profile}</p>`;
    break;
  }
  case "?name=Henry%20-%20L%27Aventurier": {
    userName = "Henry - L'Aventurier";
    containerUserName.innerHTML = `<p>${usersArray[2].photographer}</p>`;
    containerUserImg.innerHTML = `<img src="${usersArray[2].imgDetailSrc}" alt="${usersArray[2].imgDetailSrc}"/>`;
    containerUserProfile.innerHTML = `<p><span>${usersArray[2].photographer.slice(
      0,
      5
    )}</span> ${usersArray[2].profile}</p>`;
    break;
  }
  case "?name=Zo%C3%A9%20-%20L%27Aventuri%C3%A8re": {
    userName = "Zoé - L'Aventurière";
    containerUserName.innerHTML = `<p>${usersArray[3].photographer}</p>`;
    containerUserImg.innerHTML = `<img src="${usersArray[3].imgDetailSrc}" alt="${usersArray[3].imgDetailSrc}"/>`;
    containerUserProfile.innerHTML = `<p><span>${usersArray[3].photographer.slice(
      0,
      3
    )}</span> ${usersArray[3].profile}</p>`;
    break;
  }

  case "?name=Flora%20-%20L%27Exploratrice": {
    userName = "Flora - L'Exploratrice";
    containerUserName.innerHTML = `<p>${usersArray[4].photographer}</p>`;
    containerUserImg.innerHTML = `<img src="${usersArray[4].imgDetailSrc}" alt="${usersArray[4].imgDetailSrc}"/>`;
    containerUserProfile.innerHTML = `<p><span>${usersArray[4].photographer.slice(
      0,
      5
    )}</span> ${usersArray[4].profile}</p>`;
    break;
  }
  case "?name=Denver%20-%20L%27Explorateur": {
    userName = "Denver - L'Explorateur";
    containerUserName.innerHTML = `<p>${usersArray[5].photographer}</p>`;
    containerUserImg.innerHTML = `<img src="${usersArray[5].imgDetailSrc}" alt="${usersArray[5].imgDetailSrc}"/>`;
    containerUserProfile.innerHTML = `<p><span>${usersArray[5].photographer.slice(
      0,
      6
    )}</span> ${usersArray[5].profile}</p>`;
    break;
  }
  case "?name=Inaya%20-%20L%27Exploratrice": {
    userName = "Inaya - L'Exploratrice";
    containerUserName.innerHTML = `<p>${usersArray[6].photographer}</p>`;
    containerUserImg.innerHTML = `<img src="${usersArray[6].imgDetailSrc}" alt="${usersArray[6].imgDetailSrc}"/>`;
    containerUserProfile.innerHTML = `<p><span>${usersArray[6].photographer.slice(
      0,
      5
    )}</span> ${usersArray[6].profile}</p>`;
    break;
  }
  case "?name=Seth%20-%20L%27Explorateur": {
    userName = "Seth - L'Explorateur";
    containerUserName.innerHTML = `<p>${usersArray[7].photographer}</p>`;
    containerUserImg.innerHTML = `<img src="${usersArray[7].imgDetailSrc}" alt="${usersArray[7].imgDetailSrc}"/>`;
    containerUserProfile.innerHTML = `<p><span>${usersArray[7].photographer.slice(
      0,
      4
    )}</span> ${usersArray[7].profile}</p>`;
    break;
  }

  case "?name=Lance%20-%20Le%20Visiteur": {
    userName = "Lance - Le Visiteur";
    containerUserName.innerHTML = `<p>${usersArray[8].photographer}</p>`;
    containerUserImg.innerHTML = `<img src="${usersArray[8].imgDetailSrc}" alt="${usersArray[8].imgDetailSrc}"/>`;
    containerUserProfile.innerHTML = `<p><span>${usersArray[8].photographer.slice(
      0,
      5
    )}</span> ${usersArray[8].profile}</p>`;
    break;
  }
  case "?name=Nadia%20-%20La%20Visiteuse": {
    userName = "Nadia - La Visiteuse";
    containerUserName.innerHTML = `<p>${usersArray[9].photographer}</p>`;
    containerUserImg.innerHTML = `<img src="${usersArray[9].imgDetailSrc}" alt="${usersArray[9].imgDetailSrc}"/>`;
    containerUserProfile.innerHTML = `<p><span>${usersArray[9].photographer.slice(
      0,
      5
    )}</span> ${usersArray[9].profile}</p>`;
    break;
  }
  case "?name=Xavier%20-%20Le%20Visiteur": {
    userName = "Xavier - Le Visiteur";
    containerUserName.innerHTML = `<p>${usersArray[10].photographer}</p>`;
    containerUserImg.innerHTML = `<img src="${usersArray[10].imgDetailSrc}" alt="${usersArray[10].imgDetailSrc}"/>`;
    containerUserProfile.innerHTML = `<p><span>${usersArray[10].photographer.slice(
      0,
      6
    )}</span> ${usersArray[10].profile}</p>`;
    break;
  }
  case "?name=Ornella%20-%20La%20Visiteuse": {
    userName = "Ornella - La Visiteuse";
    containerUserName.innerHTML = `<p>${usersArray[11].photographer}</p>`;
    containerUserImg.innerHTML = `<img src="${usersArray[11].imgDetailSrc}" alt="${usersArray[11].imgDetailSrc}"/>`;
    containerUserProfile.innerHTML = `<p><span>${usersArray[11].photographer.slice(
      0,
      7
    )}</span> ${usersArray[11].profile}</p>`;
    break;
  }

  case "?name=Cerise%20-%20La%20Voyageuse": {
    userName = "Cerise - La Voyageuse";
    containerUserName.innerHTML = `<p>${usersArray[12].photographer}</p>`;
    containerUserImg.innerHTML = `<img src="${usersArray[12].imgDetailSrc}" alt="${usersArray[12].imgDetailSrc}"/>`;
    containerUserProfile.innerHTML = `<p><span>${usersArray[12].photographer.slice(
      0,
      6
    )}</span> ${usersArray[12].profile}</p>`;
    break;
  }
  case "?name=Philibert%20-%20Le%20Voyageur": {
    userName = "Philibert - Le Voyageur";
    containerUserName.innerHTML = `<p>${usersArray[13].photographer}</p>`;
    containerUserImg.innerHTML = `<img src="${usersArray[13].imgDetailSrc}" alt="${usersArray[13].imgDetailSrc}"/>`;
    containerUserProfile.innerHTML = `<p><span>${usersArray[13].photographer.slice(
      0,
      9
    )}</span> ${usersArray[13].profile}</p>`;
    break;
  }
  case "?name=Roxane%20-%20La%20Voyageuse": {
    userName = "Roxane - La Voyageuse";
    containerUserName.innerHTML = `<p>${usersArray[14].photographer}</p>`;
    containerUserImg.innerHTML = `<img src="${usersArray[14].imgDetailSrc}" alt="${usersArray[14].imgDetailSrc}"/>`;
    containerUserProfile.innerHTML = `<p><span>${usersArray[14].photographer.slice(
      0,
      6
    )}</span> ${usersArray[14].profile}</p>`;
    break;
  }
  case "?name=Yuu%20-%20Le%20Voyageur": {
    userName = "Yuu - Le Voyageur";
    containerUserName.innerHTML = `<p>${usersArray[15].photographer}</p>`;
    containerUserImg.innerHTML = `<img src="${usersArray[15].imgDetailSrc}" alt="${usersArray[15].imgDetailSrc}"/>`;
    containerUserProfile.innerHTML = `<p><span>${usersArray[15].photographer.slice(
      0,
      3
    )}</span> ${usersArray[15].profile}</p>`;
    break;
  }
}

const legend = containerGallery.querySelector("legend");
const legendDetail = containerGalleryDetail.querySelector("legend");
switch (userName) {
  case "Gustave - L'Aventurier": {
    legend.innerHTML = `Galerie de ${usersArray[0].photographer.slice(0, 7)}`;
    legendDetail.innerHTML = `Galerie de ${usersArray[0].photographer.slice(
      0,
      7
    )}`;
    break;
  }
  case "Julie - L'Aventurière": {
    legend.innerHTML = `Galerie de ${usersArray[1].photographer.slice(0, 5)}`;
    legendDetail.innerHTML = `Galerie de ${usersArray[1].photographer.slice(
      0,
      5
    )}`;
    break;
  }
  case "Henry - L'Aventurier": {
    legend.innerHTML = `Galerie d'${usersArray[2].photographer.slice(0, 5)}`;
    legendDetail.innerHTML = `Galerie d'${usersArray[2].photographer.slice(
      0,
      5
    )}`;
    break;
  }
  case "Zoé - L'Aventurière": {
    legend.innerHTML = `Galerie de ${usersArray[3].photographer.slice(0, 3)}`;
    legendDetail.innerHTML = `Galerie de ${usersArray[3].photographer.slice(
      0,
      3
    )}`;
    break;
  }

  case "Flora - L'Exploratrice": {
    legend.innerHTML = `Galerie de ${usersArray[4].photographer.slice(0, 5)}`;
    legendDetail.innerHTML = `Galerie de ${usersArray[4].photographer.slice(
      0,
      5
    )}`;
    break;
  }
  case "Denver - L'Explorateur": {
    legend.innerHTML = `Galerie de ${usersArray[5].photographer.slice(0, 6)}`;
    legendDetail.innerHTML = `Galerie de ${usersArray[5].photographer.slice(
      0,
      6
    )}`;
    break;
  }
  case "Inaya - L'Exploratrice": {
    legend.innerHTML = `Galerie d'${usersArray[6].photographer.slice(0, 5)}`;
    legendDetail.innerHTML = `Galerie d'${usersArray[6].photographer.slice(
      0,
      5
    )}`;
    break;
  }
  case "Seth - L'Explorateur": {
    legend.innerHTML = `Galerie de ${usersArray[7].photographer.slice(0, 4)}`;
    legendDetail.innerHTML = `Galerie de ${usersArray[7].photographer.slice(
      0,
      4
    )}`;
    break;
  }

  case "Lance - Le Visiteur": {
    legend.innerHTML = `Galerie de ${usersArray[8].photographer.slice(0, 5)}`;
    legendDetail.innerHTML = `Galerie de ${usersArray[8].photographer.slice(
      0,
      5
    )}`;
    break;
  }
  case "Nadia - La Visiteuse": {
    legend.innerHTML = `Galerie de ${usersArray[9].photographer.slice(0, 5)}`;
    legendDetail.innerHTML = `Galerie de ${usersArray[9].photographer.slice(
      0,
      5
    )}`;
    break;
  }
  case "Xavier - Le Visiteur": {
    legend.innerHTML = `Galerie de ${usersArray[10].photographer.slice(0, 6)}`;
    legendDetail.innerHTML = `Galerie de ${usersArray[10].photographer.slice(
      0,
      6
    )}`;
    break;
  }
  case "Ornella - La Visiteuse": {
    legend.innerHTML = `Galerie d'${usersArray[11].photographer.slice(0, 7)}`;
    legendDetail.innerHTML = `Galerie d'${usersArray[11].photographer.slice(
      0,
      7
    )}`;
    break;
  }

  case "Cerise - La Voyageuse": {
    legend.innerHTML = `Galerie de ${usersArray[12].photographer.slice(0, 6)}`;
    legendDetail.innerHTML = `Galerie de ${usersArray[12].photographer.slice(
      0,
      6
    )}`;
    break;
  }
  case "Philibert - Le Voyageur": {
    legend.innerHTML = `Galerie de ${usersArray[13].photographer.slice(0, 9)}`;
    legendDetail.innerHTML = `Galerie de ${usersArray[13].photographer.slice(
      0,
      9
    )}`;
    break;
  }
  case "Roxane - La Voyageuse": {
    legend.innerHTML = `Galerie de ${usersArray[14].photographer.slice(0, 6)}`;
    legendDetail.innerHTML = `Galerie de ${usersArray[14].photographer.slice(
      0,
      6
    )}`;
    break;
  }
  case "Yuu - Le Voyageur": {
    legend.innerHTML = `Galerie de ${usersArray[15].photographer.slice(0, 3)}`;
    legendDetail.innerHTML = `Galerie de ${usersArray[15].photographer.slice(
      0,
      3
    )}`;
    break;
  }
}

const createGalleryPhotos = () => {
  const galleryPhotosElement = galleryPhotos
    .filter((galleryPhoto) => galleryPhoto.photographer === `${userName}`)
    .map((galleryPhoto) => {
      const galleryPhotoElement = document.createElement("li");
      galleryPhotoElement.innerHTML = "<img />";
      const formPhotoImg = galleryPhotoElement.querySelector("img");
      formPhotoImg.setAttribute("data-id", `${galleryPhoto._id}`);
      galleryPhotoElement.addEventListener("click", (event) => {
        const target = event.target;
        const formPhotoId = target.dataset.id;
        containerGalleryDetail.classList.remove("off");
        containerUserImg.classList.add("off");
        containerUserName.classList.add("off");
        containerUserProfile.classList.add("off");
        containerGallery.classList.add("off");

        galleryDetailName.innerHTML = `${galleryPhoto.picture.italics()}`;
        galleryDetail.innerHTML = `<img src="${galleryPhoto.picture}" />`;

        body.classList.add("remove-scrolling");

        buttonDetail.addEventListener("click", (event) => {
          event.stopPropagation();
          if (formPhotoId) {
            location.assign(`./formdetail.html?id=${formPhotoId}`);
          } else {
            location.assign(`./userdetail.html?name=${userName}`);
          }
        });

        buttonBack.addEventListener("click", (event) => {
          event.stopPropagation();
          containerGalleryDetail.classList.add("off");
          containerUserImg.classList.remove("off");
          containerUserName.classList.remove("off");
          containerUserProfile.classList.remove("off");
          containerGallery.classList.remove("off");
          body.classList.remove("remove-scrolling");
        });
        const formPhotoImgDetail = galleryDetail.querySelector("img");
        switch (galleryPhoto.picture) {
          case "Un Désert en Cisjordanie": {
            formPhotoImgDetail.src =
              "./assets/images/form-photos/form-deserts/desert-cj.jpg";
            break;
          }
          case "Un Désert en Jordanie": {
            formPhotoImgDetail.src =
              "./assets/images/form-photos/form-deserts/desert-jo.jpg";
            break;
          }
          case "Un Désert au Maroc": {
            formPhotoImgDetail.src =
              "./assets/images/form-photos/form-deserts/desert-ma.jpg";
            break;
          }
          case "Un Désert en Namibie (Océan Atlantique)": {
            formPhotoImgDetail.src =
              "./assets/images/form-photos/form-deserts/desert-oa-na.jpg";
            break;
          }
          case "Un Désert en Oman": {
            formPhotoImgDetail.src =
              "./assets/images/form-photos/form-deserts/desert-om.jpg";
            break;
          }
          case "Un Désert au Pérou": {
            formPhotoImgDetail.src =
              "./assets/images/form-photos/form-deserts/desert-pe.jpg";
            break;
          }
          case "Un Désert en Arabie Saoudite": {
            formPhotoImgDetail.src =
              "./assets/images/form-photos/form-deserts/desert-sa.jpg";
            break;
          }
          case "Un Désert en Namibie (Sud-Ouest)": {
            formPhotoImgDetail.src =
              "./assets/images/form-photos/form-deserts/desert-so-na.jpg";
            break;
          }
          case "Le Désert du Sahara (Soir)": {
            formPhotoImgDetail.src =
              "./assets/images/form-photos/form-deserts/desert-soir-eh.jpg";
            break;
          }
          case "Sable Blanc du Nouveau-Mexique (USA)": {
            formPhotoImgDetail.src =
              "./assets/images/form-photos/form-deserts/sable-blanc-nmex-us.jpg";
            break;
          }

          case "Une Forêt en Australie": {
            formPhotoImgDetail.src =
              "./assets/images/form-photos/form-forets/foret-au.jpg";
            break;
          }
          case "Une Forêt au Canada": {
            formPhotoImgDetail.src =
              "./assets/images/form-photos/form-forets/foret-ca.jpg";
            break;
          }
          case "Une Forêt en Finlande": {
            formPhotoImgDetail.src =
              "./assets/images/form-photos/form-forets/foret-fi.jpg";
            break;
          }
          case "Une Forêt en Croatie": {
            formPhotoImgDetail.src =
              "./assets/images/form-photos/form-forets/foret-hr.jpg";
            break;
          }
          case "Une Forêt en Inde": {
            formPhotoImgDetail.src =
              "./assets/images/form-photos/form-forets/foret-in.jpg";
            break;
          }
          case "Une Forêt en Italie": {
            formPhotoImgDetail.src =
              "./assets/images/form-photos/form-forets/foret-it.jpg";
            break;
          }
          case "Une Forêt au Japon": {
            formPhotoImgDetail.src =
              "./assets/images/form-photos/form-forets/foret-jp.jpg";
            break;
          }
          case "La Forêt des Loups": {
            formPhotoImgDetail.src =
              "./assets/images/form-photos/form-forets/foret-loups.jpg";
            break;
          }
          case "Une Forêt au Nouvelle-Zélande": {
            formPhotoImgDetail.src =
              "./assets/images/form-photos/form-forets/foret-nz.jpg";
            break;
          }
          case "Une Forêt en Washington (USA)": {
            formPhotoImgDetail.src =
              "./assets/images/form-photos/form-forets/foret-wash-us.jpg";
            break;
          }

          case "Une Plage en Australie": {
            formPhotoImgDetail.src =
              "./assets/images/form-photos/form-plages/plage-au.jpg";
            break;
          }
          case "Une Plage au Brésil": {
            formPhotoImgDetail.src =
              "./assets/images/form-photos/form-plages/plage-br.jpg";
            break;
          }
          case "Une Plage en Grande-Bretagne": {
            formPhotoImgDetail.src =
              "./assets/images/form-photos/form-plages/plage-gb.jpg";
            break;
          }
          case "Une Plage en Italie": {
            formPhotoImgDetail.src =
              "./assets/images/form-photos/form-plages/plage-it.jpg";
            break;
          }
          case "Une Plage en Madagascar": {
            formPhotoImgDetail.src =
              "./assets/images/form-photos/form-plages/plage-mg.jpg";
            break;
          }
          case "Une Plage au Mexique": {
            formPhotoImgDetail.src =
              "./assets/images/form-photos/form-plages/plage-mx.jpg";
            break;
          }
          case "Une Plage en Nouvelle-Calédonie": {
            formPhotoImgDetail.src =
              "./assets/images/form-photos/form-plages/plage-nc.jpg";
            break;
          }
          case "Une Plage en Polynésie Française": {
            formPhotoImgDetail.src =
              "./assets/images/form-photos/form-plages/plage-pf.jpg";
            break;
          }
          case "Une Plage aux Sychelles": {
            formPhotoImgDetail.src =
              "./assets/images/form-photos/form-plages/plage-sc.jpg";
            break;
          }
          case "Une Plage en Thaïlande": {
            formPhotoImgDetail.src =
              "./assets/images/form-photos/form-plages/plage-th.jpg";
            break;
          }

          case "Une Ville au Chili": {
            formPhotoImgDetail.src =
              "./assets/images/form-photos/form-villes/ville-cl.jpg";
            break;
          }
          case "Une Ville en Chine": {
            formPhotoImgDetail.src =
              "./assets/images/form-photos/form-villes/ville-cn.jpg";
            break;
          }
          case "Une Ville en Colombie": {
            formPhotoImgDetail.src =
              "./assets/images/form-photos/form-villes/ville-co.jpg";
            break;
          }
          case "Une Ville en France": {
            formPhotoImgDetail.src =
              "./assets/images/form-photos/form-villes/ville-fr.jpg";
            break;
          }
          case "Une Ville en Grande-Bretagne": {
            formPhotoImgDetail.src =
              "./assets/images/form-photos/form-villes/ville-gb.jpg";
            break;
          }
          case "Une Ville au Japon (Jour)": {
            formPhotoImgDetail.src =
              "./assets/images/form-photos/form-villes/ville-jour-jp.jpg";
            break;
          }
          case "Une Ville en Koweït": {
            formPhotoImgDetail.src =
              "./assets/images/form-photos/form-villes/ville-kw.jpg";
            break;
          }
          case "Une Ville en Norvège": {
            formPhotoImgDetail.src =
              "./assets/images/form-photos/form-villes/ville-no.jpg";
            break;
          }
          case "Une Ville Rural d'Allemagne": {
            formPhotoImgDetail.src =
              "./assets/images/form-photos/form-villes/ville-rural-ge.jpg";
            break;
          }
          case "Une Ville d'Italie (Soir)": {
            formPhotoImgDetail.src =
              "./assets/images/form-photos/form-villes/ville-soir-it.jpg";
            break;
          }
        }
      });

      switch (galleryPhoto.picture) {
        case "Un Désert en Cisjordanie": {
          formPhotoImg.src =
            "./assets/images/form-small/form-deserts-small/desert-small-cj.jpg";
          break;
        }
        case "Un Désert en Jordanie": {
          formPhotoImg.src =
            "./assets/images/form-small/form-deserts-small/desert-small-jo.jpg";
          break;
        }
        case "Un Désert au Maroc": {
          formPhotoImg.src =
            "./assets/images/form-small/form-deserts-small/desert-small-ma.jpg";
          break;
        }
        case "Un Désert en Namibie (Océan Atlantique)": {
          formPhotoImg.src =
            "./assets/images/form-small/form-deserts-small/desert-small-oa-na.jpg";
          break;
        }
        case "Un Désert en Oman": {
          formPhotoImg.src =
            "./assets/images/form-small/form-deserts-small/desert-small-om.jpg";
          break;
        }
        case "Un Désert au Pérou": {
          formPhotoImg.src =
            "./assets/images/form-small/form-deserts-small/desert-small-pe.jpg";
          break;
        }
        case "Un Désert en Arabie Saoudite": {
          formPhotoImg.src =
            "./assets/images/form-small/form-deserts-small/desert-small-sa.jpg";
          break;
        }
        case "Un Désert en Namibie (Sud-Ouest)": {
          formPhotoImg.src =
            "./assets/images/form-small/form-deserts-small/desert-small-so-na.jpg";
          break;
        }
        case "Le Désert du Sahara (Soir)": {
          formPhotoImg.src =
            "./assets/images/form-small/form-deserts-small/desert-small-soir-eh.jpg";
          break;
        }
        case "Sable Blanc du Nouveau-Mexique (USA)": {
          formPhotoImg.src =
            "./assets/images/form-small/form-deserts-small/sable-blanc-small-nmex-us.jpg";
          break;
        }

        case "Une Forêt en Australie": {
          formPhotoImg.src =
            "./assets/images/form-small/form-forets-small/foret-small-au.jpg";
          break;
        }
        case "Une Forêt au Canada": {
          formPhotoImg.src =
            "./assets/images/form-small/form-forets-small/foret-small-ca.jpg";
          break;
        }
        case "Une Forêt en Finlande": {
          formPhotoImg.src =
            "./assets/images/form-small/form-forets-small/foret-small-fi.jpg";
          break;
        }
        case "Une Forêt en Croatie": {
          formPhotoImg.src =
            "./assets/images/form-small/form-forets-small/foret-small-hr.jpg";
          break;
        }
        case "Une Forêt en Inde": {
          formPhotoImg.src =
            "./assets/images/form-small/form-forets-small/foret-small-in.jpg";
          break;
        }
        case "Une Forêt en Italie": {
          formPhotoImg.src =
            "./assets/images/form-small/form-forets-small/foret-small-it.jpg";
          break;
        }
        case "Une Forêt au Japon": {
          formPhotoImg.src =
            "./assets/images/form-small/form-forets-small/foret-small-jp.jpg";
          break;
        }
        case "La Forêt des Loups": {
          formPhotoImg.src =
            "./assets/images/form-small/form-forets-small/foret-small-loups.jpg";
          break;
        }
        case "Une Forêt au Nouvelle-Zélande": {
          formPhotoImg.src =
            "./assets/images/form-small/form-forets-small/foret-small-nz.jpg";
          break;
        }
        case "Une Forêt en Washington (USA)": {
          formPhotoImg.src =
            "./assets/images/form-small/form-forets-small/foret-small-wash-us.jpg";
          break;
        }

        case "Une Plage en Australie": {
          formPhotoImg.src =
            "./assets/images/form-small/form-plages-small/plage-small-au.jpg";
          break;
        }
        case "Une Plage au Brésil": {
          formPhotoImg.src =
            "./assets/images/form-small/form-plages-small/plage-small-br.jpg";
          break;
        }
        case "Une Plage en Grande-Bretagne": {
          formPhotoImg.src =
            "./assets/images/form-small/form-plages-small/plage-small-gb.jpg";
          break;
        }
        case "Une Plage en Italie": {
          formPhotoImg.src =
            "./assets/images/form-small/form-plages-small/plage-small-it.jpg";
          break;
        }
        case "Une Plage en Madagascar": {
          formPhotoImg.src =
            "./assets/images/form-small/form-plages-small/plage-small-mg.jpg";
          break;
        }
        case "Une Plage au Mexique": {
          formPhotoImg.src =
            "./assets/images/form-small/form-plages-small/plage-small-mx.jpg";
          break;
        }
        case "Une Plage en Nouvelle-Calédonie": {
          formPhotoImg.src =
            "./assets/images/form-small/form-plages-small/plage-small-nc.jpg";
          break;
        }
        case "Une Plage en Polynésie Française": {
          formPhotoImg.src =
            "./assets/images/form-small/form-plages-small/plage-small-pf.jpg";
          break;
        }
        case "Une Plage aux Sychelles": {
          formPhotoImg.src =
            "./assets/images/form-small/form-plages-small/plage-small-sc.jpg";
          break;
        }
        case "Une Plage en Thaïlande": {
          formPhotoImg.src =
            "./assets/images/form-small/form-plages-small/plage-small-th.jpg";
          break;
        }

        case "Une Ville au Chili": {
          formPhotoImg.src =
            "./assets/images/form-small/form-villes-small/ville-small-cl.jpg";
          break;
        }
        case "Une Ville en Chine": {
          formPhotoImg.src =
            "./assets/images/form-small/form-villes-small/ville-small-cn.jpg";
          break;
        }
        case "Une Ville en Colombie": {
          formPhotoImg.src =
            "./assets/images/form-small/form-villes-small/ville-small-co.jpg";
          break;
        }
        case "Une Ville en France": {
          formPhotoImg.src =
            "./assets/images/form-small/form-villes-small/ville-small-fr.jpg";
          break;
        }
        case "Une Ville en Grande-Bretagne": {
          formPhotoImg.src =
            "./assets/images/form-small/form-villes-small/ville-small-gb.jpg";
          break;
        }
        case "Une Ville au Japon (Jour)": {
          formPhotoImg.src =
            "./assets/images/form-small/form-villes-small/ville-small-jour-jp.jpg";
          break;
        }
        case "Une Ville en Koweït": {
          formPhotoImg.src =
            "./assets/images/form-small/form-villes-small/ville-small-kw.jpg";
          break;
        }
        case "Une Ville en Norvège": {
          formPhotoImg.src =
            "./assets/images/form-small/form-villes-small/ville-small-no.jpg";
          break;
        }
        case "Une Ville Rural d'Allemagne": {
          formPhotoImg.src =
            "./assets/images/form-small/form-villes-small/ville-small-rural-ge.jpg";
          break;
        }
        case "Une Ville d'Italie (Soir)": {
          formPhotoImg.src =
            "./assets/images/form-small/form-villes-small/ville-small-soir-it.jpg";
          break;
        }
      }
      return galleryPhotoElement;
    });
  const listGalleryPhotos = containerGallery.querySelector("ul");
  listGalleryPhotos.innerHTML = "";
  listGalleryPhotos.append(...galleryPhotosElement);
  if (galleryPhotosElement.length >= 4) {
    listGalleryPhotos.classList.add("mode-grid");
  } else {
    listGalleryPhotos.classList.add("mode-flex");
  }
};

const fetchGallery = async () => {
  try {
    const response = await fetch("https://restapi.fr/api/photos");
    galleryPhotos = await response.json();
    if (!Array.isArray(galleryPhotos)) {
      galleryPhotos = [galleryPhotos];
    }
    createGalleryPhotos(galleryPhotos);
  } catch (error) {
    console.error(("error : ", error));
  }
};
fetchGallery();
