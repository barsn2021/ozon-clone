const search = () => {
  
  const searchBtn = document.querySelector(".search .search-btn button");
  
  searchBtn.addEventListener("click", () => {
    let searchValue = document.querySelector(".search-wrapper_input").value;
    console.log(`input.value = ${searchValue}`);
  })
};

export default search;