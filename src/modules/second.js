import getData from './getData'
import postData from './postData';

const second = () => {
  const cartBtn = document.getElementById('cart')
  
  getData().then((data) => {
    console.log(data);
  })
  
  cartBtn.addEventListener('click', () => {
  })
}

export default second;