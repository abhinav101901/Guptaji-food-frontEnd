import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import '../styles/Restorent.css'
import axios from "axios"

function Restorent() {
	const [data, setData] = useState([])
	const [query, setQuery] = useState([]);
	const [searchData, setSearchData] = useState(false)
	const [name, setName] = useState("")

	const navigate = useNavigate();

	useEffect(() => {
		fetch("http://localhost:3000/getRestorent")
			.then((res) => res.json())
			.then((json) => {
				setData(json)
				console.log('json', json)
			})
			.catch((err) => {
				alert(err.response.data.message + err.response.status + " Error")
			})
	}, [])
	function handleClick(data) {
		// console.log("token",localStorage.getItem("x-api-key"))
		if (localStorage.getItem("logIn")) {
			return navigate(`/getFood/${data._id}`)
		}
		alert("LogIn First")
		navigate(`/LogIn`)
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(name)
		axios.get(`http://localhost:3000/getRestorentByname/${name}`)
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
	console.log(query)
	return (
		<div className="Restorent">
			<div className='Res-header'>
				<div className='Res-1'>
					<></>
					<h1> Restaurant </h1>
				</div>
				<div className='Res-2'>
				<></>
				<form className='Res-header-1' onSubmit={handleSubmit}>
					<input type="text" value={name} onChange={handleChange} />
					<button className='Res-btn' type="submit"><FaSearch /></button>
				</form>
				</div>
			</div>

			{
		searchData ? (
			<div className="Contaner">
				{query.map((item) => {
					if (true) {
						return <div className='contaner-1' key={item._id} >
							<div className='box'><img src={item.imageResto} alt='Resto' /></div>
							<div className='detail'>
								<div className='detail-1'>
									<p>{item.name}</p>
									<p>{item.phone}</p>
								</div>
								<div className='detail-2'>
									<button id={item._id} onClick={(e) => handleClick(item)}>
										<Link>Menu</Link>
									</button>
								</div>
							</div>
						</div>
					}
				}
				)}
			</div>
		) : (
			<div className="Contaner">
				{data.map((item) => {
					if (true) {
						return <div className='contaner-1' key={item._id} >
							<div className='box'><img src={item.imageResto} alt='Resto' /></div>
							<div className='detail'>
								<div className='detail-1'>
									<p>{item.name}</p>
									<p>{item.phone}</p>
								</div>
								<div className='detail-2'>
									<button id={item._id} onClick={(e) => handleClick(item)}>
										<Link>Menu</Link>
									</button>
								</div>
							</div>
						</div>
					}
				}
				)}
			</div>
		)
	}



		</div >
	)
}

export default Restorent

