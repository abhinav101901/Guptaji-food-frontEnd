import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import cartLogo from '../Assets/cartLogo.png'
import axios from "axios"
import green from '../Assets/veg.png'
import red from '../Assets/red.png'
import '../styles/Menu.css'

function Menu() {
	const [data, setData] = useState([])
	const [quantity, setQuantity] = useState()
	const [query, setQuery] = useState([]);
	const [searchData, setSearchData] = useState(false)

	const [name, setName] = useState("")
	// const [totalItems, setTotalItems] = useState(() => {
	// 	const saved = localStorage.getItem("TotalItems")
	// 	return saved
	// });
	const [UserId, setUserId] = useState(() => {
		const saved = localStorage.getItem("UserId")
		return saved
	});
	const [added, setAdded] = useState(true);
	var $slider = document.getElementById('slider');

	const navigate = useNavigate();
	const routeParams = useParams()

	useEffect(() => {
		axios.get(`http://localhost:3000/getFood/${routeParams.id}`)
			.then((res) => {
				setData(res.data.data)
				console.log(res.data.data)
			})
	}, [routeParams.id, data._id])

	function goTOCart() {
		navigate('/Cart')
		// alert('hiii, you are in cart')
		console.log('gone')
	}

	function handleClick(foodId) {
		axios.post(`http://localhost:3000/addInCart/${UserId}`, {
			foodId, quantity
		})
			.then((res) => {
				console.log("aaaa", res.data.data)
				localStorage.setItem("TotalItems", res.data.data.totalItems)
				setAdded(false)
				setTimeout(() => {
					setAdded(true)
					window.location.reload();
				}, 1500);
				$slider.setAttribute('class', !added ? 'slide-out' : 'slide-in')
			}).catch((err) => {
				alert(err.response.data.message + err.response.status + " Error")
			})
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(name)
		axios.get(`http://localhost:3000/getfoodByname/${name}`)
			.then((res) => {
				setQuery(res.data.data)
				setSearchData(true)
				console.log(res.data.data)
			})
			.catch((err) => {
				alert(err.response.data.message + err.response.status + " Error")
			})
	};

	const handleChange = (event) => {
		setName(event.target.value);
	};

	const handleQuantity = (event) => {
		setQuantity(Number(event.target.value));
		document.getElementById(event.target.id).value = event.target.value
	};

	return (
		<div className="Restorent">
			{added ? (<></>) : (<div id="slider" class="slide-in">add successfully</div>)}
			<div className='funck'>
				<h1>Food Menu</h1>
				<div className='fu-2'>
					<form className='Res-header-1' onSubmit={handleSubmit}>
						<input type="text" value={name} onChange={handleChange} />
						<button className='Res-btn' type="submit"><FaSearch /></button>
					</form>
					<div className='cartImg' onClick={(e) => goTOCart()}>
						<img src={cartLogo} alt="brand" />
						<k1>{localStorage.getItem("TotalItems")}</k1>
					</div>
					<div>
					</div>
				</div>
			</div>

			{searchData ? (
				<div className="Contaner">
					{query.map((item) => {
						if (true) {
							return <div className='contaner-1' key={item._id} >

								<div className='box'><img src={item.imageManu} alt='imageManu' /></div>
								<div className='detail'>
									<div className='detail-1'>
										<p>{item.name}</p>
										<p>{item.price} ₹ </p>
									</div>

									<div class="input-group">
										<select id={item._id} onChange={handleQuantity}>
											<option value={0}>0</option>
											<option value={1}>1</option>
											<option value={2}>2</option>
											<option value={3}>3</option>
											<option value={4}>4</option>
											<option value={5}>5</option>
										</select>
									</div>

									<div className='detail-2'>
										<div className='foodType'>
											{(item.foodType === "Veg") ? (<img src={green} alt="Veg" />) : (<img src={red} alt="Non-Veg" />)}
										</div>
										<button id={item._id} onClick={(e) => handleClick(item._id)}>
											<Link>ADD</Link>
										</button>
									</div>
								</div>
							</div>
						}
					}
					)}
				</div>
			) : (<>
				<div className="Contaner">
					<h4>Break-Fast</h4>
					{data.map((item) => {
						if (item.type === "Break-Fast") {
							return <div className='contaner-1' key={item._id} >

								<div className='box'><img src={item.imageManu} alt='imageManu' /></div>
								<div className='detail'>
									<div className='detail-1'>
										<p>{item.name}</p>
										<p>{item.price} ₹ </p>
									</div>

									<div class="input-group">
										<select id={item._id} onChange={handleQuantity}>
											<option value={0}>0</option>
											<option value={1}>1</option>
											<option value={2}>2</option>
											<option value={3}>3</option>
											<option value={4}>4</option>
											<option value={5}>5</option>
										</select>
									</div>

									<div className='detail-2'>
										<div className='foodType'>
											{(item.foodType === "Veg") ? (<img src={green} alt="Veg" />) : (<img src={red} alt="Non-Veg" />)}
										</div>
										<button id={item._id} onClick={(e) => handleClick(item._id)}>
											<Link>ADD</Link>
										</button>
									</div>
								</div>
							</div>
						}
					}
					)}
				</div>

				<div className="Contaner">
					<h4>Lunch</h4>
					{data.map((item) => {
						if (item.type === "Lunch") {
							return <div className='contaner-1' key={item._id} >

								<div className='box'><img src={item.imageManu} alt='imageManu' /></div>
								<div className='detail'>
									<div className='detail-1'>
										<p>{item.name}</p>
										<p>{item.price} ₹ </p>
									</div>

									<div class="input-group">
										<select id={item._id} onChange={handleQuantity}>
											<option value={0}>0</option>
											<option value={1}>1</option>
											<option value={2}>2</option>
											<option value={3}>3</option>
											<option value={4}>4</option>
											<option value={5}>5</option>
										</select>
									</div>

									<div className='detail-2'>
										<div className='foodType'>
											{(item.foodType === "Veg") ? (<img src={green} alt="Veg" />) : (<img src={red} alt="Non-Veg" />)}
										</div>
										<button id={item._id} onClick={(e) => handleClick(item._id)}>
											<Link>ADD</Link>
										</button>
									</div>
								</div>
							</div>
						}
					}
					)}
				</div>

				<div className="Contaner">
					<h4>Snacks</h4>
					{data.map((item) => {
						if (item.type === "Snacks") {
							return <div className='contaner-1' key={item._id} >

								<div className='box'><img src={item.imageManu} alt='imageManu' /></div>
								<div className='detail'>
									<div className='detail-1'>
										<p>{item.name}</p>
										<p>{item.price} ₹ </p>
									</div>

									<div class="input-group">
										<select id={item._id} onChange={handleQuantity}>
											<option value={0}>0</option>
											<option value={1}>1</option>
											<option value={2}>2</option>
											<option value={3}>3</option>
											<option value={4}>4</option>
											<option value={5}>5</option>
										</select>
									</div>

									<div className='detail-2'>
										<div className='foodType'>
											{(item.foodType === "Veg") ? (<img src={green} alt="Veg" />) : (<img src={red} alt="Non-Veg" />)}
										</div>
										<button id={item._id} onClick={(e) => handleClick(item._id)}>
											<Link>ADD</Link>
										</button>
									</div>
								</div>
							</div>
						}
					}
					)}
				</div>

				<div className="Contaner">
					<h4>Dinner</h4>
					{data.map((item) => {
						if (item.type === "Dinner") {
							return <div className='contaner-1' key={item._id} >

								<div className='box'><img src={item.imageManu} alt='imageManu' /></div>
								<div className='detail'>
									<div className='detail-1'>
										<p>{item.name}</p>
										<p>{item.price} ₹ </p>
									</div>

									<div class="input-group">
										<select id={item._id} onChange={handleQuantity}>
											<option value={0}>0</option>
											<option value={1}>1</option>
											<option value={2}>2</option>
											<option value={3}>3</option>
											<option value={4}>4</option>
											<option value={5}>5</option>
										</select>
									</div>

									<div className='detail-2'>
										<div className='foodType'>
											{(item.foodType === "Veg") ? (<img src={green} alt="Veg" />) : (<img src={red} alt="Non-Veg" />)}
										</div>
										<button id={item._id} onClick={(e) => handleClick(item._id)}>
											<Link>ADD</Link>
										</button>
									</div>
								</div>
							</div>
						}
					}
					)}
				</div>
			</>
			)}

		</div>
	)
}
export default Menu
