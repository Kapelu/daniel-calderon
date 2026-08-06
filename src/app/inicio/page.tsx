import TextSphere from '@/components/ui/global'
import { Button } from '@/components/ui/Button'

export default function Inicio() {
  return (
    <section className='relative flex min-h-[70vh] items-center overflow-hidden'>
      {/* Esfera */}
      <div
        className='
    absolute
    left-1/2
    top-1/2
    aspect-square
    w-[clamp(20rem,70vw,52rem)]
    -translate-x-1/2
    -translate-y-1/2
    opacity-50
    sm:left-[45%]
    lg:left-auto
    lg:right-[-5%]
    lg:w-[min(65vw,52rem)]
    lg:translate-x-0
  '>
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
