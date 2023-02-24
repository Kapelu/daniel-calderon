/* */
import Nav from '../components/Nav'
import Card from '../components/Card'
import fotoPerfil from '../img/keiko.png'
import proyectoUno from '../img/proyecto1.png'
import './style.css'
import './portfolio.css'

export default function Portfolio() {
	const data = [
		{
			imagen: {proyectoUno},
			titulo: 'Título 1',
			descripcion: 'Descripción 1',
			url: 'https://github.com/Kapelu/proyectos-personales/tree/main/Daniel%20Calderon%20-%20Profile ',
		},
		{
			imagen: 'https://placeimg.com/640/481/tech',
			titulo: 'Título 2',
			descripcion: 'Descripción 2',
			url: 'https://www.ejemplo.com/pagina2',
		},
		{
			imagen: 'https://placeimg.com/640/482/tech',
			titulo: 'Título 3',
			descripcion: 'Descripción 2',
			url: 'https://www.ejemplo.com/pagina2',
		},
	]

	return (
		<>
			<Nav />
			<div className='container-portfolio'>
				<div className='foto-perfil'>
					<img src={fotoPerfil} alt='Kapelü' className='foto' />
				</div>
				<br />
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
					<br />
					<br />
					<br />
					<div>
						<Card data={data} />
					</div>
				</div>
			</div>
		</>
	)
}
