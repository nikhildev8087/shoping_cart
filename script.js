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
                       
                        <div class="add-to-cart-${product.id}" onclick="addToCart(${product.id})">
                       
                        <a href="#" class="btn btn-primary " id="cart${product.id}">Add to Cart</a>
                    </div>
                    </div>
                    
                    
                </div>
            </div>
        `;
  });
}

renderProdcuts();


// const btnprimary = document.querySelector(`"#cart${product.id}"`);

// btnprimary.addEventListener('click',function(){
//   btnprimary.className= ' btn-danger';
//   btnprimary.innerHTML= "Remove";

// })


// cart array in the local storage
let cart = JSON.parse(localStorage.getItem("CART")) || [];
updateCart();

// Add to cart
function addToCart(id) {
  // check if prodcut already exist in cart
 

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
            <div class="item-info" onclick="removeItemFromCart(${item.id})">
            <button class="btn btn-danger">Remove</button>
        </div>
        </div>
      `;
  });
}


// remove item from cart
function removeItemFromCart(id) {
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








   
