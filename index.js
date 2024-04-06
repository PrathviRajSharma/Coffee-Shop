// JS for Header start

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () => {
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}
// JS for Header end


// JS for contact Form
const scriptURL = 'https://script.google.com/macros/s/AKfycbzNR_FJQpez0oReXm5-sS9vkRd4s0js1P6c-0vt9tlw-I95kJQClb_ggNhO2lf7EcL6/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "I recieved your Message Thankyouu"
        setTimeout(function(){
            msg.innerHTML = ""
        },4000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})


