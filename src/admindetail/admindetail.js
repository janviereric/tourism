import "../assets/sass/styles.scss";
import "./admindetail.scss";
import { adminsArray } from "../assets/javascripts/admins.js";

const containerAdminImg = document.querySelector("#container-admin-img");
const containerAdminName = document.querySelector("#container-admin-name");
const containerAdminProfile = document.querySelector(
  "#container-admin-profile"
);

const params = new URL(location.href);
const adminName = params.search;

switch (adminName) {
  case "?name=Alice%20-%20L%27Administratrice": {
    containerAdminName.innerHTML = `<p>${adminsArray[0].photographer}</p>`;
    containerAdminImg.innerHTML = `<img src="${adminsArray[0].imgDetailSrc}" alt="${adminsArray[0].imgDetailSrc}"/>`;
    containerAdminProfile.innerHTML = `<p>${adminsArray[0].profile}</p>`;
    break;
  }
  case "?name=Ernest%20-%20L%27Administrateur": {
    containerAdminName.innerHTML = `<p>${adminsArray[1].photographer}</p>`;
    containerAdminImg.innerHTML = `<img src="${adminsArray[1].imgDetailSrc}" alt="${adminsArray[1].imgDetailSrc}"/>`;
    containerAdminProfile.innerHTML = `<p>${adminsArray[1].profile}</p>`;
    break;
  }
  case "?name=Mia%20-%20L%27Administratrice": {
    containerAdminName.innerHTML = `<p>${adminsArray[2].photographer}</p>`;
    containerAdminImg.innerHTML = `<img src="${adminsArray[2].imgDetailSrc}" alt="${adminsArray[2].imgDetailSrc}"/>`;
    containerAdminProfile.innerHTML = `<p>${adminsArray[2].profile}</p>`;
    break;
  }
  case "?name=Ben%20-%20L%27Administrateur": {
    containerAdminName.innerHTML = `<p>${adminsArray[3].photographer}</p>`;
    containerAdminImg.innerHTML = `<img src="${adminsArray[3].imgDetailSrc}" alt="${adminsArray[3].imgDetailSrc}"/>`;
    containerAdminProfile.innerHTML = `<p>${adminsArray[3].profile}</p>`;
    break;
  }
}

const containerButton = document.querySelector("#container-button");
containerButton.innerHTML = `
          <button class="button button-back">Retour</button>`;
const buttonBack = containerButton.querySelector("button");

buttonBack.addEventListener("click", (event) => {
  event.stopPropagation();
  history.back();
});
