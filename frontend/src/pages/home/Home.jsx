import React from 'react'
import "./Home.scss"
import home1 from "../../assets/home1.png"
import services from "../../assets/services.png"
const Home = () => {
  return (
		<>
			<section className="home-container">
				<section className="home-top">
					<section className="home-top-left">
						<h1>Welcome to kvf Complaince Services</h1>
						<p>
							We specialize in providing top-tier audit monitoring services to
							ensure that your organization remains compliant with industry
							regulations and standards. Our solutions are designed to help
							businesses like yours proactively manage compliance, reduce risk,
							and avoid costly penalties or violations.
						</p>
					</section>
					<section className="home-top-right">
						<img src={home1} alt="Home1" />
					</section>
				</section>
				<section className="home-mid">
					<h3>Our Services</h3>
					<section className="home-mid-child">
						<section className="home-mid-left">
							<img src={services} alt="services" />
						</section>
						<section className="home-mid-right">
							<p>We offer top-notch solutions tailored to your needs.</p>
							<p>
								Our team is dedicated to providing excellent support and
								guidance.
							</p>
							<p>We ensure the highest quality and satisfaction.</p>
						</section>
					</section>
				</section>
			</section>
		</>
	);
}

export default Home;