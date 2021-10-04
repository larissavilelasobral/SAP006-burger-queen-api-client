import React from 'react' 
import "./Cozinha.css";
import { useState } from "react";

const Cozinha = () => {
  const [breakfast, setBreakfast] = useState([]);
  const token = localStorage.getItem('userToke');
  const url = 'https://lab-api-bq.herokuapp.com/products'
  fetch(url , {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token
    }
    })
    .then((result) => result.json())
    // .then((data)=> {
    //   for (let i = 0; i < 5; i++) {
    //         const items = data.filter((item) => item.name);
    //         const breakfast = data.filter((item) => item.type === "breakfast");
    //         setBreakfast(breakfast);
    //         console.log(items)
    //       }
    //       console.log(breakfast.name)
    //   })
    
  return (
    <>
      <div className="cozinha">
        {}
 
      </div>
    </>
  )
}

export default Cozinha;