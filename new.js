console.log("working");

fetch("./productlist.json")
.then(response => response.json())
.then(productArray => renderAllProducts(productArray));

function renderAllProducts(productsArray){
    productsArray.forEach(product => renderOneProduct(product))
}

const findDiv = document.querySelector("#clothes-box");

function renderOneProduct(product){
    const newElement = document.createElement("div");
    newElement.className="content";
    newElement.innerHTML = `<div class="item-card">
        <div class="center">
            <img src="${product.product_img}" class="image">
                <h2>${product.product_name}</h2>
                <p>Price: ${product.price}</p>
                <button class="add-item">Add to cart</button>
        </div>
    </div>`

    findDiv.append(newElement)
}




// this is a end of fetching images 
//cart array using json



fetch("./cart_items.json")
.then(response => response.json())
.then(cartItemsArray => {
    cartArray = cartItemsArray;
    renderAllCartItems(cartArray)    
})


function renderAllCartItems(cartItemsArray){
    cartItemsArray.forEach(cartItem => renderCartItem(cartItem))
}

function renderCartItem(cartItem){
    const newLi = document.createElement("li")
    newLi.innerHTML = `
    <p id="pTag"> ${cartItem.product.product_name}: ${cartItem.product.price}
    <button class="delete-button">
    <span>remove</span>
    </button>
    </p>
    `
    findLIstOfItems.append(newLi);
}


const addButton = newElement.querySelector(".add-items");
addButton.addEventListener("click", event =>{

    findLIstOfItems.innerText = ""

    fetch("cart_items",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            cart_id: 1,
            product_id: product.id
        })
    })
    .then(response => response.json())
    .then(newCartItem =>{
        cartArray.push(newCartItem);
        renderAllCartItems(cartArray);
    })
})

const findLIstOfItems = document.querySelector(".list-of-items")


const removeButton = newLi.querySelector(".delete-button")
removeButton.addEventListener("click", event =>{
    newLi.remove()
    fetch('./cart_items.json/${cartItem.id}', {
        method: "DELETE"
    })
    .then(response => response.json())
    .then(result => {
        cartArray = result
        findLIstOfItems.innerHTML = ""
        renderAllCartItems(cartArray)
    })
})












