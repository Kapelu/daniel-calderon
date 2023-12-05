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
						</div>
					</aside>
				</Link>
			))}
		</div>
	)
}
