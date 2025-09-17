export function CreateProdectCart(cartItems, cartItem, updateTotal) {
  cartItems.innerHTML = "";

  cartItem.forEach((item) => {
    let cartDiv = document.createElement("div");
    cartDiv.className = "prodectcart";
    cartDiv.id = item.id;
    let cartTitle = document.createElement("h5");
    cartTitle.textContent = item.name;
    let cartImage = document.createElement("img");
    cartImage.src = item.image;
    cartImage.loading = "lazy";
    let cartPrice = document.createElement("h5");
    cartPrice.textContent = (item.price * item.count).toFixed(2);
    let cartCount = document.createElement("h5");
    cartCount.textContent = item.count;

    let cartBtnDiv = document.createElement("div");
    cartBtnDiv.className = "cartBtnDiv";

    let cartBtnPlus = document.createElement("button");
    cartBtnPlus.textContent = "+";
    cartBtnPlus.className = "plusBtn";
    cartBtnPlus.addEventListener("click", () => {
      item.count++;

      CreateProdectCart(cartItems, cartItem, updateTotal);

      
    });
    let cartBtnminus = document.createElement("button");
    cartBtnminus.textContent = "-";
    cartBtnminus.className = "minusBtn";
    cartBtnminus.addEventListener("click", () => {
      if (item.count > 1) {
        item.count--;
        CreateProdectCart(cartItems, cartItem, updateTotal);
        
      } else {
        cartItem = cartItem.filter((items) => items.id !== item.id);
        CreateProdectCart(cartItems, cartItem, updateTotal);
        
      }
    });
    let cartBtnDelete = document.createElement("button");
    cartBtnDelete.textContent = "Delete";
    cartBtnDelete.className = "removeBtn";
    cartBtnDelete.addEventListener("click", () => {
      cartItem = cartItem.filter((items) => items.id !== item.id)
      CreateProdectCart(cartItems, cartItem, updateTotal);
    
    });
    cartBtnDiv.appendChild(cartBtnPlus);
    cartBtnDiv.appendChild(cartBtnminus);
    cartBtnDiv.appendChild(cartBtnDelete);

    cartDiv.appendChild(cartImage);
    cartDiv.appendChild(cartTitle);
    cartDiv.appendChild(cartPrice);
    cartDiv.appendChild(cartCount);
    cartDiv.appendChild(cartBtnDiv);
    cartItems.appendChild(cartDiv);
  });
}
