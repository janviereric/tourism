import "../assets/sass/styles.scss";
import "./form.scss";

const form = document.querySelector("form");
const inputPicture = document.querySelector("#input-picture");

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
      const body = await response.json();
      console.log(body);
    } catch (error) {
      console.error("error : ", error);
    }
  }
});

inputPicture.addEventListener("change", (event) => {
  const filePicture = event.target.files[0];
  const namePicture = document.querySelector("#name-picture");
  namePicture.innerHTML = `${filePicture.name}`;
});

const formIsValid = (photo) => {
  const textInfoPicture = document.querySelector("#text-info-picture");
  const textInfoCategory = document.querySelector("#text-info-category");
  const textInfoCountry = document.querySelector("#text-info-country");
  const textInfoPlace = document.querySelector("#text-info-place");
  const textInfoContent = document.querySelector("#text-info-content");
  const textInfo = document.querySelector("#text-info");

  if (
    !photo.picture.name &&
    (photo.category || photo.country || photo.place || photo.content)
  ) {
    textInfoPicture.innerHTML = "Veuillez selectionner une photo.";
    setTimeout(() => {
      textInfoPicture.innerHTML = "";
    }, 5000);
  } else {
    textInfoPicture.innerHTML = "";
  }

  if (
    !photo.category &&
    (photo.picture.name || photo.country || photo.place || photo.content)
  ) {
    textInfoCategory.innerHTML = "Veuillez renseigner une categorie.";
    setTimeout(() => {
      textInfoCategory.innerHTML = "";
    }, 5000);
  } else {
    textInfoCategory.innerHTML = "";
  }

  if (
    !photo.country &&
    (photo.picture.name || photo.category || photo.place || photo.content)
  ) {
    textInfoCountry.innerHTML =
      "Veuillez selectionner dans quel pays a été prise la photo.";
    setTimeout(() => {
      textInfoCountry.innerHTML = "";
    }, 5000);
  } else {
    textInfoCountry.innerHTML = "";
  }

  if (
    !photo.place &&
    (photo.picture.name || photo.category || photo.country || photo.content)
  ) {
    textInfoPlace.innerHTML =
      "Veuillez indiquer le lieu où la photo a été prise.";
    setTimeout(() => {
      textInfoPlace.innerHTML = "";
    }, 5000);
  } else {
    textInfoPlace.innerHTML = "";
  }

  if (
    !photo.content &&
    (photo.picture.name || photo.category || photo.country || photo.place)
  ) {
    textInfoContent.innerHTML = "Veuillez partager votre avis.";
    setTimeout(() => {
      textInfoContent.innerHTML = "";
    }, 5000);
  } else {
    textInfoContent.innerHTML = "";
  }

  const textPhotoColor = document.querySelector("#text-photo-color");
  const textPhotoStar = document.querySelector("#text-photo-star");
  const textCategoryColor = document.querySelector("#text-category-color");
  const textCategoryStar = document.querySelector("#text-category-star");
  const textCountryColor = document.querySelector("#text-country-color");
  const textCountryStar = document.querySelector("#text-country-star");
  const textPlaceColor = document.querySelector("#text-place-color");
  const textPlaceStar = document.querySelector("#text-place-star");
  const textContentColor = document.querySelector("#text-content-color");
  const textContentStar = document.querySelector("#text-content-star");

  if (
    !photo.picture.name &&
    !photo.category &&
    !photo.country &&
    !photo.place &&
    !photo.content
  ) {
    textInfo.innerHTML = "* Vous devez renseigner tous les champs.";
    textPhotoColor.classList.add("text-danger");
    textCategoryColor.classList.add("text-danger");
    textCountryColor.classList.add("text-danger");
    textPlaceColor.classList.add("text-danger");
    textContentColor.classList.add("text-danger");
    textPhotoStar.innerHTML = "*";
    textPhotoStar.classList.add("text-danger");
    textCategoryStar.innerHTML = "*";
    textCategoryStar.classList.add("text-danger");
    textCountryStar.innerHTML = "*";
    textCountryStar.classList.add("text-danger");
    textPlaceStar.innerHTML = "*";
    textPlaceStar.classList.add("text-danger");
    textContentStar.innerHTML = "*";
    textContentStar.classList.add("text-danger");
    setTimeout(() => {
      textInfo.innerHTML = "";
      textPhotoColor.classList.remove("text-danger");
      textCategoryColor.classList.remove("text-danger");
      textCountryColor.classList.remove("text-danger");
      textPlaceColor.classList.remove("text-danger");
      textContentColor.classList.remove("text-danger");
      textPhotoStar.innerHTML = "";
      textPhotoStar.classList.remove("text-danger");
      textCategoryStar.innerHTML = "";
      textCategoryStar.classList.remove("text-danger");
      textCountryStar.innerHTML = "";
      textCountryStar.classList.remove("text-danger");
      textPlaceStar.innerHTML = "";
      textPlaceStar.classList.remove("text-danger");
      textContentStar.innerHTML = "";
      textContentStar.classList.remove("text-danger");
    }, 5000);
    return false;
  } else {
    textInfo.innerHTML = "";
    return true;
  }
};
