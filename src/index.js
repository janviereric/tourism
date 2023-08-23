import { async } from "regenerator-runtime";
import "./assets/sass/styles.scss";
import "./index.scss";

const photosContainer = document.querySelector("#photos-container");
const createPhotos = async (photos) => {
  const photosElement = photos.map((photo) => {
    const photoElement = document.createElement("div");
    photoElement.classList.add("photo");
    photoElement.innerHTML = `   
    <img src="${photo.picture}" alt="" />
    <h2>${photo.category}</h2>`;
    return photoElement;
  });
  photosContainer.innerHTML = "";
  photosContainer.append(...photosElement);
};

const fetchPhotos = async () => {
  try {
    const response = await fetch("https://restapi.fr/api/photos");
    const photos = await response.json();
    console.log(photos);
    createPhotos(photos);
  } catch (error) {
    console.log(("error : ", e));
  }
};

fetchPhotos();
