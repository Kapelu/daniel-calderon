import TextSphere from '@/components/ui/global'
import { Button } from '@/components/ui/Button'

export default function Inicio() {
  return (
    <section className='relative flex min-h-[70vh] items-center overflow-hidden'>
      {/* Esfera */}
      <div className='absolute right-[10%] left-[-5%] top-1/2 h-210 w-210 -translate-y-1/2 opacity-50'>
        <TextSphere
          word='@KWS • Full Stack Developer • React • Next.js • TypeScript • '
          color='#00FF41'
          speed={2}
          twist={40}
          rotationSide='clockwise'
          letterSpacing={500}
          font={{
            fontFamily: 'Ubuntu',
            fontWeight: 700,
            fontSize: 8,
          }}
        />
      </div>

      {/* Contenido */}
      <div className='flex min-h-[70vh] flex-col items-center justify-center text-center'>
        <header>
          <h1 className='text-cyan text-6xl font-bold sm:text-7xl md:text-8xl lg:text-9xl'>
            Bienvenid@s
          </h1>

          <p className='mt-4 text-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl'>
            a mi sitio
          </p>
        </header>

        <div className='mt-12'>
          <Button href='#contacto' variant='secondary' size='lg'>
            Contactarme
          </Button>
        </div>
      </div>
    </section>
  )
}
