const subtotal = document.getElementById("subtotal");
const product = document.getElementById("product");
const total = document.getElementById("total");
let totaleTout = 0;
let cartProdoui = JSON.parse(localStorage.getItem("prodoui"));

function afficheProdoui() {
  cartProdoui.map((item) => {
    product.innerHTML += `
    <div class="sp-flex-row" >
                <p>${item.title}</p>
                <span >$ ${item.prix * item.content}</span>
    </div>
    `;
  });
}
afficheProdoui();

for(let i = 0 ; i < cartProdoui.length ; i++){
    totaleTout += cartProdoui[i].prix * cartProdoui[i].content;
}

subtotal.innerText = `$ ${totaleTout}`;
total.innerText = `$ ${totaleTout + 30}`