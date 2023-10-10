import "../assets/sass/styles.scss";
import "./form.scss";

const form = document.querySelector("form");
const textPictureColor = document.querySelector("#text-picture-color");
const textPictureStar = document.querySelector("#text-picture-star");
const textCategoryColor = document.querySelector("#text-category-color");
const textCategoryStar = document.querySelector("#text-category-star");
const textPhotographerColor = document.querySelector(
  "#text-photographer-color"
);
const textPhotographerStar = document.querySelector("#text-photographer-star");
const textContentColor = document.querySelector("#text-content-color");
const textContentStar = document.querySelector("#text-content-star");
const textInfoContent = document.querySelector("#text-info-content");
const textInfo = document.querySelector("#text-info");
const buttonCancel = document.querySelector(".button-cancel");

const containerPhotoImg = document.querySelector("#container-photo-img");
const containerPhotoLabelImg = document.querySelector(
  "#container-photo-label-img"
);
const containerPhotoLabel = document.querySelector("#container-photo-label");
containerPhotoImg.innerHTML = "<img src='' class='img-padding' />";
containerPhotoLabelImg.classList.remove("container-photo-label-img");
containerPhotoLabel.classList.add("flex-column");
containerPhotoLabel.classList.remove("container-photo-laber");
const selectPicture = document.querySelector("select[name='picture']");
selectPicture.addEventListener("change", (event) => {
  containerPhotoLabelImg.classList.add("container-photo-label-img");
  containerPhotoLabel.classList.remove("flex-column");
  containerPhotoLabel.classList.add("container-photo-laber");
  const formPhotoImg = containerPhotoImg.querySelector("img");
  const selectPictureName = event.target.value;

  switch (selectPictureName) {
    case "": {
      containerPhotoLabelImg.classList.remove("container-photo-label-img");
      containerPhotoLabel.classList.add("flex-column");
      containerPhotoLabel.classList.remove("container-photo-laber");
      containerPhotoImg.classList.add("photo-img-none");
      containerPhotoImg.classList.remove("container-form-photo-img");
      formPhotoImg.src = "";
      break;
    }
    case "Un Désert en Cisjordanie": {
      containerPhotoImg.classList.remove("photo-img-none");
      containerPhotoImg.classList.add("container-form-photo-img");
      formPhotoImg.src =
        "./assets/images/form-small/form-deserts-small/desert-small-cj.jpg";
      break;
    }
    case "Un Désert en Jordanie": {
      containerPhotoImg.classList.remove("photo-img-none");
      containerPhotoImg.classList.add("container-form-photo-img");
      formPhotoImg.src =
        "./assets/images/form-small/form-deserts-small/desert-small-jo.jpg";
      break;
    }
    case "Un Désert au Maroc": {
      containerPhotoImg.classList.remove("photo-img-none");
      containerPhotoImg.classList.add("container-form-photo-img");
      formPhotoImg.src =
        "./assets/images/form-small/form-deserts-small/desert-small-ma.jpg";
      break;
    }
    case "Un Désert en Namibie (Océan Atlantique)": {
      containerPhotoImg.classList.remove("photo-img-none");
      containerPhotoImg.classList.add("container-form-photo-img");
      formPhotoImg.src =
        "./assets/images/form-small/form-deserts-small/desert-small-oa-na.jpg";
      break;
    }
    case "Un Désert en Oman": {
      containerPhotoImg.classList.remove("photo-img-none");
      containerPhotoImg.classList.add("container-form-photo-img");
      formPhotoImg.src =
        "./assets/images/form-small/form-deserts-small/desert-small-om.jpg";
      break;
    }
    case "Un Désert au Pérou": {
      containerPhotoImg.classList.remove("photo-img-none");
      containerPhotoImg.classList.add("container-form-photo-img");
      formPhotoImg.src =
        "./assets/images/form-small/form-deserts-small/desert-small-pe.jpg";
      break;
    }
    case "Un Désert en Arabie Saoudite": {
      containerPhotoImg.classList.remove("photo-img-none");
      containerPhotoImg.classList.add("container-form-photo-img");
      formPhotoImg.src =
        "./assets/images/form-small/form-deserts-small/desert-small-sa.jpg";
      break;
    }
    case "Un Désert en Namibie (Sud-Ouest)": {
      containerPhotoImg.classList.remove("photo-img-none");
      containerPhotoImg.classList.add("container-form-photo-img");
      formPhotoImg.src =
        "./assets/images/form-small/form-deserts-small/desert-small-so-na.jpg";
      break;
    }
    case "Le Désert du Sahara (Soir)": {
      containerPhotoImg.classList.remove("photo-img-none");
      containerPhotoImg.classList.add("container-form-photo-img");
      formPhotoImg.src =
        "./assets/images/form-small/form-deserts-small/desert-small-soir-eh.jpg";
      break;
    }
    case "Sable Blanc du Nouveau-Mexique (USA)": {
      containerPhotoImg.classList.remove("photo-img-none");
      containerPhotoImg.classList.add("container-form-photo-img");
      formPhotoImg.src =
        "./assets/images/form-small/form-deserts-small/sable-blanc-small-nmex-us.jpg";
      break;
    }

    case "Une Forêt en Australie": {
      containerPhotoImg.classList.remove("photo-img-none");
      containerPhotoImg.classList.add("container-form-photo-img");
      formPhotoImg.src =
        "./assets/images/form-small/form-forets-small/foret-small-au.jpg";
      break;
    }
    case "Une Forêt au Canada": {
      containerPhotoImg.classList.remove("photo-img-none");
      containerPhotoImg.classList.add("container-form-photo-img");
      formPhotoImg.src =
        "./assets/images/form-small/form-forets-small/foret-small-ca.jpg";
      break;
    }
    case "Une Forêt en Finlande": {
      containerPhotoImg.classList.remove("photo-img-none");
      containerPhotoImg.classList.add("container-form-photo-img");
      formPhotoImg.src =
        "./assets/images/form-small/form-forets-small/foret-small-fi.jpg";
      break;
    }
    case "Une Forêt en Croatie": {
      containerPhotoImg.classList.remove("photo-img-none");
      containerPhotoImg.classList.add("container-form-photo-img");
      formPhotoImg.src =
        "./assets/images/form-small/form-forets-small/foret-small-hr.jpg";
      break;
    }
    case "Une Forêt en Inde": {
      containerPhotoImg.classList.remove("photo-img-none");
      containerPhotoImg.classList.add("container-form-photo-img");
      formPhotoImg.src =
        "./assets/images/form-small/form-forets-small/foret-small-in.jpg";
      break;
    }
    case "Une Forêt en Italie": {
      containerPhotoImg.classList.remove("photo-img-none");
      containerPhotoImg.classList.add("container-form-photo-img");
      formPhotoImg.src =
        "./assets/images/form-small/form-forets-small/foret-small-it.jpg";
      break;
    }
    case "Une Forêt au Japon": {
      containerPhotoImg.classList.remove("photo-img-none");
      containerPhotoImg.classList.add("container-form-photo-img");
      formPhotoImg.src =
        "./assets/images/form-small/form-forets-small/foret-small-jp.jpg";
      break;
    }
    case "La Forêt des Loups": {
      containerPhotoImg.classList.remove("photo-img-none");
      containerPhotoImg.classList.add("container-form-photo-img");
      formPhotoImg.src =
        "./assets/images/form-small/form-forets-small/foret-small-loups.jpg";
      break;
    }
    case "Une Forêt au Nouvelle-Zélande": {
      containerPhotoImg.classList.remove("photo-img-none");
      containerPhotoImg.classList.add("container-form-photo-img");
      formPhotoImg.src =
        "./assets/images/form-small/form-forets-small/foret-small-nz.jpg";
      break;
    }
    case "Une Forêt en Washington (USA)": {
      containerPhotoImg.classList.remove("photo-img-none");
      containerPhotoImg.classList.add("container-form-photo-img");
      formPhotoImg.src =
        "./assets/images/form-small/form-forets-small/foret-small-wash-us.jpg";
      break;
    }

    case "Une Plage en Australie": {
      containerPhotoImg.classList.remove("photo-img-none");
      containerPhotoImg.classList.add("container-form-photo-img");
      formPhotoImg.src =
        "./assets/images/form-small/form-plages-small/plage-small-au.jpg";
      break;
    }
    case "Une Plage au Brésil": {
      containerPhotoImg.classList.remove("photo-img-none");
      containerPhotoImg.classList.add("container-form-photo-img");
      formPhotoImg.src =
        "./assets/images/form-small/form-plages-small/plage-small-br.jpg";
      break;
    }
    case "Une Plage en Grande-Bretagne": {
      containerPhotoImg.classList.remove("photo-img-none");
      containerPhotoImg.classList.add("container-form-photo-img");
      formPhotoImg.src =
        "./assets/images/form-small/form-plages-small/plage-small-gb.jpg";
      break;
    }
    case "Une Plage en Italie": {
      containerPhotoImg.classList.remove("photo-img-none");
      containerPhotoImg.classList.add("container-form-photo-img");
      formPhotoImg.src =
        "./assets/images/form-small/form-plages-small/plage-small-it.jpg";
      break;
    }
    case "Une Plage en Madagascar": {
      containerPhotoImg.classList.remove("photo-img-none");
      containerPhotoImg.classList.add("container-form-photo-img");
      formPhotoImg.src =
        "./assets/images/form-small/form-plages-small/plage-small-mg.jpg";
      break;
    }
    case "Une Plage au Mexique": {
      containerPhotoImg.classList.remove("photo-img-none");
      containerPhotoImg.classList.add("container-form-photo-img");
      formPhotoImg.src =
        "./assets/images/form-small/form-plages-small/plage-small-mx.jpg";
      break;
    }
    case "Une Plage en Nouvelle-Calédonie": {
      containerPhotoImg.classList.remove("photo-img-none");
      containerPhotoImg.classList.add("container-form-photo-img");
      formPhotoImg.src =
        "./assets/images/form-small/form-plages-small/plage-small-nc.jpg";
      break;
    }
    case "Une Plage en Polynésie Française": {
      containerPhotoImg.classList.remove("photo-img-none");
      containerPhotoImg.classList.add("container-form-photo-img");
      formPhotoImg.src =
        "./assets/images/form-small/form-plages-small/plage-small-pf.jpg";
      break;
    }
    case "Une Plage aux Sychelles": {
      containerPhotoImg.classList.remove("photo-img-none");
      containerPhotoImg.classList.add("container-form-photo-img");
      formPhotoImg.src =
        "./assets/images/form-small/form-plages-small/plage-small-sc.jpg";
      break;
    }
    case "Une Plage en Thaïlande": {
      containerPhotoImg.classList.remove("photo-img-none");
      containerPhotoImg.classList.add("container-form-photo-img");
      formPhotoImg.src =
        "./assets/images/form-small/form-plages-small/plage-small-th.jpg";
      break;
    }

    case "Une Ville au Chili": {
      containerPhotoImg.classList.remove("photo-img-none");
      containerPhotoImg.classList.add("container-form-photo-img");
      formPhotoImg.src =
        "./assets/images/form-small/form-villes-small/ville-small-cl.jpg";
      break;
    }
    case "Une Ville en Chine": {
      containerPhotoImg.classList.remove("photo-img-none");
      containerPhotoImg.classList.add("container-form-photo-img");
      formPhotoImg.src =
        "./assets/images/form-small/form-villes-small/ville-small-cn.jpg";
      break;
    }
    case "Une Ville en Colombie": {
      containerPhotoImg.classList.remove("photo-img-none");
      containerPhotoImg.classList.add("container-form-photo-img");
      formPhotoImg.src =
        "./assets/images/form-small/form-villes-small/ville-small-co.jpg";
      break;
    }
    case "Une Ville en France": {
      containerPhotoImg.classList.remove("photo-img-none");
      containerPhotoImg.classList.add("container-form-photo-img");
      formPhotoImg.src =
        "./assets/images/form-small/form-villes-small/ville-small-fr.jpg";
      break;
    }
    case "Une Ville en Grande-Bretagne": {
      containerPhotoImg.classList.remove("photo-img-none");
      containerPhotoImg.classList.add("container-form-photo-img");
      formPhotoImg.src =
        "./assets/images/form-small/form-villes-small/ville-small-gb.jpg";
      break;
    }
    case "Une Ville au Japon (Jour)": {
      containerPhotoImg.classList.remove("photo-img-none");
      containerPhotoImg.classList.add("container-form-photo-img");
      formPhotoImg.src =
        "./assets/images/form-small/form-villes-small/ville-small-jour-jp.jpg";
      break;
    }
    case "Une Ville en Koweït": {
      containerPhotoImg.classList.remove("photo-img-none");
      containerPhotoImg.classList.add("container-form-photo-img");
      formPhotoImg.src =
        "./assets/images/form-small/form-villes-small/ville-small-kw.jpg";
      break;
    }
    case "Une Ville en Norvège": {
      containerPhotoImg.classList.remove("photo-img-none");
      containerPhotoImg.classList.add("container-form-photo-img");
      formPhotoImg.src =
        "./assets/images/form-small/form-villes-small/ville-small-no.jpg";
      break;
    }
    case "Une Ville Rural d'Allemagne": {
      containerPhotoImg.classList.remove("photo-img-none");
      containerPhotoImg.classList.add("container-form-photo-img");
      formPhotoImg.src =
        "./assets/images/form-small/form-villes-small/ville-small-rural-ge.jpg";
      break;
    }
    case "Une Ville d'Italie (Soir)": {
      containerPhotoImg.classList.remove("photo-img-none");
      containerPhotoImg.classList.add("container-form-photo-img");
      formPhotoImg.src =
        "./assets/images/form-small/form-villes-small/ville-small-soir-it.jpg";
      break;
    }
  }
});

const containerPhotographerImg = document.querySelector(
  "#container-photographer-img"
);
const containerPhotographerLabelImg = document.querySelector(
  "#container-photographer-label-img"
);
const containerPhotographerLabel = document.querySelector(
  "#container-photographer-laber"
);
containerPhotographerImg.innerHTML = "<img src='' class='img-padding' />";
containerPhotographerLabelImg.classList.remove(
  "container-photographer-label-img"
);
containerPhotographerLabel.classList.add("flex-column");
containerPhotographerLabel.classList.remove("container-photographer-laber");
const selectPhotographer = document.querySelector(
  "select[name='photographer']"
);
selectPhotographer.addEventListener("change", (event) => {
  containerPhotographerLabelImg.classList.add(
    "container-photographer-label-img"
  );
  containerPhotographerLabel.classList.remove("flex-column");
  containerPhotographerLabel.classList.add("container-photographer-laber");
  selectPhotographer.classList.add("width-select-photographer");
  const formPhotographerImg = containerPhotographerImg.querySelector("img");
  const selectPhotographerName = event.target.value;
  switch (selectPhotographerName) {
    case "": {
      containerPhotographerLabelImg.classList.remove(
        "container-photographer-label-img"
      );
      containerPhotographerLabel.classList.add("flex-column");
      containerPhotographerLabel.classList.remove(
        "container-photographer-laber"
      );
      selectPhotographer.classList.remove("width-select-photographer");
      containerPhotographerImg.classList.add("photo-img-none");
      containerPhotographerImg.classList.remove("container-user-img");
      formPhotographerImg.src = "";
      break;
    }
    case "Gustave - L'Aventurier": {
      containerPhotographerImg.classList.remove("photo-img-none");
      containerPhotographerImg.classList.add("container-user-img");
      formPhotographerImg.src =
        "./assets/images/users-small/form-users-aventure-small/gustave-aventurier-small.jpg";
      break;
    }
    case "Julie - L'Aventurière": {
      containerPhotographerImg.classList.remove("photo-img-none");
      containerPhotographerImg.classList.add("container-user-img");
      formPhotographerImg.src =
        "./assets/images/users-small/users-aventure-small/julie-aventuriere-small.jpg";
      break;
    }
    case "Henry - L'Aventurier": {
      containerPhotographerImg.classList.remove("photo-img-none");
      containerPhotographerImg.classList.add("container-user-img");
      formPhotographerImg.src =
        "./assets/images/users-small/users-aventure-small/henry-aventurier-small.jpg";
      break;
    }
    case "Zoé - L'Aventurière": {
      containerPhotographerImg.classList.remove("photo-img-none");
      containerPhotographerImg.classList.add("container-form-user-img");
      formPhotographerImg.src =
        "./assets/images/users-small/users-aventure-small/zoe-aventuriere-small.jpg";
      break;
    }

    case "Flora - L'Exploratrice": {
      containerPhotographerImg.classList.remove("photo-img-none");
      containerPhotographerImg.classList.add("container-user-img");
      formPhotographerImg.src =
        "./assets/images/users-small/users-exploration-small/flora-exploratrice-small.jpg";
      break;
    }
    case "Denver - L'Explorateur": {
      containerPhotographerImg.classList.remove("photo-img-none");
      containerPhotographerImg.classList.add("container-user-img");
      formPhotographerImg.src =
        "./assets/images/users-small/users-exploration-small/denver-explorateur-small.jpg";
      break;
    }
    case "Inaya - L'Exploratrice": {
      containerPhotographerImg.classList.remove("photo-img-none");
      containerPhotographerImg.classList.add("container-user-img");
      formPhotographerImg.src =
        "./assets/images/users-small/users-exploration-small/inaya-exploratrice-small.jpg";
      break;
    }
    case "Seth - L'Explorateur": {
      containerPhotographerImg.classList.remove("photo-img-none");
      containerPhotographerImg.classList.add("container-user-img");
      formPhotographerImg.src =
        "./assets/images/users-small/users-exploration-small/seth-explorateur-small.jpg";
      break;
    }

    case "Lance - Le Visiteur": {
      containerPhotographerImg.classList.remove("photo-img-none");
      containerPhotographerImg.classList.add("container-user-img");
      formPhotographerImg.src =
        "./assets/images/users-small/users-visite-small/lance-visiteur-small.jpg";
      break;
    }
    case "Nadia - La Visiteuse": {
      containerPhotographerImg.classList.remove("photo-img-none");
      containerPhotographerImg.classList.add("container-user-img");
      formPhotographerImg.src =
        "./assets/images/users-small/users-visite-small/nadia-visiteuse-small.jpg";
      break;
    }
    case "Xavier - Le Visiteur": {
      containerPhotographerImg.classList.remove("photo-img-none");
      containerPhotographerImg.classList.add("container-user-img");
      formPhotographerImg.src =
        "./assets/images/users-small/users-visite-small/xavier-visiteur-small.jpg";
      break;
    }
    case "Ornella - La Visiteuse": {
      containerPhotographerImg.classList.remove("photo-img-none");
      containerPhotographerImg.classList.add("container-user-img");
      formPhotographerImg.src =
        "./assets/images/users-small/users-visite-small/ornella-visiteuse-small.jpg";
      break;
    }

    case "Cerise - La Voyageuse": {
      containerPhotographerImg.classList.remove("photo-img-none");
      containerPhotographerImg.classList.add("container-user-img");
      formPhotographerImg.src =
        "./assets/images/users-small/users-voyage-small/cerise-voyageuse-small.jpg";
      break;
    }
    case "Philibert - Le Voyageur": {
      containerPhotographerImg.classList.remove("photo-img-none");
      containerPhotographerImg.classList.add("container-user-img");
      formPhotographerImg.src =
        "./assets/images/users-small/users-voyage-small/philibert-voyageur-small.jpg";
      break;
    }
    case "Roxane - La Voyageuse": {
      containerPhotographerImg.classList.remove("photo-img-none");
      containerPhotographerImg.classList.add("container-user-img");
      formPhotographerImg.src =
        "./assets/images/users-small/users-voyage-small/roxane-voyageuse-small.jpg";
      break;
    }
    case "Yuu - Le Voyageur": {
      containerPhotographerImg.classList.remove("photo-img-none");
      containerPhotographerImg.classList.add("container-user-img");
      formPhotographerImg.src =
        "./assets/images/users-small/users-voyage-small/yuu-voyageur-small.jpg";
      break;
    }
  }
});

const selectContent = document.querySelector("select[name='content']");
selectContent.addEventListener("change", (event) => {
  const contentValue = event.target.value;
  const contentNote = selectContent.options[selectContent.selectedIndex].text;
  const containerDescriptionNote = document.querySelector(
    "#container-description-note"
  );

  if (contentValue) {
    containerDescriptionNote.classList.add("container-content-note");
    containerDescriptionNote.innerHTML = `<textarea class="content-note">${contentValue}</textarea>`;
    const textArea = containerDescriptionNote.querySelector("textarea");
    let valueTextArea = textArea.value;
    textArea.addEventListener("input", (event) => {
      switch (contentNote) {
        case `Description Mauvais \u2605\u2606\u2606\u2606\u2606`: {
          const newValueContentNote =
            document.querySelector(".content-mauvais");
          valueTextArea = event.target.value;
          newValueContentNote.setAttribute("value", `${valueTextArea}`);
          break;
        }
        case `Description Médiocre \u2605\u2605\u2606\u2606\u2606`: {
          const newValueContentNote =
            document.querySelector(".content-mediocre");
          valueTextArea = event.target.value;
          newValueContentNote.setAttribute("value", `${valueTextArea}`);
          break;
        }
        case `Description Satisfaisant \u2605\u2605\u2605\u2606\u2606`: {
          const newValueContentNote = document.querySelector(
            ".content-satisfaisant"
          );
          valueTextArea = event.target.value;
          newValueContentNote.setAttribute("value", `${valueTextArea}`);
          break;
        }
        case `Description Bien \u2605\u2605\u2605\u2605\u2606`: {
          const newValueContentNote = document.querySelector(".content-bien");
          valueTextArea = event.target.value;
          newValueContentNote.setAttribute("value", `${valueTextArea}`);
          break;
        }
        case `Description Excellent \u2605\u2605\u2605\u2605\u2605`: {
          const newValueContentNote =
            document.querySelector(".content-excellent");
          valueTextArea = event.target.value;
          newValueContentNote.setAttribute("value", `${valueTextArea}`);
          break;
        }
      }
    });
  } else {
    containerDescriptionNote.classList.remove("container-content-note");
    containerDescriptionNote.innerHTML = "";
  }
});

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const photo = Object.fromEntries(formData.entries());
  if (formIsValid(photo)) {
    try {
      const json = JSON.stringify(photo);
      const response = await fetch("https://restapi.fr/api/photos", {
        method: "POST",
        body: json,
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status < 300) {
        location.assign("./index.html");
      }
    } catch (error) {
      console.error("error : ", error);
    }
  }
});

const formIsValid = (photo) => {
  const textInfoPicture = document.querySelector("#text-info-picture");
  const textInfoCategory = document.querySelector("#text-info-category");
  const textInfoPhotographer = document.querySelector(
    "#text-info-photographer"
  );

  if (
    !photo.picture ||
    !photo.category ||
    !photo.photographer ||
    !photo.content
  ) {
    if (
      !photo.picture &&
      (photo.category || photo.photographer || photo.content)
    ) {
      textInfoPicture.innerHTML = "Veuillez selectionner une photo.";
      setTimeout(() => {
        textInfoPicture.innerHTML = "";
      }, 2000);
    }

    if (
      !photo.category &&
      (photo.picture || photo.photographer || photo.content)
    ) {
      textInfoCategory.innerHTML = "Veuillez choisir categorie.";
      setTimeout(() => {
        textInfoCategory.innerHTML = "";
      }, 2000);
    }

    if (
      !photo.photographer &&
      (photo.picture || photo.category || photo.content)
    ) {
      textInfoPhotographer.innerHTML =
        "Veuillez indiquer le nom du Photographe.";
      setTimeout(() => {
        textInfoPhotographer.innerHTML = "";
      }, 2000);
    }

    if (
      !photo.content &&
      (photo.picture || photo.category || photo.photographer)
    ) {
      textInfoContent.innerHTML = "Veuillez partager votre avis.";
      setTimeout(() => {
        textInfoContent.innerHTML = "";
      }, 2000);
    }

    if (
      !photo.picture &&
      !photo.category &&
      !photo.photographer &&
      !photo.content
    ) {
      textInfo.innerHTML = "* Vous devez renseigner tous les champs.";
      textPictureColor.classList.add("text-danger");
      textCategoryColor.classList.add("text-danger");
      textPhotographerColor.classList.add("text-danger");
      textContentColor.classList.add("text-danger");
      textPictureStar.innerHTML = "*";
      textPictureStar.classList.add("text-danger");
      textCategoryStar.innerHTML = "*";
      textCategoryStar.classList.add("text-danger");
      textPhotographerStar.innerHTML = "*";
      textPhotographerStar.classList.add("text-danger");
      textContentStar.innerHTML = "*";
      textContentStar.classList.add("text-danger");
      setTimeout(() => {
        textInfo.innerHTML = "";
        textPictureColor.classList.remove("text-danger");
        textCategoryColor.classList.remove("text-danger");
        textPhotographerColor.classList.remove("text-danger");
        textContentColor.classList.remove("text-danger");
        textPictureStar.innerHTML = "";
        textPictureStar.classList.remove("text-danger");
        textCategoryStar.innerHTML = "";
        textCategoryStar.classList.remove("text-danger");
        textPhotographerStar.innerHTML = "";
        textPhotographerStar.classList.remove("text-danger");
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

buttonCancel.addEventListener("click", (event) => {
  event.stopPropagation();
  location.assign("./index.html");
});
