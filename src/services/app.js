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
        return(result)
    })
    .catch((error) => {
        return(error)
    });
};
 export const getproduct=()=>{
    const requestOptions = {
  method: "GET",
  redirect: "follow"
};

 return fetch("https://ecommercev01.pythonanywhere.com/product/list/", requestOptions)
  .then((response) => response.json())
  .then((result) => {
    return(result)
  })
  .catch((error) => {
    return(error)
  });
}

 export const baseurl="https://ecommercev01.pythonanywhere.com/"


export const onepro = (id) => {
  return fetch(`https://ecommercev01.pythonanywhere.com/product/detail/?product_id=${id}`)
    .then((res) => res.json())
    .catch((err) => console.log("Ошибка в API:", err));
};


 export const handleGoToWishlist = (e) => {
  e.preventDefault();
  e.stopPropagation();
  
  // Переходим и передаем объект item целиком в состоянии (state)
  navigate("/wishlist", { state: { product: item } });
};