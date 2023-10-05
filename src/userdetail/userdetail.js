import "../assets/sass/styles.scss";
import "./userdetail.scss";
import { usersArray } from "../assets/javascripts/users.js";

const containerUserImg = document.querySelector("#container-user-img");
const containerUserName = document.querySelector("#container-user-name");
const containerUserProfile = document.querySelector("#container-user-profile");

const params = new URL(location.href);
const userName = params.search;

switch (userName) {
  case "?name=Gustave%20-%20L%27Aventurier": {
    containerUserName.innerHTML = `<p>${usersArray[0].photographer}</p>`;
    containerUserImg.innerHTML = `<img src="${usersArray[0].imgDetailSrc}" alt="${usersArray[0].imgDetailSrc}"/>`;
    containerUserProfile.innerHTML = `<p>${usersArray[0].profile}</p>`;
    break;
  }
  case "?name=Julie%20-%20L%27Aventuri%C3%A8re": {
    containerUserName.innerHTML = `<p>${usersArray[1].photographer}</p>`;
    containerUserImg.innerHTML = `<img src="${usersArray[1].imgDetailSrc}" alt="${usersArray[1].imgDetailSrc}"/>`;
    containerUserProfile.innerHTML = `<p>${usersArray[1].profile}</p>`;
    break;
  }
  case "?name=Henry%20-%20L%27Aventurier": {
    containerUserName.innerHTML = `<p>${usersArray[2].photographer}</p>`;
    containerUserImg.innerHTML = `<img src="${usersArray[2].imgDetailSrc}" alt="${usersArray[2].imgDetailSrc}"/>`;
    containerUserProfile.innerHTML = `<p>${usersArray[2].profile}</p>`;
    break;
  }
  case "?name=Zo%C3%A9%20-%20L%27Aventuri%C3%A8re": {
    containerUserName.innerHTML = `<p>${usersArray[3].photographer}</p>`;
    containerUserImg.innerHTML = `<img src="${usersArray[3].imgDetailSrc}" alt="${usersArray[3].imgDetailSrc}"/>`;
    containerUserProfile.innerHTML = `<p>${usersArray[3].profile}</p>`;
    break;
  }

  case "?name=Flora%20-%20L%27Exploratrice": {
    containerUserName.innerHTML = `<p>${usersArray[4].photographer}</p>`;
    containerUserImg.innerHTML = `<img src="${usersArray[4].imgDetailSrc}" alt="${usersArray[4].imgDetailSrc}"/>`;
    containerUserProfile.innerHTML = `<p>${usersArray[4].profile}</p>`;
    break;
  }
  case "?name=Denver%20-%20L%27Explorateur": {
    containerUserName.innerHTML = `<p>${usersArray[5].photographer}</p>`;
    containerUserImg.innerHTML = `<img src="${usersArray[5].imgDetailSrc}" alt="${usersArray[5].imgDetailSrc}"/>`;
    containerUserProfile.innerHTML = `<p>${usersArray[5].profile}</p>`;
    break;
  }
  case "?name=Inaya%20-%20L%27Exploratrice": {
    containerUserName.innerHTML = `<p>${usersArray[6].photographer}</p>`;
    containerUserImg.innerHTML = `<img src="${usersArray[6].imgDetailSrc}" alt="${usersArray[6].imgDetailSrc}"/>`;
    containerUserProfile.innerHTML = `<p>${usersArray[6].profile}</p>`;
    break;
  }
  case "?name=Seth%20-%20L%27Explorateur": {
    containerUserName.innerHTML = `<p>${usersArray[7].photographer}</p>`;
    containerUserImg.innerHTML = `<img src="${usersArray[7].imgDetailSrc}" alt="${usersArray[7].imgDetailSrc}"/>`;
    containerUserProfile.innerHTML = `<p>${usersArray[7].profile}</p>`;
    break;
  }

  case "?name=Lance%20-%20Le%20Visiteur": {
    containerUserName.innerHTML = `<p>${usersArray[8].photographer}</p>`;
    containerUserImg.innerHTML = `<img src="${usersArray[8].imgDetailSrc}" alt="${usersArray[8].imgDetailSrc}"/>`;
    containerUserProfile.innerHTML = `<p>${usersArray[8].profile}</p>`;
    break;
  }
  case "?name=Nadia%20-%20La%20Visiteuse": {
    containerUserName.innerHTML = `<p>${usersArray[9].photographer}</p>`;
    containerUserImg.innerHTML = `<img src="${usersArray[9].imgDetailSrc}" alt="${usersArray[9].imgDetailSrc}"/>`;
    containerUserProfile.innerHTML = `<p>${usersArray[9].profile}</p>`;
    break;
  }
  case "?name=Xavier%20-%20Le%20Visiteur": {
    containerUserName.innerHTML = `<p>${usersArray[10].photographer}</p>`;
    containerUserImg.innerHTML = `<img src="${usersArray[10].imgDetailSrc}" alt="${usersArray[10].imgDetailSrc}"/>`;
    containerUserProfile.innerHTML = `<p>${usersArray[10].profile}</p>`;
    break;
  }
  case "?name=Ornella%20-%20La%20Visiteuse": {
    containerUserName.innerHTML = `<p>${usersArray[11].photographer}</p>`;
    containerUserImg.innerHTML = `<img src="${usersArray[11].imgDetailSrc}" alt="${usersArray[11].imgDetailSrc}"/>`;
    containerUserProfile.innerHTML = `<p>${usersArray[11].profile}</p>`;
    break;
  }

  case "?name=Cerise%20-%20La%20Voyageuse": {
    containerUserName.innerHTML = `<p>${usersArray[12].photographer}</p>`;
    containerUserImg.innerHTML = `<img src="${usersArray[12].imgDetailSrc}" alt="${usersArray[12].imgDetailSrc}"/>`;
    containerUserProfile.innerHTML = `<p>${usersArray[12].profile}</p>`;
    break;
  }
  case "?name=Philibert%20-%20Le%20Voyageur": {
    containerUserName.innerHTML = `<p>${usersArray[13].photographer}</p>`;
    containerUserImg.innerHTML = `<img src="${usersArray[13].imgDetailSrc}" alt="${usersArray[13].imgDetailSrc}"/>`;
    containerUserProfile.innerHTML = `<p>${usersArray[13].profile}</p>`;
    break;
  }
  case "?name=Roxane%20-%20La%20Voyageuse": {
    containerUserName.innerHTML = `<p>${usersArray[14].photographer}</p>`;
    containerUserImg.innerHTML = `<img src="${usersArray[14].imgDetailSrc}" alt="${usersArray[14].imgDetailSrc}"/>`;
    containerUserProfile.innerHTML = `<p>${usersArray[14].profile}</p>`;
    break;
  }
  case "?name=Yuu%20-%20Le%20Voyageur": {
    containerUserName.innerHTML = `<p>${usersArray[15].photographer}</p>`;
    containerUserImg.innerHTML = `<img src="${usersArray[15].imgDetailSrc}" alt="${usersArray[15].imgDetailSrc}"/>`;
    containerUserProfile.innerHTML = `<p>${usersArray[15].profile}</p>`;
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
