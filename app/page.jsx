import Image from 'next/image'
import './page.css'

export default function Home() {
	return (
		<>
			<article className='hero-image'>
				<aside className='hero-image-opacity'>
					<div className='container'>
						<Image
							className='hero-image-foto-perfil'
							src='/kapelu.png'
							alt='Daniel Calderon'
							width={500}
							height={500}
							quality={100}
							priority={true}
						/>

						<h1> Daniel Calderon </h1>
						<h3> Full Stack developer </h3>
						<br />
						<p>El éxito no es un accidente.</p>
						<p>Es trabajo duro, perseverancia, aprendizaje,</p>
						<p>estudio, sacrificio, y sobre todo, amor por lo que</p>
						<p>estás haciendo o aprendiendo a hacer</p>
						<p> Pelé</p>

						<p>No soy un gran programador. Solo soy un buen programador con excelentes hábitos es atribuida a Kent Beck</p>
					</div>
				</aside>
			</article>
		</>
	)
}
