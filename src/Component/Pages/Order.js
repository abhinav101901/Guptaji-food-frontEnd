import axios from "axios"
import React, { useState, useEffect } from 'react';
import StepProgressBar from "./StepProgressBar";

import '../styles/Order.css'

function Order() {
  const [items, setItems] = useState([])
  const [price, setPrice] = useState("")
  const [quantity, setQuantity] = useState("")
  const [UserId, setUserId] = useState(() => {
    const saved = localStorage.getItem("UserId")
    return saved
  });
  useEffect(() => {
    axios.get(`http://localhost:3000/getOrder/${UserId}`)
      .then((res) => {
        setItems(res.data.data.items)
        setPrice(res.data.data.totalPrice)
        setQuantity(res.data.data.totalItems)
        console.log(res.data)
      })
      .catch((err) => {
        alert(err.response.data.message + err.response.status + " Error")
      })
  }, [])

  return (
    <div className="Order">
      <h1> You want !! </h1>
      <div className="Order-main">
        {items.map((item) => {
          if (true) {
            return <div className='Order-detailBox' key={item.foodId._id} >
              <div className='Order-imgbox'><img src={item.foodId.imageManu} alt="Menu"/></div>

              <div className="Item_data1"><p>{item.foodId.name}</p></div>
              <div className="Item_data1"><p>{item.foodId.price} ₹ </p></div>
              <div className="Item_data1"><p>Qut: {item.quantity}</p></div>

            </div>
          }
        }
        )}
        <div className="OrderStatus">
          <StepProgressBar/>
        </div>
        <div className="Orderbill">
          <a1>Total Price : {price}</a1>
          <a1>Total Items : {quantity}</a1>
        </div>
      </div>

    </div>
  )
}

export default Order
