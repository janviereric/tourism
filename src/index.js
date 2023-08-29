import { async } from "regenerator-runtime";
import "./assets/sass/styles.scss";
import "./index.scss";
const photosContainer = document.querySelector("#photos-container");

////////////////////////////// home start //////////////////////////////
const homePhotosArray = [
  {
    _id: 1,
    src: "./assets/images/home-photos/home-deserts/desert-ae.jpg",
    picture: "Un Désert en Émirats Arabes Unis",
    category: "Guide",
    photographer: "JE - L'Administrateur",
    photographerImg: "./assets/images/janviereric.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean euismod elementum nisi quis eleifend quam. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Vitae tortor condimentum lacinia quis vel. Ultricies mi quis hendrerit dolor magna eget est. Eu tincidunt tortor aliquam nulla facilisi. Turpis egestas maecenas pharetra convallis. Neque viverra justo nec ultrices. Pharetra massa massa ultricies mi quis. Sed augue lacus viverra vitae congue eu. Nulla facilisi cras fermentum odio eu. Quis varius quam quisque id diam vel. Volutpat commodo sed egestas egestas fringilla. Erat nam at lectus urna duis convallis convallis tellus id.",
  },
  {
    _id: 2,
    src: "./assets/images/home-photos/home-forets/foret-automne.jpg",
    picture: "Une Forêt (Automne)",
    category: "Quête",
    photographer: "JE - L'Administrateur",
    photographerImg: "./assets/images/janviereric.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean euismod elementum nisi quis eleifend quam. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Vitae tortor condimentum lacinia quis vel. Ultricies mi quis hendrerit dolor magna eget est. Eu tincidunt tortor aliquam nulla facilisi. Turpis egestas maecenas pharetra convallis. Neque viverra justo nec ultrices. Pharetra massa massa ultricies mi quis. Sed augue lacus viverra vitae congue eu. Nulla facilisi cras fermentum odio eu. Quis varius quam quisque id diam vel. Volutpat commodo sed egestas egestas fringilla. Erat nam at lectus urna duis convallis convallis tellus id.",
  },
  {
    _id: 3,
    src: "./assets/images/home-photos/home-plages/plage-ag.jpg",
    picture: "Une Plage en Antigua",
    category: "Collection",
    photographer: "JE - L'Administrateur",
    photographerImg: "./assets/images/janviereric.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean euismod elementum nisi quis eleifend quam. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Vitae tortor condimentum lacinia quis vel. Ultricies mi quis hendrerit dolor magna eget est. Eu tincidunt tortor aliquam nulla facilisi. Turpis egestas maecenas pharetra convallis. Neque viverra justo nec ultrices. Pharetra massa massa ultricies mi quis. Sed augue lacus viverra vitae congue eu. Nulla facilisi cras fermentum odio eu. Quis varius quam quisque id diam vel. Volutpat commodo sed egestas egestas fringilla. Erat nam at lectus urna duis convallis convallis tellus id.",
  },
  {
    _id: 4,
    src: "./assets/images/home-photos/home-villes/ville-ap-jp.jpg",
    picture: "Une Ville au Japon (Après-Midi)",
    category: "Partage",
    photographer: "JE - L'Administrateur",
    photographerImg: "./assets/images/janviereric.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean euismod elementum nisi quis eleifend quam. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Vitae tortor condimentum lacinia quis vel. Ultricies mi quis hendrerit dolor magna eget est. Eu tincidunt tortor aliquam nulla facilisi. Turpis egestas maecenas pharetra convallis. Neque viverra justo nec ultrices. Pharetra massa massa ultricies mi quis. Sed augue lacus viverra vitae congue eu. Nulla facilisi cras fermentum odio eu. Quis varius quam quisque id diam vel. Volutpat commodo sed egestas egestas fringilla. Erat nam at lectus urna duis convallis convallis tellus id.",
  },
  {
    _id: 5,
    src: "./assets/images/home-photos/home-deserts/desert-ap-eh.jpg",
    picture: "Le Désert du Sahara (Après-Midi)",
    category: "Quête",
    photographer: "JE - L'Administrateur",
    photographerImg: "./assets/images/janviereric.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean euismod elementum nisi quis eleifend quam. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Vitae tortor condimentum lacinia quis vel. Ultricies mi quis hendrerit dolor magna eget est. Eu tincidunt tortor aliquam nulla facilisi. Turpis egestas maecenas pharetra convallis. Neque viverra justo nec ultrices. Pharetra massa massa ultricies mi quis. Sed augue lacus viverra vitae congue eu. Nulla facilisi cras fermentum odio eu. Quis varius quam quisque id diam vel. Volutpat commodo sed egestas egestas fringilla. Erat nam at lectus urna duis convallis convallis tellus id.",
  },
  {
    _id: 6,
    src: "./assets/images/home-photos/home-forets/foret-calif-us.jpg",
    picture: "Une Forêt en Californie (USA)",
    category: "Collection",
    photographer: "JE - L'Administrateur",
    photographerImg: "./assets/images/janviereric.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean euismod elementum nisi quis eleifend quam. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Vitae tortor condimentum lacinia quis vel. Ultricies mi quis hendrerit dolor magna eget est. Eu tincidunt tortor aliquam nulla facilisi. Turpis egestas maecenas pharetra convallis. Neque viverra justo nec ultrices. Pharetra massa massa ultricies mi quis. Sed augue lacus viverra vitae congue eu. Nulla facilisi cras fermentum odio eu. Quis varius quam quisque id diam vel. Volutpat commodo sed egestas egestas fringilla. Erat nam at lectus urna duis convallis convallis tellus id.",
  },
  {
    _id: 7,
    src: "./assets/images/home-photos/home-plages/plage-aw.jpg",
    picture: "Une Plage en Aruba",
    category: "Partage",
    photographer: "JE - L'Administrateur",
    photographerImg: "./assets/images/janviereric.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean euismod elementum nisi quis eleifend quam. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Vitae tortor condimentum lacinia quis vel. Ultricies mi quis hendrerit dolor magna eget est. Eu tincidunt tortor aliquam nulla facilisi. Turpis egestas maecenas pharetra convallis. Neque viverra justo nec ultrices. Pharetra massa massa ultricies mi quis. Sed augue lacus viverra vitae congue eu. Nulla facilisi cras fermentum odio eu. Quis varius quam quisque id diam vel. Volutpat commodo sed egestas egestas fringilla. Erat nam at lectus urna duis convallis convallis tellus id.",
  },
  {
    _id: 8,
    src: "./assets/images/home-photos/home-villes/ville-ar.jpg",
    picture: "Une Ville en Argentine",
    category: "Guide",
    photographer: "JE - L'Administrateur",
    photographerImg: "./assets/images/janviereric.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean euismod elementum nisi quis eleifend quam. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Vitae tortor condimentum lacinia quis vel. Ultricies mi quis hendrerit dolor magna eget est. Eu tincidunt tortor aliquam nulla facilisi. Turpis egestas maecenas pharetra convallis. Neque viverra justo nec ultrices. Pharetra massa massa ultricies mi quis. Sed augue lacus viverra vitae congue eu. Nulla facilisi cras fermentum odio eu. Quis varius quam quisque id diam vel. Volutpat commodo sed egestas egestas fringilla. Erat nam at lectus urna duis convallis convallis tellus id.",
  },
  {
    _id: 9,
    src: "./assets/images/home-photos/home-deserts/desert-ariz-us.jpg",
    picture: "Un Désert en Arizona (USA)",
    category: "Collection",
    photographer: "JE - L'Administrateur",
    photographerImg: "./assets/images/janviereric.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean euismod elementum nisi quis eleifend quam. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Vitae tortor condimentum lacinia quis vel. Ultricies mi quis hendrerit dolor magna eget est. Eu tincidunt tortor aliquam nulla facilisi. Turpis egestas maecenas pharetra convallis. Neque viverra justo nec ultrices. Pharetra massa massa ultricies mi quis. Sed augue lacus viverra vitae congue eu. Nulla facilisi cras fermentum odio eu. Quis varius quam quisque id diam vel. Volutpat commodo sed egestas egestas fringilla. Erat nam at lectus urna duis convallis convallis tellus id.",
  },
  {
    _id: 10,
    src: "./assets/images/home-photos/home-forets/foret-de.jpg",
    picture: "Une Forêts en Allemagne",
    category: "Partage",
    photographer: "JE - L'Administrateur",
    photographerImg: "./assets/images/janviereric.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean euismod elementum nisi quis eleifend quam. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Vitae tortor condimentum lacinia quis vel. Ultricies mi quis hendrerit dolor magna eget est. Eu tincidunt tortor aliquam nulla facilisi. Turpis egestas maecenas pharetra convallis. Neque viverra justo nec ultrices. Pharetra massa massa ultricies mi quis. Sed augue lacus viverra vitae congue eu. Nulla facilisi cras fermentum odio eu. Quis varius quam quisque id diam vel. Volutpat commodo sed egestas egestas fringilla. Erat nam at lectus urna duis convallis convallis tellus id.",
  },
  {
    _id: 11,
    src: "./assets/images/home-photos/home-plages/plage-bs.jpg",
    picture: "Une Plage aux Bahamas",
    category: "Guide",
    photographer: "JE - L'Administrateur",
    photographerImg: "./assets/images/janviereric.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean euismod elementum nisi quis eleifend quam. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Vitae tortor condimentum lacinia quis vel. Ultricies mi quis hendrerit dolor magna eget est. Eu tincidunt tortor aliquam nulla facilisi. Turpis egestas maecenas pharetra convallis. Neque viverra justo nec ultrices. Pharetra massa massa ultricies mi quis. Sed augue lacus viverra vitae congue eu. Nulla facilisi cras fermentum odio eu. Quis varius quam quisque id diam vel. Volutpat commodo sed egestas egestas fringilla. Erat nam at lectus urna duis convallis convallis tellus id.",
  },
  {
    _id: 12,
    src: "./assets/images/home-photos/home-villes/ville-calif-us.jpg",
    picture: "Une Ville en Californie (USA)",
    category: "Quête",
    photographer: "JE - L'Administrateur",
    photographerImg: "./assets/images/janviereric.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean euismod elementum nisi quis eleifend quam. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Vitae tortor condimentum lacinia quis vel. Ultricies mi quis hendrerit dolor magna eget est. Eu tincidunt tortor aliquam nulla facilisi. Turpis egestas maecenas pharetra convallis. Neque viverra justo nec ultrices. Pharetra massa massa ultricies mi quis. Sed augue lacus viverra vitae congue eu. Nulla facilisi cras fermentum odio eu. Quis varius quam quisque id diam vel. Volutpat commodo sed egestas egestas fringilla. Erat nam at lectus urna duis convallis convallis tellus id.",
  },
  {
    _id: 13,
    src: "./assets/images/home-photos/home-deserts/desert-au.jpg",
    picture: "Un Désert en Australie",
    category: "Partage",
    photographer: "JE - L'Administrateur",
    photographerImg: "./assets/images/janviereric.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean euismod elementum nisi quis eleifend quam. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Vitae tortor condimentum lacinia quis vel. Ultricies mi quis hendrerit dolor magna eget est. Eu tincidunt tortor aliquam nulla facilisi. Turpis egestas maecenas pharetra convallis. Neque viverra justo nec ultrices. Pharetra massa massa ultricies mi quis. Sed augue lacus viverra vitae congue eu. Nulla facilisi cras fermentum odio eu. Quis varius quam quisque id diam vel. Volutpat commodo sed egestas egestas fringilla. Erat nam at lectus urna duis convallis convallis tellus id.",
  },
  {
    _id: 14,
    src: "./assets/images/home-photos/home-forets/foret-ee.jpg",
    picture: "Une Forêt en Estonie",
    category: "Guide",
    photographer: "JE - L'Administrateur",
    photographerImg: "./assets/images/janviereric.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean euismod elementum nisi quis eleifend quam. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Vitae tortor condimentum lacinia quis vel. Ultricies mi quis hendrerit dolor magna eget est. Eu tincidunt tortor aliquam nulla facilisi. Turpis egestas maecenas pharetra convallis. Neque viverra justo nec ultrices. Pharetra massa massa ultricies mi quis. Sed augue lacus viverra vitae congue eu. Nulla facilisi cras fermentum odio eu. Quis varius quam quisque id diam vel. Volutpat commodo sed egestas egestas fringilla. Erat nam at lectus urna duis convallis convallis tellus id.",
  },
  {
    _id: 15,
    src: "./assets/images/home-photos/home-plages/plage-es.jpg",
    picture: "Une Plage en Espagne",
    category: "Quête",
    photographer: "JE - L'Administrateur",
    photographerImg: "./assets/images/janviereric.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean euismod elementum nisi quis eleifend quam. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Vitae tortor condimentum lacinia quis vel. Ultricies mi quis hendrerit dolor magna eget est. Eu tincidunt tortor aliquam nulla facilisi. Turpis egestas maecenas pharetra convallis. Neque viverra justo nec ultrices. Pharetra massa massa ultricies mi quis. Sed augue lacus viverra vitae congue eu. Nulla facilisi cras fermentum odio eu. Quis varius quam quisque id diam vel. Volutpat commodo sed egestas egestas fringilla. Erat nam at lectus urna duis convallis convallis tellus id.",
  },
  {
    _id: 16,
    src: "./assets/images/home-photos/home-villes/ville-es.jpg",
    picture: "Une Ville en Espagne",
    category: "Collection",
    photographer: "JE - L'Administrateur",
    photographerImg: "./assets/images/janviereric.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean euismod elementum nisi quis eleifend quam. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Vitae tortor condimentum lacinia quis vel. Ultricies mi quis hendrerit dolor magna eget est. Eu tincidunt tortor aliquam nulla facilisi. Turpis egestas maecenas pharetra convallis. Neque viverra justo nec ultrices. Pharetra massa massa ultricies mi quis. Sed augue lacus viverra vitae congue eu. Nulla facilisi cras fermentum odio eu. Quis varius quam quisque id diam vel. Volutpat commodo sed egestas egestas fringilla. Erat nam at lectus urna duis convallis convallis tellus id.",
  },
  {
    _id: 17,
    src: "./assets/images/home-photos/home-deserts/desert-calif-us.jpg",
    picture: "Un Désert en Californie (USA)",
    category: "Guide",
    photographer: "JE - L'Administrateur",
    photographerImg: "./assets/images/janviereric.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean euismod elementum nisi quis eleifend quam. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Vitae tortor condimentum lacinia quis vel. Ultricies mi quis hendrerit dolor magna eget est. Eu tincidunt tortor aliquam nulla facilisi. Turpis egestas maecenas pharetra convallis. Neque viverra justo nec ultrices. Pharetra massa massa ultricies mi quis. Sed augue lacus viverra vitae congue eu. Nulla facilisi cras fermentum odio eu. Quis varius quam quisque id diam vel. Volutpat commodo sed egestas egestas fringilla. Erat nam at lectus urna duis convallis convallis tellus id.",
  },
  {
    _id: 18,
    src: "./assets/images/home-photos/home-forets/foret-ete.jpg",
    picture: "Une Forêt (Été)",
    category: "Quête",
    photographer: "JE - L'Administrateur",
    photographerImg: "./assets/images/janviereric.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean euismod elementum nisi quis eleifend quam. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Vitae tortor condimentum lacinia quis vel. Ultricies mi quis hendrerit dolor magna eget est. Eu tincidunt tortor aliquam nulla facilisi. Turpis egestas maecenas pharetra convallis. Neque viverra justo nec ultrices. Pharetra massa massa ultricies mi quis. Sed augue lacus viverra vitae congue eu. Nulla facilisi cras fermentum odio eu. Quis varius quam quisque id diam vel. Volutpat commodo sed egestas egestas fringilla. Erat nam at lectus urna duis convallis convallis tellus id.",
  },
  {
    _id: 19,
    src: "./assets/images/home-photos/home-plages/plage-fj.jpg",
    picture: "Une Plage aux Îles Fidji",
    category: "Collection",
    photographer: "JE - L'Administrateur",
    photographerImg: "./assets/images/janviereric.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean euismod elementum nisi quis eleifend quam. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Vitae tortor condimentum lacinia quis vel. Ultricies mi quis hendrerit dolor magna eget est. Eu tincidunt tortor aliquam nulla facilisi. Turpis egestas maecenas pharetra convallis. Neque viverra justo nec ultrices. Pharetra massa massa ultricies mi quis. Sed augue lacus viverra vitae congue eu. Nulla facilisi cras fermentum odio eu. Quis varius quam quisque id diam vel. Volutpat commodo sed egestas egestas fringilla. Erat nam at lectus urna duis convallis convallis tellus id.",
  },
  {
    _id: 20,
    src: "./assets/images/home-photos/home-villes/ville-province-it.jpg",
    picture: "Une Ville en Province (Italie)",
    category: "Partage",
    photographer: "JE - L'Administrateur",
    photographerImg: "./assets/images/janviereric.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean euismod elementum nisi quis eleifend quam. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Vitae tortor condimentum lacinia quis vel. Ultricies mi quis hendrerit dolor magna eget est. Eu tincidunt tortor aliquam nulla facilisi. Turpis egestas maecenas pharetra convallis. Neque viverra justo nec ultrices. Pharetra massa massa ultricies mi quis. Sed augue lacus viverra vitae congue eu. Nulla facilisi cras fermentum odio eu. Quis varius quam quisque id diam vel. Volutpat commodo sed egestas egestas fringilla. Erat nam at lectus urna duis convallis convallis tellus id.",
  },
  {
    _id: 21,
    src: "./assets/images/home-photos/home-deserts/desert-cl.jpg",
    picture: "Un Désert au Chili ",
    category: "Quête",
    photographer: "JE - L'Administrateur",
    photographerImg: "./assets/images/janviereric.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean euismod elementum nisi quis eleifend quam. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Vitae tortor condimentum lacinia quis vel. Ultricies mi quis hendrerit dolor magna eget est. Eu tincidunt tortor aliquam nulla facilisi. Turpis egestas maecenas pharetra convallis. Neque viverra justo nec ultrices. Pharetra massa massa ultricies mi quis. Sed augue lacus viverra vitae congue eu. Nulla facilisi cras fermentum odio eu. Quis varius quam quisque id diam vel. Volutpat commodo sed egestas egestas fringilla. Erat nam at lectus urna duis convallis convallis tellus id.",
  },
  {
    _id: 22,
    src: "./assets/images/home-photos/home-forets/foret-gb.jpg",
    picture: "Une Forêt en Grande-Bretagne",
    category: "Collection",
    photographer: "JE - L'Administrateur",
    photographerImg: "./assets/images/janviereric.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean euismod elementum nisi quis eleifend quam. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Vitae tortor condimentum lacinia quis vel. Ultricies mi quis hendrerit dolor magna eget est. Eu tincidunt tortor aliquam nulla facilisi. Turpis egestas maecenas pharetra convallis. Neque viverra justo nec ultrices. Pharetra massa massa ultricies mi quis. Sed augue lacus viverra vitae congue eu. Nulla facilisi cras fermentum odio eu. Quis varius quam quisque id diam vel. Volutpat commodo sed egestas egestas fringilla. Erat nam at lectus urna duis convallis convallis tellus id.",
  },
  {
    _id: 23,
    src: "./assets/images/home-photos/home-plages/plage-gr.jpg",
    picture: "Une Plage en Grèce",
    category: "Partage",
    photographer: "JE - L'Administrateur",
    photographerImg: "./assets/images/janviereric.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean euismod elementum nisi quis eleifend quam. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Vitae tortor condimentum lacinia quis vel. Ultricies mi quis hendrerit dolor magna eget est. Eu tincidunt tortor aliquam nulla facilisi. Turpis egestas maecenas pharetra convallis. Neque viverra justo nec ultrices. Pharetra massa massa ultricies mi quis. Sed augue lacus viverra vitae congue eu. Nulla facilisi cras fermentum odio eu. Quis varius quam quisque id diam vel. Volutpat commodo sed egestas egestas fringilla. Erat nam at lectus urna duis convallis convallis tellus id.",
  },
  {
    _id: 24,
    src: "./assets/images/home-photos/home-villes/ville-se.jpg",
    picture: "Une Ville en Suède",
    category: "Guide",
    photographer: "JE - L'Administrateur",
    photographerImg: "./assets/images/janviereric.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean euismod elementum nisi quis eleifend quam. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Vitae tortor condimentum lacinia quis vel. Ultricies mi quis hendrerit dolor magna eget est. Eu tincidunt tortor aliquam nulla facilisi. Turpis egestas maecenas pharetra convallis. Neque viverra justo nec ultrices. Pharetra massa massa ultricies mi quis. Sed augue lacus viverra vitae congue eu. Nulla facilisi cras fermentum odio eu. Quis varius quam quisque id diam vel. Volutpat commodo sed egestas egestas fringilla. Erat nam at lectus urna duis convallis convallis tellus id.",
  },
  {
    _id: 25,
    src: "./assets/images/home-photos/home-deserts/desert-es.jpg",
    picture: "Un Désert en Espagne",
    category: "Collection",
    photographer: "JE - L'Administrateur",
    photographerImg: "./assets/images/janviereric.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean euismod elementum nisi quis eleifend quam. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Vitae tortor condimentum lacinia quis vel. Ultricies mi quis hendrerit dolor magna eget est. Eu tincidunt tortor aliquam nulla facilisi. Turpis egestas maecenas pharetra convallis. Neque viverra justo nec ultrices. Pharetra massa massa ultricies mi quis. Sed augue lacus viverra vitae congue eu. Nulla facilisi cras fermentum odio eu. Quis varius quam quisque id diam vel. Volutpat commodo sed egestas egestas fringilla. Erat nam at lectus urna duis convallis convallis tellus id.",
  },
  {
    _id: 26,
    src: "./assets/images/home-photos/home-forets/foret-hiver.jpg",
    picture: "Une Forêt (Hiver)",
    category: "Paratge",
    photographer: "JE - L'Administrateur",
    photographerImg: "./assets/images/janviereric.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean euismod elementum nisi quis eleifend quam. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Vitae tortor condimentum lacinia quis vel. Ultricies mi quis hendrerit dolor magna eget est. Eu tincidunt tortor aliquam nulla facilisi. Turpis egestas maecenas pharetra convallis. Neque viverra justo nec ultrices. Pharetra massa massa ultricies mi quis. Sed augue lacus viverra vitae congue eu. Nulla facilisi cras fermentum odio eu. Quis varius quam quisque id diam vel. Volutpat commodo sed egestas egestas fringilla. Erat nam at lectus urna duis convallis convallis tellus id.",
  },
  {
    _id: 27,
    src: "./assets/images/home-photos/home-plages/plage-il.jpg",
    picture: "Une Plage en Israël",
    category: "Guide",
    photographer: "JE - L'Administrateur",
    photographerImg: "./assets/images/janviereric.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean euismod elementum nisi quis eleifend quam. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Vitae tortor condimentum lacinia quis vel. Ultricies mi quis hendrerit dolor magna eget est. Eu tincidunt tortor aliquam nulla facilisi. Turpis egestas maecenas pharetra convallis. Neque viverra justo nec ultrices. Pharetra massa massa ultricies mi quis. Sed augue lacus viverra vitae congue eu. Nulla facilisi cras fermentum odio eu. Quis varius quam quisque id diam vel. Volutpat commodo sed egestas egestas fringilla. Erat nam at lectus urna duis convallis convallis tellus id.",
  },
  {
    _id: 28,
    src: "./assets/images/home-photos/home-villes/ville-soir-jp.jpg",
    picture: "Une Ville au Japon (Soir)",
    category: "Quête",
    photographer: "JE - L'Administrateur",
    photographerImg: "./assets/images/janviereric.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean euismod elementum nisi quis eleifend quam. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Vitae tortor condimentum lacinia quis vel. Ultricies mi quis hendrerit dolor magna eget est. Eu tincidunt tortor aliquam nulla facilisi. Turpis egestas maecenas pharetra convallis. Neque viverra justo nec ultrices. Pharetra massa massa ultricies mi quis. Sed augue lacus viverra vitae congue eu. Nulla facilisi cras fermentum odio eu. Quis varius quam quisque id diam vel. Volutpat commodo sed egestas egestas fringilla. Erat nam at lectus urna duis convallis convallis tellus id.",
  },
  {
    _id: 29,
    src: "./assets/images/home-photos/home-deserts/desert-il.jpg",
    picture: "Un Désert en Israël",
    category: "Partage",
    photographer: "JE - L'Administrateur",
    photographerImg: "./assets/images/janviereric.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean euismod elementum nisi quis eleifend quam. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Vitae tortor condimentum lacinia quis vel. Ultricies mi quis hendrerit dolor magna eget est. Eu tincidunt tortor aliquam nulla facilisi. Turpis egestas maecenas pharetra convallis. Neque viverra justo nec ultrices. Pharetra massa massa ultricies mi quis. Sed augue lacus viverra vitae congue eu. Nulla facilisi cras fermentum odio eu. Quis varius quam quisque id diam vel. Volutpat commodo sed egestas egestas fringilla. Erat nam at lectus urna duis convallis convallis tellus id.",
  },
  {
    _id: 30,
    src: "./assets/images/home-photos/home-forets/foret-id.jpg",
    picture: "Une Forêt en Inde",
    category: "Guide",
    photographer: "JE - L'Administrateur",
    photographerImg: "./assets/images/janviereric.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean euismod elementum nisi quis eleifend quam. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Vitae tortor condimentum lacinia quis vel. Ultricies mi quis hendrerit dolor magna eget est. Eu tincidunt tortor aliquam nulla facilisi. Turpis egestas maecenas pharetra convallis. Neque viverra justo nec ultrices. Pharetra massa massa ultricies mi quis. Sed augue lacus viverra vitae congue eu. Nulla facilisi cras fermentum odio eu. Quis varius quam quisque id diam vel. Volutpat commodo sed egestas egestas fringilla. Erat nam at lectus urna duis convallis convallis tellus id.",
  },
  {
    _id: 31,
    src: "./assets/images/home-photos/home-plages/plage-mv.jpg",
    picture: "Une Plage aux Maldives",
    category: "Quête",
    photographer: "JE - L'Administrateur",
    photographerImg: "./assets/images/janviereric.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean euismod elementum nisi quis eleifend quam. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Vitae tortor condimentum lacinia quis vel. Ultricies mi quis hendrerit dolor magna eget est. Eu tincidunt tortor aliquam nulla facilisi. Turpis egestas maecenas pharetra convallis. Neque viverra justo nec ultrices. Pharetra massa massa ultricies mi quis. Sed augue lacus viverra vitae congue eu. Nulla facilisi cras fermentum odio eu. Quis varius quam quisque id diam vel. Volutpat commodo sed egestas egestas fringilla. Erat nam at lectus urna duis convallis convallis tellus id.",
  },
  {
    _id: 32,
    src: "./assets/images/home-photos/home-villes/ville-tr.jpg",
    picture: "Une Ville en Turquie",
    category: "Collection",
    photographer: "JE - L'Administrateur",
    photographerImg: "./assets/images/janviereric.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean euismod elementum nisi quis eleifend quam. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Vitae tortor condimentum lacinia quis vel. Ultricies mi quis hendrerit dolor magna eget est. Eu tincidunt tortor aliquam nulla facilisi. Turpis egestas maecenas pharetra convallis. Neque viverra justo nec ultrices. Pharetra massa massa ultricies mi quis. Sed augue lacus viverra vitae congue eu. Nulla facilisi cras fermentum odio eu. Quis varius quam quisque id diam vel. Volutpat commodo sed egestas egestas fringilla. Erat nam at lectus urna duis convallis convallis tellus id.",
  },
  {
    _id: 33,
    src: "./assets/images/home-photos/home-deserts/desert-matin-eh.jpg",
    picture: "Le Désert du Sahara (Matin)",
    category: "Guide",
    photographer: "JE - L'Administrateur",
    photographerImg: "./assets/images/janviereric.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean euismod elementum nisi quis eleifend quam. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Vitae tortor condimentum lacinia quis vel. Ultricies mi quis hendrerit dolor magna eget est. Eu tincidunt tortor aliquam nulla facilisi. Turpis egestas maecenas pharetra convallis. Neque viverra justo nec ultrices. Pharetra massa massa ultricies mi quis. Sed augue lacus viverra vitae congue eu. Nulla facilisi cras fermentum odio eu. Quis varius quam quisque id diam vel. Volutpat commodo sed egestas egestas fringilla. Erat nam at lectus urna duis convallis convallis tellus id.",
  },
  {
    _id: 34,
    src: "./assets/images/home-photos/home-forets/foret-printemps.jpg",
    picture: "Une Forêt (Printemps)",
    category: "Quête",
    photographer: "JE - L'Administrateur",
    photographerImg: "./assets/images/janviereric.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean euismod elementum nisi quis eleifend quam. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Vitae tortor condimentum lacinia quis vel. Ultricies mi quis hendrerit dolor magna eget est. Eu tincidunt tortor aliquam nulla facilisi. Turpis egestas maecenas pharetra convallis. Neque viverra justo nec ultrices. Pharetra massa massa ultricies mi quis. Sed augue lacus viverra vitae congue eu. Nulla facilisi cras fermentum odio eu. Quis varius quam quisque id diam vel. Volutpat commodo sed egestas egestas fringilla. Erat nam at lectus urna duis convallis convallis tellus id.",
  },
  {
    _id: 35,
    src: "./assets/images/home-photos/home-plages/plage-ru.jpg",
    picture: "Une Plage en Russie",
    category: "Collection",
    photographer: "JE - L'Administrateur",
    photographerImg: "./assets/images/janviereric.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean euismod elementum nisi quis eleifend quam. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Vitae tortor condimentum lacinia quis vel. Ultricies mi quis hendrerit dolor magna eget est. Eu tincidunt tortor aliquam nulla facilisi. Turpis egestas maecenas pharetra convallis. Neque viverra justo nec ultrices. Pharetra massa massa ultricies mi quis. Sed augue lacus viverra vitae congue eu. Nulla facilisi cras fermentum odio eu. Quis varius quam quisque id diam vel. Volutpat commodo sed egestas egestas fringilla. Erat nam at lectus urna duis convallis convallis tellus id.",
  },
  {
    _id: 36,
    src: "./assets/images/home-photos/home-villes/ville-urbain-ge.jpg",
    picture: "Une Ville Urbain en Allemagne",
    category: "Partage",
    photographer: "JE - L'Administrateur",
    photographerImg: "./assets/images/janviereric.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean euismod elementum nisi quis eleifend quam. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Vitae tortor condimentum lacinia quis vel. Ultricies mi quis hendrerit dolor magna eget est. Eu tincidunt tortor aliquam nulla facilisi. Turpis egestas maecenas pharetra convallis. Neque viverra justo nec ultrices. Pharetra massa massa ultricies mi quis. Sed augue lacus viverra vitae congue eu. Nulla facilisi cras fermentum odio eu. Quis varius quam quisque id diam vel. Volutpat commodo sed egestas egestas fringilla. Erat nam at lectus urna duis convallis convallis tellus id.",
  },
  {
    _id: 37,
    src: "./assets/images/home-photos/home-deserts/desert-nev-us.jpg",
    picture: "Un Désert en Neveda (USA)",
    category: "Quête",
    photographer: "JE - L'Administrateur",
    photographerImg: "./assets/images/janviereric.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean euismod elementum nisi quis eleifend quam. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Vitae tortor condimentum lacinia quis vel. Ultricies mi quis hendrerit dolor magna eget est. Eu tincidunt tortor aliquam nulla facilisi. Turpis egestas maecenas pharetra convallis. Neque viverra justo nec ultrices. Pharetra massa massa ultricies mi quis. Sed augue lacus viverra vitae congue eu. Nulla facilisi cras fermentum odio eu. Quis varius quam quisque id diam vel. Volutpat commodo sed egestas egestas fringilla. Erat nam at lectus urna duis convallis convallis tellus id.",
  },
  {
    _id: 38,
    src: "./assets/images/home-photos/home-forets/foret-se.jpg",
    picture: "Une Forêt en Suède",
    category: "Collection",
    photographer: "JE - L'Administrateur",
    photographerImg: "./assets/images/janviereric.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean euismod elementum nisi quis eleifend quam. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Vitae tortor condimentum lacinia quis vel. Ultricies mi quis hendrerit dolor magna eget est. Eu tincidunt tortor aliquam nulla facilisi. Turpis egestas maecenas pharetra convallis. Neque viverra justo nec ultrices. Pharetra massa massa ultricies mi quis. Sed augue lacus viverra vitae congue eu. Nulla facilisi cras fermentum odio eu. Quis varius quam quisque id diam vel. Volutpat commodo sed egestas egestas fringilla. Erat nam at lectus urna duis convallis convallis tellus id.",
  },
  {
    _id: 39,
    src: "./assets/images/home-photos/home-plages/plage-us.jpg",
    picture: "Une Plage aux États-Unis",
    category: "Partage",
    photographer: "JE - L'Administrateur",
    photographerImg: "./assets/images/janviereric.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean euismod elementum nisi quis eleifend quam. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Vitae tortor condimentum lacinia quis vel. Ultricies mi quis hendrerit dolor magna eget est. Eu tincidunt tortor aliquam nulla facilisi. Turpis egestas maecenas pharetra convallis. Neque viverra justo nec ultrices. Pharetra massa massa ultricies mi quis. Sed augue lacus viverra vitae congue eu. Nulla facilisi cras fermentum odio eu. Quis varius quam quisque id diam vel. Volutpat commodo sed egestas egestas fringilla. Erat nam at lectus urna duis convallis convallis tellus id.",
  },
  {
    _id: 40,
    src: "./assets/images/home-photos/home-villes/ville-za.jpg",
    picture: "Une Ville en Nouvelle-Zélande",
    category: "Guide",
    photographer: "JE - L'Administrateur",
    photographerImg: "./assets/images/janviereric.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean euismod elementum nisi quis eleifend quam. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Vitae tortor condimentum lacinia quis vel. Ultricies mi quis hendrerit dolor magna eget est. Eu tincidunt tortor aliquam nulla facilisi. Turpis egestas maecenas pharetra convallis. Neque viverra justo nec ultrices. Pharetra massa massa ultricies mi quis. Sed augue lacus viverra vitae congue eu. Nulla facilisi cras fermentum odio eu. Quis varius quam quisque id diam vel. Volutpat commodo sed egestas egestas fringilla. Erat nam at lectus urna duis convallis convallis tellus id.",
  },
  {
    _id: 41,
    src: "./assets/images/home-photos/home-deserts/desert-nmex-us.jpg",
    picture: "Un Désert au Nouveau-Mexique (USA)",
    category: "Guide",
    photographer: "JE - L'Administrateur",
    photographerImg: "./assets/images/janviereric.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean euismod elementum nisi quis eleifend quam. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Vitae tortor condimentum lacinia quis vel. Ultricies mi quis hendrerit dolor magna eget est. Eu tincidunt tortor aliquam nulla facilisi. Turpis egestas maecenas pharetra convallis. Neque viverra justo nec ultrices. Pharetra massa massa ultricies mi quis. Sed augue lacus viverra vitae congue eu. Nulla facilisi cras fermentum odio eu. Quis varius quam quisque id diam vel. Volutpat commodo sed egestas egestas fringilla. Erat nam at lectus urna duis convallis convallis tellus id.",
  },
];

const DisplayHomePhotos = () => {
  const homePhotosElement = homePhotosArray.map((homePhoto, index) => {
    return createHomePhotosElement(homePhoto, index);
  });
  photosContainer.append(...homePhotosElement);
};

const createHomePhotosElement = (homePhoto, index) => {
  const homePhotoContainer = document.createElement("div");
  homePhotoContainer.classList.add("home-photo-container");
  homePhotoContainer.innerHTML = `
  <img src="${homePhoto.src}" alt="${homePhoto.picture}" />
    <h2>${homePhoto.picture}</h2>
  `;
  console.log(homePhoto);
  return homePhotoContainer;
};
////////////////////////////// home start //////////////////////////////

////////////////////////////// form start //////////////////////////////
const createFormPhotosElement = async (formPhotosArray) => {
  const formPhotosElement = formPhotosArray.map((formPhoto) => {
    const formPhotoContainer = document.createElement("div");

    formPhotoContainer.classList.add("form-photo-container");
    formPhotoContainer.innerHTML = `
    <img alt="${formPhoto.picture}" />
    <h2>${formPhoto.picture}</h2>`;
    const imgPhoto = formPhotoContainer.querySelector("img");

    switch (formPhoto.picture) {
      case "Un Désert en Cisjordanie": {
        imgPhoto.src = "./assets/images/form-photos/form-deserts/desert-cj.jpg";
        break;
      }
      case "Un Désert en Jordanie": {
        imgPhoto.src = "./assets/images/form-photos/form-deserts/desert-jo.jpg";
        break;
      }
      case "Un Désert au Maroc": {
        imgPhoto.src = "./assets/images/form-photos/form-deserts/desert-ma.jpg";
        break;
      }
      case "Un Désert en Namibie (Océan Atlantique)": {
        imgPhoto.src =
          "./assets/images/form-photos/form-deserts/desert-oa-na.jpg";
        break;
      }
      case "Un Désert en Oman": {
        imgPhoto.src = "./assets/images/form-photos/form-deserts/desert-om.jpg";
        break;
      }
      case "Un Désert au Pérou": {
        imgPhoto.src = "./assets/images/form-photos/form-deserts/desert-pe.jpg";
        break;
      }
      case "Un Désert en Arabie Saoudite": {
        imgPhoto.src = "./assets/images/form-photos/form-deserts/desert-sa.jpg";
        break;
      }
      case "Un Désert en Namibie (Sud-Ouest)": {
        imgPhoto.src =
          "./assets/images/form-photos/form-deserts/desert-so-na.jpg";
        break;
      }
      case "Le Désert du Sahara (Soir)": {
        imgPhoto.src =
          "./assets/images/form-photos/form-deserts/desert-soir-eh.jpg";
        break;
      }
      case "Sable Blanc du Nouveau-Mexique (USA)": {
        imgPhoto.src =
          "./assets/images/form-photos/form-deserts/sable-blanc-nmex-us.jpg";
        break;
      }
    }

    switch (formPhoto.picture) {
      case "Une Forêt en Australie": {
        imgPhoto.src = "./assets/images/form-photos/form-forets/foret-au.jpg";
        break;
      }
      case "Une Forêt au Canada": {
        imgPhoto.src = "./assets/images/form-photos/form-forets/foret-ca.jpg";
        break;
      }
      case "Une Forêt en Finlande": {
        imgPhoto.src = "./assets/images/form-photos/form-forets/foret-fi.jpg";
        break;
      }
      case "Une Forêt en Croatie": {
        imgPhoto.src = "./assets/images/form-photos/form-forets/foret-hr.jpg";
        break;
      }
      case "Une Forêt en Inde": {
        imgPhoto.src = "./assets/images/form-photos/form-forets/foret-in.jpg";
        break;
      }
      case "Une Forêt en Italie": {
        imgPhoto.src = "./assets/images/form-photos/form-forets/foret-it.jpg";
        break;
      }
      case "Une Forêt au Japon": {
        imgPhoto.src = "./assets/images/form-photos/form-forets/foret-jp.jpg";
        break;
      }
      case "La Forêt des Loups": {
        imgPhoto.src =
          "./assets/images/form-photos/form-forets/foret-loups.jpg";
        break;
      }
      case "Une Forêt au Nouvelle-Zélande": {
        imgPhoto.src = "./assets/images/form-photos/form-forets/foret-nz.jpg";
        break;
      }
      case "Une Forêt en Washington (USA)": {
        imgPhoto.src =
          "./assets/images/form-photos/form-forets/foret-wash-us.jpg";
        break;
      }
    }

    switch (formPhoto.picture) {
      case "Une Plage en Australie": {
        imgPhoto.src = "./assets/images/form-photos/form-plages/plage-au.jpg";
        break;
      }
      case "Une Plage au Brésil": {
        imgPhoto.src = "./assets/images/form-photos/form-plages/plage-br.jpg";
        break;
      }
      case "Une Plage en Grande-Bretagne": {
        imgPhoto.src = "./assets/images/form-photos/form-plages/plage-gb.jpg";
        break;
      }
      case "Une Plage en Italie": {
        imgPhoto.src = "./assets/images/form-photos/form-plages/plage-it.jpg";
        break;
      }
      case "Une Plage en Madagascar": {
        imgPhoto.src = "./assets/images/form-photos/form-plages/plage-mg.jpg";
        break;
      }
      case "Une Plage au Mexique": {
        imgPhoto.src = "./assets/images/form-photos/form-plages/plage-mx.jpg";
        break;
      }
      case "Une Plage en Nouvelle-Calédonie": {
        imgPhoto.src = "./assets/images/form-photos/form-plages/plage-nc.jpg";
        break;
      }
      case "Une Plage en Polynésie Française": {
        imgPhoto.src = "./assets/images/form-photos/form-plages/plage-pf.jpg";
        break;
      }
      case "Une Plage aux Sychelles": {
        imgPhoto.src = "./assets/images/form-photos/form-plages/plage-sc.jpg";
        break;
      }
      case "Une Plage en Thaïlande": {
        imgPhoto.src = "./assets/images/form-photos/form-plages/plage-th.jpg";
        break;
      }
    }

    switch (formPhoto.picture) {
      case "Une Ville au Chili": {
        imgPhoto.src = "./assets/images/form-photos/form-villes/ville-cl.jpg";
        break;
      }
      case "Une Ville en Chine": {
        imgPhoto.src = "./assets/images/form-photos/form-villes/ville-cn.jpg";
        break;
      }
      case "Une Ville en Colombie": {
        imgPhoto.src = "./assets/images/form-photos/form-villes/ville-co.jpg";
        break;
      }
      case "Une Ville en France": {
        imgPhoto.src = "./assets/images/form-photos/form-villes/ville-fr.jpg";
        break;
      }
      case "Une Ville en Grande-Bretagne": {
        imgPhoto.src = "./assets/images/form-photos/form-villes/ville-gb.jpg";
        break;
      }
      case "Une Ville au Japon (Jour)": {
        imgPhoto.src =
          "./assets/images/form-photos/form-villes/ville-jour-jp.jpg";
        break;
      }
      case "Une Ville en Koweït": {
        imgPhoto.src = "./assets/images/form-photos/form-villes/ville-kw.jpg";
        break;
      }
      case "Une Ville en Norvège": {
        imgPhoto.src = "./assets/images/form-photos/form-villes/ville-no.jpg";
        break;
      }
      case "Une Ville Rural d'Allemagne": {
        imgPhoto.src =
          "./assets/images/form-photos/form-villes/ville-rural-ge.jpg";
        break;
      }
      case "Une Ville d'Italie (Soir)": {
        imgPhoto.src =
          "./assets/images/form-photos/form-villes/ville-soir-it.jpg";
        break;
      }
    }
    return formPhotoContainer;
  });
  photosContainer.innerHTML = "";
  formPhotosElement.reverse();
  photosContainer.append(...formPhotosElement);
  DisplayHomePhotos();
};

const fetchFormPhotos = async () => {
  try {
    const response = await fetch("https://restapi.fr/api/photos");
    const formPhotos = await response.json();
    console.log(formPhotos);
    createFormPhotosElement(formPhotos);
  } catch (error) {
    console.log(("error : ", error));
  }
};
fetchFormPhotos();
////////////////////////////// form end //////////////////////////////
