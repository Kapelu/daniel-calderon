import { Container } from '@/components/layout/Container'
import Hero from '@/components/section/Hero'
import Inicio from './inicio/page'
import Acerca from './acerca/page'
import Servicios from './servicios/page'
import Portafolio from './portafolio/page' 
import Contact from './contacto/page'

export default function Home() {
  return (
    <>
      <section
        id='inicio'
        className='relative scroll-mt-(--section-offset) min-h-screen px-4 py-24'>
        <Hero
          imageSrc='/background.svg'
          alt='Hero backgound space'
          opacity={0.5}
          overlayOpacity={0.1}
        />
        <Container>
          <Inicio />
        </Container>
      </section>

      <section
        id='acerca'
        className='debug-acerca scroll-mt-(--section-offset) min-h-screen px-4 py-24'>
        <Container>
          <Acerca />
        </Container>
      </section>

      <section
        id='servicios'
        className='relative scroll-mt-(--section-offset) min-h-screen px-4 py-24'>
        <Hero
          imageSrc='/background.svg'
          alt='Hero backgound space'
          opacity={0.2}
          overlayOpacity={0.4}
        />
        <Container>
          <Servicios />
        </Container>
      </section>

      <section
        id='portafolio'
        className='debug-portafolio scroll-mt-(--section-offset) min-h-screen px-4 py-24'>
        <Container>
          <Portafolio />
        </Container>
      </section>

      <section
        id='contacto'
        className='relative scroll-mt-(--section-offset) min-h-screen px-4 py-24'>
        <Hero imageSrc='/background.svg'
          alt='Hero backgound space'
          opacity={0.2}
          overlayOpacity={0.4} />
        <Container>
          <Contact />
        </Container>
      </section>
    </>
  )
}
