const menuOpen = document.querySelector('.open');
const menuPanel = document.querySelector('.mobile-nav');
const menuClose = document.querySelector('.close-btn');
const menuOptions = {
  duration: 1400,
  easing: 'ease',
  fill: 'forwards',
}

//console.log(menuOptions);

menuOpen.addEventListener('click', () => {
  //console.log('クリック');
  menuPanel.animate({translate: ['100vw', 0]}, menuOptions);

  
});

menuClose.addEventListener('click', () => {
  menuPanel.animate({translate: [0, '100vw']}, menuOptions);
});