import Image from 'next/image'
import clsx from 'clsx'

type HeroProps = {
  imageSrc: `/${string}`
  alt?: string
  className?: string
}

export default function Hero({ imageSrc, alt = '', className }: HeroProps) {
  return (
    <div className={clsx('absolute inset-0 -z-10 overflow-hidden', className)}>
      <Image
        src={imageSrc}
        alt={alt}
        fill
        priority
        className='object-cover opacity-50 dark:opacity-20'
      />

      <div className='absolute inset-0 bg-black opacity-10 dark:opacity-40' />
    </div>
  )
}
