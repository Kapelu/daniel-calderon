import Navbar from '../components/Nav'
import './contact.css'

export default function Contact() {
	return (
		<>
			<Navbar />
			<div className='container-contact'>
				<div className='imagen'>
					<img src='../img/profile.jpg' alt='' />
				</div>
				<div className='nombre'>
					<p>Contact</p>
					<h1>Daniel Calderon</h1>
				</div>
				<div className='datos'></div>
			</div>
		</>
	)
}
