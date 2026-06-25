import CardProject from '@/components/cards/CardProject'
import { projects } from '@/data/projects'
import { Title } from '@/components/ui/Title'

export default function Portafolio() {
  return (
    <>
      <header className='mb-16 text-center'>
        <Title title='Mis Proyectos' />

        <p>
          Algunos de los proyectos que he desarrollado, experimentos,
          herramientas y aplicaciones que forman parte de mi camino como
          desarrollador Full Stack.
        </p>
      </header>

      <div
        className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'
        aria-label='Listado de proyectos'>
        {projects.map((project) => (
          <CardProject key={project.id} project={project} />
        ))}
      </div>
    </>
  )
}
