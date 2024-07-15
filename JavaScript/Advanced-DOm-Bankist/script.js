'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const nav = document.querySelector('.nav');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

const allSectioins = document.querySelectorAll('.section');
const allButtons = document.getElementsByTagName('button');

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  // window.scrollTo(s1coords.left + window.scrollX, s1coords.top + window.scrollY);
  // window.scrollTo({
  //   left: s1coords.left + window.scrollX,
  //   top: s1coords.left + window.scrolly,
  //   behavior: 'smooth'
  // })
  section1.scrollIntoView({ behavior: 'smooth' });
});

// const h1 = document.querySelector('h1');

// h1.addEventListener('mouseenter', function (e) {
//   alert('add');
// });
// const randomNumber = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);
// const randomColor = () =>
//   `rgb(${randomNumber(0, 255)},rgb(${randomNumber(0, 255)},rgb(${randomNumber(
//     0,
//     255
//   )})`;

// document.querySelector('.nav-link').addEventListener('click', function (e) {
//   console.log('LINK');
//   this.style.backgroundColor = randomColor();
// });
// document.querySelector('.nav-links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('LINK');
// });
// document.querySelector('.nav').addEventListener('click', function (e) {
//   console.log('LINK');
// });

// Page navigation
// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

// 1. add enevet listener to comoon parent element
// 2 determine what elemen origi the evenet

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

// const h1 = document.querySelector('h1');
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.children);
// console.log(h1.firstElementChild);
// h1.closest('.header');

// tabs.forEacht(t => t.addEventListener('click', () => console.log('tab')));

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');

  if (!clicked) return;

  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  // activate content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

// menu fade animiation

const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

nav.addEventListener('mouseover', handleHover.bind(0.5));

nav.addEventListener('mouseout', handleHover.bind(1));

// Sticky navigation
const initialCoords = section1.getBoundingClientRect();
window.addEventListener('scroll', function (e) {
  if (this.window.scrollY > initialCoords.top) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
});
// better sticky navigation
// const obsCallback = function (entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   });
// };

// const obsOptions = {
//   root: null,
//   threshold: [0, 0.2],
// };

// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);

const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

// reveal section
const allSections = document.querySelectorAll('.section');
const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});
allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

// Lazy loadgin images

const imgTargets = document.querySelectorAll('img[data-src]');
const loadImg = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  console.log(entry.target.dataset.src);
  console.log(entry.target.src);
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });
  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});

imgTargets.forEach(img => imgObserver.observe(img));

//slider

const sliders = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');

let curSlide = 0;
const maxSlider = sliders.length;

const goToSlide = function (slide) {
  sliders.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
};
goToSlide(0);
const nexSlide = function () {
  if (curSlide === maxSlider - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  goToSlide(curSlide);
  activateDot(curSlide);
};
const prevSlide = function () {
  if (curSlide === 0) {
    curSlide = maxSlider - 1;
  } else {
    curSlide--;
  }
  goToSlide(curSlide);
  activateDot(curSlide);
};
const createDots = function () {
  sliders.forEach(function (_, i) {
    dotContainer.insertAdjacentHTML(
      'beforeend',
      `<button class="dots__dot" data-slide="${i}"></button>`
    );
  });
};
// createDots();

const activateDot = function (slide) {
  document
    .querySelectorAll('.dots__dot')
    .forEach(dot => dot.classList.remove('dots__dot--active'));

  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add('dots__dot--active');
};
// activateDot(0);

btnRight.addEventListener('click', nexSlide);
btnLeft.addEventListener('click', prevSlide);

document.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowLeft') prevSlide();
  if (e.key === 'ArrowRight') nexSlide();
});

const dotContainer = document.querySelector('.dots');

dotContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('dots__dot')) {
    const { slide } = e.target.dataset;
    goToSlide(slide);
    activateDot(slide);
  }
});
createDots();
activateDot(0);
