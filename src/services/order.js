///orders
export const sendOrderToAPI = (APIBody) => {
  return fetch("https://lab-api-bq.herokuapp.com/orders", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem('userToke')
    },
    body: JSON.stringify(APIBody),
  });
};