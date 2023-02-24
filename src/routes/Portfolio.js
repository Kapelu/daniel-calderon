import Nav from '../components/Nav'
import './portfolio.css'

export default function Portfolio() {
	return (
		<>
			<Nav />
			<div className='container-portfolio'>
				<div className='nombre'>
					<h1>Daniel Calderon</h1>
				</div>
				<div className='datos'>
					<br />
					<div className='presentacion'>
						<p>Gracias!!! por haber llegado hasta esta sección.</p>
						<p>
							Aqui estan varios de mis trabajos, donde eh aplicado
							mis conocimientos como developer full stack.Junto a
							la descripción agregare las tecnologias usadas en
							cada proyecto.
						</p>
					</div>
					<div className='container-slider'>
					</div>
				</div>
			</div>
		</>
	)
}
