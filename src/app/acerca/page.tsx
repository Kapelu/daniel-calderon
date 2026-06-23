import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import Skill from '@/components/section/Skill'
import { Blockfooter } from '@/components/ui/Blockfooter'
import { skills } from '@/lib/skill'

export default function Acerca() {
  const pdfURL = '/DanielCalderon-CV.pdf'

  return (
    <section className='font-gentium mt-20 grid gap-16 lg:grid-cols-3'>
      <article>
        <h1 className='text-4xl font-bold text-title'>Daniel Calderón</h1>

        <h2 className='mb-4 text-2xl text-text'>Desarrollador Full Stack</h2>

        <div className='space-y-6 text-lg leading-relaxed text-text'>
          <p>
            Soy un desarrollador <i>web</i> autodidacta. Durante los últimos
            tres años he dedicado gran parte de mi tiempo a adquirir habilidades
            y conocimientos en el campo del desarrollo <i>web</i>.
          </p>

          <p>
            Soy una persona dedicada y comprometida con mi trabajo y estoy
            dispuesto a aprender y adquirir nuevos conocimientos para mejorar
            mis habilidades como programador. Estoy más orientado al{' '}
            <i>Frontend</i>, pero también hago <i>Backend</i>.
          </p>

          <p>
            Me gusta enfrentar nuevos desafíos y encontrar soluciones creativas
            a los problemas que se presentan.
          </p>

          <p>
            Estoy emocionado de tener la oportunidad de unirme a un equipo y
            contribuir al crecimiento de una empresa. Creo que esta es una
            oportunidad ideal para seguir creciendo y aprendiendo.
          </p>
        </div>
      </article>

      <article>
        <Image
          width={320}
          height={320}
          src='/kapelu.png'
          alt='Daniel Calderón'
          priority
          className='mt-10 rounded-full border-2 border-border object-cover shadow-xl'
        />

        <Blockfooter>
          <p>"No soy un gran programador.</p>

          <p>Solo soy un buen programador con excelentes hábitos"</p>
        </Blockfooter>

        <div className='mt-10 flex flex-wrap justify-center gap-4'>
          <Button
            href={pdfURL}
            download='cv.pdf'
            target='_blank'
            rel='noopener noreferrer'
            variant='secondary'
            size='lg'>
            Descargar CV
          </Button>
        </div>
      </article>

      <article>
        <div className='space-y-10'>
          <h2 className='mb-8 text-center text-3xl font-bold text-title'>
            Mis habilidades
          </h2>

          <div className='space-y-8'>
            {skills.map((skill) => (
              <Skill key={skill.label} {...skill} />
            ))}
          </div>
        </div>
      </article>
    </section>
  )
}
