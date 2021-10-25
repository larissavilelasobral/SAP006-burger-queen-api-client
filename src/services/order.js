///orders
export const sendOrderToAPI = (infoApiBody) => {
  const url = "https://lab-api-bq.herokuapp.com/orders"
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem('userToke')
    },
    body: JSON.stringify(infoApiBody),
  });
};