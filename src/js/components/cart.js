import GraphModal from "graph-modal";

const cartBtn = document.querySelector(".cart__btn");
const miniCart = document.querySelector(".mini-cart");

cartBtn.addEventListener("click", () => {
  miniCart.classList.toggle("mini-cart--visible");
});

document.addEventListener("click", (e) => {
  if (
    !e.target.classList.contains("mini-cart") &&
    !e.target.classList.contains("cart__btn")
  ) {
    miniCart.classList.remove("mini-cart--visible");
  }
});

const modal = new GraphModal({
  isOpen: (modal) => {
    if (modal.modalContainer.classList.contains("prod-modal")) {
      const openBtnId = modal.previousActiveElement.dataset.id;
      loadModalData(openBtnId);
      prodSlider.update();
    }
  },
});
