import { async } from "regenerator-runtime";
import { homePhotosArray } from "./assets/javascripts/home-photos.js";
import "./assets/sass/styles.scss";
import "./index.scss";
const photosContainer = document.querySelector("#photos-container");

////////////////////////////// home start //////////////////////////////
const displayHomePhotos = () => {
  const homePhotosElement = homePhotosArray.map((homePhoto, index) => {
    return createHomePhotosElement(homePhoto, index);
  });
  photosContainer.append(...homePhotosElement);
};

export const createHomePhotosElement = (homePhoto, index) => {
  const homePhotoContainer = document.createElement("div");
  homePhotoContainer.classList.add("home-photo-container");
  homePhotoContainer.innerHTML = `
  <img src="${homePhoto.src}" alt="${homePhoto.picture}" />
    <h2>${homePhoto.picture}</h2>
  `;
  return homePhotoContainer;
};
////////////////////////////// home start //////////////////////////////

////////////////////////////// form start //////////////////////////////
const createFormPhotosElement = async (formPhotosArray) => {
  const formPhotosElement = formPhotosArray.map((formPhoto) => {
    const formPhotoContainer = document.createElement("div");

    formPhotoContainer.classList.add("form-photo-container");
    formPhotoContainer.innerHTML = `
    <img alt="${formPhoto.picture}" />
    <h2>${formPhoto.picture}</h2>`;
    const imgPhoto = formPhotoContainer.querySelector("img");

    switch (formPhoto.picture) {
      case "Un Désert en Cisjordanie": {
        imgPhoto.src = "./assets/images/form-photos/form-deserts/desert-cj.jpg";
        break;
      }
      case "Un Désert en Jordanie": {
        imgPhoto.src = "./assets/images/form-photos/form-deserts/desert-jo.jpg";
        break;
      }
      case "Un Désert au Maroc": {
        imgPhoto.src = "./assets/images/form-photos/form-deserts/desert-ma.jpg";
        break;
      }
      case "Un Désert en Namibie (Océan Atlantique)": {
        imgPhoto.src =
          "./assets/images/form-photos/form-deserts/desert-oa-na.jpg";
        break;
      }
      case "Un Désert en Oman": {
        imgPhoto.src = "./assets/images/form-photos/form-deserts/desert-om.jpg";
        break;
      }
      case "Un Désert au Pérou": {
        imgPhoto.src = "./assets/images/form-photos/form-deserts/desert-pe.jpg";
        break;
      }
      case "Un Désert en Arabie Saoudite": {
        imgPhoto.src = "./assets/images/form-photos/form-deserts/desert-sa.jpg";
        break;
      }
      case "Un Désert en Namibie (Sud-Ouest)": {
        imgPhoto.src =
          "./assets/images/form-photos/form-deserts/desert-so-na.jpg";
        break;
      }
      case "Le Désert du Sahara (Soir)": {
        imgPhoto.src =
          "./assets/images/form-photos/form-deserts/desert-soir-eh.jpg";
        break;
      }
      case "Sable Blanc du Nouveau-Mexique (USA)": {
        imgPhoto.src =
          "./assets/images/form-photos/form-deserts/sable-blanc-nmex-us.jpg";
        break;
      }
    }

    switch (formPhoto.picture) {
      case "Une Forêt en Australie": {
        imgPhoto.src = "./assets/images/form-photos/form-forets/foret-au.jpg";
        break;
      }
      case "Une Forêt au Canada": {
        imgPhoto.src = "./assets/images/form-photos/form-forets/foret-ca.jpg";
        break;
      }
      case "Une Forêt en Finlande": {
        imgPhoto.src = "./assets/images/form-photos/form-forets/foret-fi.jpg";
        break;
      }
      case "Une Forêt en Croatie": {
        imgPhoto.src = "./assets/images/form-photos/form-forets/foret-hr.jpg";
        break;
      }
      case "Une Forêt en Inde": {
        imgPhoto.src = "./assets/images/form-photos/form-forets/foret-in.jpg";
        break;
      }
      case "Une Forêt en Italie": {
        imgPhoto.src = "./assets/images/form-photos/form-forets/foret-it.jpg";
        break;
      }
      case "Une Forêt au Japon": {
        imgPhoto.src = "./assets/images/form-photos/form-forets/foret-jp.jpg";
        break;
      }
      case "La Forêt des Loups": {
        imgPhoto.src =
          "./assets/images/form-photos/form-forets/foret-loups.jpg";
        break;
      }
      case "Une Forêt au Nouvelle-Zélande": {
        imgPhoto.src = "./assets/images/form-photos/form-forets/foret-nz.jpg";
        break;
      }
      case "Une Forêt en Washington (USA)": {
        imgPhoto.src =
          "./assets/images/form-photos/form-forets/foret-wash-us.jpg";
        break;
      }
    }

    switch (formPhoto.picture) {
      case "Une Plage en Australie": {
        imgPhoto.src = "./assets/images/form-photos/form-plages/plage-au.jpg";
        break;
      }
      case "Une Plage au Brésil": {
        imgPhoto.src = "./assets/images/form-photos/form-plages/plage-br.jpg";
        break;
      }
      case "Une Plage en Grande-Bretagne": {
        imgPhoto.src = "./assets/images/form-photos/form-plages/plage-gb.jpg";
        break;
      }
      case "Une Plage en Italie": {
        imgPhoto.src = "./assets/images/form-photos/form-plages/plage-it.jpg";
        break;
      }
      case "Une Plage en Madagascar": {
        imgPhoto.src = "./assets/images/form-photos/form-plages/plage-mg.jpg";
        break;
      }
      case "Une Plage au Mexique": {
        imgPhoto.src = "./assets/images/form-photos/form-plages/plage-mx.jpg";
        break;
      }
      case "Une Plage en Nouvelle-Calédonie": {
        imgPhoto.src = "./assets/images/form-photos/form-plages/plage-nc.jpg";
        break;
      }
      case "Une Plage en Polynésie Française": {
        imgPhoto.src = "./assets/images/form-photos/form-plages/plage-pf.jpg";
        break;
      }
      case "Une Plage aux Sychelles": {
        imgPhoto.src = "./assets/images/form-photos/form-plages/plage-sc.jpg";
        break;
      }
      case "Une Plage en Thaïlande": {
        imgPhoto.src = "./assets/images/form-photos/form-plages/plage-th.jpg";
        break;
      }
    }

    switch (formPhoto.picture) {
      case "Une Ville au Chili": {
        imgPhoto.src = "./assets/images/form-photos/form-villes/ville-cl.jpg";
        break;
      }
      case "Une Ville en Chine": {
        imgPhoto.src = "./assets/images/form-photos/form-villes/ville-cn.jpg";
        break;
      }
      case "Une Ville en Colombie": {
        imgPhoto.src = "./assets/images/form-photos/form-villes/ville-co.jpg";
        break;
      }
      case "Une Ville en France": {
        imgPhoto.src = "./assets/images/form-photos/form-villes/ville-fr.jpg";
        break;
      }
      case "Une Ville en Grande-Bretagne": {
        imgPhoto.src = "./assets/images/form-photos/form-villes/ville-gb.jpg";
        break;
      }
      case "Une Ville au Japon (Jour)": {
        imgPhoto.src =
          "./assets/images/form-photos/form-villes/ville-jour-jp.jpg";
        break;
      }
      case "Une Ville en Koweït": {
        imgPhoto.src = "./assets/images/form-photos/form-villes/ville-kw.jpg";
        break;
      }
      case "Une Ville en Norvège": {
        imgPhoto.src = "./assets/images/form-photos/form-villes/ville-no.jpg";
        break;
      }
      case "Une Ville Rural d'Allemagne": {
        imgPhoto.src =
          "./assets/images/form-photos/form-villes/ville-rural-ge.jpg";
        break;
      }
      case "Une Ville d'Italie (Soir)": {
        imgPhoto.src =
          "./assets/images/form-photos/form-villes/ville-soir-it.jpg";
        break;
      }
    }
    return formPhotoContainer;
  });
  photosContainer.innerHTML = "";
  formPhotosElement.reverse();
  photosContainer.append(...formPhotosElement);
  displayHomePhotos();
};

const fetchFormPhotos = async () => {
  try {
    const response = await fetch("https://restapi.fr/api/photos");
    const formPhotos = await response.json();
    console.log(formPhotos);
    createFormPhotosElement(formPhotos);
  } catch (error) {
    console.log(("error : ", error));
  }
};
fetchFormPhotos();
////////////////////////////// form end //////////////////////////////
