import "../assets/sass/styles.scss";
import "./editform.scss";

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
  const selectOptionPicture = picture.querySelector("select > option");
  const selectOptionPhotographer = photographer.querySelector(
    `optgroup > option[value = "${formPhoto.photographer}"]`
  );

  selectOptionPicture.setAttribute("selected", "");
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
      const containerInitPhoto = document.querySelector(
        "#container-init-photo"
      );
      containerInitPhoto.innerHTML = `<img src="${formPhoto.picture}" alt="${formPhoto.picture}" />`;

      const formPhotoInitImg = containerInitPhoto.querySelector("img");
      switch (formPhoto.picture) {
        case "Un Désert en Cisjordanie": {
          formPhotoInitImg.src =
            "./assets/images/form-photos/form-deserts/desert-cj.jpg";
          break;
        }
        case "Un Désert en Jordanie": {
          formPhotoInitImg.src =
            "./assets/images/form-photos/form-deserts/desert-jo.jpg";
          break;
        }
        case "Un Désert au Maroc": {
          formPhotoInitImg.src =
            "./assets/images/form-photos/form-deserts/desert-ma.jpg";
          break;
        }
        case "Un Désert en Namibie (Océan Atlantique)": {
          formPhotoInitImg.src =
            "./assets/images/form-photos/form-deserts/desert-oa-na.jpg";
          break;
        }
        case "Un Désert en Oman": {
          formPhotoInitImg.src =
            "./assets/images/form-photos/form-deserts/desert-om.jpg";
          break;
        }
        case "Un Désert au Pérou": {
          formPhotoInitImg.src =
            "./assets/images/form-photos/form-deserts/desert-pe.jpg";
          break;
        }
        case "Un Désert en Arabie Saoudite": {
          formPhotoInitImg.src =
            "./assets/images/form-photos/form-deserts/desert-sa.jpg";
          break;
        }
        case "Un Désert en Namibie (Sud-Ouest)": {
          formPhotoInitImg.src =
            "./assets/images/form-photos/form-deserts/desert-so-na.jpg";
          break;
        }
        case "Le Désert du Sahara (Soir)": {
          formPhotoInitImg.src =
            "./assets/images/form-photos/form-deserts/desert-soir-eh.jpg";
          break;
        }
        case "Sable Blanc du Nouveau-Mexique (USA)": {
          formPhotoInitImg.src =
            "./assets/images/form-photos/form-deserts/sable-blanc-nmex-us.jpg";
          break;
        }

        case "Une Forêt en Australie": {
          formPhotoInitImg.src =
            "./assets/images/form-photos/form-forets/foret-au.jpg";
          break;
        }
        case "Une Forêt au Canada": {
          formPhotoInitImg.src =
            "./assets/images/form-photos/form-forets/foret-ca.jpg";
          break;
        }
        case "Une Forêt en Finlande": {
          formPhotoInitImg.src =
            "./assets/images/form-photos/form-forets/foret-fi.jpg";
          break;
        }
        case "Une Forêt en Croatie": {
          formPhotoInitImg.src =
            "./assets/images/form-photos/form-forets/foret-hr.jpg";
          break;
        }
        case "Une Forêt en Inde": {
          formPhotoInitImg.src =
            "./assets/images/form-photos/form-forets/foret-in.jpg";
          break;
        }
        case "Une Forêt en Italie": {
          formPhotoInitImg.src =
            "./assets/images/form-photos/form-forets/foret-it.jpg";
          break;
        }
        case "Une Forêt au Japon": {
          formPhotoInitImg.src =
            "./assets/images/form-photos/form-forets/foret-jp.jpg";
          break;
        }
        case "La Forêt des Loups": {
          formPhotoInitImg.src =
            "./assets/images/form-photos/form-forets/foret-loups.jpg";
          break;
        }
        case "Une Forêt au Nouvelle-Zélande": {
          formPhotoInitImg.src =
            "./assets/images/form-photos/form-forets/foret-nz.jpg";
          break;
        }
        case "Une Forêt en Washington (USA)": {
          formPhotoInitImg.src =
            "./assets/images/form-photos/form-forets/foret-wash-us.jpg";
          break;
        }

        case "Une Plage en Australie": {
          formPhotoInitImg.src =
            "./assets/images/form-photos/form-plages/plage-au.jpg";
          break;
        }
        case "Une Plage au Brésil": {
          formPhotoInitImg.src =
            "./assets/images/form-photos/form-plages/plage-br.jpg";
          break;
        }
        case "Une Plage en Grande-Bretagne": {
          formPhotoInitImg.src =
            "./assets/images/form-photos/form-plages/plage-gb.jpg";
          break;
        }
        case "Une Plage en Italie": {
          formPhotoInitImg.src =
            "./assets/images/form-photos/form-plages/plage-it.jpg";
          break;
        }
        case "Une Plage en Madagascar": {
          formPhotoInitImg.src =
            "./assets/images/form-photos/form-plages/plage-mg.jpg";
          break;
        }
        case "Une Plage au Mexique": {
          formPhotoInitImg.src =
            "./assets/images/form-photos/form-plages/plage-mx.jpg";
          break;
        }
        case "Une Plage en Nouvelle-Calédonie": {
          formPhotoInitImg.src =
            "./assets/images/form-photos/form-plages/plage-nc.jpg";
          break;
        }
        case "Une Plage en Polynésie Française": {
          formPhotoInitImg.src =
            "./assets/images/form-photos/form-plages/plage-pf.jpg";
          break;
        }
        case "Une Plage aux Sychelles": {
          formPhotoInitImg.src =
            "./assets/images/form-photos/form-plages/plage-sc.jpg";
          break;
        }
        case "Une Plage en Thaïlande": {
          formPhotoInitImg.src =
            "./assets/images/form-photos/form-plages/plage-th.jpg";
          break;
        }

        case "Une Ville au Chili": {
          formPhotoInitImg.src =
            "./assets/images/form-photos/form-villes/ville-cl.jpg";
          break;
        }
        case "Une Ville en Chine": {
          formPhotoInitImg.src =
            "./assets/images/form-photos/form-villes/ville-cn.jpg";
          break;
        }
        case "Une Ville en Colombie": {
          formPhotoInitImg.src =
            "./assets/images/form-photos/form-villes/ville-co.jpg";
          break;
        }
        case "Une Ville en France": {
          formPhotoInitImg.src =
            "./assets/images/form-photos/form-villes/ville-fr.jpg";
          break;
        }
        case "Une Ville en Grande-Bretagne": {
          formPhotoInitImg.src =
            "./assets/images/form-photos/form-villes/ville-gb.jpg";
          break;
        }
        case "Une Ville au Japon (Jour)": {
          formPhotoInitImg.src =
            "./assets/images/form-photos/form-villes/ville-jour-jp.jpg";
          break;
        }
        case "Une Ville en Koweït": {
          formPhotoInitImg.src =
            "./assets/images/form-photos/form-villes/ville-kw.jpg";
          break;
        }
        case "Une Ville en Norvège": {
          formPhotoInitImg.src =
            "./assets/images/form-photos/form-villes/ville-no.jpg";
          break;
        }
        case "Une Ville Rural d'Allemagne": {
          formPhotoInitImg.src =
            "./assets/images/form-photos/form-villes/ville-rural-ge.jpg";
          break;
        }
        case "Une Ville d'Italie (Soir)": {
          formPhotoInitImg.src =
            "./assets/images/form-photos/form-villes/ville-soir-it.jpg";
          break;
        }
      }

      const containerEditPhoto = document.querySelector(
        "#container-edit-photo"
      );
      containerEditPhoto.innerHTML = `<img src="${formPhoto.picture}" alt="${formPhoto.picture}" class="photo-img-none"/>`;
      const formPhotoImg = containerEditPhoto.querySelector("img");
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
      const containerPhotoLabelImg = document.querySelector(
        "#container-photo-label-img"
      );
      const containerPhotoLabel = document.querySelector(
        "#container-photo-label"
      );
      containerPhotoLabelImg.classList.remove("container-photo-label-img");
      containerPhotoLabel.classList.add("flex-column");
      containerPhotoLabel.classList.remove("container-photo-laber");
      const selectPicture = document.querySelector("select[name='picture']");
      const selectOptionPicture = selectPicture.querySelector(
        `optgroup > option[value = "${formPhoto.picture}"]`
      );
      selectOptionPicture.setAttribute("disabled", "");
      selectPicture.addEventListener("change", (event) => {
        containerPhotoLabelImg.classList.add("container-photo-label-img");
        containerPhotoLabel.classList.remove("flex-column");
        containerPhotoLabel.classList.add("container-photo-laber");
        const selectPictureName = event.target.value;
        switch (selectPictureName) {
          case "": {
            containerPhotoLabelImg.classList.remove(
              "container-photo-label-img"
            );
            containerPhotoLabel.classList.add("flex-column");
            containerPhotoLabel.classList.remove("container-photo-laber");
            formPhotoImg.classList.add("photo-img-none");
            formPhotoImg.classList.remove("photo-img-center");
            formPhotoImg.src = "";
            break;
          }
          case "Un Désert en Cisjordanie": {
            formPhotoImg.classList.remove("photo-img-none");
            formPhotoImg.classList.add("photo-img-center");
            formPhotoImg.src =
              "./assets/images/form-photos/form-deserts/desert-cj.jpg";
            break;
          }
          case "Un Désert en Jordanie": {
            formPhotoImg.classList.remove("photo-img-none");
            formPhotoImg.classList.add("photo-img-center");
            formPhotoImg.src =
              "./assets/images/form-photos/form-deserts/desert-jo.jpg";
            break;
          }
          case "Un Désert au Maroc": {
            formPhotoImg.classList.remove("photo-img-none");
            formPhotoImg.classList.add("photo-img-center");
            formPhotoImg.src =
              "./assets/images/form-photos/form-deserts/desert-ma.jpg";
            break;
          }
          case "Un Désert en Namibie (Océan Atlantique)": {
            formPhotoImg.classList.remove("photo-img-none");
            formPhotoImg.classList.add("photo-img-center");
            formPhotoImg.src =
              "./assets/images/form-photos/form-deserts/desert-oa-na.jpg";
            break;
          }
          case "Un Désert en Oman": {
            formPhotoImg.classList.remove("photo-img-none");
            formPhotoImg.classList.add("photo-img-center");
            formPhotoImg.src =
              "./assets/images/form-photos/form-deserts/desert-om.jpg";
            break;
          }
          case "Un Désert au Pérou": {
            formPhotoImg.classList.remove("photo-img-none");
            formPhotoImg.classList.add("photo-img-center");
            formPhotoImg.src =
              "./assets/images/form-photos/form-deserts/desert-pe.jpg";
            break;
          }
          case "Un Désert en Arabie Saoudite": {
            formPhotoImg.classList.remove("photo-img-none");
            formPhotoImg.classList.add("photo-img-center");
            formPhotoImg.src =
              "./assets/images/form-photos/form-deserts/desert-sa.jpg";
            break;
          }
          case "Un Désert en Namibie (Sud-Ouest)": {
            formPhotoImg.classList.remove("photo-img-none");
            formPhotoImg.classList.add("photo-img-center");
            formPhotoImg.src =
              "./assets/images/form-photos/form-deserts/desert-so-na.jpg";
            break;
          }
          case "Le Désert du Sahara (Soir)": {
            formPhotoImg.classList.remove("photo-img-none");
            formPhotoImg.classList.add("photo-img-center");
            formPhotoImg.src =
              "./assets/images/form-photos/form-deserts/desert-soir-eh.jpg";
            break;
          }
          case "Sable Blanc du Nouveau-Mexique (USA)": {
            formPhotoImg.classList.remove("photo-img-none");
            formPhotoImg.classList.add("photo-img-center");
            formPhotoImg.src =
              "./assets/images/form-photos/form-deserts/sable-blanc-nmex-us.jpg";
            break;
          }

          case "Une Forêt en Australie": {
            formPhotoImg.classList.remove("photo-img-none");
            formPhotoImg.classList.add("photo-img-center");
            formPhotoImg.src =
              "./assets/images/form-photos/form-forets/foret-au.jpg";
            break;
          }
          case "Une Forêt au Canada": {
            formPhotoImg.classList.remove("photo-img-none");
            formPhotoImg.classList.add("photo-img-center");
            formPhotoImg.src =
              "./assets/images/form-photos/form-forets/foret-ca.jpg";
            break;
          }
          case "Une Forêt en Finlande": {
            formPhotoImg.classList.remove("photo-img-none");
            formPhotoImg.classList.add("photo-img-center");
            formPhotoImg.src =
              "./assets/images/form-photos/form-forets/foret-fi.jpg";
            break;
          }
          case "Une Forêt en Croatie": {
            formPhotoImg.classList.remove("photo-img-none");
            formPhotoImg.classList.add("photo-img-center");
            formPhotoImg.src =
              "./assets/images/form-photos/form-forets/foret-hr.jpg";
            break;
          }
          case "Une Forêt en Inde": {
            formPhotoImg.classList.remove("photo-img-none");
            formPhotoImg.classList.add("photo-img-center");
            formPhotoImg.src =
              "./assets/images/form-photos/form-forets/foret-in.jpg";
            break;
          }
          case "Une Forêt en Italie": {
            formPhotoImg.classList.remove("photo-img-none");
            formPhotoImg.classList.add("photo-img-center");
            formPhotoImg.src =
              "./assets/images/form-photos/form-forets/foret-it.jpg";
            break;
          }
          case "Une Forêt au Japon": {
            formPhotoImg.classList.remove("photo-img-none");
            formPhotoImg.classList.add("photo-img-center");
            formPhotoImg.src =
              "./assets/images/form-photos/form-forets/foret-jp.jpg";
            break;
          }
          case "La Forêt des Loups": {
            formPhotoImg.classList.remove("photo-img-none");
            formPhotoImg.classList.add("photo-img-center");
            formPhotoImg.src =
              "./assets/images/form-photos/form-forets/foret-loups.jpg";
            break;
          }
          case "Une Forêt au Nouvelle-Zélande": {
            formPhotoImg.classList.remove("photo-img-none");
            formPhotoImg.classList.add("photo-img-center");
            formPhotoImg.src =
              "./assets/images/form-photos/form-forets/foret-nz.jpg";
            break;
          }
          case "Une Forêt en Washington (USA)": {
            formPhotoImg.classList.remove("photo-img-none");
            formPhotoImg.classList.add("photo-img-center");
            formPhotoImg.src =
              "./assets/images/form-photos/form-forets/foret-wash-us.jpg";
            break;
          }

          case "Une Plage en Australie": {
            formPhotoImg.classList.remove("photo-img-none");
            formPhotoImg.classList.add("photo-img-center");
            formPhotoImg.src =
              "./assets/images/form-photos/form-plages/plage-au.jpg";
            break;
          }
          case "Une Plage au Brésil": {
            formPhotoImg.classList.remove("photo-img-none");
            formPhotoImg.classList.add("photo-img-center");
            formPhotoImg.src =
              "./assets/images/form-photos/form-plages/plage-br.jpg";
            break;
          }
          case "Une Plage en Grande-Bretagne": {
            formPhotoImg.classList.remove("photo-img-none");
            formPhotoImg.classList.add("photo-img-center");
            formPhotoImg.src =
              "./assets/images/form-photos/form-plages/plage-gb.jpg";
            break;
          }
          case "Une Plage en Italie": {
            formPhotoImg.classList.remove("photo-img-none");
            formPhotoImg.classList.add("photo-img-center");
            formPhotoImg.src =
              "./assets/images/form-photos/form-plages/plage-it.jpg";
            break;
          }
          case "Une Plage en Madagascar": {
            formPhotoImg.classList.remove("photo-img-none");
            formPhotoImg.classList.add("photo-img-center");
            formPhotoImg.src =
              "./assets/images/form-photos/form-plages/plage-mg.jpg";
            break;
          }
          case "Une Plage au Mexique": {
            formPhotoImg.classList.remove("photo-img-none");
            formPhotoImg.classList.add("photo-img-center");
            formPhotoImg.src =
              "./assets/images/form-photos/form-plages/plage-mx.jpg";
            break;
          }
          case "Une Plage en Nouvelle-Calédonie": {
            formPhotoImg.classList.remove("photo-img-none");
            formPhotoImg.classList.add("photo-img-center");
            formPhotoImg.src =
              "./assets/images/form-photos/form-plages/plage-nc.jpg";
            break;
          }
          case "Une Plage en Polynésie Française": {
            formPhotoImg.classList.remove("photo-img-none");
            formPhotoImg.classList.add("photo-img-center");
            formPhotoImg.src =
              "./assets/images/form-photos/form-plages/plage-pf.jpg";
            break;
          }
          case "Une Plage aux Sychelles": {
            formPhotoImg.classList.remove("photo-img-none");
            formPhotoImg.classList.add("photo-img-center");
            formPhotoImg.src =
              "./assets/images/form-photos/form-plages/plage-sc.jpg";
            break;
          }
          case "Une Plage en Thaïlande": {
            formPhotoImg.classList.remove("photo-img-none");
            formPhotoImg.classList.add("photo-img-center");
            formPhotoImg.src =
              "./assets/images/form-photos/form-plages/plage-th.jpg";
            break;
          }

          case "Une Ville au Chili": {
            formPhotoImg.classList.remove("photo-img-none");
            formPhotoImg.classList.add("photo-img-center");
            formPhotoImg.src =
              "./assets/images/form-photos/form-villes/ville-cl.jpg";
            break;
          }
          case "Une Ville en Chine": {
            formPhotoImg.classList.remove("photo-img-none");
            formPhotoImg.classList.add("photo-img-center");
            formPhotoImg.src =
              "./assets/images/form-photos/form-villes/ville-cn.jpg";
            break;
          }
          case "Une Ville en Colombie": {
            formPhotoImg.classList.remove("photo-img-none");
            formPhotoImg.classList.add("photo-img-center");
            formPhotoImg.src =
              "./assets/images/form-photos/form-villes/ville-co.jpg";
            break;
          }
          case "Une Ville en France": {
            formPhotoImg.classList.remove("photo-img-none");
            formPhotoImg.classList.add("photo-img-center");
            formPhotoImg.src =
              "./assets/images/form-photos/form-villes/ville-fr.jpg";
            break;
          }
          case "Une Ville en Grande-Bretagne": {
            formPhotoImg.classList.remove("photo-img-none");
            formPhotoImg.classList.add("photo-img-center");
            formPhotoImg.src =
              "./assets/images/form-photos/form-villes/ville-gb.jpg";
            break;
          }
          case "Une Ville au Japon (Jour)": {
            formPhotoImg.classList.remove("photo-img-none");
            formPhotoImg.classList.add("photo-img-center");
            formPhotoImg.src =
              "./assets/images/form-photos/form-villes/ville-jour-jp.jpg";
            break;
          }
          case "Une Ville en Koweït": {
            formPhotoImg.classList.remove("photo-img-none");
            formPhotoImg.classList.add("photo-img-center");
            formPhotoImg.src =
              "./assets/images/form-photos/form-villes/ville-kw.jpg";
            break;
          }
          case "Une Ville en Norvège": {
            formPhotoImg.classList.remove("photo-img-none");
            formPhotoImg.classList.add("photo-img-center");
            formPhotoImg.src =
              "./assets/images/form-photos/form-villes/ville-no.jpg";
            break;
          }
          case "Une Ville Rural d'Allemagne": {
            formPhotoImg.classList.remove("photo-img-none");
            formPhotoImg.classList.add("photo-img-center");
            formPhotoImg.src =
              "./assets/images/form-photos/form-villes/ville-rural-ge.jpg";
            break;
          }
          case "Une Ville d'Italie (Soir)": {
            formPhotoImg.classList.remove("photo-img-none");
            formPhotoImg.classList.add("photo-img-center");
            formPhotoImg.src =
              "./assets/images/form-photos/form-villes/ville-soir-it.jpg";
            break;
          }
        }
      });
      const containerPhotographerImg = document.querySelector(
        "#container-photographer-img"
      );
      containerPhotographerImg.innerHTML = `<img src="${formPhoto.photographer}" alt="${formPhoto.photographer}" class="photo-img-none" />`;
      const formPhotographerImg = containerPhotographerImg.querySelector("img");
      switch (formPhoto.photographer) {
        case "Gustave - L'Aventurier": {
          formPhotographerImg.src =
            "./assets/images/form-users/users-aventure/gustave-aventurier.jpg";
          break;
        }
        case "Julie - L'Aventurière": {
          formPhotographerImg.src =
            "./assets/images/form-users/users-aventure/julie-aventuriere.jpg";
          break;
        }
        case "Henry - L'Aventurier": {
          formPhotographerImg.src =
            "./assets/images/form-users/users-aventure/henry-aventurier.jpg";
          break;
        }
        case "Zoé - L'Aventurière": {
          formPhotographerImg.src =
            "./assets/images/form-users/users-aventure/zoe-aventuriere.jpg";
          break;
        }

        case "Flora - L'Exploratrice": {
          formPhotographerImg.src =
            "./assets/images/form-users/users-exploration/flora-exploratrice.jpg";
          break;
        }
        case "Denver - L'Explorateur": {
          formPhotographerImg.src =
            "./assets/images/form-users/users-exploration/denver-explorateur.jpg";
          break;
        }
        case "Inaya - L'Exploratrice": {
          formPhotographerImg.src =
            "./assets/images/form-users/users-exploration/inaya-exploratrice.jpg";
          break;
        }
        case "Seth - L'Explorateur": {
          formPhotographerImg.src =
            "./assets/images/form-users/users-exploration/seth-explorateur.jpg";
          break;
        }

        case "Lance - Le Visiteur": {
          formPhotographerImg.src =
            "./assets/images/form-users/users-visite/lance-visiteur.jpg";
          break;
        }
        case "Nadia - La Visiteuse": {
          formPhotographerImg.src =
            "./assets/images/form-users/users-visite/nadia-visiteuse.jpg";
          break;
        }
        case "Xavier - Le Visiteur": {
          formPhotographerImg.src =
            "./assets/images/form-users/users-visite/xavier-visiteur.jpg";
          break;
        }
        case "Ornella - La Visiteuse": {
          formPhotographerImg.src =
            "./assets/images/form-users/users-visite/ornella-visiteuse.jpg";
          break;
        }

        case "Cerise - La Voyageuse": {
          formPhotographerImg.src =
            "./assets/images/form-users/users-voyage/cerise-voyageuse.jpg";
          break;
        }
        case "Philibert - Le Voyageur": {
          formPhotographerImg.src =
            "./assets/images/form-users/users-voyage/philibert-voyageur.jpg";
          break;
        }
        case "Roxane - La Voyageuse": {
          formPhotographerImg.src =
            "./assets/images/form-users/users-voyage/roxane-voyageuse.jpg";
          break;
        }
        case "Yuu - Le Voyageur": {
          formPhotographerImg.src =
            "./assets/images/form-users/users-voyage/yuu-voyageur.jpg";
          break;
        }
      }
      const containerPhotographerLabelImg = document.querySelector(
        "#container-photographer-label-img"
      );
      const containerPhotographerLabel = document.querySelector(
        "#container-photographer-label"
      );
      containerPhotographerLabelImg.classList.remove(
        "container-photographer-label-img"
      );
      containerPhotographerLabel.classList.add("flex-column");
      containerPhotographerLabel.classList.remove(
        "container-photographer-laber"
      );
      const selectPhotographer = document.querySelector(
        "select[name='photographer']"
      );
      selectPhotographer.addEventListener("change", (event) => {
        containerPhotographerLabelImg.classList.add(
          "container-photographer-label-img"
        );
        containerPhotographerLabel.classList.remove("flex-column");
        containerPhotographerLabel.classList.add(
          "container-photographer-label"
        );
        const selectPhotographerName = event.target.value;
        switch (selectPhotographerName) {
          case "Gustave - L'Aventurier": {
            formPhotographerImg.classList.remove("photo-img-none");
            formPhotographerImg.classList.add("photo-img-center");
            formPhotographerImg.src =
              "./assets/images/form-users/users-aventure/gustave-aventurier.jpg";
            break;
          }
          case "Julie - L'Aventurière": {
            formPhotographerImg.classList.remove("photo-img-none");
            formPhotographerImg.classList.add("photo-img-center");
            formPhotographerImg.src =
              "./assets/images/form-users/users-aventure/julie-aventuriere.jpg";
            break;
          }
          case "Henry - L'Aventurier": {
            formPhotographerImg.classList.remove("photo-img-none");
            formPhotographerImg.classList.add("photo-img-center");
            formPhotographerImg.src =
              "./assets/images/form-users/users-aventure/henry-aventurier.jpg";
            break;
          }
          case "Zoé - L'Aventurière": {
            formPhotographerImg.classList.remove("photo-img-none");
            formPhotographerImg.classList.add("photo-img-center");
            formPhotographerImg.src =
              "./assets/images/form-users/users-aventure/zoe-aventuriere.jpg";
            break;
          }

          case "Flora - L'Exploratrice": {
            formPhotographerImg.classList.remove("photo-img-none");
            formPhotographerImg.classList.add("photo-img-center");
            formPhotographerImg.src =
              "./assets/images/form-users/users-exploration/flora-exploratrice.jpg";
            break;
          }
          case "Denver - L'Explorateur": {
            formPhotographerImg.classList.remove("photo-img-none");
            formPhotographerImg.classList.add("photo-img-center");
            formPhotographerImg.src =
              "./assets/images/form-users/users-exploration/denver-explorateur.jpg";
            break;
          }
          case "Inaya - L'Exploratrice": {
            formPhotographerImg.classList.remove("photo-img-none");
            formPhotographerImg.classList.add("photo-img-center");
            formPhotographerImg.src =
              "./assets/images/form-users/users-exploration/inaya-exploratrice.jpg";
            break;
          }
          case "Seth - L'Explorateur": {
            formPhotographerImg.classList.remove("photo-img-none");
            formPhotographerImg.classList.add("photo-img-center");
            formPhotographerImg.src =
              "./assets/images/form-users/users-exploration/seth-explorateur.jpg";
            break;
          }

          case "Lance - Le Visiteur": {
            formPhotographerImg.classList.remove("photo-img-none");
            formPhotographerImg.classList.add("photo-img-center");
            formPhotographerImg.src =
              "./assets/images/form-users/users-visite/lance-visiteur.jpg";
            break;
          }
          case "Nadia - La Visiteuse": {
            formPhotographerImg.classList.remove("photo-img-none");
            formPhotographerImg.classList.add("photo-img-center");
            formPhotographerImg.src =
              "./assets/images/form-users/users-visite/nadia-visiteuse.jpg";
            break;
          }
          case "Xavier - Le Visiteur": {
            formPhotographerImg.classList.remove("photo-img-none");
            formPhotographerImg.classList.add("photo-img-center");
            formPhotographerImg.src =
              "./assets/images/form-users/users-visite/xavier-visiteur.jpg";
            break;
          }
          case "Ornella - La Visiteuse": {
            formPhotographerImg.classList.remove("photo-img-none");
            formPhotographerImg.classList.add("photo-img-center");
            formPhotographerImg.src =
              "./assets/images/form-users/users-visite/ornella-visiteuse.jpg";
            break;
          }

          case "Cerise - La Voyageuse": {
            formPhotographerImg.classList.remove("photo-img-none");
            formPhotographerImg.classList.add("photo-img-center");
            formPhotographerImg.src =
              "./assets/images/form-users/users-voyage/cerise-voyageuse.jpg";
            break;
          }
          case "Philibert - Le Voyageur": {
            formPhotographerImg.classList.remove("photo-img-none");
            formPhotographerImg.classList.add("photo-img-center");
            formPhotographerImg.src =
              "./assets/images/form-users/users-voyage/philibert-voyageur.jpg";
            break;
          }
          case "Roxane - La Voyageuse": {
            formPhotographerImg.classList.remove("photo-img-none");
            formPhotographerImg.classList.add("photo-img-center");
            formPhotographerImg.src =
              "./assets/images/form-users/users-voyage/roxane-voyageuse.jpg";
            break;
          }
          case "Yuu - Le Voyageur": {
            formPhotographerImg.classList.remove("photo-img-none");
            formPhotographerImg.classList.add("photo-img-center");
            formPhotographerImg.src =
              "./assets/images/form-users/users-voyage/yuu-voyageur.jpg";
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
  location.assign(`./detailform.html?id=${photoId}`);
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
