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

form.addEventListener("submit", async (event) => {
  event.preventDefault(photo);
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
      }, 5000);
    }

    if (
      !photo.category &&
      (photo.picture || photo.photographer || photo.content)
    ) {
      textInfoCategory.innerHTML = "Veuillez choisir categorie.";
      setTimeout(() => {
        textInfoCategory.innerHTML = "";
      }, 5000);
    }

    if (
      !photo.photographer &&
      (photo.picture || photo.category || photo.content)
    ) {
      textInfoPhotographer.innerHTML =
        "Veuillez indiquer le nom du Photographe.";
      setTimeout(() => {
        textInfoPhotographer.innerHTML = "";
      }, 5000);
    }

    if (
      !photo.content &&
      (photo.picture || photo.category || photo.photographer)
    ) {
      textInfoContent.innerHTML = "Veuillez partager votre avis.";
      setTimeout(() => {
        textInfoContent.innerHTML = "";
      }, 5000);
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
      }, 5000);
    }
    return false;
  } else {
    textInfo.innerHTML = "";
    return true;
  }
};
