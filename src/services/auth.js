export const authLogin = (e, {item}) => {
  e.preventDefault();
  const url = 'https://lab-api-bq.herokuapp.com/auth';
  const result = fetch (url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      email: item.email,
      password: item.password
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

export const authRegister = (e, {item}) => {
  const url = 'https://lab-api-bq.herokuapp.com/users'
  e.preventDefault();
  const result = fetch(url, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify ({
      name: item.name,
      email: item.email,
      password: item.password,
      role: item.role,
      restaurant: "combos burg"
      })
    }).then((result) => {
      switch (result.status) {
        case 200: 
          return result.json();
        default:
          throw new Error(result.status)
      }
    })
    return result 
  };
  