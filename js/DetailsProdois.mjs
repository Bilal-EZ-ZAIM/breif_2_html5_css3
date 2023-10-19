import { prodoui } from "./data.mjs";
const detailsProdoui = document.getElementById("detailsProdoui");
const cleint = document.getElementById("cleint");
const locationHerf = window.location.href;
const id = locationHerf[locationHerf.length - 1];
let achterProdoui = localStorage.getItem("prodoui")? JSON.parse(localStorage.getItem("prodoui")):[];
let prod = prodoui.find((item) => {
  return item.id == +id;
});

// afficher le detalise un seule prodoui
function afficherDeta() {
  detailsProdoui.innerHTML += `

  <a class="cart">
          <div class="image">
            <img src="../${prod.image}" alt="image 1" />
          </div>
          <div class="des">
            <h4>${prod.title}</h4>
            <span>$ ${prod.prix}</span>
          </div>
        </a>
        <div class="images sp-flex-culom" id="images">
        ${prod.images.map(item => `
          <img src="../${item}" alt="Product Image" />
          `).join(" ")
        }
        
        </div>
       
    </div>
        <div class="lefth sp-flex-culom des">
          <h1>C'est un produit merveilleux</h1>
          <p>
            ${prod.descriptio}
          </p>
          <button>ADD TO CART</button>
    </div>
  `;
}
function affecherCom() {
  prod.commintCliut.map((item) => {
    cleint.innerHTML += `
   
      <div class="commint sp-flex-culom">
        <div class="image-name">
          <img src="${item.image}" alt="image user" />
          <h4>${item.nom}</h4>
        </div>
        <p>${item.comonter}</p>
      </div>
    `;
  });
}
afficherDeta();
affecherCom();

const btn = document.querySelectorAll(".des  button");
btn.forEach((item, index) => {
  item.addEventListener("click", () => {
    const unSeul = prodoui.find((item) => {
      return item.id === index + 1;
    });

    const prodPush = achterProdoui.find((item) => {
      return item.id === unSeul.id;
    });
    if (prodPush === undefined) {
      achterProdoui.push(unSeul);
      console.log("yes push");
      console.log(achterProdoui);
      localStorage.setItem("prodoui", JSON.stringify(achterProdoui));
    } else {
      console.log("C'est la");
    }
  });
});
