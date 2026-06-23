import { Button } from "@/components/ui/Button"

export default function Inicio() {

  return (
    <section className='flex flex-col items-center text-center'>
      <h2 className='font-gentium mt-40 text-[10vw] font-bold text-cyan lg:text-[4vw]'>
        Bienvenidos a mi sitio
      </h2>

      

      <div className='mt-10 flex flex-wrap justify-center gap-4'>
        

        <Button href='#contacto' variant='secondary' size='lg'>
          Contactarme
        </Button>
      </div>
    </section>
  )
}
