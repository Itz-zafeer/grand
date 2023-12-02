AOS.init({ once: true });

function toggleSidebar() {
  const body = document.querySelector("body");
  const sideBar = document.querySelector(".sideBar");
  const menu = document.querySelector(".menu");
  body.classList.toggle("active");
  sideBar.classList.toggle("active");
  menu.classList.toggle("active");
}
function togglePlan() {
  const plan = document.querySelector(".plan");
  const planArrow = document.querySelector(".planArrow");

  plan.classList.toggle("active");
  planArrow.classList.toggle("active");
  setTimeout(() => {
    if (planArrow.classList.contains("active")) {
      let offset =
        window.innerWidth > 1024
          ? (window.innerWidth / 100) * 3.625
          : window.innerWidth > 624
          ? (window.innerWidth / 100) * 5.625
          : (window.innerWidth / 100) * 8.625;

      window.scrollTo({
        behavior: "smooth",
        top:
          planArrow.getBoundingClientRect().top -
          document.body.getBoundingClientRect().top -
          offset,
      });
    }
  }, 500);
}

const tabs = document.querySelectorAll("[data-tab-target]");
const tabContents = document.querySelectorAll("[data-tab-content]");

const proTagDel = document.querySelector(".proTag .del");
const proTagPrice = document.querySelector(".proTag .price");
const maxTagDel = document.querySelector(".maxTag .del");
const maxTagPrice = document.querySelector(".maxTag .price");
const plusTagDel = document.querySelector(".plusTag .del");
const plusTagPrice = document.querySelector(".plusTag .price");
const startBtns = document.querySelectorAll(".startBtn");
const durationTags = document.querySelectorAll(".durationTag");
const priceCards = document.querySelectorAll(".priceCard");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    // tabContents.forEach((tabContent) => {
    //   tabContent.classList.remove("active");
    // });

    tabs.forEach((ta) => {
      if (tab.dataset.tabTarget == "#annually") {
        proTagDel.innerHTML = "$72";
        proTagPrice.innerHTML = "$66";
        maxTagDel.innerHTML = "$144";
        maxTagPrice.innerHTML = "$132";
        plusTagDel.innerHTML = "$300";
        plusTagPrice.innerHTML = "$275";
        startBtns.forEach((startBtn) => {
          const splittedHref = startBtn.href.split("");
          splittedHref[splittedHref.length - 1] = "2";
          const modifiedHref = splittedHref.join("");
          startBtn.href = modifiedHref;
        });
        durationTags.forEach((tag) => {
          tag.innerHTML = "Annually";
        });
      } else {
        proTagDel.innerHTML = "$9";
        proTagPrice.innerHTML = "$6";
        maxTagDel.innerHTML = "$15";
        maxTagPrice.innerHTML = "$12";
        plusTagDel.innerHTML = "$30";
        plusTagPrice.innerHTML = "$25";
        startBtns.forEach((startBtn) => {
          const splittedHref = startBtn.href.split("");
          splittedHref[splittedHref.length - 1] = "1";
          const modifiedHref = splittedHref.join("");
          startBtn.href = modifiedHref;
        });
        durationTags.forEach((tag) => {
          tag.innerHTML = "Per month";
        });
      }
      ta.classList.remove("active");
    });
    tab.classList.add("active");

    // target.classList.add("active");
  });
});

const faqEl = document.querySelectorAll(".faq_Main");

faqEl.forEach((faq) => {
  faq.addEventListener("click", () => {
    const selectedFaq = faq;

    faqEl.forEach((v) => {
      if (v === selectedFaq) {
        v.classList.toggle("active");
      } else {
        v.classList.remove("active");
      }
    });

    setTimeout(() => {
      let offset =
        window.innerWidth > 1024
          ? (window.innerWidth / 100) * 7.625
          : window.innerWidth > 624
          ? (window.innerWidth / 100) * 16.625
          : (window.innerWidth / 100) * 26.625;

      window.scrollTo({
        behavior: "smooth",
        top:
          selectedFaq.getBoundingClientRect().top -
          document.body.getBoundingClientRect().top -
          offset,
      });
    }, 500);
  });
});

// const header = document.querySelector("header");
// function checkScroll() {
//   var scrollPosition =
//     window.scrollY || window.pageYOffset || document.documentElement.scrollTop;

//   if (scrollPosition > (window.innerHeight / 100) * 50) {
//     header.classList.add("stickyHeader");
//     setTimeout(() => {
//       header.classList.add("stickyHeaderTransition");
//       header.classList.add("stickyHeaderShow");
//     }, 500);
//   } else {
//     header.classList.remove("stickyHeaderShow");
//     setTimeout(() => {
//       header.classList.remove("stickyHeader");
//       header.classList.remove("stickyHeaderTransition");
//     }, 500);
//   }
// }

// // Attach the function to the scroll event
// window.addEventListener("scroll", checkScroll);
