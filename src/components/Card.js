import { Link } from "react-router-dom"
import { ReactComponent as GithubLogo } from '../img/icons8-github-64.svg';
import React from 'react'
import './Card.css'


function Card(props) {
	return (
		<div className='card-container'>
			{props.data.map((item, index) => (
				<div className='card-trabajos' key={index}>
					<img src={item.imagen} alt={item.titulo} />
					<div className='card-info'>
						<h2>{item.titulo}</h2>
						{/* <p>{item.descripcion}</p> */}
						{/* <a href=>Ver más</a> */}
						<Link to={item.url} target="_blank" rel="noopener noreferrer">
						<GithubLogo />
						</Link>
					</div>
				</div>
			))}
		</div>
	)
}

export default Card
