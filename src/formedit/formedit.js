import "../assets/sass/styles.scss";
import "./formedit.scss";

import { usersArray, openModal } from "../assets/javascripts/link.js";

const params = new URL(location.href);
const photoId = params.searchParams.get("id");
const form = document.querySelector("form");
const buttonCancel = document.querySelector(".button-cancel");

const inputCategoryGuide = document.querySelector("#Guide");
const inputCategoryQuete = document.querySelector("#Quête");
const inputCategoryCollection = document.querySelector("#Collection");
const inputCategoryPartage = document.querySelector("#Partage");
const containerDescriptionCategory = document.querySelector(
  "#container-description-category"
);
const textDefinitionGuide = document.querySelector(".text-definition-guide");
const textDefinitionQuete = document.querySelector(".text-definition-quete");
const textDefinitionCollection = document.querySelector(
  ".text-definition-collection"
);
const textDefinitionPartage = document.querySelector(
  ".text-definition-partage"
);

const containerPhotographerLabelImg = document.querySelector(
  "#container-photographer-label-img"
);
const containerPhotographerImg = document.querySelector(
  "#container-photographer-img"
);
const containerPhotographerLabel = document.querySelector(
  "#container-photographer-label"
);
const containerDescriptionPhotographer = document.querySelector(
  "#container-description-photographer"
);
const selectPhotographer = document.querySelector(
  "select[name='photographer']"
);
containerPhotographerLabelImg.classList.add("container-photographer-label-img");
containerPhotographerImg.classList.add("container-user-img");
containerPhotographerLabel.classList.add("container-photographer-label");
selectPhotographer.classList.add("width-select-photographer");

const fillForm = (formPhoto) => {
  const picture = document.querySelector("select[name='picture']");
  const category = document.querySelector(
    `input[value='${formPhoto.category}']`
  );
  const photographer = document.querySelector("select[name='photographer']");
  const shallowContentValue = document.querySelector("#shallow-content-value");
  const content = document.querySelector("textarea");
  const selectOptionPicture = picture.querySelector(
    `optgroup > option[value = "${formPhoto.picture}"]`
  );
  const selectOptionPhotographer = photographer.querySelector(
    `optgroup > option[value = "${formPhoto.photographer}"]`
  );

  selectOptionPicture.setAttribute("selected", `${formPhoto.photo}`);
  category.value = formPhoto.category;
  category.setAttribute("checked", `${formPhoto.category}`);
  selectOptionPhotographer.setAttribute(
    "selected",
    `${formPhoto.photographer}`
  );

  shallowContentValue.innerHTML = `<p> ${formPhoto.content} <span>(Cliquez ici pour modifier le contenu textuel)</span></p>`;
  content.value = formPhoto.content;
  content.classList.add("off");
  shallowContentValue.addEventListener("click", (event) => {
    shallowContentValue.classList.add("off");
    content.classList.remove("off");
    content.focus();
    content.setSelectionRange(content.value.length, content.value.length);
  });

  switch (formPhoto.category) {
    case "Guide": {
      textDefinitionGuide.classList.remove("off");
      textDefinitionQuete.classList.add("off");
      textDefinitionCollection.classList.add("off");
      textDefinitionPartage.classList.add("off");
      containerDescriptionCategory.classList.add("text-definition-padding");
      containerDescriptionCategory.innerHTML = `<small class="input-category-definition"> <span>*</span>La catégorie <span>Guide</span> regroupe les photos prises lors d'un guide touristique. </small>`;
      break;
    }
    case "Quête": {
      textDefinitionQuete.classList.remove("off");
      textDefinitionGuide.classList.add("off");
      textDefinitionCollection.classList.add("off");
      textDefinitionPartage.classList.add("off");
      containerDescriptionCategory.classList.add("text-definition-padding");
      containerDescriptionCategory.innerHTML = `<small class="input-category-definition"> <span>*</span>La catégorie <span>Quête</span> regroupe les photos qui sont les résultat d'un objectif qui a été atteint. </small>`;
      break;
    }
    case "Collection": {
      textDefinitionCollection.classList.remove("off");
      textDefinitionGuide.classList.add("off");
      textDefinitionQuete.classList.add("off");
      textDefinitionPartage.classList.add("off");
      containerDescriptionCategory.classList.add("text-definition-padding");
      containerDescriptionCategory.innerHTML = `<small class="input-category-definition"> <span>*</span>La catégorie <span>Collection</span> regroupe les photos d'un moment inédit. </small>`;
      break;
    }
    case "Partage": {
      textDefinitionPartage.classList.remove("off");
      textDefinitionGuide.classList.add("off");
      textDefinitionQuete.classList.add("off");
      textDefinitionCollection.classList.add("off");
      containerDescriptionCategory.classList.add("text-definition-padding");
      containerDescriptionCategory.innerHTML = `<small class="input-category-definition"> <span>*</span>La catégorie <span>Partage</span> regroupe les photos qui sont neutres mais bon à montrer. </small>`;
      break;
    }
  }

  switch (formPhoto.photographer) {
    case "Gustave - L'Aventurier": {
      containerDescriptionPhotographer.innerHTML = `<p><span>${usersArray[0].photographer.slice(
        0,
        7
      )}</span> ${usersArray[0].profile} </p>`;
      break;
    }
    case "Julie - L'Aventurière": {
      containerDescriptionPhotographer.innerHTML = `<p><span>${usersArray[1].photographer.slice(
        0,
        5
      )}</span> ${usersArray[1].profile} </p>`;
      break;
    }
    case "Henry - L'Aventurier": {
      containerDescriptionPhotographer.innerHTML = `<p><span>${usersArray[2].photographer.slice(
        0,
        5
      )}</span> ${usersArray[2].profile} </p>`;
      break;
    }
    case "Zoé - L'Aventurière": {
      containerDescriptionPhotographer.innerHTML = `<p><span>${usersArray[3].photographer.slice(
        0,
        3
      )}</span> ${usersArray[3].profile} </p>`;
      break;
    }

    case "Flora - L'Exploratrice": {
      containerDescriptionPhotographer.innerHTML = `<p><span>${usersArray[4].photographer.slice(
        0,
        5
      )}</span> ${usersArray[4].profile} </p>`;
      break;
    }
    case "Denver - L'Explorateur": {
      containerDescriptionPhotographer.innerHTML = `<p><span>${usersArray[5].photographer.slice(
        0,
        6
      )}</span> ${usersArray[5].profile} </p>`;
      break;
    }
    case "Inaya - L'Exploratrice": {
      containerDescriptionPhotographer.innerHTML = `<p><span>${usersArray[6].photographer.slice(
        0,
        5
      )}</span> ${usersArray[6].profile}</p>`;
      break;
    }
    case "Seth - L'Explorateur": {
      containerDescriptionPhotographer.innerHTML = `<p><span>${usersArray[7].photographer.slice(
        0,
        4
      )}</span> ${usersArray[7].profile}</p>`;
      break;
    }

    case "Lance - Le Visiteur": {
      containerDescriptionPhotographer.innerHTML = `<p><span>${usersArray[8].photographer.slice(
        0,
        5
      )}</span> ${usersArray[8].profile}</p>`;
      break;
    }
    case "Nadia - La Visiteuse": {
      containerDescriptionPhotographer.innerHTML = `<p><span>${usersArray[9].photographer.slice(
        0,
        5
      )}</span> ${usersArray[9].profile}</p>`;

      break;
    }
    case "Xavier - Le Visiteur": {
      containerDescriptionPhotographer.innerHTML = `<p><span>${usersArray[10].photographer.slice(
        0,
        6
      )}</span> ${usersArray[10].profile}</p>`;
      break;
    }
    case "Ornella - La Visiteuse": {
      containerDescriptionPhotographer.innerHTML = `<p><span>${usersArray[11].photographer.slice(
        0,
        7
      )}</span> ${usersArray[11].profile}</p>`;
      break;
    }

    case "Cerise - La Voyageuse": {
      containerDescriptionPhotographer.innerHTML = `<p><span>${usersArray[12].photographer.slice(
        0,
        6
      )}</span> ${usersArray[12].profile}</p>`;
      break;
    }
    case "Philibert - Le Voyageur": {
      containerDescriptionPhotographer.innerHTML = `<p><span>${usersArray[13].photographer.slice(
        0,
        9
      )}</span> ${usersArray[13].profile}</p>`;
      break;
    }
    case "Roxane - La Voyageuse": {
      containerDescriptionPhotographer.innerHTML = `<p><span>${usersArray[14].photographer.slice(
        0,
        6
      )}</span> ${usersArray[14].profile}</p>`;
      break;
    }
    case "Yuu - Le Voyageur": {
      containerDescriptionPhotographer.innerHTML = `<p><span>${usersArray[15].photographer.slice(
        0,
        3
      )}</span> ${usersArray[15].profile}</p>`;
      break;
    }
  }
};

const initForm = async () => {
  if (photoId) {
    const response = await fetch(`https://restapi.fr/api/photos/${photoId}`);
    if (response.status < 300) {
      const formPhoto = await response.json();
      fillForm(formPhoto);
      const containerPhotoImg = document.querySelector("#container-photo-img");
      containerPhotoImg.innerHTML = `<img src="${formPhoto.picture}" alt="${formPhoto.picture}" />`;

      const formPhotoImg = containerPhotoImg.querySelector("img");
      switch (formPhoto.picture) {
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

      const selectPicture = document.querySelector("select[name='picture']");
      selectPicture.addEventListener("change", (event) => {
        const selectPictureName = event.target.value;
        switch (selectPictureName) {
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
      });

      inputCategoryGuide.addEventListener("input", (event) => {
        event.stopPropagation();
        textDefinitionGuide.classList.remove("off");
        textDefinitionQuete.classList.add("off");
        textDefinitionCollection.classList.add("off");
        textDefinitionPartage.classList.add("off");
        containerDescriptionCategory.classList.add("text-definition-padding");
        containerDescriptionCategory.innerHTML = `<small class="input-category-definition"> <span>*</span>La catégorie <span>Guide</span> regroupe les photos prises lors d'un guide touristique. </small>`;
      });

      inputCategoryQuete.addEventListener("click", (event) => {
        event.stopPropagation();
        textDefinitionQuete.classList.remove("off");
        textDefinitionGuide.classList.add("off");
        textDefinitionCollection.classList.add("off");
        textDefinitionPartage.classList.add("off");
        containerDescriptionCategory.classList.add("text-definition-padding");
        containerDescriptionCategory.innerHTML = `<small class="input-category-definition"> <span>*</span>La catégorie <span>Quête</span> regroupe les photos qui sont les résultat d'un objectif qui a été atteint. </small>`;
      });

      inputCategoryCollection.addEventListener("click", (event) => {
        event.stopPropagation();
        textDefinitionCollection.classList.remove("off");
        textDefinitionGuide.classList.add("off");
        textDefinitionQuete.classList.add("off");
        textDefinitionPartage.classList.add("off");
        containerDescriptionCategory.classList.add("text-definition-padding");
        containerDescriptionCategory.innerHTML = `<small class="input-category-definition"> <span>*</span>La catégorie <span>Collection</span> regroupe les photos d'un moment inédit. </small>`;
      });

      inputCategoryPartage.addEventListener("click", (event) => {
        event.stopPropagation();
        textDefinitionPartage.classList.remove("off");
        textDefinitionGuide.classList.add("off");
        textDefinitionQuete.classList.add("off");
        textDefinitionCollection.classList.add("off");
        containerDescriptionCategory.classList.add("text-definition-padding");
        containerDescriptionCategory.innerHTML = `<small class="input-category-definition"> <span>*</span>La catégorie <span>Partage</span> regroupe les photos qui sont neutres mais bon à montrer. </small>`;
      });

      const containerPhotographerImg = document.querySelector(
        "#container-photographer-img"
      );
      containerPhotographerImg.innerHTML = `<img src="${formPhoto.photographer}" alt="${formPhoto.photographer}"  />`;
      const formPhotographerImg = containerPhotographerImg.querySelector("img");
      switch (formPhoto.photographer) {
        case "Gustave - L'Aventurier": {
          formPhotographerImg.src =
            "./assets/images/users-small/users-aventure-small/gustave-aventurier-small.jpg";
          break;
        }
        case "Julie - L'Aventurière": {
          formPhotographerImg.src =
            "./assets/images/users-small/users-aventure-small/julie-aventuriere-small.jpg";
          break;
        }
        case "Henry - L'Aventurier": {
          formPhotographerImg.src =
            "./assets/images/users-small/users-aventure-small/henry-aventurier-small.jpg";
          break;
        }
        case "Zoé - L'Aventurière": {
          formPhotographerImg.src =
            "./assets/images/users-small/users-aventure-small/zoe-aventuriere-small.jpg";
          break;
        }

        case "Flora - L'Exploratrice": {
          formPhotographerImg.src =
            "./assets/images/users-small/users-exploration-small/flora-exploratrice-small.jpg";
          break;
        }
        case "Denver - L'Explorateur": {
          formPhotographerImg.src =
            "./assets/images/users-small/users-exploration-small/denver-explorateur-small.jpg";
          break;
        }
        case "Inaya - L'Exploratrice": {
          formPhotographerImg.src =
            "./assets/images/users-small/users-exploration-small/inaya-exploratrice-small.jpg";
          break;
        }
        case "Seth - L'Explorateur": {
          formPhotographerImg.src =
            "./assets/images/users-small/users-exploration-small/seth-explorateur-small.jpg";
          break;
        }

        case "Lance - Le Visiteur": {
          formPhotographerImg.src =
            "./assets/images/users-small/users-visite-small/lance-visiteur-small.jpg";
          break;
        }
        case "Nadia - La Visiteuse": {
          formPhotographerImg.src =
            "./assets/images/users-small/users-visite-small/nadia-visiteuse-small.jpg";
          break;
        }
        case "Xavier - Le Visiteur": {
          formPhotographerImg.src =
            "./assets/images/users-small/users-visite-small/xavier-visiteur-small.jpg";
          break;
        }
        case "Ornella - La Visiteuse": {
          formPhotographerImg.src =
            "./assets/images/users-small/users-visite-small/ornella-visiteuse-small.jpg";
          break;
        }

        case "Cerise - La Voyageuse": {
          formPhotographerImg.src =
            "./assets/images/users-small/users-voyage-small/cerise-voyageuse-small.jpg";
          break;
        }
        case "Philibert - Le Voyageur": {
          formPhotographerImg.src =
            "./assets/images/users-small/users-voyage-small/philibert-voyageur-small.jpg";
          break;
        }
        case "Roxane - La Voyageuse": {
          formPhotographerImg.src =
            "./assets/images/users-small/users-voyage-small/roxane-voyageuse-small.jpg";
          break;
        }
        case "Yuu - Le Voyageur": {
          formPhotographerImg.src =
            "./assets/images/users-small/users-voyage-small/yuu-voyageur-small.jpg";
          break;
        }
      }

      const selectPhotographer = document.querySelector(
        "select[name='photographer']"
      );
      selectPhotographer.addEventListener("change", (event) => {
        const selectPhotographerName = event.target.value;
        switch (selectPhotographerName) {
          case "Gustave - L'Aventurier": {
            formPhotographerImg.src =
              "./assets/images/users-small/users-aventure-small/gustave-aventurier-small.jpg";
            formPhotographerImg.alt = selectPhotographerName;
            containerDescriptionPhotographer.innerHTML = `<p><span>${usersArray[0].photographer.slice(
              0,
              7
            )}</span> ${usersArray[0].profile} </p>`;

            break;
          }
          case "Julie - L'Aventurière": {
            formPhotographerImg.src =
              "./assets/images/users-small/users-aventure-small/julie-aventuriere-small.jpg";
            formPhotographerImg.alt = selectPhotographerName;
            containerDescriptionPhotographer.innerHTML = `<p><span>${usersArray[1].photographer.slice(
              0,
              5
            )}</span> ${usersArray[1].profile} </p>`;
            break;
          }
          case "Henry - L'Aventurier": {
            formPhotographerImg.src =
              "./assets/images/users-small/users-aventure-small/henry-aventurier-small.jpg";
            formPhotographerImg.alt = selectPhotographerName;
            containerDescriptionPhotographer.innerHTML = `<p><span>${usersArray[2].photographer.slice(
              0,
              5
            )}</span> ${usersArray[2].profile} </p>`;
            break;
          }
          case "Zoé - L'Aventurière": {
            formPhotographerImg.src =
              "./assets/images/users-small/users-aventure-small/zoe-aventuriere-small.jpg";
            formPhotographerImg.alt = selectPhotographerName;
            containerDescriptionPhotographer.innerHTML = `<p><span>${usersArray[3].photographer.slice(
              0,
              3
            )}</span> ${usersArray[3].profile} </p>`;
            break;
          }

          case "Flora - L'Exploratrice": {
            formPhotographerImg.src =
              "./assets/images/users-small/users-exploration-small/flora-exploratrice-small.jpg";
            formPhotographerImg.alt = selectPhotographerName;
            containerDescriptionPhotographer.innerHTML = `<p><span>${usersArray[4].photographer.slice(
              0,
              5
            )}</span> ${usersArray[4].profile} </p>`;
            break;
          }
          case "Denver - L'Explorateur": {
            formPhotographerImg.src =
              "./assets/images/users-small/users-exploration-small/denver-explorateur-small.jpg";
            formPhotographerImg.alt = selectPhotographerName;
            containerDescriptionPhotographer.innerHTML = `<p><span>${usersArray[5].photographer.slice(
              0,
              6
            )}</span> ${usersArray[5].profile} </p>`;
            break;
          }
          case "Inaya - L'Exploratrice": {
            formPhotographerImg.src =
              "./assets/images/users-small/users-exploration-small/inaya-exploratrice-small.jpg";
            formPhotographerImg.alt = selectPhotographerName;
            containerDescriptionPhotographer.innerHTML = `<p><span>${usersArray[6].photographer.slice(
              0,
              5
            )}</span> ${usersArray[6].profile}</p>`;
            break;
          }
          case "Seth - L'Explorateur": {
            formPhotographerImg.src =
              "./assets/images/users-small/users-exploration-small/seth-explorateur-small.jpg";
            formPhotographerImg.alt = selectPhotographerName;
            containerDescriptionPhotographer.innerHTML = `<p><span>${usersArray[7].photographer.slice(
              0,
              4
            )}</span> ${usersArray[7].profile}</p>`;
            break;
          }

          case "Lance - Le Visiteur": {
            formPhotographerImg.src =
              "./assets/images/users-small/users-visite-small/lance-visiteur-small.jpg";
            formPhotographerImg.alt = selectPhotographerName;
            containerDescriptionPhotographer.innerHTML = `<p><span>${usersArray[8].photographer.slice(
              0,
              5
            )}</span> ${usersArray[8].profile}</p>`;
            break;
          }
          case "Nadia - La Visiteuse": {
            formPhotographerImg.src =
              "./assets/images/users-small/users-visite-small/nadia-visiteuse-small.jpg";
            formPhotographerImg.alt = selectPhotographerName;
            containerDescriptionPhotographer.innerHTML = `<p><span>${usersArray[9].photographer.slice(
              0,
              5
            )}</span> ${usersArray[9].profile}</p>`;
            break;
          }
          case "Xavier - Le Visiteur": {
            formPhotographerImg.src =
              "./assets/images/users-small/users-visite-small/xavier-visiteur-small.jpg";
            formPhotographerImg.alt = selectPhotographerName;
            containerDescriptionPhotographer.innerHTML = `<p><span>${usersArray[10].photographer.slice(
              0,
              6
            )}</span> ${usersArray[10].profile}</p>`;
            break;
          }
          case "Ornella - La Visiteuse": {
            formPhotographerImg.src =
              "./assets/images/users-small/users-visite-small/ornella-visiteuse-small.jpg";
            formPhotographerImg.alt = selectPhotographerName;
            containerDescriptionPhotographer.innerHTML = `<p><span>${usersArray[11].photographer.slice(
              0,
              7
            )}</span> ${usersArray[11].profile}</p>`;
            break;
          }

          case "Cerise - La Voyageuse": {
            formPhotographerImg.src =
              "./assets/images/users-small/users-voyage-small/cerise-voyageuse-small.jpg";
            formPhotographerImg.alt = selectPhotographerName;
            containerDescriptionPhotographer.innerHTML = `<p><span>${usersArray[12].photographer.slice(
              0,
              6
            )}</span> ${usersArray[12].profile}</p>`;
            break;
          }
          case "Philibert - Le Voyageur": {
            formPhotographerImg.src =
              "./assets/images/users-small/users-voyage-small/philibert-voyageur-small.jpg";
            formPhotographerImg.alt = selectPhotographerName;
            containerDescriptionPhotographer.innerHTML = `<p><span>${usersArray[13].photographer.slice(
              0,
              9
            )}</span> ${usersArray[13].profile}</p>`;
            break;
          }
          case "Roxane - La Voyageuse": {
            formPhotographerImg.src =
              "./assets/images/users-small/users-voyage-small/roxane-voyageuse-small.jpg";
            formPhotographerImg.alt = selectPhotographerName;
            containerDescriptionPhotographer.innerHTML = `<p><span>${usersArray[14].photographer.slice(
              0,
              6
            )}</span> ${usersArray[14].profile}</p>`;
            break;
          }
          case "Yuu - Le Voyageur": {
            formPhotographerImg.src =
              "./assets/images/users-small/users-voyage-small/yuu-voyageur-small.jpg";
            formPhotographerImg.alt = selectPhotographerName;
            containerDescriptionPhotographer.innerHTML = `<p><span>${usersArray[15].photographer.slice(
              0,
              3
            )}</span> ${usersArray[15].profile}</p>`;
            break;
          }
        }
      });
    }
  }
};

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const photo = Object.fromEntries(formData.entries());
  if (formIsValid(photo)) {
    try {
      if (photoId) {
        const json = JSON.stringify(photo);
        const response = await fetch(
          `https://restapi.fr/api/photos/${photoId}`,
          {
            method: "PUT",
            body: json,
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (response.status < 300) {
          location.assign("./index.html");
        }
      }
    } catch (error) {
      console.error("error : ", error);
    }
  }
});

buttonCancel.addEventListener("click", async (event) => {
  const result = await openModal(
    `Si vous <span class="text-detail">annuler</span>, la <span class="text-bold">Photo</span> ne sera pas <span class="text-bold">modifié</span>, voulez-vous poursuivre ?`
  );
  if (result === true) {
    event.stopPropagation();
    location.assign(`./formdetail.html?id=${photoId}`);
  }
});

const formIsValid = (photo) => {
  const textInfoContent = document.querySelector("#text-info-content");
  const textInfo = document.querySelector("#text-info");
  if (!photo.content) {
    if (!photo.content && photo.picture) {
      textInfoContent.innerHTML = "Veuillez partager votre avis.";
      setTimeout(() => {
        textInfoContent.innerHTML = "";
      }, 2000);
    }
    return false;
  } else {
    textInfo.innerHTML = "";
    return true;
  }
};

initForm();
