import getData from "./getData";
import renderGoods from "./renderGoods";
import { sideFilter } from "./filters";

const catalog = () => {
  const btnCatalog = document.querySelector(".catalog-button > button");
  const catalogModal = document.querySelector(".catalog");
  const catalogModalItems = document.querySelectorAll(".catalog li");
  const priceMinInput = document.querySelector("#min");
  const priceMaxInput = document.querySelector("#max");
  const hotSaleButton = document.querySelector("#discount-checkbox-test");
  let optionsObj = {
    priceFrom: 0,
    priceTo: 999999999,
    sale: false,
  };

  priceMinInput.addEventListener("input", (event) => {
    optionsObj.priceFrom = event.target.value;
    if (
      !event.target.value 
    ) {
      optionsObj.priceFrom = 0;
    }
    if (!event.target.value) {
      optionsObj.priceFrom = 0;
    }
    reload(optionsObj);
  });
  
  priceMaxInput.addEventListener("input", (event) => {
    
    optionsObj.priceTo = event.target.value;
    if (!event.target.value ||
      event.target.value == 0
      ) {
      optionsObj.priceTo = 9999999;
    };
    reload(optionsObj);
  });
  
  hotSaleButton.addEventListener('click', () => {
    if (hotSaleButton.checked) {
      optionsObj.sale = true;
    } else {
      optionsObj.sale = false;
    }
    reload(optionsObj);
  })

  function reload(optionsObj) {
    getData().then((data) => {
      renderGoods(sideFilter(data, optionsObj));
    });
  }
};

export default catalog;
