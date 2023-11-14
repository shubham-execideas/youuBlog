

//accordion in support tab start here
const accordion = document.getElementsByClassName("contentBx");

for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}

//accordion in support tab end here

// email validation for subscribe news letter contact page start here
let emailContactValidation = document.getElementById("emailContact");
let submitButtonContact = document.getElementById("submitButtonContact");
let emailField;
let emailContactSend;
let errorContactMsg = document.getElementById("errorContactMsg");

emailContactValidation &&
  emailContactValidation.addEventListener("keyup", function () {
    emailField = emailContactValidation.value;
    // let value = data.target.value;
    let error = !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(emailField)
      ? "Invalid email"
      : "";

    if (error.length) {
      errorContactMsg.innerHTML = error;
      emailContactSend = false;
    } else {
      errorContactMsg.innerHTML = error;
      emailContactSend = true;
    }
  });

submitButtonContact &&
  submitButtonContact.addEventListener("click", function () {
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
          value: emailField,
        },
      ],
      context: {
        pageUri: "www.soberpeer.com",
        pageName: "newsletter",
      },
    };
    if (emailContactSend) {
      axios
        .post(url, data)
        .then((response) => {
          emailContactValidation.value = "";
          console.log("email success");
          setTimeout(() => {
            console.log("email fail");
          }, 5000);
          console.log(response);
        })
        .catch((error) => {
          alert(emailContactValidation, emailContactValidation.value);
          emailContactValidation.value = "";
          console.log(error);
          console.log("email invalid");
        });
      //  };
    }
  });

// email validation for subscribe news letter in contact page end here

// email validation for subscribe news letter in footer start here
let emailValidation = document.getElementById("email");
let submitButton = document.getElementById("submitButton");
let email;
let emailSent;
let errorMsg = document.getElementById("errorMsg");

emailValidation &&
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

submitButton &&
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

// email validation for subscribe news letter in footer end here

// this is for dropdown navigation on small screens start here
function redirect(value) {
  window.location = value;
}
// this is for dropdown navigation on small screens end here

//articles sharing on social media starts here
let twitterShare = document.getElementById("twitterShare");
twitterShare &&
  twitterShare.addEventListener("click", function () {
    let url = encodeURI(window.location.href);
    let Shareurl = `https://twitter.com/intent/tweet?url=${url}`;
    twitterShare.href = Shareurl;
  });

let linkedinShare = document.getElementById("linkedinShare");
linkedinShare &&
  linkedinShare.addEventListener("click", function () {
    let url = encodeURI(window.location.href);
    let Shareurl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
    linkedinShare.href = Shareurl;
  });

let facebookShare = document.getElementById("facebookShare");
facebookShare &&
  facebookShare.addEventListener("click", function () {
    let url = encodeURI(window.location.href);
    let Shareurl = `https://www.facebook.com/share.php?u=${url}`;
    facebookShare.href = Shareurl;
  });
//articles sharing on social media end here

let shareArticleByEmail = document.getElementById("emailShare");
shareArticleByEmail &&
  shareArticleByEmail.addEventListener("click", function () {
    // let url = encodeURI(window.location.href);
    // let Shareurl = `https://www.facebook.com/share.php?u=${url}`;
    // facebookShare.href = Shareurl;
    var articleUrl = window.location.href;
    var articleTitle = document.title;

    // Compose the email subject and body
    var subject = articleTitle;
    var body = "Hi,\n\nCheck out this article: \n" + articleUrl;

    // Create a mailto link with the subject and body
    var mailtoLink =
      "mailto:?subject=" +
      encodeURIComponent(subject) +
      "&body=" +
      encodeURIComponent(body);

    // Open the user's email client with the mailto link
    window.location.href = mailtoLink;
  });

var searchModal = document.getElementById("searchModal");

// Get the button that opens the modal
var searchBtn = document.getElementById("searchBtn");

// Get the <span> element that closes the modal
var searchClose = document.getElementsByClassName("searchClose")[0];

// When the user clicks the button, open the modal

searchBtn &&
  searchBtn.addEventListener("click", function () {
    searchModal.style.display = "block";
  });

// When the user clicks on <span> (x), close the modal

searchClose &&
  searchClose.addEventListener("click", function () {
    searchModal.style.display = "none";
  });

window.onclick = function (event) {
  if (event.target == searchModal) {
    searchModal.style.display = "none";
  }
};

// var searchMobileModal = document.getElementById("searchMobileModal");

// // Get the button that opens the modal
// var searchMobileBtn = document.getElementById("searchMobileBtn");

// // Get the <span> element that closes the modal
// var searchMobileClose = document.getElementsByClassName("searchMobileClose")[0];

// // When the user clicks the button, open the modal

// searchMobileBtn &&
//   searchMobileBtn.addEventListener("click", function () {
//     searchMobileModal.style.display = "block";
//   });

// // When the user clicks on <span> (x), close the modal

// searchMobileClose &&
//   searchMobileClose.addEventListener("click", function () {
//     searchMobileModal.style.display = "none";
//   });

// window.onclick = function (event) {
//   if (event.target == searchMobileModal) {
//     searchMobileModal.style.display = "none";
//   }
// };

//modal for download white paper starts here
var modal = document.getElementById("myModal");
let initModal = document.getElementById("whitePaperModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal

btn &&
  btn.addEventListener("click", function () {
    modal.style.display = "block";
  });

// When the user clicks on <span> (x), close the modal

span &&
  span.addEventListener("click", function () {
    modal.style.display = "none";
  });

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
let emailFieldC = document.getElementById("emailField");
let downloadBtn = document.getElementById("downloadBtn");
let emailInput;
emailFieldC &&
  emailFieldC.addEventListener("keyup", function () {
    emailInput = emailFieldC.value;
    let error = !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(emailInput)
      ? "Invalid email"
      : "";
    if (error.length) {
      downloadBtn.classList.add("anchor-disabled");
    } else {
      downloadBtn.classList.remove("anchor-disabled");
    }
  });

// const button = document.querySelector("button");
const toast = document.getElementById("toast");
const closeIcon = document.querySelector(".closeToast");
const progress = document.querySelector(".progress");
let timer1, timer2;


downloadBtn &&
  downloadBtn.addEventListener("click", function (e) {
    let emailField = document.getElementById("emailField");
    let firstNameField = document.getElementById("firstNameField");
    let lastNameField = document.getElementById("lastNameField");
    let phoneField = document.getElementById("phoneField");
    let companyField = document.getElementById("companyField");
    let jobField = document.getElementById("jobField");
    let emailErrorMsg = document.getElementById("emailErrorMsg");
    let subs = document.getElementById("subs");
    var url =
      "https://api.hsforms.com/submissions/v3/integration/submit/7393862/768442e1-8b52-4ddc-90d0-d7e4c1b6f29c";
    let tempData = [
      {
        name: "email",
        value: emailField.value,
      },
      {
        name: "firstName",
        value: firstNameField.value,
      },
      {
        name: "lastName",
        value: lastNameField.value,
      },
      {
        name: "phone",
        value: phoneField.value,
      },
      {
        name: "job",
        value: jobField.value,
      },
      {
        name: "company",
        value: companyField.value,
      },
      {
        name: "Subscribe to News Letter",
        value: subs.checked,
      },
    ];
    tempData = tempData.filter((item) => item.value);
    var data = {
      fields: tempData,
      context: {
        pageUri: "www.youu.com",
        pageName: "White Papet",
      },
    };
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
    emailField.value = "";
    firstNameField.value = "";
    lastNameField.value = "";
    phoneField.value = "";
    companyField.value = "";
    jobField.value = "";
    modal.style.display = "none";
    initModal.style.display = 'none';
    downloadBtn.classList.add("anchor-disabled");
    sessionStorage.setItem("isWPDownloaded", true)

    toast.classList.add("active");
    progress.classList.add("active");

    timer1 = setTimeout(() => {
      toast.classList.remove("active");
    }, 5000); //1s = 1000 milliseconds

    timer2 = setTimeout(() => {
      progress.classList.remove("active");
    }, 5300);

    closeIcon.addEventListener("click", () => {
      toast.classList.remove("active");

      setTimeout(() => {
        progress.classList.remove("active");
      }, 300);

      clearTimeout(timer1);
      clearTimeout(timer2);
    });
  }); // form ends here



const toastMobile = document.getElementById("toastMobile");
const closeToastMobile = document.querySelector(".closeToastMobile");
const progressMobile = document.querySelector(".progressMobile");
let timer1Mobile, timer2Mobile;



   // Get the modal
        var myModalMobile = document.getElementById("myModalMobile");
        // Get the button that opens the modal
        var modalBtn = document.getElementById("modalBtn");

        
        // Get the <span> element that closes the modal
        var closeMobile = document.getElementsByClassName("closeMobile")[0];
        // When the user clicks the button, open the modal
        

//          modalBtn.onclick = function () {
//           myModalMobile.style.display = "block";
// };
modalBtn && modalBtn.addEventListener('click', function () { 
   myModalMobile.style.display = "block";
})
        // When the user clicks on <span> (x), close the modal
//          closeMobile.onclick = function () {
//             myModalMobile.style.display = "none";
// }
        

closeMobile && closeMobile.addEventListener('click', function () { 
   myModalMobile.style.display = "none";
})
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function (event) {
            if (event.target == myModalMobile) {
                myModalMobile.style.display = "none";
            }
        }
        let emailFieldMobile = document.getElementById("emailFieldMobile");
        let downloadBtnMobile = document.getElementById("downloadBtnMobile");
        let emailInputMobile;
        emailFieldMobile && emailFieldMobile.addEventListener("keyup", function () {
          emailInputMobile = emailFieldMobile.value;
          let error = !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
            emailInputMobile
          )
            ? "Invalid email"
            : "";
          if (error.length) {
            downloadBtnMobile.classList.add("anchor-disabled");
          } else {
            downloadBtnMobile.classList.remove("anchor-disabled");
          }
        });
        downloadBtnMobile && downloadBtnMobile.addEventListener(
          "click",
          function (e) {
            let emailFieldMobile = document.getElementById("emailFieldMobile");
            let firstNameFieldMobile = document.getElementById(
              "firstNameFieldMobile"
            );
            let lastNameFieldMobile = document.getElementById(
              "lastNameFieldMobile"
            );
            let phoneFieldMobile = document.getElementById("phoneFieldMobile");
            let companyFieldMobile =
              document.getElementById("companyFieldMobile");
            let jobFieldMobile = document.getElementById("jobFieldMobile");
            let emailErrorMsg = document.getElementById("emailErrorMsg");
            let subsMobile = document.getElementById("subsMobile");
            var url =
              "https://api.hsforms.com/submissions/v3/integration/submit/7393862/768442e1-8b52-4ddc-90d0-d7e4c1b6f29c";
            let tempData = [
              {
                name: "email",
                value: emailFieldMobile.value,
              },
              {
                name: "firstName",
                value: firstNameFieldMobile.value,
              },
              {
                name: "lastName",
                value: lastNameFieldMobile.value,
              },
              {
                name: "phone",
                value: phoneFieldMobile.value,
              },
              {
                name: "job",
                value: jobFieldMobile.value,
              },
              {
                name: "company",
                value: companyFieldMobile.value,
              },
              {
                name: "Subscribe to News Letter",
                value: subsMobile.checked,
              },
            ];
            tempData = tempData.filter((item) => item.value);
            var data = {
              fields: tempData,
              context: {
                pageUri: "www.youu.com",
                pageName: "White Papet",
              },
            };
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
            emailFieldMobile.value = "";
            firstNameFieldMobile.value = "";
            lastNameFieldMobile.value = "";
            phoneFieldMobile.value = "";
            companyFieldMobile.value = "";
            jobFieldMobile.value = "";
            myModalMobile.style.display = "none";
            downloadBtnMobile.classList.add("anchor-disabled");
             initModal.style.display = "none";
             sessionStorage.setItem("isWPDownloaded", true);
            toastMobile.classList.add("active");
            progressMobile.classList.add("active");

            timer1Mobile = setTimeout(() => {
              toastMobile.classList.remove("active");
            }, 5000); //1s = 1000 milliseconds

            timer2Mobile = setTimeout(() => {
              progressMobile.classList.remove("active");
            }, 5300);

            closeToastMobile.addEventListener("click", () => {
              toastMobile.classList.remove("active");

              setTimeout(() => {
                progressMobile.classList.remove("active");
              }, 300);

              clearTimeout(timer1Mobile);
              clearTimeout(timer2Mobile);
            });
          }
); // form ends here
        
      

//modal for download white paper end here

//header hamburger start here
function MyClick(e) {
  let list = document.getElementById("nav-item");
  let body = document.querySelector("body");

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

let navItems = document.getElementsByClassName("nav-items")[0];
let url = window.location.pathname;

function _class(name) {
  return document.getElementsByClassName(name);
}

let urlPathnames = [
  " ",
  "/about/",
  "/our-team/",
  "/contact/",
  "/support/",
  "/blog/",
  "/news/",
];

for (let i = 0; i < navItems.getElementsByTagName("li").length; i++) {
  if (url == "/") {
    navItems.getElementsByTagName("li")[0].classList.add("text-sumireVoilet");
    navItems.getElementsByTagName("li")[0].classList.add("font-bold");
  } else if (i != 0 && url.includes(urlPathnames[i])) {
    navItems.getElementsByTagName("li")[i].classList.add("text-sumireVoilet");
    navItems.getElementsByTagName("li")[i].classList.add("font-bold");
  }
}
//header hamburger end here

//blog swiper start here

// import Swiper from "https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js";
var swiper = new Swiper(".blog-Swiper", {
  slidesPerView: 3.5,
  spaceBetween: 5,
  // slideClass: ".slider",
  slidesPerGroup: 3,
  loop: false,
  loopFillGroupWithBlank: true,
  allowTouchMove: true,
  pagination: {
    el: ".blog-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".blog-next-button",
    prevEl: ".blog-prev-button",
  },
  breakpoints: {
    // when window width is >= 320px
    0: {
      slidesPerView: 1.2,
      slidesPerGroup: 1,
      // spaceBetween: 5,
    },
    // when window width is >= 480px
    520: {
      slidesPerView: 2.2,
      slidesPerGroup: 2,
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

//blog swiper end here

//         // Get the modal
//         var myModalMobile = document.getElementById("myModalMobile");

//         // Get the button that opens the modal
//         var modalBtn = document.getElementById("modalBtn");

//         // Get the <span> element that closes the modal
//         var closeMobile = document.getElementsByClassName("closeMobile")[0];

//         // When the user clicks the button, open the modal

//         modalBtn.onclick = function () {
//         debugger;
//         myModalMobile.style.display = "block";
//         }
//         // When the user clicks on <span> (x), close the modal
//         closeMobile.onclick = function () {
//             myModalMobile.style.display = "none";
//         }
//         // When the user clicks anywhere outside of the modal, close it
//         window.onclick = function (event) {
//             if (event.target == myModalMobile) {
//                 myModalMobile.style.display = "none";
//             }
//         }
//         let emailFieldMobile = document.getElementById("emailFieldMobile");
//         let downloadBtnMobile = document.getElementById("downloadBtnMobile");
//         let emailInputMobile;
//         emailFieldMobile.addEventListener("keyup", function () {
//             emailInputMobile = emailFieldMobile.value;
//             let error = !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(emailInputMobile)
//                 ? "Invalid email"
//                 : "";
//             if (error.length) {
//                 downloadBtnMobile.classList.add("anchor-disabled");
//             } else {
//                 downloadBtnMobile.classList.remove("anchor-disabled");
//             }
//         });
//         downloadBtnMobile.addEventListener("click", function (e) {
//             let emailFieldMobile = document.getElementById("emailFieldMobile");
//             let firstNameFieldMobile = document.getElementById("firstNameFieldMobile");
//             let lastNameFieldMobile = document.getElementById("lastNameFieldMobile");
//             let phoneFieldMobile = document.getElementById("phoneFieldMobile");
//             let companyFieldMobile = document.getElementById("companyFieldMobile");
//             let jobFieldMobile = document.getElementById("jobFieldMobile");
//             let emailErrorMsg = document.getElementById("emailErrorMsg");
//             let subsMobile = document.getElementById("subsMobile");
//             var url = "https://api.hsforms.com/submissions/v3/integration/submit/7393862/768442e1-8b52-4ddc-90d0-d7e4c1b6f29c";
//             let tempData = [
//                 {
//                     name: "email",
//                     value: emailFieldMobile.value
//                 },
//                 {
//                     name: "firstName",
//                     value: firstNameFieldMobile.value
//                 },
//                 {
//                     name: "lastName",
//                     value: lastNameFieldMobile.value
//                 },
//                 {
//                     name: "phone",
//                     value: phoneFieldMobile.value
//                 }, {
//                     name: "job",
//                     value: jobFieldMobile.value
//                 }, {
//                     name: "company",
//                     value: companyFieldMobile.value
//                 }, {
//                     name: "Subscribe to News Letter",
//                     value: subsMobile.checked
//                 }
//             ];
//             tempData = tempData.filter((item) => item.value);
//             var data = {
//                 fields: tempData,
//                 context: {
//                     pageUri: "www.youu.com",
//                     pageName: "White Papet"
//                 }
//             };
//             axios
//                 .post(url, data)
//                 .then((response) => {
//                     console.log("email success");
//                     setTimeout(() => {
//                         console.log("email fail");
//                     }, 5000);
//                     console.log(response);
//                 })
//                 .catch((error) => {
//                     console.log(error);
//                     console.log("email invalid");
//                 });
//             emailFieldMobile.value = ""
//             firstNameFieldMobile.value = ""
//             lastNameFieldMobile.value = ""
//             phoneFieldMobile.value = ""
//             companyFieldMobile.value = ""
//             jobFieldMobile.value = ""
//             myModalMobile.style.display = "none";
//         }) // form ends here
