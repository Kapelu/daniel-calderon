export interface Project {
  id: string
  title: string
  description: string
  image: string
  technologies: readonly string[]
  demo: string
}

export const projects = [
  {
    id: 'trabajo-blog-personal',
    title: 'Blog Personal',
    description:
      'Pequeñas guías muy útiles en mi camino como desarrollador full stack.',
    image: '/portfolio/blog-kapelu.png',
    technologies: ['NextJS', 'TypeScript', 'Tailwind'],
    demo: 'https://kapelu.vercel.app/',
  },

  {
    id: 'trabajo-api-collection',
    title: 'Api Collection',
    description:
      'Pequeña colección de Api. renderizado de mdx, api Simpson, ToDo List y como subir fotos a cloudinary.',
    image: '/portfolio/Api-collection.png',
    technologies: ['NextJS', 'TypeScript', 'Tailwind', 'MDX'],
    demo: 'https://api-kapelu.vercel.app/',
  },
  {
    id: 'trabajo-api-simpson',
    title: 'Api Simpson',
    description: 'Pequeña Api de los personajes de los simpson.',
    image: '/portfolio/APISimpson.png',
    technologies: ['NextJS', 'TypeScript', 'Tailwind'],
    demo: 'https://api-kapelu.vercel.app/simpson',
  },
  {
    id: 'trabajo-todo-list',
    title: 'To-Do List',
    description: 'Es un pequeño gestor de tareas que usa localStorage.',
    image: '/portfolio/APIToDoList.png',
    technologies: ['NextJS', 'TypeScript', 'Tailwind'],
    demo: 'https://api-kapelu.vercel.app/todolist',
  },
  {
    id: 'trabajo-upload',
    title: 'Upload File to Cloudinary',
    description:
      'Interfaz de una aplicacion personal que sube archivos a Cloudinary.',
    image: '/portfolio/APIUpLoad.png',
    technologies: ['NextJS', 'TypeScript', 'Tailwind'],
    demo: 'https://api-kapelu.vercel.app/upload',
  },
] satisfies Project[]
