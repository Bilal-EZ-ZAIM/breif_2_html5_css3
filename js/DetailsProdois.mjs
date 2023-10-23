import { prodoui } from "./data.mjs";
const detailsProdoui = document.getElementById("detailsProdoui");
const cleint = document.getElementById("cleint");
const locationHerf = window.location.href;
const id = locationHerf[locationHerf.length - 1];
let achterProdoui = localStorage.getItem("prodoui")? JSON.parse(localStorage.getItem("prodoui")):[];
let prod = prodoui.find((item) => {
  return item.id == +id;
});
console.log(achterProdoui);
// afficher le detalise un seule prodoui
function afficherDeta() {
  detailsProdoui.innerHTML += `

  <div class="cart">
          <div class="image">
            <img src="../${prod.image}" alt="image 1" />
          </div>
          <div class="des">
            <h4>${prod.title}</h4>
            <span>$ ${prod.prix}</span>
          </div>
  </div>
        <div class="images" id="images">
        ${prod.images.map(item => `
          <img src="../${item}" alt="Product Image" />
          `).join(" ")
        }
        
        </div>
       
    </div>
        <div class="lefth sp-flex-culom">
          <h1>C'est un produit merveilleux</h1>
          <p>
            ${prod.descriptio}
          </p>
          <button id="addcart">ADD TO CART</button>
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

const btn = document.querySelectorAll("#addcart");
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
      Swal.fire({
        position: "center",
        title: "Oui , mantaint le produit au panier",
        showConfirmButton: false,
        timer: 1500,
      });
      console.log(achterProdoui);
      localStorage.setItem("prodoui", JSON.stringify(achterProdoui));
    } else {
      Swal.fire({
        position: 'center',
        title: 'Oui , le produit au panier',
        showConfirmButton: false,
        timer: 1500
      })
    }
  });
});