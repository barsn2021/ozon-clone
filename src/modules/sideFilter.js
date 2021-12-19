import getData from "./getData";
import renderGoods from "./renderGoods";
import { sideFilter } from "./filters";

const catalog = () => {
  const btnCatalog = document.querySelector(".catalog-button > button");
  const catalogModal = document.querySelector(".catalog");
  const catalogModalItems = document.querySelectorAll(".catalog li");
  const priceMinInput = document.querySelector("#min");
  const priceMaxInput = document.querySelector("#max");
  const hotSaleButton = document.querySelector("#discount-checkbox");
  // let hotSaleButtonIsChecked = false;
  let optionsObj = {
    priceFrom: 0,
    priceTo: 999999999,
    sale: false,
  };
  // console.log(hotSaleButton);
  priceMinInput.addEventListener("input", (event) => {
    optionsObj.priceFrom = event.target.value;
    console.log(optionsObj.priceFrom);
    if (
      !event.target.value 
      // || typeof event.target.value !== "number"
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
    console.log(optionsObj.priceFrom);
    if (!event.target.value ||
      event.target.value == 0
      // || typeof event.target.value !== "number"
      ) {
      optionsObj.priceTo = 9999999;
    };
    reload(optionsObj);
  });
  
  // hotSaleButton.addEventListener('click', (btn) => {
  //   hotSaleButton.prop("checked", true);
  //   console.log(hotSaleButton);
  //   sideFilter(optionsObj);
  // })
 

  function reload(optionsObj) {
    getData().then((data) => {
      renderGoods(sideFilter(data, optionsObj));
    });
  }
};

export default catalog;
