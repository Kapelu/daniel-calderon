import Image from 'next/image'
import Link from 'next/link'

import type { Project } from '@/data/projects'

type Props = {
  project: Project
}

export default function CardProject({ project }: Props) {
  return (
    <Link
      href={project.github}
      target='_blank'
      rel='noopener noreferrer'
      className='group block h-80 overflow-hidden rounded-xl border border-border/50 bg-muted shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg'>
      <article className='flex h-full flex-col rounded-xl'>
        {/* IMAGE */}
        <div className='relative h-40 w-full overflow-hidden border-b border-border/40'>
          <Image
            src={project.image}
            alt={`${project.title} - thumbnail`}
            fill
            className='object-cover transition duration-900 group-hover:scale-125'
            sizes='(max-width: 768px) 100vw,
                  (max-width: 1024px) 50vw,
                  33vw'
          />
        </div>

        {/* CONTENT */}
        <h2 className='mt-3 px-3 text-xl font-semibold tracking-tight text-title line-clamp-1'>
          {project.title}
        </h2>

        <p className='mt-2 line-clamp-2 px-3 text-sm text-foreground'>
          {project.description}
        </p>

        {/* TAGS */}
        <div className='mt-auto flex flex-wrap gap-2 px-3 pb-4 pt-3'>
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className='rounded-full border border-border/50 bg-background px-2.5 py-1 text-xs text-link transition-colors group-hover:bg-muted'>
              {tech}
            </span>
          ))}
        </div>
      </article>
    </Link>
  )
}
