import {
  Code2,
  Globe,
  MonitorSmartphone,
  Search,
  Gauge,
  Share2,
} from 'lucide-react'

import ServiceCard from '@/components/cards/ServiceCard'
import { Title } from '@/components/ui/Title'

export default function Servicios() {
  return (
    <>
      <header className='mb-16'>
        <Title title='Mis Servicios' />

        <p className='mx-auto mt-8 max-w-3xl text-center text-lg leading-relaxed text-text'>
          Soluciones modernas para crear aplicaciones web rápidas, accesibles y
          optimizadas para ofrecer la mejor experiencia a tus usuarios.
        </p>
      </header>

      <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
        <ServiceCard
          title='Diseño Web'
          description='Prototipo y maqueto diseños estáticos para convertirlos en sitios y aplicaciones web responsivas, óptimas y accesibles.'>
          <MonitorSmartphone className='h-14 w-14 text-primary' />
        </ServiceCard>

        <ServiceCard
          title='Programación Web'
          description='Desarrollo sitios y aplicaciones para la web. Construyo proyectos de principio a fin: Frontend, Backend y Bases de Datos.'>
          <Code2 className='h-14 w-14 text-primary' />
        </ServiceCard>

        <ServiceCard
          title='Web Hosting'
          description='¿No cuentas con dominio y hospedaje web? Me encargo de toda la configuración técnica para poner tu proyecto en línea.'>
          <Globe className='h-14 w-14 text-primary' />
        </ServiceCard>

        <ServiceCard
          title='WPO'
          description='Web Performance Optimization. Mejoro los tiempos de carga y la capacidad de respuesta de tus aplicaciones web.'>
          <Gauge className='h-14 w-14 text-primary' />
        </ServiceCard>

        <ServiceCard
          title='SEO'
          description='Optimizo tus sitios y aplicaciones web para mejorar su posicionamiento en los buscadores de forma orgánica.'>
          <Search className='h-14 w-14 text-primary' />
        </ServiceCard>

        <ServiceCard
          title='SMO'
          description='Social Media Optimization y Marketing de Contenidos. Te ayudo a elegir los canales digitales adecuados para llegar a tu audiencia ideal.'>
          <Share2 className='h-14 w-14 text-primary' />
        </ServiceCard>
      </div>
    </>
  )
}
