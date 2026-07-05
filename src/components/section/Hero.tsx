import Image from 'next/image'
import clsx from 'clsx'

type HeroProps = {
  imageLight: `/${string}`
  imageDark: `/${string}`
  alt?: string
  className?: string
}

export default function Hero({
  imageLight,
  imageDark,
  alt = '',
  className,
}: HeroProps) {
  return (
    <div className={clsx('absolute inset-0 -z-10 overflow-hidden', className)}>
      {/* Light mode */}
      <Image
        src={imageLight}
        alt={alt}
        fill
        priority
        className='object-cover opacity-15 dark:hidden'
      />

      {/* Dark mode */}
      <Image
        src={imageDark}
        alt={alt}
        fill
        priority
        className='hidden object-cover opacity-50 dark:block'
      />

      <div className='absolute inset-0 bg-black/10' />
    </div>
  )
}
