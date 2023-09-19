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
const containerUserImg = document.querySelector(".container-user-img");
containerPhotoImg.innerHTML = `<img src="" class="img-padding" />`;
containerUserImg.innerHTML = ``;
console.log(containerPhotoImg);
console.log(containerUserImg);
const select = document.querySelector("select");
select.addEventListener("change", (event) => {
  const formPhotoImg = containerPhotoImg.querySelector("img");
  const selectName = event.target.value;
  console.log(selectName);
  switch (selectName) {
    case "": {
      containerPhotoImg.classList.add("photo-img-none");
      containerPhotoImg.classList.remove("photo-img-center");
      formPhotoImg.src = "";
      break;
    }
    case "Un Désert en Cisjordanie": {
      containerPhotoImg.classList.remove("photo-img-none");
      containerPhotoImg.classList.add("photo-img-center");
      formPhotoImg.src =
        "./assets/images/form-photos/form-deserts/desert-cj.jpg";
      break;
    }
    case "Un Désert en Jordanie": {
      containerPhotoImg.classList.remove("photo-img-none");
      containerPhotoImg.classList.add("photo-img-center");
      formPhotoImg.src =
        "./assets/images/form-photos/form-deserts/desert-jo.jpg";
      break;
    }
    case "Un Désert au Maroc": {
      containerPhotoImg.classList.remove("photo-img-none");
      containerPhotoImg.classList.add("photo-img-center");
      formPhotoImg.src =
        "./assets/images/form-photos/form-deserts/desert-ma.jpg";
      break;
    }
    case "Un Désert en Namibie (Océan Atlantique)": {
      containerPhotoImg.classList.remove("photo-img-none");
      containerPhotoImg.classList.add("photo-img-center");
      formPhotoImg.src =
        "./assets/images/form-photos/form-deserts/desert-oa-na.jpg";
      break;
    }
    case "Un Désert en Oman": {
      containerPhotoImg.classList.remove("photo-img-none");
      containerPhotoImg.classList.add("photo-img-center");
      formPhotoImg.src =
        "./assets/images/form-photos/form-deserts/desert-om.jpg";
      break;
    }
    case "Un Désert au Pérou": {
      containerPhotoImg.classList.remove("photo-img-none");
      containerPhotoImg.classList.add("photo-img-center");
      formPhotoImg.src =
        "./assets/images/form-photos/form-deserts/desert-pe.jpg";
      break;
    }
    case "Un Désert en Arabie Saoudite": {
      containerPhotoImg.classList.remove("photo-img-none");
      containerPhotoImg.classList.add("photo-img-center");
      formPhotoImg.src =
        "./assets/images/form-photos/form-deserts/desert-sa.jpg";
      break;
    }
    case "Un Désert en Namibie (Sud-Ouest)": {
      containerPhotoImg.classList.remove("photo-img-none");
      containerPhotoImg.classList.add("photo-img-center");
      formPhotoImg.src =
        "./assets/images/form-photos/form-deserts/desert-so-na.jpg";
      break;
    }
    case "Le Désert du Sahara (Soir)": {
      containerPhotoImg.classList.remove("photo-img-none");
      containerPhotoImg.classList.add("photo-img-center");
      formPhotoImg.src =
        "./assets/images/form-photos/form-deserts/desert-soir-eh.jpg";
      break;
    }
    case "Sable Blanc du Nouveau-Mexique (USA)": {
      containerPhotoImg.classList.remove("photo-img-none");
      containerPhotoImg.classList.add("photo-img-center");
      formPhotoImg.src =
        "./assets/images/form-photos/form-deserts/sable-blanc-nmex-us.jpg";
      break;
    }
  }

  switch (selectName) {
    case "Une Forêt en Australie": {
      containerPhotoImg.classList.remove("photo-img-none");
      containerPhotoImg.classList.add("photo-img-center");
      formPhotoImg.src = "./assets/images/form-photos/form-forets/foret-au.jpg";
      break;
    }
    case "Une Forêt au Canada": {
      containerPhotoImg.classList.remove("photo-img-none");
      containerPhotoImg.classList.add("photo-img-center");
      formPhotoImg.src = "./assets/images/form-photos/form-forets/foret-ca.jpg";
      break;
    }
    case "Une Forêt en Finlande": {
      containerPhotoImg.classList.remove("photo-img-none");
      containerPhotoImg.classList.add("photo-img-center");
      formPhotoImg.src = "./assets/images/form-photos/form-forets/foret-fi.jpg";
      break;
    }
    case "Une Forêt en Croatie": {
      containerPhotoImg.classList.remove("photo-img-none");
      containerPhotoImg.classList.add("photo-img-center");
      formPhotoImg.src = "./assets/images/form-photos/form-forets/foret-hr.jpg";
      break;
    }
    case "Une Forêt en Inde": {
      containerPhotoImg.classList.remove("photo-img-none");
      containerPhotoImg.classList.add("photo-img-center");
      formPhotoImg.src = "./assets/images/form-photos/form-forets/foret-in.jpg";
      break;
    }
    case "Une Forêt en Italie": {
      containerPhotoImg.classList.remove("photo-img-none");
      containerPhotoImg.classList.add("photo-img-center");
      formPhotoImg.src = "./assets/images/form-photos/form-forets/foret-it.jpg";
      break;
    }
    case "Une Forêt au Japon": {
      containerPhotoImg.classList.remove("photo-img-none");
      containerPhotoImg.classList.add("photo-img-center");
      formPhotoImg.src = "./assets/images/form-photos/form-forets/foret-jp.jpg";
      break;
    }
    case "La Forêt des Loups": {
      containerPhotoImg.classList.remove("photo-img-none");
      containerPhotoImg.classList.add("photo-img-center");
      formPhotoImg.src =
        "./assets/images/form-photos/form-forets/foret-loups.jpg";
      break;
    }
    case "Une Forêt au Nouvelle-Zélande": {
      containerPhotoImg.classList.remove("photo-img-none");
      containerPhotoImg.classList.add("photo-img-center");
      formPhotoImg.src = "./assets/images/form-photos/form-forets/foret-nz.jpg";
      break;
    }
    case "Une Forêt en Washington (USA)": {
      containerPhotoImg.classList.remove("photo-img-none");
      containerPhotoImg.classList.add("photo-img-center");
      formPhotoImg.src =
        "./assets/images/form-photos/form-forets/foret-wash-us.jpg";
      break;
    }
  }

  switch (selectName) {
    case "Une Plage en Australie": {
      containerPhotoImg.classList.remove("photo-img-none");
      containerPhotoImg.classList.add("photo-img-center");
      formPhotoImg.src = "./assets/images/form-photos/form-plages/plage-au.jpg";
      break;
    }
    case "Une Plage au Brésil": {
      containerPhotoImg.classList.remove("photo-img-none");
      containerPhotoImg.classList.add("photo-img-center");
      formPhotoImg.src = "./assets/images/form-photos/form-plages/plage-br.jpg";
      break;
    }
    case "Une Plage en Grande-Bretagne": {
      containerPhotoImg.classList.remove("photo-img-none");
      containerPhotoImg.classList.add("photo-img-center");
      formPhotoImg.src = "./assets/images/form-photos/form-plages/plage-gb.jpg";
      break;
    }
    case "Une Plage en Italie": {
      containerPhotoImg.classList.remove("photo-img-none");
      containerPhotoImg.classList.add("photo-img-center");
      formPhotoImg.src = "./assets/images/form-photos/form-plages/plage-it.jpg";
      break;
    }
    case "Une Plage en Madagascar": {
      containerPhotoImg.classList.remove("photo-img-none");
      containerPhotoImg.classList.add("photo-img-center");
      formPhotoImg.src = "./assets/images/form-photos/form-plages/plage-mg.jpg";
      break;
    }
    case "Une Plage au Mexique": {
      containerPhotoImg.classList.remove("photo-img-none");
      containerPhotoImg.classList.add("photo-img-center");
      formPhotoImg.src = "./assets/images/form-photos/form-plages/plage-mx.jpg";
      break;
    }
    case "Une Plage en Nouvelle-Calédonie": {
      containerPhotoImg.classList.remove("photo-img-none");
      containerPhotoImg.classList.add("photo-img-center");
      formPhotoImg.src = "./assets/images/form-photos/form-plages/plage-nc.jpg";
      break;
    }
    case "Une Plage en Polynésie Française": {
      containerPhotoImg.classList.remove("photo-img-none");
      containerPhotoImg.classList.add("photo-img-center");
      formPhotoImg.src = "./assets/images/form-photos/form-plages/plage-pf.jpg";
      break;
    }
    case "Une Plage aux Sychelles": {
      containerPhotoImg.classList.remove("photo-img-none");
      containerPhotoImg.classList.add("photo-img-center");
      formPhotoImg.src = "./assets/images/form-photos/form-plages/plage-sc.jpg";
      break;
    }
    case "Une Plage en Thaïlande": {
      containerPhotoImg.classList.remove("photo-img-none");
      containerPhotoImg.classList.add("photo-img-center");
      formPhotoImg.src = "./assets/images/form-photos/form-plages/plage-th.jpg";
      break;
    }
  }

  switch (selectName) {
    case "Une Ville au Chili": {
      containerPhotoImg.classList.remove("photo-img-none");
      containerPhotoImg.classList.add("photo-img-center");
      formPhotoImg.src = "./assets/images/form-photos/form-villes/ville-cl.jpg";
      break;
    }
    case "Une Ville en Chine": {
      containerPhotoImg.classList.remove("photo-img-none");
      containerPhotoImg.classList.add("photo-img-center");
      formPhotoImg.src = "./assets/images/form-photos/form-villes/ville-cn.jpg";
      break;
    }
    case "Une Ville en Colombie": {
      containerPhotoImg.classList.remove("photo-img-none");
      containerPhotoImg.classList.add("photo-img-center");
      formPhotoImg.src = "./assets/images/form-photos/form-villes/ville-co.jpg";
      break;
    }
    case "Une Ville en France": {
      containerPhotoImg.classList.remove("photo-img-none");
      containerPhotoImg.classList.add("photo-img-center");
      formPhotoImg.src = "./assets/images/form-photos/form-villes/ville-fr.jpg";
      break;
    }
    case "Une Ville en Grande-Bretagne": {
      containerPhotoImg.classList.remove("photo-img-none");
      containerPhotoImg.classList.add("photo-img-center");
      formPhotoImg.src = "./assets/images/form-photos/form-villes/ville-gb.jpg";
      break;
    }
    case "Une Ville au Japon (Jour)": {
      containerPhotoImg.classList.remove("photo-img-none");
      containerPhotoImg.classList.add("photo-img-center");
      formPhotoImg.src =
        "./assets/images/form-photos/form-villes/ville-jour-jp.jpg";
      break;
    }
    case "Une Ville en Koweït": {
      containerPhotoImg.classList.remove("photo-img-none");
      containerPhotoImg.classList.add("photo-img-center");
      formPhotoImg.src = "./assets/images/form-photos/form-villes/ville-kw.jpg";
      break;
    }
    case "Une Ville en Norvège": {
      containerPhotoImg.classList.remove("photo-img-none");
      containerPhotoImg.classList.add("photo-img-center");
      formPhotoImg.src = "./assets/images/form-photos/form-villes/ville-no.jpg";
      break;
    }
    case "Une Ville Rural d'Allemagne": {
      containerPhotoImg.classList.remove("photo-img-none");
      containerPhotoImg.classList.add("photo-img-center");
      formPhotoImg.src =
        "./assets/images/form-photos/form-villes/ville-rural-ge.jpg";
      break;
    }
    case "Une Ville d'Italie (Soir)": {
      containerPhotoImg.classList.remove("photo-img-none");
      containerPhotoImg.classList.add("photo-img-center");
      formPhotoImg.src =
        "./assets/images/form-photos/form-villes/ville-soir-it.jpg";
      break;
    }
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
      console.log(photo.picture);
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
