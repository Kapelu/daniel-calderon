import { Button } from '@/components/ui/Button'

export default function Inicio() {
  return (
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
  )
}
