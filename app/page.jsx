import Portafolio from './pages/Portafolio'
import Inicio from './pages/inicio'

export default function Home() {
	return (
		<>
			<section id='inicio full-lg-screen'>
                <Inicio />
			</section>
			<section id='portfolio'>
                {/* <Portafolio /> */}
            </section>
            <section id='testimonios'></section>
            <section id='contacto'></section>
		</>
	)
}
