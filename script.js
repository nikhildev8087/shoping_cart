var product_data = []


    const data = fetch("./productlist.json")
    .then(response => {
    return response.json();
    })
    .then(jsondata => {
         product_data = jsondata
        //  const myObj = JSON.parse(product_data);
        product_list = document.getElementById('product-list')

        product_id = 1;
        product_title = "Product 1";
        product_price = product_data[0].product_price;

        product_data.forEach(element => {
             = [product_data]
        });
        product_item = `<div class="col-md-4">
                            <div class="card" style="width: 18rem;">
                                <img src="https://images.unsplash.com/photo-1644462786531-c7e6e006183c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" class="card-img-top" alt="...">
                                <div class="card-body">
                                <h5 class="card-title">${product_title}</h5>
                                <p class="card-text" value="100">${product_price} rs</p>
                                <a href="#" class="btn btn-primary " id="cart-btn-${product_id}" onclick="add_to_cart(${product_id},)">Add to Cart</a>
                                </div>
                            </div>
                        </div>`

        product_list.innerHTML = product_item
        console.log(product_data);
        console.log(typeof product_data);
        console.log(product_data.length);
        console.log(product_data.product_price);
    });

    function add_to_cart(product_id){
        
        cart_btn = document.getElementById('cart-btn-'+product_id)

        console.log(product_data);
        
    }

    console.log(product_data.price);


// let btns = document.querySelectorAll('#cart-btn');

// for (var i = 0; i < btns.length; i++) {
//     btns[i].addEventListener('click', function() {addToCart(this);});
// }

// function addToCart(element){
//     let sibs = [];
//     // let getImg;
//     let getprice;
//     let getproductName;
//     let cart = [];
//     let stringCart;

//      //cycles siblings for product info near the add button
//      while(element = element.previousSibling) {
//         if (element.nodeType === 3) continue; // text node
//         if(element.className == "card-text"){
//             getprice = element.innerText;
//         }
//         if (element.className == "cart-title") {
//             getproductName = element.innerText;
//         }
//         sibs.push(element);
//     }

//     // console.log(element.previousSibling);
// }


// //create product object
// var product = {
//     productname : getproductName,
//     price : getprice
// };


// //convert product data to JSON for storage
// var stringProduct = JSON.stringify(product);
// /*send product data to session storage */


// if(!sessionStorage.getItem('cart')){
//     //append product JSON object to cart array
//     cart.push(stringProduct);
//     //cart to JSON
//     stringCart = JSON.stringify(cart);
//     //create session storage cart item
//     sessionStorage.setItem('cart', stringCart);
//     addedToCart(getproductName);
//     updateCartTotal();
// }
// else {
//     //get existing cart data from storage and convert back into array
//    cart = JSON.parse(sessionStorage.getItem('cart'));
//     //append new product JSON object
//     cart.push(stringProduct);
//     //cart back to JSON
//     stringCart = JSON.stringify(cart);
//     //overwrite cart data in sessionstorage 
//     sessionStorage.setItem('cart', stringCart);
//     addedToCart(getproductName);
//     updateCartTotal();
// }


// /* Calculate Cart Total */
// function updateCartTotal(){
//     //init
//     var total = 0;
//     var price = 0;
//     var items = 0;
//     var productname = "";
//     var carttable = "";
//     if(sessionStorage.getItem('cart')) {
//         //get cart data & parse to array
//         var cart = JSON.parse(sessionStorage.getItem('cart'));
//         //get no of items in cart 
//         items = cart.length;
//         //loop over cart array
//         for (var i = 0; i < items; i++){
//             //convert each JSON product in array back into object
//             var x = JSON.parse(cart[i]);
//             //get property value of price
//             price = parseFloat(x.price.split('$')[1]);
//             productname = x.productname;
//             //add price to total
//             carttable += "<tr><td>" + productname + "</td><td>$" + price.toFixed(2) + "</td></tr>";
//             total += price;
//         }
        
//     }

// }


// //user feedback on successful add
// function addedToCart(pname) {
//     var message = pname + " was added to the cart";
//     var alerts = document.getElementById("alerts");
//     alerts.innerHTML = message;
//     if(!alerts.classList.contains("message")){
//        alerts.classList.add("message");
//     }
   
//   }
//   /* User Manually empty cart */
//   function emptyCart() {
//       //remove cart session storage object & refresh cart totals
//       if(sessionStorage.getItem('cart')){
//           sessionStorage.removeItem('cart');
//           updateCartTotal();
//         //clear message and remove class style
//         var alerts = document.getElementById("alerts");
//         alerts.innerHTML = "";
//         if(alerts.classList.contains("message")){
//             alerts.classList.remove("message");
//         }
//       }
      
//   }


// // const addtocartbtn = document.querySelectorAll("#cart-btn");

// const cartbtn1 = document.getElementById("cart-btn1").addEventListener("click",addtocartbtn);
// const cartbtn2 = document.getElementById("cart-btn2").addEventListener("click",addtocartbtn);
// const cartbtn3 = document.getElementById("cart-btn3").addEventListener("click",addtocartbtn);

// function addtocartbtn(element){
//     console.log("clicked");
// console.log(element);
// console.log(card-title.innertext);
// console.log(element.innerText);
// }



// console.log(addtocartbtn.length);

// step 1 access remove button and store into verable
// let removeCartItemButtons = document.getElementsByClassName("btn-danger");
// console.log(removeCartItemButtons);


// let count = 0
// //there are multiple buttons with same class to traverse it use for loop
// for(let i=0; i<removeCartItemButtons.length; i++){
//     let button = removeCartItemButtons[i];
//     button.addEventListener("click", function(event){
        
//         count ++;
//         console.log(count);
//         let buttonclicked =  event.target;
//         buttonclicked.parentElement.parentElement.parentElement.remove();

//         updateCartTotal();
//     })
// }



// function updateCartTotal(){
//     let cartItemContainer = document.getElementsByClassName('cart-item')[0]
//     let cartRows = cartItemContainer.getElementsByClassName('card-body');
// console.log(cartRows);
//     for(let i=0; i<cartRows.length; i++){
//          let cartRow = cartRows[i];
//          let priceElement = cartRows.getElementsByClassName('cart-price')[0]
//          let quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
//          console.log(priceElement,quantityElement);
//          let price = price.firstChild.innerText;
//          console.log(price);
//     }
// }




// console.log(jsondata);









