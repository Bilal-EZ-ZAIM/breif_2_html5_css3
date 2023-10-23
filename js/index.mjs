import { prodoui } from "./data.mjs";
console.log("cccc")
// le element html
const toggle = document.getElementById("toggle");
const bars = document.getElementById("bars");
const prodouis = document.getElementById("prodouis");
let achterProdoui = localStorage.getItem("prodoui")
  ? JSON.parse(localStorage.getItem("prodoui"))
  : [];
console.log(JSON.parse(localStorage.getItem("prodoui")));


// affiche le mune bar
bars.addEventListener("click", (e) => {
  toggle.classList.toggle("toggle");
});

// afficher le prodoui par javaScribt

function afficheProdoui() {
  prodoui.map((item) => {
    prodouis.innerHTML += `
    <div class="cart" >
    <div class="image">
      <img src="${item.image}" alt="image 1" />
    </div>
    <div class="des">
      <h4>${item.title}</h4>
      <div class="shping">
      <span>$ ${item.prix}</span>
      <button> <i class="fa fa-cart-shopping"  class="addCart"></i></button>
      
      </div>
       
    </div>
    <a class="show" href="./pages/product.html#${item.id}">show more</a>
  </div>
        `;
  });
}

afficheProdoui();

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
      Swal.fire({
        position: "center",
        title: "Oui , mantaint le produit au panier",
        showConfirmButton: false,
        timer: 1500,
      });
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


console.log("hgjkl")