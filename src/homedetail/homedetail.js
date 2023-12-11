import "../assets/sass/styles.scss";
import "./homedetail.scss";
import { homePhotosArray } from "../assets/javascripts/link.js";

const containerPhotoName = document.querySelector(".container-photo-name");
const containerPhotoImg = document.querySelector(".container-photo-img");
const containerAdmin = document.querySelector(".container-admin");
const containerDate = document.querySelector(".container-date");
const containerContent = document.querySelector(".container-content");
const params = new URL(location.href);
const photoId = params.searchParams.get("id");

export const diplayHomePhotoDetail = async () => {
  try {
    if (photoId) {
      containerPhotoName.innerHTML = `<h1>${homePhotosArray[photoId].picture}</h1>`;
      containerPhotoImg.innerHTML = `<img src="${homePhotosArray[photoId].detailSrc}" alt="${homePhotosArray[photoId].picture}" />`;
      containerAdmin.innerHTML = `
            <div class="container-admin-img">
            <img id="admin-img" src="${homePhotosArray[photoId].photographerImg}" /> 
            </div>
            <div class="container-admin-name">
                <p id="admin-name"> ${homePhotosArray[photoId].photographer} </p>
            </div>`;
      containerDate.innerHTML = `Posté ${homePhotosArray[photoId].createdAt}`;
      containerContent.innerHTML = `<p>${homePhotosArray[photoId].content}</p>`;

      const buttonAdminImg = containerAdmin.querySelector("#admin-img");
      buttonAdminImg.setAttribute(
        "data-adminname",
        `${homePhotosArray[photoId].photographer}`
      );
      buttonAdminImg.addEventListener("click", (event) => {
        event.stopPropagation();
        const target = event.target;
        const formAdminName = target.dataset.adminname;
        location.assign(`./admindetail.html?name=${formAdminName}`);
      });

      const buttonAdminName = containerAdmin.querySelector("#admin-name");
      buttonAdminName.setAttribute(
        "data-adminname",
        `${homePhotosArray[photoId].photographer}`
      );
      buttonAdminName.addEventListener("click", (event) => {
        event.stopPropagation();
        const target = event.target;
        const formAdminName = target.dataset.adminname;
        location.assign(`./admindetail.html?name=${formAdminName}`);
      });
    }
  } catch {
    location.assign("./index.html");
  }
};

diplayHomePhotoDetail();
