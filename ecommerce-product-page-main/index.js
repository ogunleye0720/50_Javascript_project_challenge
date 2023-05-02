/* Variable Declaration */
let product_wrapper = document.querySelectorAll('.container-section-1')
let thumbnails = document.querySelectorAll('.thumbnails')

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

function removeActiveClasses(){
    for(let m = 0; m < product_wrapper.length; m++){
        product_wrapper[m].classList.remove('active')
    }
}

