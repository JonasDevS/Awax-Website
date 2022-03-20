let scrollup = document.querySelector('.scroll-up-btn')

window.addEventListener('scroll', function(){
  
  if(this.window.scrollY > 600){
    scrollup.classList.add('show');
  }else{
    scrollup.classList.remove('show');
  }

});

scrollup.addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
});

const menubtn = document.getElementById('menu-btn');

function toggleMenu() {
  const menu = document.getElementById('menu');
  menu.classList.toggle('active');
}

menubtn.addEventListener('click', toggleMenu);