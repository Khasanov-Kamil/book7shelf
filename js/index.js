console.log('hi')
let brg = document.querySelector('.burger'),
    online = document.querySelector('.content__online span');
brg.addEventListener('click', () =>{
  brg.classList.toggle('burger__active')
  document.querySelector('.nav__links').classList.toggle('nav__links-active')
})
fetch('https://api.mcsrvstat.us/2/book7shelf.ru').then((response) => { 
  return response.json();
}).then((data) =>{ 
  if (data.online) {
    online.innerHTML = data.players.online + " из " + data.players.max
  }else{
    
  }
});





const swiper = new Swiper('.swiper', { 
  // Optional parameters 
  direction: 'horizontal',
  effect: "cards",
  grabCursor: true,
  loop: true, 
  // If we need pagination 
  pagination: { el: '.swiper-pagination', }, 
  // Navigation arrows 
  navigation: { nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev', }
  // And if we need scrollbar 
  
});