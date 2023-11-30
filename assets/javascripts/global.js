function toggleSidebar() {
    const body = document.querySelector("body")
    const sideBar = document.querySelector(".sideBar")
    const menu = document.querySelector(".menu")
    body.classList.toggle("active")
    sideBar.classList.toggle("active")
    menu.classList.toggle("active")
}
function togglePlan() {
    const plan = document.querySelector(".plan")
    const planArrow = document.querySelector(".planArrow")
    plan.classList.toggle("active")
    planArrow.classList.toggle("active")

}

const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active')
        })
        tabs.forEach(tab => {
            tab.classList.remove('active')
        })
        tab.classList.add('active')
        target.classList.add('active')
    })
})

const faqEl = document.querySelectorAll(".faq_Main");

faqEl.forEach((faq) => {
    faq.addEventListener("click", () => {

        const selectedFaq = faq;
        faqEl.forEach((v) => {
            if (v === selectedFaq) {
                v.classList.toggle("active")

            } else {
                v.classList.remove("active")

            }
        })



    });
});