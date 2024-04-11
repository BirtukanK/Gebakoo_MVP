let iconCart = document.querySelector('.icon-cart');
let section = document.querySelector('section');

iconCart.addEventListener('click', () => {
    section.classList.toggle('showCart');
})
