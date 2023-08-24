import { async } from "regenerator-runtime";
import "./assets/sass/styles.scss";
import "./index.scss";
const photosContainer = document.querySelector("#photos-container");

////////////////////////////// home start //////////////////////////////
const homePhotosArray = [
  {
    _id: 1,
    src: "./assets/images/home-photos/home-animaux/home-animal_1.jpg",
    alt: "animal",
    category: "Guide",
    photographer: "JE - L'Administrateur",
    photographerImg: "./assets/images/janviereric.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean euismod elementum nisi quis eleifend quam. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Vitae tortor condimentum lacinia quis vel. Ultricies mi quis hendrerit dolor magna eget est. Eu tincidunt tortor aliquam nulla facilisi. Turpis egestas maecenas pharetra convallis. Neque viverra justo nec ultrices. Pharetra massa massa ultricies mi quis. Sed augue lacus viverra vitae congue eu. Nulla facilisi cras fermentum odio eu. Quis varius quam quisque id diam vel. Volutpat commodo sed egestas egestas fringilla. Erat nam at lectus urna duis convallis convallis tellus id.",
  },
  {
    _id: 2,
    src: "./assets/images/home-photos/home-iles/home-ile_1.jpg",
    alt: "île",
    category: "Quête",
    photographer: "JE - L'Administrateur",
    photographerImg: "./assets/images/janviereric.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean euismod elementum nisi quis eleifend quam. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Vitae tortor condimentum lacinia quis vel. Ultricies mi quis hendrerit dolor magna eget est. Eu tincidunt tortor aliquam nulla facilisi. Turpis egestas maecenas pharetra convallis. Neque viverra justo nec ultrices. Pharetra massa massa ultricies mi quis. Sed augue lacus viverra vitae congue eu. Nulla facilisi cras fermentum odio eu. Quis varius quam quisque id diam vel. Volutpat commodo sed egestas egestas fringilla. Erat nam at lectus urna duis convallis convallis tellus id.",
  },
  {
    _id: 3,
    src: "./assets/images/home-photos/home-natures/home-nature_1.jpg",
    alt: "nature",
    category: "Collection",
    photographer: "JE - L'Administrateur",
    photographerImg: "./assets/images/janviereric.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean euismod elementum nisi quis eleifend quam. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Vitae tortor condimentum lacinia quis vel. Ultricies mi quis hendrerit dolor magna eget est. Eu tincidunt tortor aliquam nulla facilisi. Turpis egestas maecenas pharetra convallis. Neque viverra justo nec ultrices. Pharetra massa massa ultricies mi quis. Sed augue lacus viverra vitae congue eu. Nulla facilisi cras fermentum odio eu. Quis varius quam quisque id diam vel. Volutpat commodo sed egestas egestas fringilla. Erat nam at lectus urna duis convallis convallis tellus id.",
  },
  {
    _id: 4,
    src: "./assets/images/home-photos/home-neutres/home-neutre_1.jpg",
    alt: "neutre",
    category: "Partage",
    photographer: "JE - L'Administrateur",
    photographerImg: "./assets/images/janviereric.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean euismod elementum nisi quis eleifend quam. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Vitae tortor condimentum lacinia quis vel. Ultricies mi quis hendrerit dolor magna eget est. Eu tincidunt tortor aliquam nulla facilisi. Turpis egestas maecenas pharetra convallis. Neque viverra justo nec ultrices. Pharetra massa massa ultricies mi quis. Sed augue lacus viverra vitae congue eu. Nulla facilisi cras fermentum odio eu. Quis varius quam quisque id diam vel. Volutpat commodo sed egestas egestas fringilla. Erat nam at lectus urna duis convallis convallis tellus id.",
  },
  {
    _id: 5,
    src: "./assets/images/home-photos/home-animaux/home-animal_2.jpg",
    alt: "animal",
    category: "Quête",
    photographer: "JE - L'Administrateur",
    photographerImg: "./assets/images/janviereric.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean euismod elementum nisi quis eleifend quam. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Vitae tortor condimentum lacinia quis vel. Ultricies mi quis hendrerit dolor magna eget est. Eu tincidunt tortor aliquam nulla facilisi. Turpis egestas maecenas pharetra convallis. Neque viverra justo nec ultrices. Pharetra massa massa ultricies mi quis. Sed augue lacus viverra vitae congue eu. Nulla facilisi cras fermentum odio eu. Quis varius quam quisque id diam vel. Volutpat commodo sed egestas egestas fringilla. Erat nam at lectus urna duis convallis convallis tellus id.",
  },
  {
    _id: 6,
    src: "./assets/images/home-photos/home-iles/home-ile_2.jpg",
    alt: "île",
    category: "Collection",
    photographer: "JE - L'Administrateur",
    photographerImg: "./assets/images/janviereric.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean euismod elementum nisi quis eleifend quam. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Vitae tortor condimentum lacinia quis vel. Ultricies mi quis hendrerit dolor magna eget est. Eu tincidunt tortor aliquam nulla facilisi. Turpis egestas maecenas pharetra convallis. Neque viverra justo nec ultrices. Pharetra massa massa ultricies mi quis. Sed augue lacus viverra vitae congue eu. Nulla facilisi cras fermentum odio eu. Quis varius quam quisque id diam vel. Volutpat commodo sed egestas egestas fringilla. Erat nam at lectus urna duis convallis convallis tellus id.",
  },
  {
    _id: 7,
    src: "./assets/images/home-photos/home-natures/home-nature_2.jpg",
    alt: "nature",
    category: "Partage",
    photographer: "JE - L'Administrateur",
    photographerImg: "./assets/images/janviereric.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean euismod elementum nisi quis eleifend quam. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Vitae tortor condimentum lacinia quis vel. Ultricies mi quis hendrerit dolor magna eget est. Eu tincidunt tortor aliquam nulla facilisi. Turpis egestas maecenas pharetra convallis. Neque viverra justo nec ultrices. Pharetra massa massa ultricies mi quis. Sed augue lacus viverra vitae congue eu. Nulla facilisi cras fermentum odio eu. Quis varius quam quisque id diam vel. Volutpat commodo sed egestas egestas fringilla. Erat nam at lectus urna duis convallis convallis tellus id.",
  },
  {
    _id: 8,
    src: "./assets/images/home-photos/home-neutres/home-neutre_2.jpg",
    alt: "neutre",
    category: "Guide",
    photographer: "JE - L'Administrateur",
    photographerImg: "./assets/images/janviereric.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean euismod elementum nisi quis eleifend quam. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Vitae tortor condimentum lacinia quis vel. Ultricies mi quis hendrerit dolor magna eget est. Eu tincidunt tortor aliquam nulla facilisi. Turpis egestas maecenas pharetra convallis. Neque viverra justo nec ultrices. Pharetra massa massa ultricies mi quis. Sed augue lacus viverra vitae congue eu. Nulla facilisi cras fermentum odio eu. Quis varius quam quisque id diam vel. Volutpat commodo sed egestas egestas fringilla. Erat nam at lectus urna duis convallis convallis tellus id.",
  },
  {
    _id: 9,
    src: "./assets/images/home-photos/home-animaux/home-animal_3.jpg",
    alt: "animal",
    category: "Collection",
    photographer: "JE - L'Administrateur",
    photographerImg: "./assets/images/janviereric.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean euismod elementum nisi quis eleifend quam. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Vitae tortor condimentum lacinia quis vel. Ultricies mi quis hendrerit dolor magna eget est. Eu tincidunt tortor aliquam nulla facilisi. Turpis egestas maecenas pharetra convallis. Neque viverra justo nec ultrices. Pharetra massa massa ultricies mi quis. Sed augue lacus viverra vitae congue eu. Nulla facilisi cras fermentum odio eu. Quis varius quam quisque id diam vel. Volutpat commodo sed egestas egestas fringilla. Erat nam at lectus urna duis convallis convallis tellus id.",
  },
  {
    _id: 10,
    src: "./assets/images/home-photos/home-iles/home-ile_3.jpg",
    alt: "île",
    category: "Partage",
    photographer: "JE - L'Administrateur",
    photographerImg: "./assets/images/janviereric.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean euismod elementum nisi quis eleifend quam. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Vitae tortor condimentum lacinia quis vel. Ultricies mi quis hendrerit dolor magna eget est. Eu tincidunt tortor aliquam nulla facilisi. Turpis egestas maecenas pharetra convallis. Neque viverra justo nec ultrices. Pharetra massa massa ultricies mi quis. Sed augue lacus viverra vitae congue eu. Nulla facilisi cras fermentum odio eu. Quis varius quam quisque id diam vel. Volutpat commodo sed egestas egestas fringilla. Erat nam at lectus urna duis convallis convallis tellus id.",
  },
  {
    _id: 11,
    src: "./assets/images/home-photos/home-natures/home-nature_3.jpg",
    alt: "nature",
    category: "Guide",
    photographer: "JE - L'Administrateur",
    photographerImg: "./assets/images/janviereric.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean euismod elementum nisi quis eleifend quam. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Vitae tortor condimentum lacinia quis vel. Ultricies mi quis hendrerit dolor magna eget est. Eu tincidunt tortor aliquam nulla facilisi. Turpis egestas maecenas pharetra convallis. Neque viverra justo nec ultrices. Pharetra massa massa ultricies mi quis. Sed augue lacus viverra vitae congue eu. Nulla facilisi cras fermentum odio eu. Quis varius quam quisque id diam vel. Volutpat commodo sed egestas egestas fringilla. Erat nam at lectus urna duis convallis convallis tellus id.",
  },
  {
    _id: 12,
    src: "./assets/images/home-photos/home-neutres/home-neutre_3.jpg",
    alt: "neutre",
    category: "Quête",
    photographer: "JE - L'Administrateur",
    photographerImg: "./assets/images/janviereric.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean euismod elementum nisi quis eleifend quam. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Vitae tortor condimentum lacinia quis vel. Ultricies mi quis hendrerit dolor magna eget est. Eu tincidunt tortor aliquam nulla facilisi. Turpis egestas maecenas pharetra convallis. Neque viverra justo nec ultrices. Pharetra massa massa ultricies mi quis. Sed augue lacus viverra vitae congue eu. Nulla facilisi cras fermentum odio eu. Quis varius quam quisque id diam vel. Volutpat commodo sed egestas egestas fringilla. Erat nam at lectus urna duis convallis convallis tellus id.",
  },
  {
    _id: 13,
    src: "./assets/images/home-photos/home-animaux/home-animal_4.jpg",
    alt: "animal",
    category: "Partage",
    photographer: "JE - L'Administrateur",
    photographerImg: "./assets/images/janviereric.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean euismod elementum nisi quis eleifend quam. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Vitae tortor condimentum lacinia quis vel. Ultricies mi quis hendrerit dolor magna eget est. Eu tincidunt tortor aliquam nulla facilisi. Turpis egestas maecenas pharetra convallis. Neque viverra justo nec ultrices. Pharetra massa massa ultricies mi quis. Sed augue lacus viverra vitae congue eu. Nulla facilisi cras fermentum odio eu. Quis varius quam quisque id diam vel. Volutpat commodo sed egestas egestas fringilla. Erat nam at lectus urna duis convallis convallis tellus id.",
  },
  {
    _id: 14,
    src: "./assets/images/home-photos/home-iles/home-ile_4.jpg",
    alt: "île",
    category: "Guide",
    photographer: "JE - L'Administrateur",
    photographerImg: "./assets/images/janviereric.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean euismod elementum nisi quis eleifend quam. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Vitae tortor condimentum lacinia quis vel. Ultricies mi quis hendrerit dolor magna eget est. Eu tincidunt tortor aliquam nulla facilisi. Turpis egestas maecenas pharetra convallis. Neque viverra justo nec ultrices. Pharetra massa massa ultricies mi quis. Sed augue lacus viverra vitae congue eu. Nulla facilisi cras fermentum odio eu. Quis varius quam quisque id diam vel. Volutpat commodo sed egestas egestas fringilla. Erat nam at lectus urna duis convallis convallis tellus id.",
  },
  {
    _id: 15,
    src: "./assets/images/home-photos/home-natures/home-nature_4.jpg",
    alt: "nature",
    category: "Quête",
    photographer: "JE - L'Administrateur",
    photographerImg: "./assets/images/janviereric.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean euismod elementum nisi quis eleifend quam. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Vitae tortor condimentum lacinia quis vel. Ultricies mi quis hendrerit dolor magna eget est. Eu tincidunt tortor aliquam nulla facilisi. Turpis egestas maecenas pharetra convallis. Neque viverra justo nec ultrices. Pharetra massa massa ultricies mi quis. Sed augue lacus viverra vitae congue eu. Nulla facilisi cras fermentum odio eu. Quis varius quam quisque id diam vel. Volutpat commodo sed egestas egestas fringilla. Erat nam at lectus urna duis convallis convallis tellus id.",
  },
  {
    _id: 16,
    src: "./assets/images/home-photos/home-neutres/home-neutre_4.jpg",
    alt: "neutre",
    category: "Collection",
    photographer: "JE - L'Administrateur",
    photographerImg: "./assets/images/janviereric.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean euismod elementum nisi quis eleifend quam. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Vitae tortor condimentum lacinia quis vel. Ultricies mi quis hendrerit dolor magna eget est. Eu tincidunt tortor aliquam nulla facilisi. Turpis egestas maecenas pharetra convallis. Neque viverra justo nec ultrices. Pharetra massa massa ultricies mi quis. Sed augue lacus viverra vitae congue eu. Nulla facilisi cras fermentum odio eu. Quis varius quam quisque id diam vel. Volutpat commodo sed egestas egestas fringilla. Erat nam at lectus urna duis convallis convallis tellus id.",
  },
  {
    _id: 17,
    src: "./assets/images/home-photos/home-animaux/home-animal_5.jpg",
    alt: "animal",
    category: "Guide",
    photographer: "JE - L'Administrateur",
    photographerImg: "./assets/images/janviereric.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean euismod elementum nisi quis eleifend quam. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Vitae tortor condimentum lacinia quis vel. Ultricies mi quis hendrerit dolor magna eget est. Eu tincidunt tortor aliquam nulla facilisi. Turpis egestas maecenas pharetra convallis. Neque viverra justo nec ultrices. Pharetra massa massa ultricies mi quis. Sed augue lacus viverra vitae congue eu. Nulla facilisi cras fermentum odio eu. Quis varius quam quisque id diam vel. Volutpat commodo sed egestas egestas fringilla. Erat nam at lectus urna duis convallis convallis tellus id.",
  },
  {
    _id: 18,
    src: "./assets/images/home-photos/home-iles/home-ile_5.jpg",
    alt: "île",
    category: "Quête",
    photographer: "JE - L'Administrateur",
    photographerImg: "./assets/images/janviereric.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean euismod elementum nisi quis eleifend quam. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Vitae tortor condimentum lacinia quis vel. Ultricies mi quis hendrerit dolor magna eget est. Eu tincidunt tortor aliquam nulla facilisi. Turpis egestas maecenas pharetra convallis. Neque viverra justo nec ultrices. Pharetra massa massa ultricies mi quis. Sed augue lacus viverra vitae congue eu. Nulla facilisi cras fermentum odio eu. Quis varius quam quisque id diam vel. Volutpat commodo sed egestas egestas fringilla. Erat nam at lectus urna duis convallis convallis tellus id.",
  },
  {
    _id: 19,
    src: "./assets/images/home-photos/home-natures/home-nature_5.jpg",
    alt: "nature",
    category: "Collection",
    photographer: "JE - L'Administrateur",
    photographerImg: "./assets/images/janviereric.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean euismod elementum nisi quis eleifend quam. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Vitae tortor condimentum lacinia quis vel. Ultricies mi quis hendrerit dolor magna eget est. Eu tincidunt tortor aliquam nulla facilisi. Turpis egestas maecenas pharetra convallis. Neque viverra justo nec ultrices. Pharetra massa massa ultricies mi quis. Sed augue lacus viverra vitae congue eu. Nulla facilisi cras fermentum odio eu. Quis varius quam quisque id diam vel. Volutpat commodo sed egestas egestas fringilla. Erat nam at lectus urna duis convallis convallis tellus id.",
  },
  {
    _id: 20,
    src: "./assets/images/home-photos/home-neutres/home-neutre_5.jpg",
    alt: "neutre",
    category: "Partage",
    photographer: "JE - L'Administrateur",
    photographerImg: "./assets/images/janviereric.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean euismod elementum nisi quis eleifend quam. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Vitae tortor condimentum lacinia quis vel. Ultricies mi quis hendrerit dolor magna eget est. Eu tincidunt tortor aliquam nulla facilisi. Turpis egestas maecenas pharetra convallis. Neque viverra justo nec ultrices. Pharetra massa massa ultricies mi quis. Sed augue lacus viverra vitae congue eu. Nulla facilisi cras fermentum odio eu. Quis varius quam quisque id diam vel. Volutpat commodo sed egestas egestas fringilla. Erat nam at lectus urna duis convallis convallis tellus id.",
  },
  {
    _id: 21,
    src: "./assets/images/home-photos/home-animaux/home-animal_6.jpg",
    alt: "animal",
    category: "Quête",
    photographer: "JE - L'Administrateur",
    photographerImg: "./assets/images/janviereric.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean euismod elementum nisi quis eleifend quam. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Vitae tortor condimentum lacinia quis vel. Ultricies mi quis hendrerit dolor magna eget est. Eu tincidunt tortor aliquam nulla facilisi. Turpis egestas maecenas pharetra convallis. Neque viverra justo nec ultrices. Pharetra massa massa ultricies mi quis. Sed augue lacus viverra vitae congue eu. Nulla facilisi cras fermentum odio eu. Quis varius quam quisque id diam vel. Volutpat commodo sed egestas egestas fringilla. Erat nam at lectus urna duis convallis convallis tellus id.",
  },
  {
    _id: 22,
    src: "./assets/images/home-photos/home-iles/home-ile_6.jpg",
    alt: "île",
    category: "Collection",
    photographer: "JE - L'Administrateur",
    photographerImg: "./assets/images/janviereric.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean euismod elementum nisi quis eleifend quam. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Vitae tortor condimentum lacinia quis vel. Ultricies mi quis hendrerit dolor magna eget est. Eu tincidunt tortor aliquam nulla facilisi. Turpis egestas maecenas pharetra convallis. Neque viverra justo nec ultrices. Pharetra massa massa ultricies mi quis. Sed augue lacus viverra vitae congue eu. Nulla facilisi cras fermentum odio eu. Quis varius quam quisque id diam vel. Volutpat commodo sed egestas egestas fringilla. Erat nam at lectus urna duis convallis convallis tellus id.",
  },
  {
    _id: 23,
    src: "./assets/images/home-photos/home-natures/home-nature_6.jpg",
    alt: "nature",
    category: "Partage",
    photographer: "JE - L'Administrateur",
    photographerImg: "./assets/images/janviereric.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean euismod elementum nisi quis eleifend quam. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Vitae tortor condimentum lacinia quis vel. Ultricies mi quis hendrerit dolor magna eget est. Eu tincidunt tortor aliquam nulla facilisi. Turpis egestas maecenas pharetra convallis. Neque viverra justo nec ultrices. Pharetra massa massa ultricies mi quis. Sed augue lacus viverra vitae congue eu. Nulla facilisi cras fermentum odio eu. Quis varius quam quisque id diam vel. Volutpat commodo sed egestas egestas fringilla. Erat nam at lectus urna duis convallis convallis tellus id.",
  },
  {
    _id: 24,
    src: "./assets/images/home-photos/home-neutres/home-neutre_6.jpg",
    alt: "neutre",
    category: "Guide",
    photographer: "JE - L'Administrateur",
    photographerImg: "./assets/images/janviereric.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean euismod elementum nisi quis eleifend quam. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Vitae tortor condimentum lacinia quis vel. Ultricies mi quis hendrerit dolor magna eget est. Eu tincidunt tortor aliquam nulla facilisi. Turpis egestas maecenas pharetra convallis. Neque viverra justo nec ultrices. Pharetra massa massa ultricies mi quis. Sed augue lacus viverra vitae congue eu. Nulla facilisi cras fermentum odio eu. Quis varius quam quisque id diam vel. Volutpat commodo sed egestas egestas fringilla. Erat nam at lectus urna duis convallis convallis tellus id.",
  },
  {
    _id: 25,
    src: "./assets/images/home-photos/home-animaux/home-animal_7.jpg",
    alt: "animal",
    category: "Collection",
    photographer: "JE - L'Administrateur",
    photographerImg: "./assets/images/janviereric.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean euismod elementum nisi quis eleifend quam. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Vitae tortor condimentum lacinia quis vel. Ultricies mi quis hendrerit dolor magna eget est. Eu tincidunt tortor aliquam nulla facilisi. Turpis egestas maecenas pharetra convallis. Neque viverra justo nec ultrices. Pharetra massa massa ultricies mi quis. Sed augue lacus viverra vitae congue eu. Nulla facilisi cras fermentum odio eu. Quis varius quam quisque id diam vel. Volutpat commodo sed egestas egestas fringilla. Erat nam at lectus urna duis convallis convallis tellus id.",
  },
  {
    _id: 26,
    src: "./assets/images/home-photos/home-iles/home-ile_7.jpg",
    alt: "île",
    category: "Paratge",
    photographer: "JE - L'Administrateur",
    photographerImg: "./assets/images/janviereric.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean euismod elementum nisi quis eleifend quam. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Vitae tortor condimentum lacinia quis vel. Ultricies mi quis hendrerit dolor magna eget est. Eu tincidunt tortor aliquam nulla facilisi. Turpis egestas maecenas pharetra convallis. Neque viverra justo nec ultrices. Pharetra massa massa ultricies mi quis. Sed augue lacus viverra vitae congue eu. Nulla facilisi cras fermentum odio eu. Quis varius quam quisque id diam vel. Volutpat commodo sed egestas egestas fringilla. Erat nam at lectus urna duis convallis convallis tellus id.",
  },
  {
    _id: 27,
    src: "./assets/images/home-photos/home-natures/home-nature_7.jpg",
    alt: "nature",
    category: "Guide",
    photographer: "JE - L'Administrateur",
    photographerImg: "./assets/images/janviereric.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean euismod elementum nisi quis eleifend quam. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Vitae tortor condimentum lacinia quis vel. Ultricies mi quis hendrerit dolor magna eget est. Eu tincidunt tortor aliquam nulla facilisi. Turpis egestas maecenas pharetra convallis. Neque viverra justo nec ultrices. Pharetra massa massa ultricies mi quis. Sed augue lacus viverra vitae congue eu. Nulla facilisi cras fermentum odio eu. Quis varius quam quisque id diam vel. Volutpat commodo sed egestas egestas fringilla. Erat nam at lectus urna duis convallis convallis tellus id.",
  },
  {
    _id: 28,
    src: "./assets/images/home-photos/home-neutres/home-neutre_7.jpg",
    alt: "neutre",
    category: "Quête",
    photographer: "JE - L'Administrateur",
    photographerImg: "./assets/images/janviereric.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean euismod elementum nisi quis eleifend quam. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Vitae tortor condimentum lacinia quis vel. Ultricies mi quis hendrerit dolor magna eget est. Eu tincidunt tortor aliquam nulla facilisi. Turpis egestas maecenas pharetra convallis. Neque viverra justo nec ultrices. Pharetra massa massa ultricies mi quis. Sed augue lacus viverra vitae congue eu. Nulla facilisi cras fermentum odio eu. Quis varius quam quisque id diam vel. Volutpat commodo sed egestas egestas fringilla. Erat nam at lectus urna duis convallis convallis tellus id.",
  },
  {
    _id: 29,
    src: "./assets/images/home-photos/home-animaux/home-animal_8.jpg",
    alt: "animal",
    category: "Partage",
    photographer: "JE - L'Administrateur",
    photographerImg: "./assets/images/janviereric.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean euismod elementum nisi quis eleifend quam. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Vitae tortor condimentum lacinia quis vel. Ultricies mi quis hendrerit dolor magna eget est. Eu tincidunt tortor aliquam nulla facilisi. Turpis egestas maecenas pharetra convallis. Neque viverra justo nec ultrices. Pharetra massa massa ultricies mi quis. Sed augue lacus viverra vitae congue eu. Nulla facilisi cras fermentum odio eu. Quis varius quam quisque id diam vel. Volutpat commodo sed egestas egestas fringilla. Erat nam at lectus urna duis convallis convallis tellus id.",
  },
  {
    _id: 30,
    src: "./assets/images/home-photos/home-iles/home-ile_8.jpg",
    alt: "île",
    category: "Guide",
    photographer: "JE - L'Administrateur",
    photographerImg: "./assets/images/janviereric.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean euismod elementum nisi quis eleifend quam. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Vitae tortor condimentum lacinia quis vel. Ultricies mi quis hendrerit dolor magna eget est. Eu tincidunt tortor aliquam nulla facilisi. Turpis egestas maecenas pharetra convallis. Neque viverra justo nec ultrices. Pharetra massa massa ultricies mi quis. Sed augue lacus viverra vitae congue eu. Nulla facilisi cras fermentum odio eu. Quis varius quam quisque id diam vel. Volutpat commodo sed egestas egestas fringilla. Erat nam at lectus urna duis convallis convallis tellus id.",
  },
  {
    _id: 31,
    src: "./assets/images/home-photos/home-natures/home-nature_8.jpg",
    alt: "nature",
    category: "Quête",
    photographer: "JE - L'Administrateur",
    photographerImg: "./assets/images/janviereric.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean euismod elementum nisi quis eleifend quam. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Vitae tortor condimentum lacinia quis vel. Ultricies mi quis hendrerit dolor magna eget est. Eu tincidunt tortor aliquam nulla facilisi. Turpis egestas maecenas pharetra convallis. Neque viverra justo nec ultrices. Pharetra massa massa ultricies mi quis. Sed augue lacus viverra vitae congue eu. Nulla facilisi cras fermentum odio eu. Quis varius quam quisque id diam vel. Volutpat commodo sed egestas egestas fringilla. Erat nam at lectus urna duis convallis convallis tellus id.",
  },
  {
    _id: 32,
    src: "./assets/images/home-photos/home-neutres/home-neutre_8.jpg",
    alt: "neutre",
    category: "Collection",
    photographer: "JE - L'Administrateur",
    photographerImg: "./assets/images/janviereric.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean euismod elementum nisi quis eleifend quam. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Vitae tortor condimentum lacinia quis vel. Ultricies mi quis hendrerit dolor magna eget est. Eu tincidunt tortor aliquam nulla facilisi. Turpis egestas maecenas pharetra convallis. Neque viverra justo nec ultrices. Pharetra massa massa ultricies mi quis. Sed augue lacus viverra vitae congue eu. Nulla facilisi cras fermentum odio eu. Quis varius quam quisque id diam vel. Volutpat commodo sed egestas egestas fringilla. Erat nam at lectus urna duis convallis convallis tellus id.",
  },
  {
    _id: 33,
    src: "./assets/images/home-photos/home-animaux/home-animal_9.jpg",
    alt: "animal",
    category: "Guide",
    photographer: "JE - L'Administrateur",
    photographerImg: "./assets/images/janviereric.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean euismod elementum nisi quis eleifend quam. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Vitae tortor condimentum lacinia quis vel. Ultricies mi quis hendrerit dolor magna eget est. Eu tincidunt tortor aliquam nulla facilisi. Turpis egestas maecenas pharetra convallis. Neque viverra justo nec ultrices. Pharetra massa massa ultricies mi quis. Sed augue lacus viverra vitae congue eu. Nulla facilisi cras fermentum odio eu. Quis varius quam quisque id diam vel. Volutpat commodo sed egestas egestas fringilla. Erat nam at lectus urna duis convallis convallis tellus id.",
  },
  {
    _id: 34,
    src: "./assets/images/home-photos/home-iles/home-ile_9.jpg",
    alt: "île",
    category: "Quête",
    photographer: "JE - L'Administrateur",
    photographerImg: "./assets/images/janviereric.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean euismod elementum nisi quis eleifend quam. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Vitae tortor condimentum lacinia quis vel. Ultricies mi quis hendrerit dolor magna eget est. Eu tincidunt tortor aliquam nulla facilisi. Turpis egestas maecenas pharetra convallis. Neque viverra justo nec ultrices. Pharetra massa massa ultricies mi quis. Sed augue lacus viverra vitae congue eu. Nulla facilisi cras fermentum odio eu. Quis varius quam quisque id diam vel. Volutpat commodo sed egestas egestas fringilla. Erat nam at lectus urna duis convallis convallis tellus id.",
  },
  {
    _id: 35,
    src: "./assets/images/home-photos/home-natures/home-nature_9.jpg",
    alt: "nature",
    category: "Collection",
    photographer: "JE - L'Administrateur",
    photographerImg: "./assets/images/janviereric.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean euismod elementum nisi quis eleifend quam. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Vitae tortor condimentum lacinia quis vel. Ultricies mi quis hendrerit dolor magna eget est. Eu tincidunt tortor aliquam nulla facilisi. Turpis egestas maecenas pharetra convallis. Neque viverra justo nec ultrices. Pharetra massa massa ultricies mi quis. Sed augue lacus viverra vitae congue eu. Nulla facilisi cras fermentum odio eu. Quis varius quam quisque id diam vel. Volutpat commodo sed egestas egestas fringilla. Erat nam at lectus urna duis convallis convallis tellus id.",
  },
  {
    _id: 36,
    src: "./assets/images/home-photos/home-neutres/home-neutre_9.jpg",
    alt: "neutre",
    category: "Partage",
    photographer: "JE - L'Administrateur",
    photographerImg: "./assets/images/janviereric.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean euismod elementum nisi quis eleifend quam. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Vitae tortor condimentum lacinia quis vel. Ultricies mi quis hendrerit dolor magna eget est. Eu tincidunt tortor aliquam nulla facilisi. Turpis egestas maecenas pharetra convallis. Neque viverra justo nec ultrices. Pharetra massa massa ultricies mi quis. Sed augue lacus viverra vitae congue eu. Nulla facilisi cras fermentum odio eu. Quis varius quam quisque id diam vel. Volutpat commodo sed egestas egestas fringilla. Erat nam at lectus urna duis convallis convallis tellus id.",
  },
  {
    _id: 37,
    src: "./assets/images/home-photos/home-animaux/home-animal_10.jpg",
    alt: "animal",
    category: "Quête",
    photographer: "JE - L'Administrateur",
    photographerImg: "./assets/images/janviereric.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean euismod elementum nisi quis eleifend quam. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Vitae tortor condimentum lacinia quis vel. Ultricies mi quis hendrerit dolor magna eget est. Eu tincidunt tortor aliquam nulla facilisi. Turpis egestas maecenas pharetra convallis. Neque viverra justo nec ultrices. Pharetra massa massa ultricies mi quis. Sed augue lacus viverra vitae congue eu. Nulla facilisi cras fermentum odio eu. Quis varius quam quisque id diam vel. Volutpat commodo sed egestas egestas fringilla. Erat nam at lectus urna duis convallis convallis tellus id.",
  },
  {
    _id: 38,
    src: "./assets/images/home-photos/home-iles/home-ile_10.jpg",
    alt: "île",
    category: "Collection",
    photographer: "JE - L'Administrateur",
    photographerImg: "./assets/images/janviereric.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean euismod elementum nisi quis eleifend quam. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Vitae tortor condimentum lacinia quis vel. Ultricies mi quis hendrerit dolor magna eget est. Eu tincidunt tortor aliquam nulla facilisi. Turpis egestas maecenas pharetra convallis. Neque viverra justo nec ultrices. Pharetra massa massa ultricies mi quis. Sed augue lacus viverra vitae congue eu. Nulla facilisi cras fermentum odio eu. Quis varius quam quisque id diam vel. Volutpat commodo sed egestas egestas fringilla. Erat nam at lectus urna duis convallis convallis tellus id.",
  },
  {
    _id: 39,
    src: "./assets/images/home-photos/home-natures/home-nature_10.jpg",
    alt: "nature",
    category: "Partage",
    photographer: "JE - L'Administrateur",
    photographerImg: "./assets/images/janviereric.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean euismod elementum nisi quis eleifend quam. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Vitae tortor condimentum lacinia quis vel. Ultricies mi quis hendrerit dolor magna eget est. Eu tincidunt tortor aliquam nulla facilisi. Turpis egestas maecenas pharetra convallis. Neque viverra justo nec ultrices. Pharetra massa massa ultricies mi quis. Sed augue lacus viverra vitae congue eu. Nulla facilisi cras fermentum odio eu. Quis varius quam quisque id diam vel. Volutpat commodo sed egestas egestas fringilla. Erat nam at lectus urna duis convallis convallis tellus id.",
  },
  {
    _id: 40,
    src: "./assets/images/home-photos/home-neutres/home-neutre_10.jpg",
    alt: "neutre",
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
  <img src="${homePhoto.src}" alt="${homePhoto.alt}" />
    <h2>${homePhoto.category}</h2>
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
    <img src="${formPhoto.picture}" alt="" />
    <h2>${formPhoto.category}</h2>`;
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
