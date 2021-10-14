export const CardapioCard = (categoria) => {
  const token = localStorage.getItem('userToke');
  const url = 'https://lab-api-bq.herokuapp.com/products'
  const result = fetch(url , {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token
    }
    })
    .then((result) =>{ 
      result.filter((item) => item.sub_type === `${categoria}`);
    })
  return result;
};