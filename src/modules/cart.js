import renderCart from "./renderCart";
import postData from "./postData";

const cart = () => {
  const cartBtn = document.getElementById("cart");
  const cartModal = document.querySelector(".cart");
  const cartCloseBtn = cartModal.querySelector(".cart-close");
  const cartTotal = cartModal.querySelector(".cart-total > span");
  const cartSendBtn = cartModal.querySelector(".cart-confirm");
  const goodsWrapper = document.querySelector(".goods");
  const cartWrapper = document.querySelector(".cart-wrapper");
  const cartLengthCounter = document.querySelector("#cart > .counter");
  
  updateCartLength();

  const openCart = () => {
    const cart = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];

    cartModal.style.display = "flex";

    renderCart(cart);
    cartTotal.textContent = cart.reduce((sum, goodItem) => {
      return sum + goodItem.price;
    }, 0);
  };

  const closeCart = () => {
    cartModal.style.display = "";
  };

  cartBtn.addEventListener("click", openCart);
  cartCloseBtn.addEventListener("click", closeCart);

  // Добавляем в корзину
  goodsWrapper.addEventListener('click', (event) => {
    if (event.target.classList.contains('btn-primary')) {
      const card = event.target.closest('.card');
      const key = card.dataset.key;
      const goods = JSON.parse(localStorage.getItem("goods"));
      const cart = localStorage.getItem('cart') ?
        JSON.parse(localStorage.getItem("cart")) : [];
      const goodItem = goods.find((item) => {
        return item.id === +key;
      });
      cart.push(goodItem);

      localStorage.setItem('cart', JSON.stringify(cart))
      updateCartLength();
    }
  });

  // Удаляем из  корзины
  cartWrapper.addEventListener('click', () => {
    if (event.target.classList.contains('btn-primary')) {
      const cart = localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart"))
        : [];
      const card = event.target.closest(".card");
      const key = card.dataset.key;
      const index = cart.findIndex((item) => {
        return item.id === +key
      })

      cart.splice(index, 1);
      
      localStorage.setItem("cart", JSON.stringify(cart));
      
      renderCart(cart);
  
      cartTotal.textContent = cart.reduce((sum, goodItem) => {
        return sum + goodItem.price;
      }, 0);
      updateCartLength();
    }
  })

  // Оформляем заказ (отправляем на сервер)
  cartSendBtn.addEventListener('click', async () => {
    const cart = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];

    await postData(cart).then(() => {
      localStorage.removeItem('cart');

      renderCart([]);

      cartTotal.textContent = 0;
    })
    updateCartLength();
  })

  function updateCartLength() {
    let cartLength = 0;
    const cart = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];
    cartLength = cart.length;

    console.log(cartLength)
    cartLengthCounter.innerHTML = cartLength;
  }
};

export default cart;
