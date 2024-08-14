import Link from 'next/link'
import '@/app/style/Footer.css'

export default function Footer() {
	return (
		<footer className='footer'>
			<small>
				<Link
					className='link'
					href='https://github.com/Kapelu'
					target='_blank'
					rel='noopener noreferrer preload'
					as='https://github.com/Kapelu'
				>
					@kapelu
				</Link>
                &nbsp;- All Rights Reserved​ 
			</small>
		</footer>
	)
}
