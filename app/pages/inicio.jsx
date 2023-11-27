import Image from 'next/image'
import Link from 'next/link'
import '@/app/style/inicio.css'

export default function Inicio() {
	return (
		<>
			<article
				className='inicio-hero-image' /*style={{padding: ' 2rem 1rem'}}*/
			>
				<section className='inicio-hero-image-opacity'>
					<h1 className='inicio-title'>Daniel Calderón</h1>
					<h5 className='inicio-subtitle'>
						Desarrollador Full Stack
					</h5>
					<Image
						className='foto-perfil'
						width='350'
						height='350'
						src='/kapelu.webp'
						alt='Daniel Calderon'
					/>
				</section>
				<section className='inicio-hero-image-opacity text-left text-lg-center'>
					<p>
						Soy un desarrollador <i>web</i> autodidacta, durante los
						ultimos 3 años he dedicado gran parte de mi tiempo a
						adquirir habilidades y conocimientos en el campo del
						desarrollo <i>web</i>.
					</p>
					<p>
						Soy una persona dedicada y comprometida con mi trabajo,
						y estoy dispuesto a aprender y adquirir nuevos
						conocimientos para mejorar mis habilidades como
						programador. Estoy más orientado al <i>Backend</i>, pero
						también hago <i>Frontend</i>. Me gusta enfrentar nuevos
						desafíos y encontrar soluciones creativas a los
						problemas que se presentan.
					</p>
					<p>
						Estoy emocionado de tener la oportunidad de unirme a un
						equipo y contribuir al crecimiento de una empresa. Creo
						que esta va a ser una oportunidad ideal para seguir
						creciendo y aprendiendo, y estoy dispuesto a trabajar
						arduamente para alcanzar los objetivos de la empresa.
					</p>
				</section>
				<section className='inicio-hero-image-opacity'>
					<h2 className='about__title'>Sobre mí</h2>
					<div className='skill'>
						<div className='skill__bar'></div>
					</div>
					<div className='skill'>
						<div className='skill__bar'></div>
					</div>
					<div className='skill'>
						<div className='skill__bar'></div>
					</div>
					<div className='skill'>
						<div className='skill__bar'></div>
					</div>
					<div className='skill'>
						<div className='skill__bar'></div>
					</div>
					{/* <Link className='button' href='/about'>
						Más información
					</Link> */}
				</section>
			</article>
		</>
	)
}
