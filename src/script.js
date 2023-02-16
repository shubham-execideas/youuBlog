var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
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
      slidesPerView: 1,
      slidesPerGroup: 1,
      // spaceBetween: 5,
    },
    // when window width is >= 480px
    520: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      // spaceBetween: 10,
    },
    // when window width is >= 640px
    950: {
      slidesPerView: 3,
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
let emailValidation = document.getElementById("email");
let submitButton = document.getElementById("submitButton"); 
let email;
let errorMsg = document.getElementById("errorMsg"); 

emailValidation.addEventListener("keyup", function () { 
  email = emailValidation.value;
  // let value = data.target.value;
  let error = !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)
    ? "Invalid email"
    : "";
  
  if (error.length) {
    errorMsg.innerHTML = error;
  } else {
    errorMsg.innerHTML = error;
  }
})

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
     axios
       .post(url, data)
       .then((response) => {
         console.log("email success");
        //  this.setState({ newsLetterSuccess: true, errorMsg: "" });
         setTimeout(() => {
          //  this.setState({ newsLetterSuccess: false, email: "" });
           console.log("email fail");
         }, 5000);
         console.log(response);
       })
       .catch((error) => {
         console.log(error);
        //  this.setState({ EmailErrorMsg: "Invalid email" });
         console.log("email invalid");
       });
  //  };
});

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
    // console.log(40 + (i * 40), i);

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
