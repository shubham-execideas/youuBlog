var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 5,
  //   slideClass: ".slider",
  slidesPerGroup: 4,
  loop: false,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".pagination",
    clickable: true,
  },
  allowTouchMove: false,
  navigation: {
    nextEl: ".next-button",
    prevEl: ".prev-button",
  },
  //   breakpoints: {
  //     // when window width is >= 320px
  //     320: {
  //       slidesPerView: 1,
  //       spaceBetween: 5,
  //     },
  //     // when window width is >= 480px
  //     480: {
  //       slidesPerView: 2,
  //       spaceBetween: 10,
  //     },
  //     // when window width is >= 640px
  //     640: {
  //       slidesPerView: 3,
  //       spaceBetween: 20,
  //     },
  //   },
});

var swiper = new Swiper(".podcastSwiper", {
  slidesPerView: 4,
  spaceBetween: 5,
  //   slideClass: ".slider",
  slidesPerGroup: 3,
  loop: false,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".pod-pagination",
    clickable: true,
  },
  allowTouchMove: false,
  navigation: {
    nextEl: ".pod-next-button",
    prevEl: ".pod-prev-button",
  },
  //   breakpoints: {
  //     // when window width is >= 320px
  //     320: {
  //       slidesPerView: 1,
  //       spaceBetween: 5,
  //     },
  //     // when window width is >= 480px
  //     480: {
  //       slidesPerView: 2,
  //       spaceBetween: 10,
  //     },
  //     // when window width is >= 640px
  //     640: {
  //       slidesPerView: 3,
  //       spaceBetween: 20,
  //     },
  //   },
});

// function openCity(evt, cityName) {
//   var i, tabcontent, tablinks;
//   tabcontent = document.getElementsByClassName("tabcontent");
//   for (i = 0; i < tabcontent.length; i++) {
//     tabcontent[i].style.display = "none";
//   }
//   tablinks = document.getElementsByClassName("tablinks");
//   for (i = 0; i < tablinks.length; i++) {
//     tablinks[i].className = tablinks[i].className.replace(" active", "");
//   }
//   document.getElementById(cityName).style.display = "block";
//   evt.currentTarget.className += " active";
// }

function _class(name) {
  return document.getElementsByClassName(name);
}

let tabPanes = _class("tab-header")[0].getElementsByTagName("div");
console.log(tabPanes);

for (let i = 0; i < tabPanes.length; i++) {
  tabPanes[i].addEventListener("click", function () {
    _class("tab-header")[0]
      .getElementsByClassName("active")[0]
      .classList.remove("active");
    tabPanes[i].classList.add("active");

    console.log(_class("tab-header")[0].getElementsByClassName("active")[0]);
    _class("tab-indicator")[0].style.top = `calc(52px + ${i * 52}px)`;

    _class("tab-content")[0]
      .getElementsByClassName("active")[0]
      .classList.remove("active");
    // _class("tab-content")[0];
    console.log(_class("tab-content")[0].getElementsByClassName("active")[0]);

    _class("tab-content")[0]
      .getElementsByTagName("div")
      [i].classList.add("active");
    console.log(_class("tab-content")[0]);
  });
}
