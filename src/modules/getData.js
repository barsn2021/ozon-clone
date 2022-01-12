const getData = () => {
  return fetch(
    `https://ozoncp-default-rtdb.firebaseio.com/goods.json?`
  ).then((response) => {
    return response.json();
  });
}

export default getData;