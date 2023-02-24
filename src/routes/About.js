import Nav from '../components/Nav'

import './style.css'
import './about.css'
import fotoPerfil from '../img/keiko.png'

export default function About() {
	return (
		<>
			<Nav />
			<div className='container-about'>
				<div className='card'>
					<div className='foto-perfil'>
						<img src={fotoPerfil} alt='Kapelü' className='foto' />
					</div>
					<br />
					<div className='profesion'>
						<h1>Full stack developer</h1>
					</div>
					<br />
					<div>
						<p className='presentacion'>
							"Hola, soy <strong className='name'>Daniel Calderon</strong> y me
							describo como un desarrollador full-stack junior,
							que busca oportunidades de crecer profesionalmente
							en el campo de la tecnología y la informática.
						</p>
						<br />
						<p className='presentacion'>
							Tengo experiencia en la creación de aplicaciones web
							utilizando tecnologías como JavaScript, Node.js,
							React, Express, MongoDB. He trabajado en proyectos
							personales y he aprendido mucho en los últimos
							meses.
						</p>
						<br />
						<p className='presentacion'>
							Me apasiona la programación y me encanta aprender
							nuevas tecnologías. Como desarrollador full stack
							junior, mi experiencia puede ser más limitada que
							otros, aunque mi capacidad para aprender y mi
							dedicación para crecer y mejorar compensan esa
							brecha.
						</p>
						<br />
						<p className='presentacion'>
							Busco ser parte de un equipo que crea en la cultura
							de la colaboración y el aprendizaje continuo, donde
							pueda contribuir y seguir aprendiendo. Me considero
							un buen comunicador y me enorgullezco de mi
							capacidad para trabajar en equipo y aprender de los
							demás. Disfruto trabajar con personas de diferentes
							antecedentes y con diferentes niveles de
							experiencia, y estoy comprometido con la creación de
							un ambiente de trabajo inclusivo y colaborativo."
						</p>
						<br />
						<p className='presentacion'>
							Si bien todavía tengo mucho que aprender en términos
							de tecnologías específicas y herramientas de
							programación, estoy dispuesto a trabajar duro y
							dedicar el tiempo y la energía necesarios para
							seguir aprendiendo y mejorar mi conjunto de
							habilidades.
						</p>
					</div>
				</div>
			</div>
		</>
	)
}