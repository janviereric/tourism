import "../assets/sass/styles.scss";
import "./editform.scss";

const params = new URL(location.href);
const photoId = params.searchParams.get("id");
const buttonCancel = document.querySelector(".button-cancel");

const fillForm = (formPhoto) => {
  const picture = document.querySelector("select[name='picture']");
  const category = document.querySelector(
    `input[value='${formPhoto.category}']`
  );
  const content = document.querySelector("textarea");
  console.log(picture);
  console.log(category);
  console.log(content);
  picture.value = formPhoto.picture;
  category.value = formPhoto.category;
  category.setAttribute("checked", `${formPhoto.category}`);
  content.value = formPhoto.content;
};

const initForm = async () => {
  if (photoId) {
    const response = await fetch(`https://restapi.fr/api/photos/${photoId}`);
    if (response.status < 300) {
      const formPhoto = await response.json();
      fillForm(formPhoto);
      console.log(formPhoto);
      const containerNamePhoto = document.querySelector(
        ".container-name-photo"
      );
      containerNamePhoto.innerHTML = `<h3>${formPhoto.picture}</h3>`;
      const containerDetailPhoto = document.querySelector(
        ".container-detail-photo"
      );
      containerDetailPhoto.innerHTML = `<img src="${formPhoto.picture}" alt="${formPhoto.picture}" />`;

      const formPhotoImg = containerDetailPhoto.querySelector("img");
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
      const select = document.querySelector("select");
      select.addEventListener("change", (event) => {
        const selectName = event.target.value;
        switch (selectName) {
          case "Un Désert en Cisjordanie": {
            containerNamePhoto.innerHTML = "<h3>Un Désert en Cijordanie</h3>";
            formPhotoImg.src =
              "./assets/images/form-detail/form-deserts-detail/desert-detail-cj.jpg";
            break;
          }
          case "Un Désert en Jordanie": {
            containerNamePhoto.innerHTML = "<h3>Un Désert en Jordanie</h3>";
            formPhotoImg.src =
              "./assets/images/form-detail/form-deserts-detail/desert-detail-jo.jpg";
            break;
          }
          case "Un Désert au Maroc": {
            containerNamePhoto.innerHTML = "<h3>Un Désert au Maroc</h3>";
            formPhotoImg.src =
              "./assets/images/form-detail/form-deserts-detail/desert-detail-ma.jpg";
            break;
          }
          case "Un Désert en Namibie (Océan Atlantique)": {
            containerNamePhoto.innerHTML =
              "<h3>Un Désert en Namibie (Océan Atlantique)</h3>";
            formPhotoImg.src =
              "./assets/images/form-detail/form-deserts-detail/desert-detail-oa-na.jpg";
            break;
          }
          case "Un Désert en Oman": {
            containerNamePhoto.innerHTML = "<h3>Un Désert en Oman</h3>";
            formPhotoImg.src =
              "./assets/images/form-detail/form-deserts-detail/desert-detail-om.jpg";
            break;
          }
          case "Un Désert au Pérou": {
            containerNamePhoto.innerHTML = "<h3>Un Désert au Pérou</h3>";
            formPhotoImg.src =
              "./assets/images/form-detail/form-deserts-detail/desert-detail-pe.jpg";
            break;
          }
          case "Un Désert en Arabie Saoudite": {
            containerNamePhoto.innerHTML =
              "<h3>Un Désert en Arabie Saoudite</h3>";
            formPhotoImg.src =
              "./assets/images/form-detail/form-deserts-detail/desert-detail-sa.jpg";
            break;
          }
          case "Un Désert en Namibie (Sud-Ouest)": {
            containerNamePhoto.innerHTML =
              "<h3>Un Désert en Namibie (Sud-Ouest)</h3>";
            formPhotoImg.src =
              "./assets/images/form-detail/form-deserts-detail/desert-detail-so-na.jpg";
            break;
          }
          case "Le Désert du Sahara (Soir)": {
            containerNamePhoto.innerHTML =
              "<h3>Le Désert du Sahara (Soir)</h3>";
            formPhotoImg.src =
              "./assets/images/form-detail/form-deserts-detail/desert-detail-soir-eh.jpg";
            break;
          }
          case "Sable Blanc du Nouveau-Mexique (USA)": {
            containerNamePhoto.innerHTML =
              "<h3>Sable Blanc du Nouveau-Mexique (USA)</h3>";
            formPhotoImg.src =
              "./assets/images/form-detail/form-deserts-detail/sable-blanc-detail-nmex-us.jpg";
            break;
          }
        }

        switch (selectName) {
          case "Une Forêt en Australie": {
            containerNamePhoto.innerHTML = "<h3>Une Forêt en Australie</h3>";
            formPhotoImg.src =
              "./assets/images/form-detail/form-forets-detail/foret-detail-au.jpg";
            break;
          }
          case "Une Forêt au Canada": {
            containerNamePhoto.innerHTML = "<h3>Une Forêt au Canada</h3>";
            formPhotoImg.src =
              "./assets/images/form-detail/form-forets-detail/foret-detail-ca.jpg";
            break;
          }
          case "Une Forêt en Finlande": {
            containerNamePhoto.innerHTML = "<h3>Une Forêt en Finlande</h3>";
            formPhotoImg.src =
              "./assets/images/form-detail/form-forets-detail/foret-detail-fi.jpg";
            break;
          }
          case "Une Forêt en Croatie": {
            containerNamePhoto.innerHTML = "<h3>Une Forêt en Croatie</h3>";
            formPhotoImg.src =
              "./assets/images/form-detail/form-forets-detail/foret-detail-hr.jpg";
            break;
          }
          case "Une Forêt en Inde": {
            containerNamePhoto.innerHTML = "<h3>Une Forêt en Inde</h3>";
            formPhotoImg.src =
              "./assets/images/form-detail/form-forets-detail/foret-detail-in.jpg";
            break;
          }
          case "Une Forêt en Italie": {
            containerNamePhoto.innerHTML = "<h3>Une Forêt en Italie</h3>";
            formPhotoImg.src =
              "./assets/images/form-detail/form-forets-detail/foret-detail-it.jpg";
            break;
          }
          case "Une Forêt au Japon": {
            containerNamePhoto.innerHTML = "<h3>Une Forêt au Japon</h3>";
            formPhotoImg.src =
              "./assets/images/form-detail/form-forets-detail/foret-detail-jp.jpg";
            break;
          }
          case "La Forêt des Loups": {
            containerNamePhoto.innerHTML = "<h3>La Forêt des Loups</h3>";
            formPhotoImg.src =
              "./assets/images/form-detail/form-forets-detail/foret-detail-loups.jpg";
            break;
          }
          case "Une Forêt au Nouvelle-Zélande": {
            containerNamePhoto.innerHTML =
              "<h3>Une Forêt au Nouvelle-Zélande</h3>";
            formPhotoImg.src =
              "./assets/images/form-detail/form-forets-detail/foret-detail-nz.jpg";
            break;
          }
          case "Une Forêt en Washington (USA)": {
            containerNamePhoto.innerHTML =
              "<h3>Une Forêt en Washington (USA)</h3>";
            formPhotoImg.src =
              "./assets/images/form-detail/form-forets-detail/foret-detail-wash-us.jpg";
            break;
          }
        }

        switch (selectName) {
          case "Une Plage en Australie": {
            containerNamePhoto.innerHTML = "<h3>Une Plage en Australie</h3>";
            formPhotoImg.src =
              "./assets/images/form-detail/form-plages-detail/plage-detail-au.jpg";
            break;
          }
          case "Une Plage au Brésil": {
            containerNamePhoto.innerHTML = "<h3>Une Plage au Brésil</h3>";
            formPhotoImg.src =
              "./assets/images/form-detail/form-plages-detail/plage-detail-br.jpg";
            break;
          }
          case "Une Plage en Grande-Bretagne": {
            containerNamePhoto.innerHTML =
              "<h3>Une Plage en Grande-Bretagne</h3>";
            formPhotoImg.src =
              "./assets/images/form-detail/form-plages-detail/plage-detail-gb.jpg";
            break;
          }
          case "Une Plage en Italie": {
            containerNamePhoto.innerHTML = "<h3>Une Plage en Italie</h3>";
            formPhotoImg.src =
              "./assets/images/form-detail/form-plages-detail/plage-detail-it.jpg";
            break;
          }
          case "Une Plage en Madagascar": {
            containerNamePhoto.innerHTML = "<h3>Une Plage en Madagascar</h3>";
            formPhotoImg.src =
              "./assets/images/form-detail/form-plages-detail/plage-detail-mg.jpg";
            break;
          }
          case "Une Plage au Mexique": {
            containerNamePhoto.innerHTML = "<h3>Une Plage au Mexique</h3>";
            formPhotoImg.src =
              "./assets/images/form-detail/form-plages-detail/plage-detail-mx.jpg";
            break;
          }
          case "Une Plage en Nouvelle-Calédonie": {
            containerNamePhoto.innerHTML =
              "<h3>Une Plage en Nouvelle-Calédonie</h3>";
            formPhotoImg.src =
              "./assets/images/form-detail/form-plages-detail/plage-detail-nc.jpg";
            break;
          }
          case "Une Plage en Polynésie Française": {
            containerNamePhoto.innerHTML =
              "<h3>Une Plage en Polynésie Française</h3>";
            formPhotoImg.src =
              "./assets/images/form-detail/form-plages-detail/plage-detail-pf.jpg";
            break;
          }
          case "Une Plage aux Sychelles": {
            containerNamePhoto.innerHTML = "<h3>Une Plage aux Sychelles</h3>";
            formPhotoImg.src =
              "./assets/images/form-detail/form-plages-detail/plage-detail-sc.jpg";
            break;
          }
          case "Une Plage en Thaïlande": {
            containerNamePhoto.innerHTML = "<h3>Une Plage en Thaïlande</h3>";
            formPhotoImg.src =
              "./assets/images/form-detail/form-plages-detail/plage-detail-th.jpg";
            break;
          }
        }

        switch (selectName) {
          case "Une Ville au Chili": {
            containerNamePhoto.innerHTML = "<h3>Une Ville au Chili</h3>";
            formPhotoImg.src =
              "./assets/images/form-detail/form-villes-detail/ville-detail-cl.jpg";
            break;
          }
          case "Une Ville en Chine": {
            containerNamePhoto.innerHTML = "<h3>Une Ville en Chine</h3>";
            formPhotoImg.src =
              "./assets/images/form-detail/form-villes-detail/ville-detail-cn.jpg";
            break;
          }
          case "Une Ville en Colombie": {
            containerNamePhoto.innerHTML = "<h3>Une Ville en Colombie</h3>";
            formPhotoImg.src =
              "./assets/images/form-detail/form-villes-detail/ville-detail-co.jpg";
            break;
          }
          case "Une Ville en France": {
            containerNamePhoto.innerHTML = "<h3>Une Ville en France</h3>";
            formPhotoImg.src =
              "./assets/images/form-detail/form-villes-detail/ville-detail-fr.jpg";
            break;
          }
          case "Une Ville en Grande-Bretagne": {
            containerNamePhoto.innerHTML =
              "<h3>Une Ville en Grande-Bretagne</h3>";
            formPhotoImg.src =
              "./assets/images/form-detail/form-villes-detail/ville-detail-gb.jpg";
            break;
          }
          case "Une Ville au Japon (Jour)": {
            containerNamePhoto.innerHTML = "<h3>Une Ville au Japon (Jour)</h3>";
            formPhotoImg.src =
              "./assets/images/form-detail/form-villes-detail/ville-detail-jour-jp.jpg";
            break;
          }
          case "Une Ville en Koweït": {
            containerNamePhoto.innerHTML = "<h3>Une Ville en Koweït</h3>";
            formPhotoImg.src =
              "./assets/images/form-detail/form-villes-detail/ville-detail-kw.jpg";
            break;
          }
          case "Une Ville en Norvège": {
            containerNamePhoto.innerHTML = "<h3>Une Ville en Norvège</h3>";
            formPhotoImg.src =
              "./assets/images/form-detail/form-villes-detail/ville-detail-no.jpg";
            break;
          }
          case "Une Ville Rural d'Allemagne": {
            containerNamePhoto.innerHTML =
              "<h3>Une Ville Rural d'Allemagne</h3>";
            formPhotoImg.src =
              "./assets/images/form-detail/form-villes-detail/ville-detail-rural-ge.jpg";
            break;
          }
          case "Une Ville d'Italie (Soir)": {
            containerNamePhoto.innerHTML = "<h3>Une Ville d'Italie (Soir)</h3>";
            formPhotoImg.src =
              "./assets/images/form-detail/form-villes-detail/ville-detail-soir-it.jpg";
            break;
          }
        }
      });
    }
  }
};

buttonCancel.addEventListener("click", (event) => {
  location.assign(`./detailform.html?id=${photoId}`);
});

initForm();
