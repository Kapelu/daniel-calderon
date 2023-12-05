import Portafolio from './pages/portafolio'
import Inicio from './pages/inicio'

export default function Home() {
	return (
		<>
			<section id='inicio'>
                <Inicio />
			</section>
			<section id='portafolio'  className="portfolio section">
                <Portafolio />
            </section>
            <section id='testimonios'></section>
            <section id='contacto'></section>
		</>
	)
}
