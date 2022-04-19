const iconMenu = document.querySelector('.header__row__menu');
const headNav = document.querySelector('.header__row__nav');
const navList = document.querySelector('.header__row__nav__list');

if(iconMenu){
  iconMenu.addEventListener('click',function(){
    document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('_active');
    headNav.classList.toggle('_active');
  });
}   

if(navList){
  navList.addEventListener('click',function(){
    document.body.classList.remove('_lock');
    iconMenu.classList.remove('_active');
    headNav.classList.remove('_active');
});
}

