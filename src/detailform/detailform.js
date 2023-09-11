import "../assets/sass/styles.scss";
import "./detailform.scss";

const containerPhotoName = document.querySelector(".container-photo-name");
const containerPhotoImg = document.querySelector(".container-photo-img");
const containerUser = document.querySelector(".container-user");
const containerDate = document.querySelector(".container-date");
const containerContent = document.querySelector(".container-content");
const containerButton = document.querySelector(".container-button");

const displayDetailFormPhoto = async () => {
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
          <img src="${formPhoto.photographer}" /> 
          </div>
          <div class="container-user-name">
              <p> ${formPhoto.photographer} </p>
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
          <button class="button edit-button">Éditer</button>
          <button class="button delete-button">Supprimer</button>`;

        const formPhotoImg = containerPhotoImg.querySelector("img");
        switch (formPhoto.picture) {
          case "Un Désert en Cisjordanie": {
            formPhotoImg.src =
              "./assets/images/form-photos/form-deserts/desert-cj.jpg";
            break;
          }
          case "Un Désert en Jordanie": {
            formPhotoImg.src =
              "./assets/images/form-photos/form-deserts/desert-jo.jpg";
            break;
          }
          case "Un Désert au Maroc": {
            formPhotoImg.src =
              "./assets/images/form-photos/form-deserts/desert-ma.jpg";
            break;
          }
          case "Un Désert en Namibie (Océan Atlantique)": {
            formPhotoImg.src =
              "./assets/images/form-photos/form-deserts/desert-oa-na.jpg";
            break;
          }
          case "Un Désert en Oman": {
            formPhotoImg.src =
              "./assets/images/form-photos/form-deserts/desert-om.jpg";
            break;
          }
          case "Un Désert au Pérou": {
            formPhotoImg.src =
              "./assets/images/form-photos/form-deserts/desert-pe.jpg";
            break;
          }
          case "Un Désert en Arabie Saoudite": {
            formPhotoImg.src =
              "./assets/images/form-photos/form-deserts/desert-sa.jpg";
            break;
          }
          case "Un Désert en Namibie (Sud-Ouest)": {
            formPhotoImg.src =
              "./assets/images/form-photos/form-deserts/desert-so-na.jpg";
            break;
          }
          case "Le Désert du Sahara (Soir)": {
            formPhotoImg.src =
              "./assets/images/form-photos/form-deserts/desert-soir-eh.jpg";
            break;
          }
          case "Sable Blanc du Nouveau-Mexique (USA)": {
            formPhotoImg.src =
              "./assets/images/form-photos/form-deserts/sable-blanc-nmex-us.jpg";
            break;
          }
        }

        switch (formPhoto.picture) {
          case "Une Forêt en Australie": {
            formPhotoImg.src =
              "./assets/images/form-photos/form-forets/foret-au.jpg";
            break;
          }
          case "Une Forêt au Canada": {
            formPhotoImg.src =
              "./assets/images/form-photos/form-forets/foret-ca.jpg";
            break;
          }
          case "Une Forêt en Finlande": {
            formPhotoImg.src =
              "./assets/images/form-photos/form-forets/foret-fi.jpg";
            break;
          }
          case "Une Forêt en Croatie": {
            formPhotoImg.src =
              "./assets/images/form-photos/form-forets/foret-hr.jpg";
            break;
          }
          case "Une Forêt en Inde": {
            formPhotoImg.src =
              "./assets/images/form-photos/form-forets/foret-in.jpg";
            break;
          }
          case "Une Forêt en Italie": {
            formPhotoImg.src =
              "./assets/images/form-photos/form-forets/foret-it.jpg";
            break;
          }
          case "Une Forêt au Japon": {
            formPhotoImg.src =
              "./assets/images/form-photos/form-forets/foret-jp.jpg";
            break;
          }
          case "La Forêt des Loups": {
            formPhotoImg.src =
              "./assets/images/form-photos/form-forets/foret-loups.jpg";
            break;
          }
          case "Une Forêt au Nouvelle-Zélande": {
            formPhotoImg.src =
              "./assets/images/form-photos/form-forets/foret-nz.jpg";
            break;
          }
          case "Une Forêt en Washington (USA)": {
            formPhotoImg.src =
              "./assets/images/form-photos/form-forets/foret-wash-us.jpg";
            break;
          }
        }

        switch (formPhoto.picture) {
          case "Une Plage en Australie": {
            formPhotoImg.src =
              "./assets/images/form-photos/form-plages/plage-au.jpg";
            break;
          }
          case "Une Plage au Brésil": {
            formPhotoImg.src =
              "./assets/images/form-photos/form-plages/plage-br.jpg";
            break;
          }
          case "Une Plage en Grande-Bretagne": {
            formPhotoImg.src =
              "./assets/images/form-photos/form-plages/plage-gb.jpg";
            break;
          }
          case "Une Plage en Italie": {
            formPhotoImg.src =
              "./assets/images/form-photos/form-plages/plage-it.jpg";
            break;
          }
          case "Une Plage en Madagascar": {
            formPhotoImg.src =
              "./assets/images/form-photos/form-plages/plage-mg.jpg";
            break;
          }
          case "Une Plage au Mexique": {
            formPhotoImg.src =
              "./assets/images/form-photos/form-plages/plage-mx.jpg";
            break;
          }
          case "Une Plage en Nouvelle-Calédonie": {
            formPhotoImg.src =
              "./assets/images/form-photos/form-plages/plage-nc.jpg";
            break;
          }
          case "Une Plage en Polynésie Française": {
            formPhotoImgo.src =
              "./assets/images/form-photos/form-plages/plage-pf.jpg";
            break;
          }
          case "Une Plage aux Sychelles": {
            formPhotoImg.src =
              "./assets/images/form-photos/form-plages/plage-sc.jpg";
            break;
          }
          case "Une Plage en Thaïlande": {
            formPhotoImg.src =
              "./assets/images/form-photos/form-plages/plage-th.jpg";
            break;
          }
        }

        switch (formPhoto.picture) {
          case "Une Ville au Chili": {
            formPhotoImg.src =
              "./assets/images/form-photos/form-villes/ville-cl.jpg";
            break;
          }
          case "Une Ville en Chine": {
            formPhotoImg.src =
              "./assets/images/form-photos/form-villes/ville-cn.jpg";
            break;
          }
          case "Une Ville en Colombie": {
            formPhotoImg.src =
              "./assets/images/form-photos/form-villes/ville-co.jpg";
            break;
          }
          case "Une Ville en France": {
            formPhotoImg.src =
              "./assets/images/form-photos/form-villes/ville-fr.jpg";
            break;
          }
          case "Une Ville en Grande-Bretagne": {
            formPhotoImg.src =
              "./assets/images/form-photos/form-villes/ville-gb.jpg";
            break;
          }
          case "Une Ville au Japon (Jour)": {
            formPhotoImg.src =
              "./assets/images/form-photos/form-villes/ville-jour-jp.jpg";
            break;
          }
          case "Une Ville en Koweït": {
            formPhotoImg.src =
              "./assets/images/form-photos/form-villes/ville-kw.jpg";
            break;
          }
          case "Une Ville en Norvège": {
            formPhotoImg.src =
              "./assets/images/form-photos/form-villes/ville-no.jpg";
            break;
          }
          case "Une Ville Rural d'Allemagne": {
            formPhotoImg.src =
              "./assets/images/form-photos/form-villes/ville-rural-ge.jpg";
            break;
          }
          case "Une Ville d'Italie (Soir)": {
            formPhotoImg.src =
              "./assets/images/form-photos/form-villes/ville-soir-it.jpg";
            break;
          }
        }

        const userPhotoImg = containerUser.querySelector("img");

        switch (formPhoto.photographer) {
          case "Dora - L'Exploratrice": {
            userPhotoImg.src =
              "./assets/images/form-photos/form-villes/ville-cl.jpg";
            break;
          }
          case "Tad - L'Explorateur": {
            userPhotoImg.src =
              "./assets/images/form-photos/form-villes/ville-cn.jpg";
            break;
          }
          case "Polo - L'Explorateur": {
            userPhotoImg.src =
              "./assets/images/form-photos/form-villes/ville-co.jpg";
            break;
          }
        }

        switch (formPhoto.photographer) {
          case "Chihiro - La Voyageuse": {
            userPhotoImg.src =
              "./assets/images/form-photos/form-villes/ville-fr.jpg";
            break;
          }
          case "Robinson - Le Voyageur": {
            userPhotoImg.src =
              "./assets/images/form-photos/form-villes/ville-gb.jpg";
            break;
          }
          case "Phileas - Le Voyageur": {
            userPhotoImg.src =
              "./assets/images/form-photos/form-villes/ville-jour-jp.jpg";
            break;
          }
        }

        switch (formPhoto.photographer) {
          case "Jones - L'Archéologue": {
            userPhotoImg.src =
              "./assets/images/form-photos/form-villes/ville-kw.jpg";
            break;
          }
          case "Lara - L'Archéologue": {
            userPhotoImg.src =
              "./assets/images/form-photos/form-villes/ville-no.jpg";
            break;
          }
          case "Milo - L'Archéologue": {
            userPhotoImg.src =
              "./assets/images/form-photos/form-villes/ville-rural-ge.jpg";
            break;
          }
        }

        switch (formPhoto.photographer) {
          case "Tom - L'Aventurier": {
            userPhotoImg.src =
              "./assets/images/form-photos/form-villes/ville-soir-it.jpg";
            break;
          }
          case "Gamba - L'Aventurier": {
            userPhotoImg.src =
              "./assets/images/home-photos/home-villes/ville-ap-jp.jpg";
            break;
          }
          case "Sophie - L'Aventurière": {
            userPhotoImg.src =
              "./assets/images/home-photos/home-villes/ville-ar.jpg";
            break;
          }
        }
      } else {
        window.location.assign("./index.html");
      }
    }
  } catch {
    window.location.assign("./index.html");
  }
};

displayDetailFormPhoto();
