/* Variable Declaration */
let product_wrapper = document.querySelectorAll('.container-section-1')
let thumbnails = document.querySelectorAll('.thumbnails')
let counter_display = document.querySelector('.counter-display')
let counter_minus = document.querySelector('.counter-minus')
let counter_plus = document.querySelector('.counter-plus')
let cart_basket = document.querySelector('.span-cart') 
let add_to_cart = document.querySelector('.add-to-cart')
let cart_img_thumnail = document.querySelector('.cart-img-thumnail')
let count = 0;


/* Product Image gallery */
for (let i = 0; i < thumbnails.length; i++){
    thumbnails[i].addEventListener(
        'click', () => {
            removeActiveClasses()
            const array2 = Array.prototype.slice.call(thumbnails)
            for (let k = 0; k < array2.length; k++){
                if (array2.indexOf(array2[k] === i)){
                    product_wrapper[i].classList.add('active')
                }
            }
        }    
    )
}
/* This function hides the number of cart items on page reload*/
hideCartItem();

counter_minus.addEventListener('click', () => {
    count--;
    if (count < 0){
        count = 0
    }
    else{
        updateDispaly();
        add_to_cart.addEventListener('click', () => {
            updateCartDisplay();
        }) 
    }
});

counter_plus.addEventListener('click', () => {
    count++;
    updateDispaly();
    add_to_cart.addEventListener('click', () => {
        updateCartDisplay();
    })
});

/* Callback functions */

function removeActiveClasses(){
    for(let m = 0; m < product_wrapper.length; m++){
        product_wrapper[m].classList.remove('active')
    }
};

function updateDispaly(){
    counter_display.innerHTML = count;
    cart_basket.classList.add('cart-span')
};

function updateCartDisplay(){
    cart_basket.innerHTML = count
    cart_basket.classList.remove('cartItemHide')
    cart_basket.classList.add('cart-span')
};
function hideCartItem(){
    if (cart_basket.innerHTML == 0){
        cart_basket.classList.remove('cart-span')
        cart_basket.classList.add('cartItemHide')
    };      
};
