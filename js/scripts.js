

let body = document.querySelector("body");

let burger = document.getElementById("burger-menu");

$('.burger-menu').on('click tap', showMenu);

let burgerClose = document.getElementById("close__button_mob");

if(burgerClose){
    burgerClose.addEventListener("click", hideMenu);
}
let burgerMenu = document.getElementsByClassName("mobile__menu_item");


let teamName = document.getElementsByClassName("team__people");
Array.from(teamName).forEach(function(element) {
    element.addEventListener('click', accordeonTeam);
});


let menuName = document.getElementsByClassName("menu__item");
Array.from(menuName).forEach(function(element) {
    element.addEventListener('click', accordeonMenu);
});


let review = document.getElementsByClassName("review__more_href");
Array.from(review).forEach(function(element) {
    element.addEventListener('click', reviewMoreShow);

})

// Закрываем окно всплывашки !!!!!!!!!!!!!!
// document.getElementById("review-more__close").addEventListener('click', function() {
//     //console.log(this);
//     document.getElementById("review-more").classList.add("hide");
// })

// Слайдер

$(() => {
    const ENTER_KEY_CODE = 13;
    const arrows = $('.slider__arrow');
    const slider = $('.slider__list');
    const sliderItems = slider.find('.slider__item');
    const count = sliderItems.length;
  
    const defineSlide = () => {
      const sliderItemActive = sliderItems.filter('.slider__item--active');
      let index = sliderItemActive.index();
  
      return {
        activeSlide: sliderItemActive,
        nextIndex: index === (count - 1) ? 0 : index + 1,
        prevIndex: index === 0 ? count - 1 : index - 1
      }
    };
  
    const performSlider = (index) => {
      const width = 100 / count;
  
      slider.css('transform', 'translateX(' + -width * index + '%)');
      slider.on('transitionend', (evt) => {
        if (evt.originalEvent.propertyName !== 'transform') {
          return;
        }
  
        sliderItems.eq(index).addClass('slider__item--active').siblings().removeClass('slider__item--active');
      });
    };
  
    const slideEventHandler = (evt) => {
      const target = $(evt.target);
      let index;
  
      if (target.hasClass('slider__arrow--right')) {
        index = defineSlide().nextIndex;
      } else {
        index = defineSlide().prevIndex;
      }
      console.log(index);
  
      performSlider(index);
    };
  
    arrows.on({
      click: slideEventHandler,
      keydown: (evt) => {
        if (evt.keyCode === ENTER_KEY_CODE) {
          slideEventHandler(evt);
        }
      }
    });
  
    if (window.matchMedia('screen and (max-width: 768px)').matches) {
      let startX;
  
      slider.on('touchstart', (evt) => {
        startX = +evt.originalEvent.changedTouches[0].clientX;
      });
  
      slider.on('touchend', (evt) => {
        const BASE_DELTA_X = 50;
        const deltaX = +evt.originalEvent.changedTouches[0].clientX - startX;
        let index;
  
        if (deltaX > BASE_DELTA_X) {
          index = defineSlide().prevIndex;
        } else if (deltaX < -BASE_DELTA_X) {
          index = defineSlide().nextIndex;
        } else {
          return;
        }
  
        performSlider(index);
      });
    }
  });
  


function reviewMoreShow(e) {

    e.preventDefault();

    document.getElementById("review-more").classList.remove("hide");

    let authorName = this.parentElement.children[0].innerHTML;
    let reviewText = this.parentElement.children[1].innerHTML;
    // console.log(authorName);
    // console.log(reviewText);

    document.getElementById("review-more__title").innerHTML = authorName;
    document.getElementById("review-more__text").innerHTML = reviewText;
}


function accordeonMenu() {
    this.lastElementChild.classList.toggle("menu__description_active");
    for (i = 0; i < menuName.length; i++) {
        if ((menuName[i].lastElementChild.classList.contains("menu__description_active")) && (menuName[i] != this)) {
            menuName[i].lastElementChild.classList.toggle("menu__description_active");
        }
    }

}

function accordeonTeam() {
    for (i = 0; i < teamName.length; i++) {
        if (teamName[i].classList.contains("team__people_active")) {
            teamName[i].classList.toggle("team__people_active");
        }
    }
    this.classList.toggle("team__people_active");
}

function showMenu() {
    document.querySelector("body").classList.toggle("body__block");
    document.getElementById("mobile__menu").style.display = "Flex";
}

function hideMenu() {
    document.querySelector("body").classList.toggle("body__block");
    document.getElementById("mobile__menu").style.display = "None";
}

function setMenuItemEvents() {
    for (i = 0; i < burgerMenu.length; i++) {
        let burgerMenuItem = burgerMenu[i];
        //console.log(burgerMenuItem);
        burgerMenuItem.addEventListener("click", hideMenu);
    }
}

setMenuItemEvents();

function accordionTeam(){
  const workers = document.querySelectorAll(".accordeon__item");
  const teamAccord = document.querySelector(".accordeon");
  
  teamAccord.addEventListener("click" , function(event){
      event.preventDefault();
      const target =event.target;

      if(target.classList.contains("accordeon__link")){
          const worker = target.parentNode;
          const content = target.nextElementSibling;
          const contentHeight = content.firstElementChild.clientHeight;

              for (const iterator of workers) {
                  if(iterator !==worker){
                      iterator.classList.remove("accordeon__item-active");
                      iterator.lastElementChild.style.height= 0;
                  }
              }

              if(worker.classList.contains("accordeon__item-active")){
                  worker.classList.remove("accordeon__item-active");
                  content.style.height = 0;
              }else{
                  worker.classList.add("accordeon__item-active");
                  content.style.height = contentHeight + "px";
              }
          
      
      }
  });
}


accordionTeam();







// var state = false;

// function change(s) {
//     if (s) {
//         document.getElementById('menu').style.left = '-450px';
//         document.getElementById('menu').style.top = $(window).scrollTop()+'px';
//         document.getElementById('burger').className = 'menu-icon__burger';
//     } else {
//         document.getElementById('menu').style.left = 0;
//         document.getElementById('burger').className = 'menu-icon__burger_cl';
//         document.getElementById('menu').style.top = $(window).scrollTop()+'px';
//     }
//     state = !state;
// }

//     $(window).scroll(function(){
//     if ($(window).scrollTop() > 150) {

//         document.getElementById('menu').style.top = $(window).scrollTop()+'px';
//     }
//     else {

//         document.getElementById('menu').style.top = $(window).scrollTop()+'px';
//     }
// })


  