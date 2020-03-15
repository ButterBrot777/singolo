// BUTTON.addEventListener('click', (event) => {
//   const subject = document.getElementById('subject').nodeValue.toString();
//   document.getElementById('result').innerText = subject;
// });


const MENU = document.getElementById('menu');
const TAGS = document.getElementById('tag-container');
const MEDIA = document.getElementById('media')

const BUTTON = document.getElementById('btn');
const CLOSE_BUTTON = document.getElementById('close-btn');

MENU.addEventListener('click', (event) => {
  console.log(MENU);
  event.preventDefault();
  if(event.target.classList.contains('header-link')) {
    MENU.querySelectorAll('li>a').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
  }
});

// MENU.addEventListener('click', (event) => {
//   console.log(MENU);
//   console.log('ashki', MENU.querySelectorAll('li>a'));
//   console.log('if pruve', event.target.classList.contains('header-link'));
//   event.preventDefault();
//   if(event.target.classList.contains('header-link')) {
//     MENU.querySelectorAll('li>a').forEach(el => {
//       console.log('in selector: ', el);
//       el.target.style.color = '#white'});
//     event.target.style.color = '#red';
//   }
// });

console.log('TAG: ', TAGS)
TAGS.addEventListener('click', (event) => {
  event.preventDefault();
  if(event.target.classList.contains('tag')) {
    TAGS.querySelectorAll('a').forEach(el => el.parentNode.classList.remove('nav_container__featured'));
    event.target.parentNode.classList.add('nav_container__featured');
  }
})

