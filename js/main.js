try {
  // Burger Menu
  const hamburger = document.querySelector(".hamburger");
  const menu = document.querySelector(".header__right");
  // const menuLinks = document.querySelectorAll(".header__nav-link");

  hamburger.addEventListener("click", (e) => {
    hamburger.classList.toggle("hamburger--active");
    menu.classList.toggle("header__right--active");

    if (hamburger.classList.contains("hamburger--active")) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  });
} catch (e) {}

try {
  // App Slider
  const appSlider = new Swiper(".app__slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: ".app__slider-next",
      prevEl: ".app__slider-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
      clickable: true,
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });
} catch (e) {}

try {
  const deviceSlider = new Swiper(".device__slider", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      576: {
        slidesPerView: 3,
      },
    },
  });
} catch (e) {}

try {
  const aboutSlider = new Swiper(".about__slider", {
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".about__slider-next",
      prevEl: ".about__slider-prev",
    },
  });
} catch (e) {}

try {
  const orderSlider = new Swiper(".order__slider", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
} catch (e) {}

try {
  const orderSlider = new Swiper(".package__slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
    },
  });
} catch (e) {}
