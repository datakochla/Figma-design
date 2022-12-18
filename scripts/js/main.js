const loadMoreBtns4 = document.querySelectorAll(".our-products .shopall a");
const loadMoreBtns8 = document.querySelectorAll(".our-products-list .shopall a");

loadMoreBtns4.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        const target = e.target;
        const parent = target.closest("section");
        loadMore(4,parent, target);
    });
});

loadMoreBtns8.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        const target = e.target;
        const parent = target.closest("section");
        loadMore(8,parent, target);
    });
});

function loadMore(count, parentElement, targetElem) {
    const products = parentElement.querySelectorAll("ul li.is-hidden");

    const showItems = Array.from(products).slice(0, count);
    showItems.forEach((item) => {
        item.classList.remove("is-hidden");
    });

    const hiddenItems = parentElement.querySelectorAll("ul li.is-hidden");

    if (hiddenItems.length == 0) {
        targetElem.parentElement.style.display = "none";
    }
};

loadMore(0, document.querySelector(".our-products .products-list"));
loadMore(0, document.querySelector(".our-products-list .products-list"));