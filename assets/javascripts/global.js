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
}

const tabs = document.querySelectorAll("[data-tab-target]");
const tabContents = document.querySelectorAll("[data-tab-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("active");
    });
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tab.classList.add("active");
    target.classList.add("active");
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
  });
});

const header = document.querySelector("header");
function checkScroll() {
  var scrollPosition =
    window.scrollY || window.pageYOffset || document.documentElement.scrollTop;

  if (scrollPosition > (window.innerHeight / 100) * 50) {
    header.classList.add("stickyHeader");
    setTimeout(() => {
      header.classList.add("stickyHeaderTransition");
      header.classList.add("stickyHeaderShow");
    }, 500);
  } else {
    header.classList.remove("stickyHeaderShow");
    setTimeout(() => {
      header.classList.remove("stickyHeader");
      header.classList.remove("stickyHeaderTransition");
    }, 500);
  }
}

// Attach the function to the scroll event
window.addEventListener("scroll", checkScroll);
