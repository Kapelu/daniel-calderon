import {
  Code2,
  Globe,
  MonitorSmartphone,
  Search,
  Gauge,
  Share2,
} from 'lucide-react'

import { Container } from '@/components/layout/Container'
import ServiceCard from '@/components/cards/ServiceCard'

export default function Servicios() {
  return (
    <section id='servicios' className=' px-4 py-20'>
      <Container>
        <div className='font-gentium grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {/* Título */}
          <div className='md:col-span-2 lg:col-span-3'>
            <h2 className='mb-4 text-center text-3xl font-bold text-title'>
              ¿Qué te ofrezco?
            </h2>

            <p className='mx-auto max-w-3xl text-lg text-center leading-relaxed text-text'>
              Soluciones modernas para crear aplicaciones web rápidas,
              accesibles y optimizadas para ofrecer la mejor experiencia a tus
              usuarios.
            </p>
          </div>

          {/* Diseño Web */}
          <ServiceCard
            title='Diseño Web'
            description='Prototipo y maqueto diseños estáticos para convertirlos en sitios y aplicaciones web responsivas, óptimas y accesibles.'>
            <MonitorSmartphone className='h-14 w-14 text-primary' />
          </ServiceCard>

          {/* Programación Web */}
          <ServiceCard
            title='Programación Web'
            description='Desarrollo sitios y aplicaciones para la web. Construyo proyectos de principio a fin: Frontend, Backend y Bases de Datos.'>
            <Code2 className='h-14 w-14 text-primary' />
          </ServiceCard>

          {/* Hosting */}
          <ServiceCard
            title='Web Hosting'
            description='¿No cuentas con dominio y hospedaje web? Me encargo de toda la configuración técnica para poner tu proyecto en línea.'>
            <Globe className='h-14 w-14 text-primary' />
          </ServiceCard>

          {/* WPO */}
          <ServiceCard
            title='WPO'
            description='Web Performance Optimization. Mejoro los tiempos de carga y la capacidad de respuesta de tus aplicaciones web.'>
            <Gauge className='h-14 w-14 text-primary' />
          </ServiceCard>

          {/* SEO */}
          <ServiceCard
            title='SEO'
            description='Optimizo tus sitios y aplicaciones web para mejorar su posicionamiento en los buscadores de forma orgánica.'>
            <Search className='h-14 w-14 text-primary' />
          </ServiceCard>

          {/* SMO */}
          <ServiceCard
            title='SMO'
            description='Social Media Optimization y Marketing de Contenidos. Te ayudo a elegir los canales digitales adecuados para llegar a tu audiencia ideal.'>
            <Share2 className='h-14 w-14 text-primary' />
          </ServiceCard>
        </div>
      </Container>
    </section>
  )
}
