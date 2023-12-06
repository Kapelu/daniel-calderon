import portafolio from '../json/portfolio.json'
import Link from 'next/link'
import Image from 'next/image'
import '@/app/globals.css'
import '@/app/style/portafolio.css'

export default function Portafolio() {
	return (
		<div className='container'>
			<h2 className='section-title'>Mis Trabajos</h2>

			{portafolio.map((item, index) => (
				<Link
					href={`#${item.id}`}
					className='portfolio-card'
					key={index}
				>
					<Image
						className='imagen'
						src={item.imagen}
						width={400}
						height={400}
						alt={item.titulo}
					></Image>
					<aside className='portfolio-card-info'>
						<div>
							<h3>{item.titulo}</h3>
							<p>{item.descripcion}</p>
							<small>
								<b>FECHA: </b>
							</small>
							<small>{item.fecha}</small>
							<br />
							<small>
								<b>TIPO: </b>
							</small>
							<small>{item.tipo}</small>
							{/* 
                            <br />
							<small>
								<b>ENLACE: </b>
							</small>
							<small>
								<Link href={item.enlace}>{item.enlace}</Link>
							</small>
							<br />
                            <small>
								<b>REPOSITORIO:</b>
							</small>
							<small>
                            <Link href={item.repositorio}>{item.repositorio}</Link>
							</small> 
                            */}
						</div>
					</aside>
				</Link>
			))}
		</div>
	)
}
