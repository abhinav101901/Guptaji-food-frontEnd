import axios from "axios"
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import '../styles/Cart.css'

function Cart() {
  const [data,setData]=useState()
  const [items,setItems]=useState([])
  const [price,setPrice]=useState("")
  const [quantity,setQuantity]=useState("")
  const [UserId,setUserId]=useState(()=>{
    const saved = localStorage.getItem("UserId")
    return saved
  });
  const routeParams = useParams() 
  const navigate = useNavigate();
  useEffect(()=>{
            axios.get(`http://localhost:3000/getCart/${UserId}`)
            .then((res) => {
              setData(res.data.data)
              setItems(res.data.data.items)
              setPrice(res.data.data.totalPrice)
              setQuantity(res.data.data.totalItems)
              console.log(res.data.data.totalItems)

            })        
	},[])

  function handleClick(cartId){
		axios.post(`http://localhost:3000/placeOrder/${UserId}`, {
           cartId
        })
            .then((res) => {
                alert(`ADD Order Succesfully`)
                localStorage.removeItem("TotalItems")
                navigate(`/Order`)
            }).catch((err) => {
                alert(err.response.data.message + err.response.status + " Error")
            })
	}

  function handleDelete(){
    axios.post(`http://localhost:3000/deleteCart/${UserId}`)
            .then((res) => {
                alert(`Check Out Succesfully`)
                localStorage.removeItem("TotalItems")
                window.location.reload();
            }).catch((err) => {
                alert(err.response.data.message + err.response.status + " Error")
            })
	}
  

  return (
    <div className="cart">
				<h1> You want !! </h1>
				<div className="cart-main">
					{items.map((item) => {
						if (true) {
							return <div className='cart-detailBox' key={item.foodId._id} >
								<div className='cart-imgbox'><img src={item.foodId.imageManu} alt="ImageManu" /></div>
								
										<div className="Item_data1"><p>{item.foodId.name}</p></div>
                    <div className="Item_data1"><p>{item.foodId.price} ₹ </p></div>
                    <div className="Item_data1"><p>Qut: {item.quantity}</p></div>
								
							</div>
            }
					}
					)}
				</div>
        <button className="Check_out" onClick={(e) => handleDelete()}>Check Out</button>
       <div className="bill">
        <a1>Total Price : {price}</a1>
        <a1>Total Items : {quantity}</a1>
        
        <button id={data} className="order-btn" onClick={(e) => handleClick(data._id)}><Link>Order</Link></button>
        
       </div>
			</div>
  )
}

export default Cart
