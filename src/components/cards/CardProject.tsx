import Image from 'next/image'
import Link from 'next/link'

import type { Project } from '@/data/projects'

type Props = {
  project: Project
}

export default function CardProject({ project }: Props) {
  return (
    <Link
      href={project.demo}
      target='_blank'
      rel='noopener noreferrer'
      className='group relative block aspect-square overflow-hidden rounded-xl border border-border bg-background shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg'>
      <Image
        src={project.image}
        alt={project.title}
        fill
        className='object-cover transition duration-700 group-hover:scale-110'
        sizes='(max-width:768px) 100vw,
               (max-width:1024px) 50vw,
               33vw'
      />

      <div
        className='absolute inset-0 flex items-center justify-center
        bg-black/90 p-4 opacity-0 transition-all duration-500
        group-hover:opacity-100'>
        <div
          className='flex h-full w-full flex-col justify-center
          rounded-lg border border-white p-5 text-center text-white'>
          <h3 className='text-xl font-bold'>{project.title}</h3>

          <p className='mt-3 line-clamp-3 text-sm text-gray-200'>
            {project.description}
          </p>

          <div className='mt-4'>
            <p className='mb-2 text-xs font-semibold'>Tecnologías:</p>

            <div className='flex flex-wrap justify-center gap-1'>
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className='rounded bg-white/10 px-2 py-1 text-xs'>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className='mt-4'>
            <span
              className='rounded-md border border-white/30 px-3 py-1
              text-xs transition group-hover:bg-white/10'>
              Ver proyecto →
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}
