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
							un ambiente de trabajo inclusivo y colaborativo. Me
							encantaría ."
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

/* 

				Si deseas presentarte como un desarrollador full-stack junior, es importante que tu descripción incluya información relevante sobre tus habilidades técnicas y experiencia. Aquí hay algunos puntos clave que podrías considerar incluir:</p>
<p>
Presentación: Inicia presentándote y mencionando que eres un desarrollador full-stack junior. Por ejemplo, "Hola, soy [tu nombre] y me describo como un desarrollador full-stack junior".

Habilidades técnicas: Menciona las habilidades técnicas que has aprendido y desarrollado. Incluye tecnologías y herramientas que has utilizado en proyectos, como lenguajes de programación, frameworks, bases de datos, control de versiones, etc. Asegúrate de mencionar que eres capaz de trabajar tanto en la parte delantera como en la trasera del sitio web.

Experiencia: Si tienes experiencia previa en desarrollo, aunque sea en proyectos personales, menciona cuánto tiempo has estado programando y cuáles han sido tus logros hasta el momento. Si no tienes experiencia laboral previa, enfatiza tu pasión por la programación y los proyectos que has creado por tu cuenta.

Actitud: Describe cómo te gustaría contribuir en una empresa y cuál es tu actitud hacia el trabajo en equipo. Habla sobre tu disposición para aprender y recibir retroalimentación.

Aquí hay un ejemplo de cómo podrías presentarte:

"Hola, soy [tu nombre] y me describo como un desarrollador full-stack junior. Tengo experiencia en la creación de aplicaciones web utilizando tecnologías como JavaScript, Node.js, React, Express, MongoDB y MySQL. He trabajado en proyectos personales y he aprendido mucho en los últimos meses.

Me apasiona la programación y me encanta aprender nuevas tecnologías. Me gustaría unirme a una empresa donde pueda contribuir y seguir aprendiendo en equipo. Soy una persona amigable y me gusta trabajar con otras personas para lograr objetivos comunes. Me considero un buen comunicador y estoy dispuesto a recibir retroalimentación y mejorar constantemente. Me encantaría ser parte de un equipo que cree en la cultura de la colaboración y el aprendizaje continuo."
					</p>

				</div>
			</div>
		</>
	)
} */
