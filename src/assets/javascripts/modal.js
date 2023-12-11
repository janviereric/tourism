const body = document.querySelector("body");
let calc;
let modal;
let buttonNo;
let buttonYes;

const createCalc = () => {
  calc = document.createElement("div");
  calc.classList.add("calc");
};

const createModal = (question) => {
  body.classList.add("remove-scrolling");
  modal = document.createElement("div");
  modal.classList.add("modal");
  modal.innerHTML = `
      <p>${question}</p>
    `;
  buttonNo = document.createElement("button");
  buttonNo.innerText = "Non";
  buttonNo.classList.add("button", "button-no");
  buttonYes = document.createElement("button");
  buttonYes.classList.add("button", "button-yes");
  buttonYes.innerText = "Oui";

  modal.addEventListener("click", (event) => {
    event.stopPropagation();
  });
  modal.append(buttonNo, buttonYes);
};

export function openModal(question) {
  createCalc();
  createModal(question);
  calc.append(modal);
  body.append(calc);

  return new Promise((resolve, reject) => {
    calc.addEventListener("click", () => {
      resolve(false);
      calc.remove();
      body.classList.remove("remove-scrolling");
    });

    buttonNo.addEventListener("click", (event) => {
      event.stopPropagation();
      resolve(false);
      calc.remove();
      body.classList.remove("remove-scrolling");
    });

    buttonYes.addEventListener("click", (event) => {
      event.stopPropagation();
      resolve(true);
      calc.remove();
    });
  });
}
