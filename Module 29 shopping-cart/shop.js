function updateInputValueAndPrice(id,productPrice, productId, add){
    const productQuantityField = document.getElementById(id);
    const previousProductQuantity = parseInt(productQuantityField.value);
    
    if(previousProductQuantity === 1 && add !== true){
        alert('Value cannot be reduced. Already fully reduced')
    }
    else{
        if(add === true){
            const newProductQuantity = previousProductQuantity + 1;
            productQuantityField.value = newProductQuantity;
            const productNewPrice = newProductQuantity * productPrice;
            const previousProductPrice = document.getElementById(productId);
            previousProductPrice.innerText = productNewPrice;
            return productNewPrice;
        }
        else{
            const newProductQuantity = previousProductQuantity - 1;
            productQuantityField.value = newProductQuantity;
            const productNewPrice = newProductQuantity * productPrice;
            const previousProductPrice = document.getElementById(productId);
            previousProductPrice.innerText = productNewPrice;
            return productNewPrice;
        }
    }
};



// remove 
function removeCart(id){
    const cartContainer = document.getElementById('cart-container');
    const productMobileConstainer = document.getElementById(id);

    const previousProductSubTatoal = document.getElementById('sub-total');
    const previousProductTatoal =parseFloat(document.getElementById('total'));


    cartContainer.removeChild(productMobileConstainer);
}

// total price    typeing misstaka... korse don't mind
function totalPrice(product1Price, product2Id){
    const product2PriceString = document.getElementById(product2Id);
    const product2Price = parseFloat(product2PriceString.innerText);
    const totalProductPrice = product1Price + product2Price;
    console.log(product2Price);
    const previousProductSubTatoal = document.getElementById('sub-total');
    const previousProductTatoal = document.getElementById('total');
    previousProductSubTatoal.innerText = totalProductPrice;
    previousProductTatoal.innerText = totalProductPrice;
}

// remove product change balance



// case
document.getElementById('mobile-case-plus').addEventListener('click', function(){
   const productNewPrice = updateInputValueAndPrice('case-number-field', 59, 'case-total-price', true);
   totalPrice(productNewPrice,'phone-total-price');
});

document.getElementById('mobile-case-minus').addEventListener('click', function(){
    const productNewPrice = updateInputValueAndPrice('case-number-field', 59, 'case-total-price');
    totalPrice(productNewPrice,'phone-total-price');
});


// phone
document.getElementById('mobile-phone-plus').addEventListener('click', function(){
    const productNewPrice = updateInputValueAndPrice('phone-number-field', 1219, 'phone-total-price', true);
    totalPrice(productNewPrice,'case-total-price');
});

document.getElementById('mobile-phone-minus').addEventListener('click', function(){
    const productNewPrice = updateInputValueAndPrice('phone-number-field', 1219, 'phone-total-price');
    totalPrice(productNewPrice,'case-total-price');   
});



// remove 
document.getElementById('phone-remove').addEventListener('click', function(){
    removeCart('product-mobile-container');
    totalPrice()
})
document.getElementById('case-remove').addEventListener('click', function(){
    removeCart('product-case-container');
})