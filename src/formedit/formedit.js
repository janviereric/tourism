import "../assets/sass/styles.scss";
import "./formedit.scss";

const params = new URL(location.href);
const photoId = params.searchParams.get("id");
const form = document.querySelector("form");
const buttonCancel = document.querySelector(".button-cancel");
const textPictureColor = document.querySelector("#text-picture-color");
const textPictureStar = document.querySelector("#text-picture-star");
const textContentColor = document.querySelector("#text-content-color");
const textContentStar = document.querySelector("#text-content-star");

const fillForm = (formPhoto) => {
  const picture = document.querySelector("select[name='picture']");
  const category = document.querySelector(
    `input[value='${formPhoto.category}']`
  );
  const photographer = document.querySelector("select[name='photographer']");
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
  content.value = formPhoto.content;
};

const initForm = async () => {
  if (photoId) {
    const response = await fetch(`https://restapi.fr/api/photos/${photoId}`);
    if (response.status < 300) {
      const formPhoto = await response.json();
      fillForm(formPhoto);
      const containerNamePhoto = document.querySelector(
        "#container-name-photo"
      );
      containerNamePhoto.innerHTML = `<h3>${formPhoto.picture}</h3>`;
      const containerPhotoImg = document.querySelector("#container-photo-img");
      containerPhotoImg.innerHTML = `<img src="${formPhoto.picture}" alt="${formPhoto.picture}" />`;

      const formPhotoImg = containerPhotoImg.querySelector("img");
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

      const selectPicture = document.querySelector("select[name='picture']");
      selectPicture.addEventListener("change", (event) => {
        const selectPictureName = event.target.value;
        switch (selectPictureName) {
          case "Un Désert en Cisjordanie": {
            containerNamePhoto.innerHTML = `<h3>${selectPictureName}</h3>`;
            formPhotoImg.src =
              "./assets/images/form-photos/form-deserts/desert-cj.jpg";
            formPhotoImg.alt = selectPictureName;
            break;
          }
          case "Un Désert en Jordanie": {
            containerNamePhoto.innerHTML = `<h3>${selectPictureName}</h3>`;
            formPhotoImg.src =
              "./assets/images/form-photos/form-deserts/desert-jo.jpg";
            formPhotoImg.alt = selectPictureName;
            break;
          }
          case "Un Désert au Maroc": {
            containerNamePhoto.innerHTML = `<h3>${selectPictureName}</h3>`;
            formPhotoImg.src =
              "./assets/images/form-photos/form-deserts/desert-ma.jpg";
            formPhotoImg.alt = selectPictureName;
            break;
          }
          case "Un Désert en Namibie (Océan Atlantique)": {
            containerNamePhoto.innerHTML = `<h3>${selectPictureName}</h3>`;
            formPhotoImg.src =
              "./assets/images/form-photos/form-deserts/desert-oa-na.jpg";
            formPhotoImg.alt = selectPictureName;
            break;
          }
          case "Un Désert en Oman": {
            containerNamePhoto.innerHTML = `<h3>${selectPictureName}</h3>`;
            formPhotoImg.src =
              "./assets/images/form-photos/form-deserts/desert-om.jpg";
            formPhotoImg.alt = selectPictureName;
            break;
          }
          case "Un Désert au Pérou": {
            containerNamePhoto.innerHTML = `<h3>${selectPictureName}</h3>`;
            formPhotoImg.src =
              "./assets/images/form-photos/form-deserts/desert-pe.jpg";
            formPhotoImg.alt = selectPictureName;
            break;
          }
          case "Un Désert en Arabie Saoudite": {
            containerNamePhoto.innerHTML = `<h3>${selectPictureName}</h3>`;
            formPhotoImg.src =
              "./assets/images/form-photos/form-deserts/desert-sa.jpg";
            formPhotoImg.alt = selectPictureName;
            break;
          }
          case "Un Désert en Namibie (Sud-Ouest)": {
            containerNamePhoto.innerHTML = `<h3>${selectPictureName}</h3>`;
            formPhotoImg.src =
              "./assets/images/form-photos/form-deserts/desert-so-na.jpg";
            formPhotoImg.alt = selectPictureName;
            break;
          }
          case "Le Désert du Sahara (Soir)": {
            containerNamePhoto.innerHTML = `<h3>${selectPictureName}</h3>`;
            formPhotoImg.src =
              "./assets/images/form-photos/form-deserts/desert-soir-eh.jpg";
            formPhotoImg.alt = selectPictureName;
            break;
          }
          case "Sable Blanc du Nouveau-Mexique (USA)": {
            containerNamePhoto.innerHTML = `<h3>${selectPictureName}</h3>`;
            formPhotoImg.src =
              "./assets/images/form-photos/form-deserts/sable-blanc-nmex-us.jpg";
            formPhotoImg.alt = selectPictureName;
            break;
          }

          case "Une Forêt en Australie": {
            containerNamePhoto.innerHTML = `<h3>${selectPictureName}</h3>`;
            formPhotoImg.src =
              "./assets/images/form-photos/form-forets/foret-au.jpg";
            formPhotoImg.alt = selectPictureName;
            break;
          }
          case "Une Forêt au Canada": {
            containerNamePhoto.innerHTML = `<h3>${selectPictureName}</h3>`;
            formPhotoImg.src =
              "./assets/images/form-photos/form-forets/foret-ca.jpg";
            formPhotoImg.alt = selectPictureName;
            break;
          }
          case "Une Forêt en Finlande": {
            containerNamePhoto.innerHTML = `<h3>${selectPictureName}</h3>`;
            formPhotoImg.src =
              "./assets/images/form-photos/form-forets/foret-fi.jpg";
            formPhotoImg.alt = selectPictureName;
            break;
          }
          case "Une Forêt en Croatie": {
            containerNamePhoto.innerHTML = `<h3>${selectPictureName}</h3>`;
            formPhotoImg.src =
              "./assets/images/form-photos/form-forets/foret-hr.jpg";
            formPhotoImg.alt = selectPictureName;
            break;
          }
          case "Une Forêt en Inde": {
            containerNamePhoto.innerHTML = `<h3>${selectPictureName}</h3>`;
            formPhotoImg.src =
              "./assets/images/form-photos/form-forets/foret-in.jpg";
            formPhotoImg.alt = selectPictureName;
            break;
          }
          case "Une Forêt en Italie": {
            containerNamePhoto.innerHTML = `<h3>${selectPictureName}</h3>`;
            formPhotoImg.src =
              "./assets/images/form-photos/form-forets/foret-it.jpg";
            formPhotoImg.alt = selectPictureName;
            break;
          }
          case "Une Forêt au Japon": {
            containerNamePhoto.innerHTML = `<h3>${selectPictureName}</h3>`;
            formPhotoImg.src =
              "./assets/images/form-photos/form-forets/foret-jp.jpg";
            formPhotoImg.alt = selectPictureName;
            break;
          }
          case "La Forêt des Loups": {
            containerNamePhoto.innerHTML = `<h3>${selectPictureName}</h3>`;
            formPhotoImg.src =
              "./assets/images/form-photos/form-forets/foret-loups.jpg";
            formPhotoImg.alt = selectPictureName;
            break;
          }
          case "Une Forêt au Nouvelle-Zélande": {
            containerNamePhoto.innerHTML = `<h3>${selectPictureName}</h3>`;
            formPhotoImg.src =
              "./assets/images/form-photos/form-forets/foret-nz.jpg";
            formPhotoImg.alt = selectPictureName;
            break;
          }
          case "Une Forêt en Washington (USA)": {
            containerNamePhoto.innerHTML = `<h3>${selectPictureName}</h3>`;
            formPhotoImg.src =
              "./assets/images/form-photos/form-forets/foret-wash-us.jpg";
            formPhotoImg.alt = selectPictureName;
            break;
          }

          case "Une Plage en Australie": {
            containerNamePhoto.innerHTML = `<h3>${selectPictureName}</h3>`;
            formPhotoImg.src =
              "./assets/images/form-photos/form-plages/plage-au.jpg";
            formPhotoImg.alt = selectPictureName;
            break;
          }
          case "Une Plage au Brésil": {
            containerNamePhoto.innerHTML = `<h3>${selectPictureName}</h3>`;
            formPhotoImg.src =
              "./assets/images/form-photos/form-plages/plage-br.jpg";
            formPhotoImg.alt = selectPictureName;
            break;
          }
          case "Une Plage en Grande-Bretagne": {
            containerNamePhoto.innerHTML = `<h3>${selectPictureName}</h3>`;
            formPhotoImg.src =
              "./assets/images/form-photos/form-plages/plage-gb.jpg";
            formPhotoImg.alt = selectPictureName;
            break;
          }
          case "Une Plage en Italie": {
            containerNamePhoto.innerHTML = `<h3>${selectPictureName}</h3>`;
            formPhotoImg.src =
              "./assets/images/form-photos/form-plages/plage-it.jpg";
            formPhotoImg.alt = selectPictureName;
            break;
          }
          case "Une Plage en Madagascar": {
            containerNamePhoto.innerHTML = `<h3>${selectPictureName}</h3>`;
            formPhotoImg.src =
              "./assets/images/form-photos/form-plages/plage-mg.jpg";
            formPhotoImg.alt = selectPictureName;
            break;
          }
          case "Une Plage au Mexique": {
            containerNamePhoto.innerHTML = `<h3>${selectPictureName}</h3>`;
            formPhotoImg.src =
              "./assets/images/form-photos/form-plages/plage-mx.jpg";
            formPhotoImg.alt = selectPictureName;
            break;
          }
          case "Une Plage en Nouvelle-Calédonie": {
            containerNamePhoto.innerHTML = `<h3>${selectPictureName}</h3>`;
            formPhotoImg.src =
              "./assets/images/form-photos/form-plages/plage-nc.jpg";
            formPhotoImg.alt = selectPictureName;
            break;
          }
          case "Une Plage en Polynésie Française": {
            containerNamePhoto.innerHTML = `<h3>${selectPictureName}</h3>`;
            formPhotoImg.src =
              "./assets/images/form-photos/form-plages/plage-pf.jpg";
            formPhotoImg.alt = selectPictureName;
            break;
          }
          case "Une Plage aux Sychelles": {
            containerNamePhoto.innerHTML = `<h3>${selectPictureName}</h3>`;
            formPhotoImg.src =
              "./assets/images/form-photos/form-plages/plage-sc.jpg";
            formPhotoImg.alt = selectPictureName;
            break;
          }
          case "Une Plage en Thaïlande": {
            containerNamePhoto.innerHTML = `<h3>${selectPictureName}</h3>`;
            formPhotoImg.src =
              "./assets/images/form-photos/form-plages/plage-th.jpg";
            formPhotoImg.alt = selectPictureName;
            break;
          }

          case "Une Ville au Chili": {
            containerNamePhoto.innerHTML = `<h3>${selectPictureName}</h3>`;
            formPhotoImg.src =
              "./assets/images/form-photos/form-villes/ville-cl.jpg";
            formPhotoImg.alt = selectPictureName;
            break;
          }
          case "Une Ville en Chine": {
            containerNamePhoto.innerHTML = `<h3>${selectPictureName}</h3>`;
            formPhotoImg.src =
              "./assets/images/form-photos/form-villes/ville-cn.jpg";
            formPhotoImg.alt = selectPictureName;
            break;
          }
          case "Une Ville en Colombie": {
            containerNamePhoto.innerHTML = `<h3>${selectPictureName}</h3>`;
            formPhotoImg.src =
              "./assets/images/form-photos/form-villes/ville-co.jpg";
            formPhotoImg.alt = selectPictureName;
            break;
          }
          case "Une Ville en France": {
            containerNamePhoto.innerHTML = `<h3>${selectPictureName}</h3>`;
            formPhotoImg.src =
              "./assets/images/form-photos/form-villes/ville-fr.jpg";
            formPhotoImg.alt = selectPictureName;
            break;
          }
          case "Une Ville en Grande-Bretagne": {
            containerNamePhoto.innerHTML = `<h3>${selectPictureName}</h3>`;
            formPhotoImg.src =
              "./assets/images/form-photos/form-villes/ville-gb.jpg";
            formPhotoImg.alt = selectPictureName;
            break;
          }
          case "Une Ville au Japon (Jour)": {
            containerNamePhoto.innerHTML = `<h3>${selectPictureName}</h3>`;
            formPhotoImg.src =
              "./assets/images/form-photos/form-villes/ville-jour-jp.jpg";
            formPhotoImg.alt = selectPictureName;
            break;
          }
          case "Une Ville en Koweït": {
            containerNamePhoto.innerHTML = `<h3>${selectPictureName}</h3>`;
            formPhotoImg.src =
              "./assets/images/form-photos/form-villes/ville-kw.jpg";
            formPhotoImg.alt = selectPictureName;
            break;
          }
          case "Une Ville en Norvège": {
            containerNamePhoto.innerHTML = `<h3>${selectPictureName}</h3>`;
            formPhotoImg.src =
              "./assets/images/form-photos/form-villes/ville-no.jpg";
            formPhotoImg.alt = selectPictureName;
            break;
          }
          case "Une Ville Rural d'Allemagne": {
            containerNamePhoto.innerHTML = `<h3>${selectPictureName}</h3>`;
            formPhotoImg.src =
              "./assets/images/form-photos/form-villes/ville-rural-ge.jpg";
            formPhotoImg.alt = selectPictureName;
            break;
          }
          case "Une Ville d'Italie (Soir)": {
            containerNamePhoto.innerHTML = `<h3>${selectPictureName}</h3>`;
            formPhotoImg.src =
              "./assets/images/form-photos/form-villes/ville-soir-it.jpg";
            formPhotoImg.alt = selectPictureName;
            break;
          }
        }
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
            break;
          }
          case "Julie - L'Aventurière": {
            formPhotographerImg.src =
              "./assets/images/users-small/users-aventure-small/julie-aventuriere-small.jpg";
            formPhotographerImg.alt = selectPhotographerName;
            break;
          }
          case "Henry - L'Aventurier": {
            formPhotographerImg.src =
              "./assets/images/users-small/users-aventure-small/henry-aventurier-small.jpg";
            formPhotographerImg.alt = selectPhotographerName;
            break;
          }
          case "Zoé - L'Aventurière": {
            formPhotographerImg.src =
              "./assets/images/users-small/users-aventure-small/zoe-aventuriere-small.jpg";
            formPhotographerImg.alt = selectPhotographerName;
            break;
          }

          case "Flora - L'Exploratrice": {
            formPhotographerImg.src =
              "./assets/images/users-small/users-exploration-small/flora-exploratrice-small.jpg";
            formPhotographerImg.alt = selectPhotographerName;
            break;
          }
          case "Denver - L'Explorateur": {
            formPhotographerImg.src =
              "./assets/images/users-small/users-exploration-small/denver-explorateur-small.jpg";
            formPhotographerImg.alt = selectPhotographerName;
            break;
          }
          case "Inaya - L'Exploratrice": {
            formPhotographerImg.src =
              "./assets/images/users-small/users-exploration-small/inaya-exploratrice-small.jpg";
            formPhotographerImg.alt = selectPhotographerName;
            break;
          }
          case "Seth - L'Explorateur": {
            formPhotographerImg.src =
              "./assets/images/users-small/users-exploration-small/seth-explorateur-small.jpg";
            formPhotographerImg.alt = selectPhotographerName;
            break;
          }

          case "Lance - Le Visiteur": {
            formPhotographerImg.src =
              "./assets/images/users-small/users-visite-small/lance-visiteur-small.jpg";
            formPhotographerImg.alt = selectPhotographerName;
            break;
          }
          case "Nadia - La Visiteuse": {
            formPhotographerImg.src =
              "./assets/images/users-small/users-visite-small/nadia-visiteuse-small.jpg";
            formPhotographerImg.alt = selectPhotographerName;
            break;
          }
          case "Xavier - Le Visiteur": {
            formPhotographerImg.src =
              "./assets/images/users-small/users-visite-small/xavier-visiteur-small.jpg";
            formPhotographerImg.alt = selectPhotographerName;
            break;
          }
          case "Ornella - La Visiteuse": {
            formPhotographerImg.src =
              "./assets/images/users-small/users-visite-small/ornella-visiteuse-small.jpg";
            formPhotographerImg.alt = selectPhotographerName;
            break;
          }

          case "Cerise - La Voyageuse": {
            formPhotographerImg.src =
              "./assets/images/users-small/users-voyage-small/cerise-voyageuse-small.jpg";
            formPhotographerImg.alt = selectPhotographerName;
            break;
          }
          case "Philibert - Le Voyageur": {
            formPhotographerImg.src =
              "./assets/images/users-small/users-voyage-small/philibert-voyageur-small.jpg";
            formPhotographerImg.alt = selectPhotographerName;
            break;
          }
          case "Roxane - La Voyageuse": {
            formPhotographerImg.src =
              "./assets/images/users-small/users-voyage-small/roxane-voyageuse-small.jpg";
            formPhotographerImg.alt = selectPhotographerName;
            break;
          }
          case "Yuu - Le Voyageur": {
            formPhotographerImg.src =
              "./assets/images/users-small/users-voyage-small/yuu-voyageur-small.jpg";
            formPhotographerImg.alt = selectPhotographerName;
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

buttonCancel.addEventListener("click", (event) => {
  event.stopPropagation();
  location.assign(`./formdetail.html?id=${photoId}`);
});

const formIsValid = (photo) => {
  const textInfoPicture = document.querySelector("#text-info-picture");
  const textInfoContent = document.querySelector("#text-info-content");
  const textInfo = document.querySelector("#text-info");
  if (!photo.picture || !photo.content) {
    if (!photo.picture && photo.content) {
      textInfoPicture.innerHTML = "Veuillez selectionner une autre photo.";
      setTimeout(() => {
        textInfoPicture.innerHTML = "";
      }, 2000);
    }

    if (!photo.content && photo.picture) {
      textInfoContent.innerHTML = "Veuillez partager votre avis.";
      setTimeout(() => {
        textInfoContent.innerHTML = "";
      }, 2000);
    }

    if (!photo.picture && !photo.content) {
      textInfo.innerHTML = "* Vous devez renseigner ces champs.";
      textPictureColor.classList.add("text-danger");
      textContentColor.classList.add("text-danger");
      textPictureStar.innerHTML = "*";
      textPictureStar.classList.add("text-danger");
      textContentStar.innerHTML = "*";
      textContentStar.classList.add("text-danger");
      setTimeout(() => {
        textInfo.innerHTML = "";
        textPictureColor.classList.remove("text-danger");
        textContentColor.classList.remove("text-danger");
        textPictureStar.innerHTML = "";
        textPictureStar.classList.remove("text-danger");
        textContentStar.innerHTML = "";
        textContentStar.classList.remove("text-danger");
      }, 2000);
    }
    return false;
  } else {
    textInfo.innerHTML = "";
    return true;
  }
};

initForm();
