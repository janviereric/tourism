import { async } from "regenerator-runtime";
import { homePhotosArray } from "./assets/javascripts/home-photos.js";
import "./assets/sass/styles.scss";
import "./index.scss";

const photosContainer = document.querySelector("#photos-container");
const categoriesMenu = document.querySelector("#categories-menu");
let filter;
let formPhotos;
let categoriesAll;

categoriesMenu.innerHTML = `
<li id="guide-menu"></li>
<li id="quete-menu"></li>
<li id="collection-menu"></li>
<li id="partage-menu"></li>
`;

const guideMenu = categoriesMenu.querySelector("#guide-menu");
const queteMenu = categoriesMenu.querySelector("#quete-menu");
const collectionMenu = categoriesMenu.querySelector("#collection-menu");
const partageMenu = categoriesMenu.querySelector("#partage-menu");

////////////////////////////// home start //////////////////////////////
const displayHomePhotos = async () => {
  try {
    const homePhotosElement = homePhotosArray
      .filter((homePhoto) => {
        if (filter) {
          return homePhoto.category === filter;
        } else {
          return true;
        }
      })
      .map((homePhoto, index) => {
        return createHomePhotosElement(homePhoto, index);
      });
    photosContainer.append(...homePhotosElement);
  } catch {
    location.assign("./index.html");
  }
};

const createHomePhotosElement = (homePhoto) => {
  const homePhotoContainer = document.createElement("div");
  homePhotoContainer.classList.add("home-photo-container");
  homePhotoContainer.innerHTML = `
  <img src="${homePhoto.photoSrc}" alt="${homePhoto.picture}" />
    <h2>${homePhoto.picture}</h2>
  `;
  const homePhotoImg = homePhotoContainer.querySelector("img");
  homePhotoImg.setAttribute("data-id", `${homePhoto._id}`);
  homePhotoContainer.addEventListener("click", (event) => {
    const target = event.target;
    const homePhotoId = target.dataset.id;
    location.assign(`./homedetail.html?id=${homePhotoId}`);
  });
  return homePhotoContainer;
};

const createMenuCategoriesHome = () => {
  const categoriesHome = homePhotosArray.reduce((acc, homePhoto) => {
    if (acc[homePhoto.category]) {
      acc[homePhoto.category]++;
    } else {
      acc[homePhoto.category] = 1;
    }
    return acc;
  }, {});
  guideMenu.innerText = `Guide (${categoriesHome.Guide})`;
  queteMenu.innerText = `Quête (${categoriesHome.Quête})`;
  collectionMenu.innerText = `Collection (${categoriesHome.Collection})`;
  partageMenu.innerText = `Partage (${categoriesHome.Partage})`;
};

createMenuCategoriesHome();
////////////////////////////// home start //////////////////////////////

////////////////////////////// form start //////////////////////////////
const createFormPhotosElement = () => {
  const formPhotosElement = formPhotos
    .filter((formPhoto) => {
      if (filter) {
        return formPhoto.category === filter;
      } else {
        return true;
      }
    })
    .map((formPhoto) => {
      const formPhotoContainer = document.createElement("div");
      formPhotoContainer.classList.add("form-photo-container");
      formPhotoContainer.innerHTML = `
    <img alt="${formPhoto.picture}" />
    <h2>${formPhoto.picture}</h2>`;
      const formPhotoImg = formPhotoContainer.querySelector("img");
      formPhotoImg.setAttribute("data-id", `${formPhoto._id}`);
      formPhotoContainer.addEventListener("click", (event) => {
        const target = event.target;
        const formPhotoId = target.dataset.id;
        location.assign(`./formdetail.html?id=${formPhotoId}`);
      });

      switch (formPhoto.picture) {
        case "Un Désert en Cisjordanie": {
          formPhotoImg.src =
            "./assets/images/form-photos/form-deserts/desert-cj.jpg";
          break;
        }
        case "Un Désert en Jordanie": {
          formPhotoImg.src =
            "./assets/images/form-photos/form-deserts/desert-jo.jpg";
          break;
        }
        case "Un Désert au Maroc": {
          formPhotoImg.src =
            "./assets/images/form-photos/form-deserts/desert-ma.jpg";
          break;
        }
        case "Un Désert en Namibie (Océan Atlantique)": {
          formPhotoImg.src =
            "./assets/images/form-photos/form-deserts/desert-oa-na.jpg";
          break;
        }
        case "Un Désert en Oman": {
          formPhotoImg.src =
            "./assets/images/form-photos/form-deserts/desert-om.jpg";
          break;
        }
        case "Un Désert au Pérou": {
          formPhotoImg.src =
            "./assets/images/form-photos/form-deserts/desert-pe.jpg";
          break;
        }
        case "Un Désert en Arabie Saoudite": {
          formPhotoImg.src =
            "./assets/images/form-photos/form-deserts/desert-sa.jpg";
          break;
        }
        case "Un Désert en Namibie (Sud-Ouest)": {
          formPhotoImg.src =
            "./assets/images/form-photos/form-deserts/desert-so-na.jpg";
          break;
        }
        case "Le Désert du Sahara (Soir)": {
          formPhotoImg.src =
            "./assets/images/form-photos/form-deserts/desert-soir-eh.jpg";
          break;
        }
        case "Sable Blanc du Nouveau-Mexique (USA)": {
          formPhotoImg.src =
            "./assets/images/form-photos/form-deserts/sable-blanc-nmex-us.jpg";
          break;
        }

        case "Une Forêt en Australie": {
          formPhotoImg.src =
            "./assets/images/form-photos/form-forets/foret-au.jpg";
          break;
        }
        case "Une Forêt au Canada": {
          formPhotoImg.src =
            "./assets/images/form-photos/form-forets/foret-ca.jpg";
          break;
        }
        case "Une Forêt en Finlande": {
          formPhotoImg.src =
            "./assets/images/form-photos/form-forets/foret-fi.jpg";
          break;
        }
        case "Une Forêt en Croatie": {
          formPhotoImg.src =
            "./assets/images/form-photos/form-forets/foret-hr.jpg";
          break;
        }
        case "Une Forêt en Inde": {
          formPhotoImg.src =
            "./assets/images/form-photos/form-forets/foret-in.jpg";
          break;
        }
        case "Une Forêt en Italie": {
          formPhotoImg.src =
            "./assets/images/form-photos/form-forets/foret-it.jpg";
          break;
        }
        case "Une Forêt au Japon": {
          formPhotoImg.src =
            "./assets/images/form-photos/form-forets/foret-jp.jpg";
          break;
        }
        case "La Forêt des Loups": {
          formPhotoImg.src =
            "./assets/images/form-photos/form-forets/foret-loups.jpg";
          break;
        }
        case "Une Forêt au Nouvelle-Zélande": {
          formPhotoImg.src =
            "./assets/images/form-photos/form-forets/foret-nz.jpg";
          break;
        }
        case "Une Forêt en Washington (USA)": {
          formPhotoImg.src =
            "./assets/images/form-photos/form-forets/foret-wash-us.jpg";
          break;
        }

        case "Une Plage en Australie": {
          formPhotoImg.src =
            "./assets/images/form-photos/form-plages/plage-au.jpg";
          break;
        }
        case "Une Plage au Brésil": {
          formPhotoImg.src =
            "./assets/images/form-photos/form-plages/plage-br.jpg";
          break;
        }
        case "Une Plage en Grande-Bretagne": {
          formPhotoImg.src =
            "./assets/images/form-photos/form-plages/plage-gb.jpg";
          break;
        }
        case "Une Plage en Italie": {
          formPhotoImg.src =
            "./assets/images/form-photos/form-plages/plage-it.jpg";
          break;
        }
        case "Une Plage en Madagascar": {
          formPhotoImg.src =
            "./assets/images/form-photos/form-plages/plage-mg.jpg";
          break;
        }
        case "Une Plage au Mexique": {
          formPhotoImg.src =
            "./assets/images/form-photos/form-plages/plage-mx.jpg";
          break;
        }
        case "Une Plage en Nouvelle-Calédonie": {
          formPhotoImg.src =
            "./assets/images/form-photos/form-plages/plage-nc.jpg";
          break;
        }
        case "Une Plage en Polynésie Française": {
          formPhotoImg.src =
            "./assets/images/form-photos/form-plages/plage-pf.jpg";
          break;
        }
        case "Une Plage aux Sychelles": {
          formPhotoImg.src =
            "./assets/images/form-photos/form-plages/plage-sc.jpg";
          break;
        }
        case "Une Plage en Thaïlande": {
          formPhotoImg.src =
            "./assets/images/form-photos/form-plages/plage-th.jpg";
          break;
        }

        case "Une Ville au Chili": {
          formPhotoImg.src =
            "./assets/images/form-photos/form-villes/ville-cl.jpg";
          break;
        }
        case "Une Ville en Chine": {
          formPhotoImg.src =
            "./assets/images/form-photos/form-villes/ville-cn.jpg";
          break;
        }
        case "Une Ville en Colombie": {
          formPhotoImg.src =
            "./assets/images/form-photos/form-villes/ville-co.jpg";
          break;
        }
        case "Une Ville en France": {
          formPhotoImg.src =
            "./assets/images/form-photos/form-villes/ville-fr.jpg";
          break;
        }
        case "Une Ville en Grande-Bretagne": {
          formPhotoImg.src =
            "./assets/images/form-photos/form-villes/ville-gb.jpg";
          break;
        }
        case "Une Ville au Japon (Jour)": {
          formPhotoImg.src =
            "./assets/images/form-photos/form-villes/ville-jour-jp.jpg";
          break;
        }
        case "Une Ville en Koweït": {
          formPhotoImg.src =
            "./assets/images/form-photos/form-villes/ville-kw.jpg";
          break;
        }
        case "Une Ville en Norvège": {
          formPhotoImg.src =
            "./assets/images/form-photos/form-villes/ville-no.jpg";
          break;
        }
        case "Une Ville Rural d'Allemagne": {
          formPhotoImg.src =
            "./assets/images/form-photos/form-villes/ville-rural-ge.jpg";
          break;
        }
        case "Une Ville d'Italie (Soir)": {
          formPhotoImg.src =
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
displayHomePhotos();

const createMenuCategories = () => {
  const categoriesHome = homePhotosArray.reduce((acc, homePhoto) => {
    if (acc[homePhoto.category]) {
      acc[homePhoto.category]++;
    } else {
      acc[homePhoto.category] = 1;
    }
    return acc;
  }, {});
  const categoriesForm = formPhotos.reduce((acc, formPhoto) => {
    if (acc[formPhoto.category]) {
      acc[formPhoto.category]++;
    } else {
      acc[formPhoto.category] = 1;
    }
    return acc;
  }, {});

  if (!categoriesForm.Guide) {
    guideMenu.innerHTML = `Guide (${categoriesHome.Guide})`;
  } else {
    categoriesAll = categoriesHome.Guide + categoriesForm.Guide;
    guideMenu.innerHTML = `Guide (${categoriesAll})`;
  }

  if (!categoriesForm.Quête) {
    queteMenu.innerHTML = `Quête (${categoriesHome.Quête})`;
  } else {
    categoriesAll = categoriesHome.Quête + categoriesForm.Quête;
    queteMenu.innerText = `Quête (${categoriesAll})`;
  }

  if (!categoriesForm.Collection) {
    collectionMenu.innerText = `Collection (${categoriesHome.Collection})`;
  } else {
    categoriesAll = categoriesHome.Collection + categoriesForm.Collection;
    collectionMenu.innerText = `Collection (${categoriesAll})`;
  }

  if (!categoriesForm.Partage) {
    partageMenu.innerText = `Partage (${categoriesHome.Partage})`;
  } else {
    categoriesAll = categoriesHome.Partage + categoriesForm.Partage;
    partageMenu.innerText = `Partage (${categoriesAll})`;
  }

  guideMenu.addEventListener("click", (event) => {
    event.stopPropagation();
    if (filter === "Guide") {
      filter = null;
      guideMenu.classList.remove("target-filter");
      queteMenu.classList.remove("target-filter");
      collectionMenu.classList.remove("target-filter");
      partageMenu.classList.remove("target-filter");
      createFormPhotosElement();
    } else {
      queteMenu.classList.remove("target-filter");
      collectionMenu.classList.remove("target-filter");
      partageMenu.classList.remove("target-filter");
      filter = "Guide";
      guideMenu.classList.add("target-filter");
      createFormPhotosElement();
    }
  });

  queteMenu.addEventListener("click", (event) => {
    event.stopPropagation();
    if (filter === "Quête") {
      filter = null;
      guideMenu.classList.remove("target-filter");
      queteMenu.classList.remove("target-filter");
      collectionMenu.classList.remove("target-filter");
      partageMenu.classList.remove("target-filter");
      createFormPhotosElement();
    } else {
      guideMenu.classList.remove("target-filter");
      collectionMenu.classList.remove("target-filter");
      partageMenu.classList.remove("target-filter");
      filter = "Quête";
      queteMenu.classList.add("target-filter");
      createFormPhotosElement();
    }
  });

  collectionMenu.addEventListener("click", (event) => {
    event.stopPropagation();
    if (filter === "Collection") {
      filter = null;
      guideMenu.classList.remove("target-filter");
      queteMenu.classList.remove("target-filter");
      collectionMenu.classList.remove("target-filter");
      partageMenu.classList.remove("target-filter");
      createFormPhotosElement();
    } else {
      guideMenu.classList.remove("target-filter");
      queteMenu.classList.remove("target-filter");
      partageMenu.classList.remove("target-filter");
      filter = "Collection";
      collectionMenu.classList.add("target-filter");
      createFormPhotosElement();
    }
  });

  partageMenu.addEventListener("click", (event) => {
    event.stopPropagation();
    if (filter === "Partage") {
      filter = null;
      guideMenu.classList.remove("target-filter");
      queteMenu.classList.remove("target-filter");
      collectionMenu.classList.remove("target-filter");
      partageMenu.classList.remove("target-filter");
      createFormPhotosElement();
    } else {
      guideMenu.classList.remove("target-filter");
      queteMenu.classList.remove("target-filter");
      collectionMenu.classList.remove("target-filter");
      filter = "Partage";
      partageMenu.classList.add("target-filter");
      createFormPhotosElement();
    }
  });
};

const fetchFormPhotos = async () => {
  try {
    const response = await fetch("https://restapi.fr/api/photos");
    formPhotos = await response.json();
    if (!Array.isArray(formPhotos)) {
      formPhotos = [formPhotos];
    }
    createFormPhotosElement();
    createMenuCategories();
  } catch (error) {
    console.error(("error : ", error));
  }
};
fetchFormPhotos();
////////////////////////////// form end //////////////////////////////
