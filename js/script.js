const main = document.querySelector('.header__menu-item_1'),
      search = document.querySelector('.header__menu-item_2');

main.addEventListener('click', ()=>{
   main.classList.add('active');
   search.classList.remove('active');
})

search.addEventListener('click', ()=>{
    search.classList.add('active');
    main.classList.remove('active');
})


window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header__menu'),
    menuItem = document.querySelectorAll('.header__menu-item'),
    hamburger = document.querySelector('.humburger__menu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('humburger__menu__active');
        menu.classList.toggle('header__menu__active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('humburger__menu__active');
            menu.classList.toggle('menu__active');
        })
    })
})

