const subtotal = document.getElementById("subtotal");
const product = document.getElementById("product");
const total = document.getElementById("total");
const input = document.querySelectorAll("input");
const val = document.querySelectorAll(".val p");
const submit = document.getElementById("submit");
console.log(submit)
console.log(val[0].hasAttribute("data"))
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

function valudtionInput(){
  input.forEach( (item , index) =>{
    item.addEventListener("input",(e)=>{
      if(item.value.length < 2){
        item.style.border = "2px solid red";
        val[index].style.display = "block";
      }else{
        item.style.border = "2px solid green";
        val[index].style.display = "none";
      }     
    })
  })
}


submit.addEventListener("click",(e)=>{
  e.preventDefault();

  if(input[0].value.length < 2){
    input[0].style.border = "2px solid red";
    val[0].style.display = "block";
  }else{
    input[0].style.border = "2px solid green";
    val[0].style.display = "none";
  }
  if(input[1].value.length < 2){
    input[1].style.border = "2px solid red";
    val[1].style.display = "block"
  }else{
    input[1].style.border = "2px solid green";
    val[1].style.display = "none";
  }
  if(input[2].value.length < 14){
    input[2].style.border = "2px solid red";
    val[2].style.display = "block";
    
  }else{
    input[2].style.border = "2px solid green";
    val[2].style.display = "none";
  }
  if(input[3].value.length < 10){
    input[3].style.border = "2px solid red";
    val[3].style.display = "block"
  }else{
    input[3].style.border = "2px solid green";
    val[3].style.display = "none";
  }
  if(input[4].value.length < 5){
    input[4].style.border = "2px solid red";
    val[4].style.display = "block"
  }else{
    input[4].style.border = "2px solid green";
    val[4].style.display = "none";
  }
})

valudtionInput();