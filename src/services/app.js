export const categorydata = () => {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  return fetch(
    "https://ecommercev01.pythonanywhere.com/product/categories/",
    requestOptions,
  )
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch((error) => {
      return error;
    });
};
export const getproduct = () => {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  return fetch(
    "https://ecommercev01.pythonanywhere.com/product/list/",
    requestOptions,
  )
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch((error) => {
      return error;
    });
};

export const baseurl = "https://ecommercev01.pythonanywhere.com";


export const onepro = (id) => {
  return fetch(`https://ecommercev01.pythonanywhere.com/product/detail/?product_id=${id}`)
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch((error) => {
      console.error(error);
      return null;
    });
};




export const wishlist = () => {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  return fetch("https://ecommercev01.pythonanywhere.com/action/my-wishlist/", requestOptions)
    .then((response) => response.json())
    .catch((error) => {
      console.error(error);
      return []; 
    });
};

