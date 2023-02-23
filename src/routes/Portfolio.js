import Nav from '../components/Nav'
import './portfolio.css'

export default function Portfolio() {
	return (
		<>
			<Nav />
			<div className='container-portfolio'>
				<div className='imagen'>
					<img src='../img/profile.jpg' alt='' />
				</div>
				<div className='nombre'>
					<p>Portfolio</p>
					<h1>Daniel Calderon</h1>
				</div>
				<div className='datos'>
				</div>
			</div>
		</>
	)
}
