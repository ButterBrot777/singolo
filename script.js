// BUTTON.addEventListener('click', (event) => {
//   const subject = document.getElementById('subject').nodeValue.toString();
//   document.getElementById('result').innerText = subject;
// });


const MENU = document.getElementById('menu');
const TAGS = document.getElementById('tag-container');
const MEDIA = document.getElementById('media');
const SLIDER = document.getElementById('slider');
const PHONE_SCREEN = document.querySelectorAll('.phone-screen');

const PREV = document.querySelector('.arrow_left');
const NEXT = document.querySelector('.arrow_right');
const SLIDES = document.querySelectorAll('.slide');

const BUTTON = document.getElementById('btn');
const CLOSE_BUTTON = document.getElementById('close-btn');

MENU.addEventListener('click', (event) => {
  console.log(MENU);
  // event.preventDefault();
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

TAGS.addEventListener('click', (event) => {
  event.preventDefault();
  if(event.target.classList.contains('tag')) {
    TAGS.querySelectorAll('a').forEach(el => el.parentNode.classList.remove('nav_container__featured'));
    event.target.parentNode.classList.add('nav_container__featured');
  }
})

TAGS.addEventListener('click', (event) => {
  if(event.target.classList.contains('tag')) {
    swich();
  }
})

function swich() {
  let arr = [];
  MEDIA.querySelectorAll('div').forEach( elem => {
      elem.id = Math.ceil(Math.random()*100)
      arr.push(elem.id)
 
      arr.sort();
  });
  for(let i of arr){
    let element = document.getElementById(i);
    MEDIA.insertBefore(element,MEDIA.firstChild)
  }
}
MEDIA.addEventListener('click', event => {
  if(event.target.parentNode.classList.contains('featured')) {
    MEDIA.querySelectorAll('div').forEach(elem => {
      elem.classList.remove('portfolio-image-border')
    })
    event.target.parentNode.classList.add('portfolio-image-border')
  };
})

PHONE_SCREEN.forEach( elem => {
  elem.addEventListener('click', event => {
    if(elem.classList.contains('screen_off')) {
      elem.classList.remove('screen_off');
      elem.classList.add('screen_on');
    } else {
      elem.classList.remove('screen_on');
      elem.classList.add('screen_off');
    }
  })
})


// .addEventListener('click', event => {
//   console.log('event: ', event)
//   if(SLIDER.classList.contains('screen_on')) {
//     console.log('hello')
//     // if(SLIDER.querySelectorAll('.iphone-screen').classList.toggle('screen_off')
//   };
// })

let sliderIndex = 0;

 showSlides = (slideNumber) => {
	if (slideNumber > SLIDES.length - 1) {
		sliderIndex = 0;
	}
	if (slideNumber < 0) {
		sliderIndex = SLIDES.length - 1;
  }
  SLIDES.forEach(elem => {
    elem.classList.remove('show')
  })
	SLIDES[sliderIndex].classList.toggle('show');
}

PREV.addEventListener('click', () => {
	showSlides(--sliderIndex);
})
NEXT.addEventListener('click', () => {
	showSlides(++sliderIndex)
})