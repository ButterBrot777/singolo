const MENU = document.getElementById('menu');
const TAGS = document.getElementById('tag-container');
const MEDIA = document.getElementById('media');
const SLIDER = document.getElementById('slider');
const PHONE_SCREEN = document.querySelectorAll('.phone-screen');

const PREV = document.querySelector('.arrow_left');
const NEXT = document.querySelector('.arrow_right');
const SLIDES = document.querySelectorAll('.slide');

// const BUTTON = document.getElementById('btn');
// const CLOSE_BUTTON = document.getElementById('close-btn');

// <!-- --------------- HEADER MENU SCROLL --------------------->

MENU.addEventListener('click', (event) => {
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


// <!-- --------------- TAGS SWICH & CHANGE --------------------->

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
      elem.classList.remove('portfolio-image-border');
    })
    event.target.parentNode.classList.add('portfolio-image-border');
  };
})

// <!-- --------------- PHONE SCREEN ON/OFF --------------------->

PHONE_SCREEN.forEach( elem => {
  elem.addEventListener('click', () => {
    if(elem.classList.contains('screen_off')) {
      elem.classList.remove('screen_off');
      elem.classList.add('screen_on');
    } else {
      elem.classList.remove('screen_on');
      elem.classList.add('screen_off');
    }
  })
})




// <!-- --------------- SLIDER --------------------->

//let sliderIndex = 0;
//
// showSlides = (slideNumber) => {
//	if (slideNumber > SLIDES.length - 1) {
//		sliderIndex = 0;
//	}
//	if (slideNumber < 0) {
//		sliderIndex = SLIDES.length - 1;
//  }
//  SLIDES.forEach(elem => {
//    elem.classList.remove('show')
//  })
//	SLIDES[sliderIndex].classList.toggle('show');
//  let sliderBGColor = document.getElementsByClassName('wrapper__slider')[0];
//  if(sliderBGColor.style.backgroundColor === '') {
//    sliderBGColor.style.backgroundColor = '#648BF0';
//  } else {
//    sliderBGColor.style.backgroundColor = '';
//  }
//}
//
//PREV.addEventListener('click', () => {
//	showSlides(--sliderIndex);
//})
//NEXT.addEventListener('click', () => {
//  showSlides(++sliderIndex)
//})

// <!-- --------------- MODAL WINDOW --------------------->
const BUTTON = document.getElementById('open');
const CLOSE_BUTTON1 = document.getElementById('close');
const CLOSE_BUTTON2 = document.getElementById('close-too');
const MODAL = document.getElementById('modal');
const SUBJECT = document.getElementById('subject');
const DESCRIBE = document.getElementById('describe');

BUTTON.addEventListener('click', function(event) {
  event.preventDefault();
  
  if(document.forms[0].reportValidity()) {
    modal.style.display = 'block';
    buildModalMessage();
  }
});

function buildModalMessage() {
  let modalMessageSubject = document.getElementsByClassName('modal__subject')[0];
  let inputDescribe = document.getElementsByClassName('modal__description')[0];
  if(!SUBJECT.value) {
    modalMessageSubject.innerText = 'Without subject'
  } else {
    modalMessageSubject.innerText = `Subject: ${SUBJECT.value.toString()}`
  }
  if(!DESCRIBE.value) {
    inputDescribe.innerText = 'Without description ';
  } else {
    inputDescribe.innerText = `Description: ${DESCRIBE.value.toString()}`;
  }
}

CLOSE_BUTTON1.addEventListener('click', function(event) {
  event.preventDefault();
  clearForm();
  modal.style.display = 'none';
});
CLOSE_BUTTON2.addEventListener('click', function(event) {
  event.preventDefault();
  clearForm();
  modal.style.display = 'none';
});

function clearForm () {
  let inputs = document.getElementsByTagName('input');
  for (let input of inputs) {
    input.value = '';
  }

  let textarea = document.getElementsByTagName('textarea');
  for (let input of textarea) {
    input.value = '';
  }
}

// // <!-- --------------- MODAL WINDOW end --------------------->


// // <!-- --------------- SLIDER NEW --------------------->


(function() {
	"use strict";
	
  class Carousel {
    constructor(setting) {
      if (document.querySelector(setting.wrap) === null) {
        console.error(`Carousel not fount selector ${setting.wrap}`);
        return;
      }
      /* Scope privates methods and properties */
      let privates = {}, xDown, yDown, xUp, yUp, xDiff, yDiff;
      /* Public methods */
      // Prev slide
      this.prev_slide = () => {
        if (!privates.isAnimationEnd) {
          return;
        }
        privates.isAnimationEnd = false;
        --privates.opt.position;
        if (privates.opt.position < 0) {
          privates.sel.wrap.classList.add('s-notransition');
          privates.sel.wrap.style["transform"] = `translateX(-${privates.opt.max_position}00%)`;
          privates.opt.position = privates.opt.max_position - 1;
        }
        setTimeout(() => {
          privates.sel.wrap.classList.remove('s-notransition');
          privates.sel.wrap.style["transform"] = `translateX(-${privates.opt.position}00%)`;
        }, 10);
        privates.sel.wrap.addEventListener('transitionend', () => {
          privates.isAnimationEnd = true;
        });
        if (privates.setting.autoplay === true) {
          privates.timer.become();
        }
      };
      // Next slide
      this.next_slide = () => {
        if (!privates.isAnimationEnd) {
          return;
        }
        privates.isAnimationEnd = false;
        if (privates.opt.position < privates.opt.max_position) {
          ++privates.opt.position;
        }
        privates.sel.wrap.classList.remove('s-notransition');
        privates.sel.wrap.style["transform"] = `translateX(-${privates.opt.position}00%)`;
        privates.sel.wrap.addEventListener('transitionend', () => {
          if (privates.opt.position >= privates.opt.max_position) {
            privates.sel.wrap.style["transform"] = 'translateX(0)';
            privates.sel.wrap.classList.add('s-notransition');
            privates.opt.position = 0;
          }
          privates.isAnimationEnd = true;
        });
        if (privates.setting.autoplay === true) {
          privates.timer.become();
        }
      };
      // Change background color
      this.change_background = () => {
        let background = document.getElementsByClassName('wrapper__slider');
        background[0].classList.toggle('wrapper__slider_blue')
      }

      // Pause timer carousel
      this.pause = () => {
        if (privates.setting.autoplay === true) {
          privates.timer.pause();
        }
      };
      // Become timer carousel
      this.become = (autoplayDelay = privates.setting.autoplayDelay) => {
        if (privates.setting.autoplay === true) {
          privates.setting.autoplayDelay = autoplayDelay;
          privates.timer.become();
        }
      };
      // Go to
      this.goto = (index) => {
        privates.opt.position = index - 1;
        this.next_slide();
      };
      // Item
      this.index = () => {
        return privates.opt.position;
      };
      /* privates methods */
      privates.hts = (e) => {
        xDown = e.touches[0].clientX;
        yDown = e.touches[0].clientY;
      };
      privates.htm = (e) => {
        if (!xDown || !yDown) {
          return;
        }
        xUp = e.touches[0].clientX;
        yUp = e.touches[0].clientY;
        xDiff = xDown - xUp;
        yDiff = yDown - yUp;
        if (Math.abs(xDiff) > Math.abs(yDiff)) {
          if (xDiff > 0) {
            this.next_slide();
          }
          else {
            this.prev_slide();
          }
        }
        xDown = 0;
        yDown = 0;
      };
      /* privates properties */
      privates.default = {
        "touch": true,
        "autoplay": false,
        "autoplayDelay": 3000,
        "pauseOnFocus": true,
        "pauseOnHover": true
      };
      privates.setting = Object.assign(privates.default, setting);
      privates.isAnimationEnd = true;
      privates.sel = {
        "wrap": document.querySelector(privates.setting.wrap),
        "children": document.querySelector(privates.setting.wrap).children,
        "prev": document.querySelector(privates.setting.prev),
        "next": document.querySelector(privates.setting.next)
      };
      privates.opt = {
        "position": 0,
        "max_position": document.querySelector(privates.setting.wrap).children.length
      };
      /* Constructor */
      // Clone first elem to end wrap
      privates.sel.wrap.appendChild(privates.sel.children[0].cloneNode(true));
      // Autoplay
      if (privates.setting.autoplay === true) {
        privates.timer = new Timer(this.next_slide, privates.setting.autoplayDelay);
      }
      // Control
      if (privates.sel.prev !== null) {
        privates.sel.prev.addEventListener('click', () => {
          this.prev_slide();
          this.change_background();
        });
      }
      if (privates.sel.next !== null) {
        privates.sel.next.addEventListener('click', () => {
          this.next_slide();
          this.change_background();
        });
      }
      // Touch events
      if (privates.setting.touch === true) {
        privates.sel.wrap.addEventListener('touchstart', privates.hts, false);
        privates.sel.wrap.addEventListener('touchmove', privates.htm, false);
      }
      // Pause on hover
      if (privates.setting.autoplay === true && privates.setting.pauseOnHover === true) {
        privates.sel.wrap.addEventListener('mouseenter', () => {
          privates.timer.pause();
        });
        privates.sel.wrap.addEventListener('mouseleave', () => {
          privates.timer.become();
        });
      }
    }
  }

	function Timer(callback, delay) {
		/* privates properties */
		let timerId, start, remaining = delay;

		/* Public methods */
		this.resume = () => {
			start = new Date();
			timerId = setTimeout(() => {
				remaining = delay;
				this.resume();
				callback();
			}, remaining);
		};

		this.pause = () => {
			clearTimeout(timerId);
			remaining -= new Date() - start;
		};

		this.become = () => {
			clearTimeout(timerId);
			remaining = delay;

			this.resume();
		};

		/* Constructor */
		this.resume();
	}

	let a = new Carousel({
		"wrap": ".js-carousel__wrap",
		"prev": ".js-carousel__prev",
		"next": ".js-carousel__next",
		"touch": true,
		"autoplay": false,
		"autoplayDelay": 3000
	});

})();