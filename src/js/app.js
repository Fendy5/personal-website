const headerEl = document.querySelector('header');
window.addEventListener('scroll', () => {
  let height = headerEl.getBoundingClientRect().height;
  if (window.pageYOffset - height > 70) {
    if (!headerEl.classList.contains('sticky')) {
      headerEl.classList.add('sticky');
    }
  } else {
    headerEl.classList.remove('sticky');
  }

});

const burgerEl = document.querySelector('.burger');
burgerEl.addEventListener('click', () => {
  headerEl.classList.toggle('open');
});

const config = {
  display: 300,
  distance: '100px',
  duration: 500,
  easing: 'ease-in-out',
  origin: 'bottom',
  interval:350
};

ScrollReveal().reveal('.banner-content',{...config});
ScrollReveal().reveal('.content-item',{...config});
ScrollReveal().reveal('.content-left',{...config});
ScrollReveal().reveal('.content-right',{...config});
ScrollReveal().reveal('.hobby-item',{...config});
ScrollReveal().reveal('.ft',{...config});

const scroll = new SmoothScroll('.menu-item a[href*="#"],.scrollToTop a[href*="#"]', {
  header: 'header',
  offset: 80
});


window.addEventListener('scrollStart', ()=>{
  if (headerEl.classList.contains('open')) {
    headerEl.classList.remove('open');
  }
});

console.log(`  _____                      _         
 |  ___|   ___   _ __     __| |  _   _ 
 | |_     / _ \\ | '_ \\   / _\` | | | | |
 |  _|   |  __/ | | | | | (_| | | |_| |
 |_|      \\___| |_| |_|  \\__,_|  \\__, |
                                 |___/ `);


console.log('周锋(Fendy)的个人主页');
console.log('代码已发布到GitHub，https://github.com/fendy5/personal-website');

