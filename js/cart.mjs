const table = document.getElementById("table");
let cartProdoui = JSON.parse(localStorage.getItem("prodoui"));
const Subtotal = document.getElementById("Subtotal");
const Total = document.getElementById("Total");

let caculTotal = 0;
function afficheProdouiCart() {
  cartProdoui.map((item) => {
    table.innerHTML += `
        <tr>
            <td>
              <div class="ar-flex-row">
                <img src="../${item.image}" /> ${item.title}
              </div>
            </td>
            <td>$ ${item.prix}</td>
            <td class="ar-flex-row">
             <button value=${
               item.id
             }> <i class="fa-solid fa-plus pluMin" ></i> </button>${
      item.content
    } 
             <button value=${
               item.id
             }> <i class="fa-sharp fa-solid fa-minus pluMin"  ></i></button>
            </td>
            <td>$ ${item.prix * item.content}</td>
            <td > <button class="supreme" value=${
              item.id
            }> <i class="fa-sharp fa-solid fa-trash"></i> </button> </td>
        </tr>
        `;
  });
}
afficheProdouiCart();
for (let i = 0; i < cartProdoui.length; i++) {
  caculTotal += cartProdoui[i].prix * cartProdoui[i].content;
}
Subtotal.innerText = `$ ${caculTotal}`;
Total.innerText = `$ ${caculTotal + 30}`;

const pluMin  = document.querySelectorAll(".ar-flex-row button");
const sprumer = document.querySelectorAll(".supreme");

pluMin.forEach((item, index) => {
  item.addEventListener("click", () => {
    let getId = cartProdoui.find((items) => {
      return items.id === +item.value;
    });
    if (index == 0 || index % 2 === 0) {
      if (getId) {
        getId.content += 1;
        localStorage.setItem("prodoui", JSON.stringify(cartProdoui));
      }
    }else{
      if (getId) {
        if(getId.content > 1){
          getId.content -= 1;
          localStorage.setItem("prodoui", JSON.stringify(cartProdoui));
        }
        
      }
    }
    location.reload();

    
  });
});

sprumer.forEach((item , index)=>{
  item.addEventListener("click",()=>{
    console.log(item.value);
    cartProdoui.splice(index,1);
    console.log(cartProdoui);
    localStorage.setItem("prodoui", JSON.stringify(cartProdoui));
    location.reload();
  })
})
