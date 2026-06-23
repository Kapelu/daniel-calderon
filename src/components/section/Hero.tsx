import Image from 'next/image'
import clsx from 'clsx'

type HeroProps = {
  imageSrc: `/${string}`
  alt?: string
  opacity?: number
  overlayOpacity?: number
  className?: string
}

export default function Hero({
  imageSrc,
  alt = '',
  opacity = 1,
  overlayOpacity = 0.2,
  className,
}: HeroProps) {
  return (
    <div className={clsx('absolute inset-0 -z-10 overflow-hidden', className)}>
      <Image
        src={imageSrc}
        alt={alt}
        fill
        priority
        className='object-cover'
        style={{
          opacity,
        }}
      />

      <div
        className='absolute inset-0 bg-black'
        style={{
          opacity: overlayOpacity,
        }}
      />
    </div>
  )
}
