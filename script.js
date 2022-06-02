// store elements into the variable
const productsEl = document.querySelector(".products");
const cartItemsEl = document.querySelector(".cart-items1");
const subtotalEl = document.querySelector(".subtotal");
const totalItemsInCartEl = document.querySelector(".total-items-in-cart");

// get all products form products file
function renderProdcuts() {
  products.forEach((product) => {
    productsEl.innerHTML += `
            <div class="item col-md-3 p-2">
                <div class="item-container card" style="width: 18rem;">
                    <div class="item-img">
                        <img src="${product.imgSrc}" class="card-img-top img-fluid" style="width:"200px";" alt="${product.name}">
                    </div>
                    <div class="desc card-body">
                        <h2 class="card-title">${product.name}</h2>
                        <h2 class="card-text">${product.price}</h2>
                       
                        <div class="add-to-cart-${product.id}" >
                        <button class="btn btn-primary" onclick="addToCart(${product.id})" id="cart${product.id}">Add to Cart</button>
                        <button class="btn btn-danger btnrem_${product.id}" onclick="removeItemFromCart(${product.id})">Remove</button>
                    </div>
                    </div>
                    
                    
                </div>
            </div>
        `;
  });
}

renderProdcuts();

// const cart1 = document.getElementById("cart0");
// cart1.addEventListener("click",function(){

//   if(cart1.innerHTML="Add to Cart"){

//     cart1.style.display="none";
//   }else{
//     cart1.innerHTML="remove";
//     cart1.style.display="inline-block";
//   }
// })





// const cartRemove = document.getElementById("cartRemove");

// cartRemove.addEventListener("click", function(){
//   console.log(this);
// })



// const btnid = document.getElementById("cart0");

// function changeText(id){
//   products.forEach((product) => {
//     if(product.id === id){

//       console.log(id);
//       console.log(product.id.innerHTML);
//       if(btnid.innerHTML === 'Add to Cart'){
//         btnid.innerHTML='remove';
//         btnid.className = 'btn btn-danger'
//         removeItemFromCart(id);
//       }else{
//         btnid.innerHTML='Add to Cart';
//         btnid.className = 'btn btn-primary';
//         addToCart (id);
//       }
      
//     }
//   });
 
//   console.log(btnid.innerHTML);
// }

// function hidebtn(){

//   const  btnremove = document.querySelectorAll("btn-danger");
//   console.log(btnremove);
//   btnremove.innerHTML ="none";
// }

// // hidebtn();


// const btnprimary = document.querySelector(`"#cart${product.id}"`);

// btnprimary.addEventListener('click',function(){
//   id.className= ' btn-danger';
//   btnprimary.innerHTML= "Remove";

// })

let name = [];
localStorage.setItem("name",JSON.stringify("name"))

// cart array in the local storage
let cart = JSON.parse(localStorage.getItem("CART")) || [];
updateCart();
















// Add to cart
function addToCart(id) {
  
  var idname = "cart"+id;
  console.log(idname);
      const changebtn = document.getElementById(`${idname}`);
      // console.log(items);
      console.log("this is a change btn",changebtn);
      // changebtn.style.display = "none";
      changebtn.innerHTML = "Remove";
      changebtn.className = "btn btn-danger";
  // check if prodcut already exist in cart
 
  // products.forEach((items)=>{

  //   if(items.id === id){

  //     var idname = "cart"+id;
  //     console.log(idname);
  //         const changebtn = document.getElementById(`${idname}`);
  //         console.log(items);
  //         console.log("this is a change btn",changebtn);
  //         // changebtn.style.display = "none";
  //         changebtn.innerHTML = "Remove";
  //         changebtn.className = "btn btn-danger";
  //         // changebtn.onclick = removeItemFromCart(id);
         

  //   }
  // })

  console.log(id);


  if (cart.some((item) => item.id === id)) {
    
  

    changeNumberOfUnits("plus", id);
  } else {
    const item = products.find((product) => product.id === id);

    
    

    cart.push({
      ...item,
      numberOfUnits: 1,
    });
  }

  
  

  updateCart();
}

// update cart
function updateCart() {
  renderCartItems();
  renderSubtotal();

  // save cart to local storage
  localStorage.setItem("CART", JSON.stringify(cart));
}

// calculate and render subtotal
function renderSubtotal() {
  let totalPrice = 0,
    totalItems = 0;

  cart.forEach((item) => {
    totalPrice += item.price * item.numberOfUnits;
    totalItems += item.numberOfUnits;
  });

  subtotalEl.innerHTML = `${totalItems} items ${totalPrice}`;
  totalItemsInCartEl.innerHTML = totalItems;
}



// render cart items
function renderCartItems() {
  cartItemsEl.innerHTML = ""; // clear cart element
  cart.forEach((item) => {
    cartItemsEl.innerHTML += `
        <div class="cart-item">
            
            <img src="${item.imgSrc}" width="300px" alt="${item.name}">
                <h4>${item.name}</h4>
            <div class="unit-price">
                ${item.price}
            </div>
           
            <div class="units row">
                <div class="btn minus" onclick="changeNumberOfUnits('minus', ${item.id})">-</div>
                <div class="number">${item.numberOfUnits}</div>
                <div class="btn plus" onclick="changeNumberOfUnits('plus', ${item.id})">+</div>           
            </div>
            <div class="item-info" >
            <button class="btn btn-danger btn_${item.id}" onclick="removeItemFromCart(${item.id})">Remove</button>
        </div>
        </div>
      `;
  });
}



// remove item from cart
function removeItemFromCart(id) {

  cart.forEach((items)=>{

    if(items.id === id){

      var abc = "cart"+id;
      console.log(abc);
          const changebtn = document.getElementById(`${abc}`);
          console.log(items);
          console.log("this is a change btn",changebtn);
          changebtn.innerHTML = "Add To Cart";
          changebtn.className = "btn btn-primary";
          // changebtn.onclick=addToCart(id);

          console.log(changebtn);
         
    }
  })

  
  cart = cart.filter((item) => item.id !== id);
  updateCart();

  
  
}

// change number of units for an item
function changeNumberOfUnits(action, id) {
  cart = cart.map((item) => {
    let numberOfUnits = item.numberOfUnits;

    if (item.id === id) {
      if (action === "minus" && numberOfUnits > 1) {
        numberOfUnits--;
      } else if (action === "plus" && numberOfUnits < item.instock) {
        numberOfUnits++;
      }
    }

    return {
      ...item,
      numberOfUnits,
    };
  });

  updateCart();
}











   
