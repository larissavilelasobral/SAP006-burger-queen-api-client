///orders
export const Orders = ({APIBody}) => {
  const token = localStorage.getItem('userToke');
  const url = 'https://lab-api-bq.herokuapp.com/orders'
  const result = fetch(url , {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token
    },
    body: JSON.stringify({
      client: APIBody.clientName,
      table: APIBody.clientTable,
      products: APIBody.orderProducts
      })
    })
    .then((response) => {
      switch (response.status) {
        case 200: 
          return response.json();
        default:
          throw new Error(response.status)
      }
    })
    return result 
};