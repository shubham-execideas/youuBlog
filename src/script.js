// import Swiper from "https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js";
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3.5,
  spaceBetween: 5,
  //   slideClass: ".slider",
  slidesPerGroup: 3,
  loop: false,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".pagination",
    clickable: true,
    // dynamicBullets: true,
  },
  allowTouchMove: true,
  navigation: {
    nextEl: ".next-button",
    prevEl: ".prev-button",
  },
  breakpoints: {
    // when window width is >= 320px
    0: {
      slidesPerView: 1.5,
      slidesPerGroup: 1,
      // spaceBetween: 5,
    },
    // when window width is >= 480px
    520: {
      slidesPerView: 3.5,
      slidesPerGroup: 3.5,
      // spaceBetween: 10,
    },
    // when window width is >= 640px
    950: {
      slidesPerView: 3.5,
      slidesPerGroup: 3,
      // spaceBetween: 20,
    },
  },
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
  allowTouchMove: true,
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

let emailValidation = document.getElementById("email");
let submitButton = document.getElementById("submitButton");
let email;
let emailSent;
let errorMsg = document.getElementById("errorMsg");

emailValidation.addEventListener("keyup", function () {
  email = emailValidation.value;
  // let value = data.target.value;
  let error = !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)
    ? "Invalid email"
    : "";

  if (error.length) {
    errorMsg.innerHTML = error;
    emailSent = false;
  } else {
    errorMsg.innerHTML = error;
    emailSent = true;
  }
});

submitButton.addEventListener("click", function () {
  //  newsletterSubmit = () => {
  //Below is the testing details.
  // var url =
  //   'https://api.hsforms.com/submissions/v3/integration/submit/8723062/4a1234b0-fede-4e1b-bdcf-6813c28f5ac9';
  var url =
    "https://api.hsforms.com/submissions/v3/integration/submit/7393862/1ebe5cf0-a4ce-4bfd-9970-a3a2fd9ea1db";
  var data = {
    fields: [
      {
        name: "email",
        value: email,
      },
    ],
    context: {
      pageUri: "www.soberpeer.com",
      pageName: "newsletter",
    },
  };
  console.log(emailSent, "emailSent");
  if (emailSent) {
    axios
      .post(url, data)
      .then((response) => {
        console.log("email success");
        setTimeout(() => {
          console.log("email fail");
        }, 5000);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
        console.log("email invalid");
      });
    //  };
  }
});

function _class(name) {
  return document.getElementsByClassName(name);
}

let tabPanes = _class("tab-header")[0].getElementsByTagName("div");



//to make first slide active dynamically
_class("tab-content")[0]
  .getElementsByTagName("div")[0]
  .classList.add("relative");
_class("tab-content")[0].getElementsByTagName("div")[0].classList.add("active");
_class("tab-header")[0].getElementsByTagName("div")[0].classList.add("active");

for (let i = 0; i < tabPanes.length; i++) {
  tabPanes[i].addEventListener("click", function () {
    _class("tab-header")[0]
      .getElementsByClassName("active")[0]
      .classList.remove("active");
    tabPanes[i].classList.add("active");

    _class("tab-indicator")[0].style.top = `calc(13px + ${i * 56}px)`;
    
    _class("tab-content")[0]
      .getElementsByClassName("active")[0]
      .classList.remove("active");

    _class("tab-content")[0]
      .getElementsByClassName("relative")[0]
      .classList.remove("relative");
    // _class("tab-content")[0];

    _class("tab-content")[0]
      .getElementsByTagName("div")
      [i].classList.add("active");

    _class("tab-content")[0]
      .getElementsByTagName("div")
      [i].classList.add("relative");
  });
}

// const emailValidation = () => {
//   alert("email entered")
// }


let title = document.getElementById("tabTitle");
let tabContent = _class("tabContent")[0].getElementsByTagName("div");
_class("tabContent")[0].getElementsByTagName("div")[0].classList.add("active");
_class("tabContent")[0].getElementsByTagName("div")[0].classList.add("relative");


title.addEventListener("change", function () {
  for (let i = 0; i < tabContent.length; i++) {
    if (tabContent[i].id == title.value) {
      _class("tabContent")[0]
        .getElementsByClassName("relative")[0]
        .classList.remove("relative");

      _class("tabContent")[0]
        .getElementsByClassName("active")[0]
        .classList.remove("active");
      
      
      
      tabContent[i].classList.add("active");
      tabContent[i].classList.add("relative");

    }
  }
});

function MyClick(e) {
  let list = document.getElementById("nav-item");

  e.name === "menu-outline"
    ? ((e.name = "close-outline"),
      list.classList.remove("-top-full"),
      list.classList.add("top-25"),
      list.classList.add("w-full"))
    : ((e.name = "menu-outline"),
      list.classList.add("-top-full"),
      list.classList.remove("top-25"),
      list.classList.add("w-full"));
}
