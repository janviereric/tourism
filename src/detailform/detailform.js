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
        }

        switch (formPhoto.picture) {
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
        }

        switch (formPhoto.picture) {
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
        }

        switch (formPhoto.picture) {
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
