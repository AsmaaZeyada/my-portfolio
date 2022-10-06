//! loading screen script
window.onload = () => {
    let loadingScreen = $("#loading")
    loadingScreen.fadeOut("250")
    $("body").css("overflow", "auto")
}
//! NavBar Script
let navToggleBtn = document.querySelector(".navbar-toggler");
let navLinks = document.querySelectorAll(".nav-link")

navToggleBtn.onclick = () => {
    let navToggleIcon = document.getElementById("navToggleIcon");
    if (navToggleIcon.classList.contains("fa-bars")) {
        navToggleIcon.classList.replace("fa-bars", "fa-times")
    } else {
        navToggleIcon.classList.replace("fa-times", "fa-bars")
    }
}
window.onscroll = () => {
    let scrollPosition = window.scrollY
    let aboutSection = document.getElementById("about")
    //! nav part
    let nav = document.querySelector("nav")
    if (scrollPosition > 150) {
        nav.classList.add("navbar-sticky")
    } else {
        nav.classList.remove("navbar-sticky")
    }

    //! load div part
    if (scrollPosition > aboutSection.offsetTop) {
        document.querySelector(".percentage.HTML").style.width = "90%"
        document.querySelector(".percentage.CSS").style.width = "85%"
        document.querySelector(".percentage.SCSS").style.width = "75%"
        document.querySelector(".percentage.BS").style.width = "95%"
        document.querySelector(".percentage.JS").style.width = "70%"
        document.querySelector(".percentage.NG").style.width = "65%"
    }
}

for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].onclick = (e) => {
        for (let i = 0; i < navLinks.length; i++) { navLinks[i].classList.remove("active") }
        e.target.classList.add("active")
    }
}



//! Typed Js Script
var typed = new Typed('#typed', {
    strings: ["Frontend Developer.^1000", "Freelancer.^1000"],
    typeSpeed: 80,
    loop: true,
});

//! slick slider fire function
$('.slider').slick({
    dots: true,
    infinite: true,
    arrows: false,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                centerPadding: '60px',
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]

});


