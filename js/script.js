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


