import "../assets/sass/styles.scss";
import "./formdetail.scss";

const containerPhotoName = document.querySelector(".container-photo-name");
const containerPhotoImg = document.querySelector(".container-photo-img");
const containerUser = document.querySelector(".container-user");
const containerDate = document.querySelector(".container-date");
const containerContent = document.querySelector(".container-content");
const containerButton = document.querySelector(".container-button");

const displayFormPhotoDetail = async () => {
  try {
    const params = new URL(location.href);
    const photoId = params.searchParams.get("id");
    if (photoId) {
      const response = await fetch(`https://restapi.fr/api/photos/${photoId}`);
      if (response.status < 300) {
        const formPhoto = await response.json();
        containerPhotoName.innerHTML = `<h1>${formPhoto.picture}</h1>`;
        containerPhotoImg.innerHTML = `<img src="${formPhoto.picture}" alt="${formPhoto.picture}" />`;
        containerUser.innerHTML = `
          <div class="container-user-img">
          <img id="user-img" src="${formPhoto.photographer}" /> 
          </div>
          <div class="container-user-name">
              <p id="user-name"> ${formPhoto.photographer} </p>
          </div>`;
        containerDate.innerHTML = `Posté le ${new Date(
          formPhoto.createdAt
        ).toLocaleDateString("fr-FR", {
          weekday: "long",
          day: "2-digit",
          month: "long",
          year: "numeric",
        })}`;
        containerContent.innerHTML = `<p>${formPhoto.content}</p>`;
        containerButton.innerHTML = `
          <button class="button button-edit">Éditer</button>
          <button class="button button-delete">Supprimer</button>`;

        const formPhotoImg = containerPhotoImg.querySelector("img");
        switch (formPhoto.picture) {
          case "Un Désert en Cisjordanie": {
            formPhotoImg.src =
              "./assets/images/form-detail/form-deserts-detail/desert-detail-cj.jpg";
            break;
          }
          case "Un Désert en Jordanie": {
            formPhotoImg.src =
              "./assets/images/form-detail/form-deserts-detail/desert-detail-jo.jpg";
            break;
          }
          case "Un Désert au Maroc": {
            formPhotoImg.src =
              "./assets/images/form-detail/form-deserts-detail/desert-detail-ma.jpg";
            break;
          }
          case "Un Désert en Namibie (Océan Atlantique)": {
            formPhotoImg.src =
              "./assets/images/form-detail/form-deserts-detail/desert-detail-oa-na.jpg";
            break;
          }
          case "Un Désert en Oman": {
            formPhotoImg.src =
              "./assets/images/form-detail/form-deserts-detail/desert-detail-om.jpg";
            break;
          }
          case "Un Désert au Pérou": {
            formPhotoImg.src =
              "./assets/images/form-detail/form-deserts-detail/desert-detail-pe.jpg";
            break;
          }
          case "Un Désert en Arabie Saoudite": {
            formPhotoImg.src =
              "./assets/images/form-detail/form-deserts-detail/desert-detail-sa.jpg";
            break;
          }
          case "Un Désert en Namibie (Sud-Ouest)": {
            formPhotoImg.src =
              "./assets/images/form-detail/form-deserts-detail/desert-detail-so-na.jpg";
            break;
          }
          case "Le Désert du Sahara (Soir)": {
            formPhotoImg.src =
              "./assets/images/form-detail/form-deserts-detail/desert-detail-soir-eh.jpg";
            break;
          }
          case "Sable Blanc du Nouveau-Mexique (USA)": {
            formPhotoImg.src =
              "./assets/images/form-detail/form-deserts-detail/sable-blanc-detail-nmex-us.jpg";
            break;
          }

          case "Une Forêt en Australie": {
            formPhotoImg.src =
              "./assets/images/form-detail/form-forets-detail/foret-detail-au.jpg";
            break;
          }
          case "Une Forêt au Canada": {
            formPhotoImg.src =
              "./assets/images/form-detail/form-forets-detail/foret-detail-ca.jpg";
            break;
          }
          case "Une Forêt en Finlande": {
            formPhotoImg.src =
              "./assets/images/form-detail/form-forets-detail/foret-detail-fi.jpg";
            break;
          }
          case "Une Forêt en Croatie": {
            formPhotoImg.src =
              "./assets/images/form-detail/form-forets-detail/foret-detail-hr.jpg";
            break;
          }
          case "Une Forêt en Inde": {
            formPhotoImg.src =
              "./assets/images/form-detail/form-forets-detail/foret-detail-in.jpg";
            break;
          }
          case "Une Forêt en Italie": {
            formPhotoImg.src =
              "./assets/images/form-detail/form-forets-detail/foret-detail-it.jpg";
            break;
          }
          case "Une Forêt au Japon": {
            formPhotoImg.src =
              "./assets/images/form-detail/form-forets-detail/foret-detail-jp.jpg";
            break;
          }
          case "La Forêt des Loups": {
            formPhotoImg.src =
              "./assets/images/form-detail/form-forets-detail/foret-detail-loups.jpg";
            break;
          }
          case "Une Forêt au Nouvelle-Zélande": {
            formPhotoImg.src =
              "./assets/images/form-detail/form-forets-detail/foret-detail-nz.jpg";
            break;
          }
          case "Une Forêt en Washington (USA)": {
            formPhotoImg.src =
              "./assets/images/form-detail/form-forets-detail/foret-detail-wash-us.jpg";
            break;
          }

          case "Une Plage en Australie": {
            formPhotoImg.src =
              "./assets/images/form-detail/form-plages-detail/plage-detail-au.jpg";
            break;
          }
          case "Une Plage au Brésil": {
            formPhotoImg.src =
              "./assets/images/form-detail/form-plages-detail/plage-detail-br.jpg";
            break;
          }
          case "Une Plage en Grande-Bretagne": {
            formPhotoImg.src =
              "./assets/images/form-detail/form-plages-detail/plage-detail-gb.jpg";
            break;
          }
          case "Une Plage en Italie": {
            formPhotoImg.src =
              "./assets/images/form-detail/form-plages-detail/plage-detail-it.jpg";
            break;
          }
          case "Une Plage en Madagascar": {
            formPhotoImg.src =
              "./assets/images/form-detail/form-plages-detail/plage-detail-mg.jpg";
            break;
          }
          case "Une Plage au Mexique": {
            formPhotoImg.src =
              "./assets/images/form-detail/form-plages-detail/plage-detail-mx.jpg";
            break;
          }
          case "Une Plage en Nouvelle-Calédonie": {
            formPhotoImg.src =
              "./assets/images/form-detail/form-plages-detail/plage-detail-nc.jpg";
            break;
          }
          case "Une Plage en Polynésie Française": {
            formPhotoImg.src =
              "./assets/images/form-detail/form-plages-detail/plage-detail-pf.jpg";
            break;
          }
          case "Une Plage aux Sychelles": {
            formPhotoImg.src =
              "./assets/images/form-detail/form-plages-detail/plage-detail-sc.jpg";
            break;
          }
          case "Une Plage en Thaïlande": {
            formPhotoImg.src =
              "./assets/images/form-detail/form-plages-detail/plage-detail-th.jpg";
            break;
          }

          case "Une Ville au Chili": {
            formPhotoImg.src =
              "./assets/images/form-detail/form-villes-detail/ville-detail-cl.jpg";
            break;
          }
          case "Une Ville en Chine": {
            formPhotoImg.src =
              "./assets/images/form-detail/form-villes-detail/ville-detail-cn.jpg";
            break;
          }
          case "Une Ville en Colombie": {
            formPhotoImg.src =
              "./assets/images/form-detail/form-villes-detail/ville-detail-co.jpg";
            break;
          }
          case "Une Ville en France": {
            formPhotoImg.src =
              "./assets/images/form-detail/form-villes-detail/ville-detail-fr.jpg";
            break;
          }
          case "Une Ville en Grande-Bretagne": {
            formPhotoImg.src =
              "./assets/images/form-detail/form-villes-detail/ville-detail-gb.jpg";
            break;
          }
          case "Une Ville au Japon (Jour)": {
            formPhotoImg.src =
              "./assets/images/form-detail/form-villes-detail/ville-detail-jour-jp.jpg";
            break;
          }
          case "Une Ville en Koweït": {
            formPhotoImg.src =
              "./assets/images/form-detail/form-villes-detail/ville-detail-kw.jpg";
            break;
          }
          case "Une Ville en Norvège": {
            formPhotoImg.src =
              "./assets/images/form-detail/form-villes-detail/ville-detail-no.jpg";
            break;
          }
          case "Une Ville Rural d'Allemagne": {
            formPhotoImg.src =
              "./assets/images/form-detail/form-villes-detail/ville-detail-rural-ge.jpg";
            break;
          }
          case "Une Ville d'Italie (Soir)": {
            formPhotoImg.src =
              "./assets/images/form-detail/form-villes-detail/ville-detail-soir-it.jpg";
            break;
          }
        }

        const userPhotoImg = containerUser.querySelector("img");
        switch (formPhoto.photographer) {
          case "Gustave - L'Aventurier": {
            userPhotoImg.src =
              "./assets/images/users/users-aventure/gustave-aventurier.jpg";
            break;
          }
          case "Julie - L'Aventurière": {
            userPhotoImg.src =
              "./assets/images/users/users-aventure/julie-aventuriere.jpg";
            break;
          }
          case "Henry - L'Aventurier": {
            userPhotoImg.src =
              "./assets/images/users/users-aventure/henry-aventurier.jpg";
            break;
          }
          case "Zoé - L'Aventurière": {
            userPhotoImg.src =
              "./assets/images/users/users-aventure/zoe-aventuriere.jpg";
            break;
          }

          case "Flora - L'Exploratrice": {
            userPhotoImg.src =
              "./assets/images/users/users-exploration/flora-exploratrice.jpg";
            break;
          }
          case "Denver - L'Explorateur": {
            userPhotoImg.src =
              "./assets/images/users/users-exploration/denver-explorateur.jpg";
            break;
          }
          case "Inaya - L'Exploratrice": {
            userPhotoImg.src =
              "./assets/images/users/users-exploration/inaya-exploratrice.jpg";
            break;
          }
          case "Seth - L'Explorateur": {
            userPhotoImg.src =
              "./assets/images/users/users-exploration/seth-explorateur.jpg";
            break;
          }

          case "Lance - Le Visiteur": {
            userPhotoImg.src =
              "./assets/images/users/users-visite/lance-visiteur.jpg";
            break;
          }
          case "Nadia - La Visiteuse": {
            userPhotoImg.src =
              "./assets/images/users/users-visite/nadia-visiteuse.jpg";
            break;
          }
          case "Xavier - Le Visiteur": {
            userPhotoImg.src =
              "./assets/images/users/users-visite/xavier-visiteur.jpg";
            break;
          }
          case "Ornella - La Visiteuse": {
            userPhotoImg.src =
              "./assets/images/users/users-visite/ornella-visiteuse.jpg";
            break;
          }

          case "Cerise - La Voyageuse": {
            userPhotoImg.src =
              "./assets/images/users/users-voyage/cerise-voyageuse.jpg";
            break;
          }
          case "Philibert - Le Voyageur": {
            userPhotoImg.src =
              "./assets/images/users/users-voyage/philibert-voyageur.jpg";
            break;
          }
          case "Roxane - La Voyageuse": {
            userPhotoImg.src =
              "./assets/images/users/users-voyage/roxane-voyageuse.jpg";
            break;
          }
          case "Yuu - Le Voyageur": {
            userPhotoImg.src =
              "./assets/images/users/users-voyage/yuu-voyageur.jpg";
            break;
          }
        }

        const buttonUserImg = containerUser.querySelector("#user-img");
        buttonUserImg.setAttribute(
          "data-username",
          `${formPhoto.photographer}`
        );
        buttonUserImg.addEventListener("click", (event) => {
          event.stopPropagation();
          const target = event.target;
          const formUserName = target.dataset.username;
          location.assign(`./userdetail.html?name=${formUserName}`);
        });

        const buttonUserName = containerUser.querySelector("#user-name");
        buttonUserName.setAttribute(
          "data-username",
          `${formPhoto.photographer}`
        );
        buttonUserName.addEventListener("click", (event) => {
          event.stopPropagation();
          const target = event.target;
          const formUserName = target.dataset.username;
          location.assign(`./userdetail.html?name=${formUserName}`);
        });

        const buttonEdit = containerButton.querySelector(".button-edit");
        buttonEdit.addEventListener("click", (event) => {
          event.stopPropagation();
          location.assign(`./formedit.html?id=${photoId}`);
        });

        const buttonDelete = containerButton.querySelector(".button-delete");
        buttonDelete.addEventListener("click", async (event) => {
          event.stopPropagation();
          try {
            const response = await fetch(
              `https://restapi.fr/api/photos/${photoId}`,
              { method: "DELETE" }
            );
            location.assign("./index.html");
          } catch (error) {
            console.log("error : ", error);
          }
        });
      } else {
        location.assign("./index.html");
      }
    }
  } catch {
    location.assign("./index.html");
  }
};

displayFormPhotoDetail();
