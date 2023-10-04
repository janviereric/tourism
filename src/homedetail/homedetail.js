import "../assets/sass/styles.scss";
import "./homedetail.scss";
import { homePhotosArray } from "../assets/javascripts/home-photos.js";

const containerPhotoName = document.querySelector(".container-photo-name");
const containerPhotoImg = document.querySelector(".container-photo-img");
const containerUser = document.querySelector(".container-user");
const containerDate = document.querySelector(".container-date");
const containerContent = document.querySelector(".container-content");

const diplayHomePhotoDetail = async () => {
  try {
    const params = new URL(location.href);
    const photoId = params.searchParams.get("id");
    if (photoId) {
      containerPhotoName.innerHTML = `<h1>${homePhotosArray[photoId].picture}</h1>`;
      containerPhotoImg.innerHTML = `<img src="${homePhotosArray[photoId].detailSrc}" alt="${homePhotosArray[photoId].picture}" />`;
      containerUser.innerHTML = `
            <div class="container-user-img">
            <img src="${homePhotosArray[photoId].photographerImg}" /> 
            </div>
            <div class="container-user-name">
                <p> ${homePhotosArray[photoId].photographer} </p>
            </div>`;
      containerDate.innerHTML = `Posté ${homePhotosArray[photoId].createdAt}`;
      containerContent.innerHTML = `<p>${homePhotosArray[photoId].content}</p>`;
    }
  } catch {
    location.assign("./index.html");
  }
};

diplayHomePhotoDetail();
