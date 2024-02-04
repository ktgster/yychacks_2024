import React from 'react';
import Footer from "../components/Footer";

export default function Hero() {
	return (
		<div className="bg-[url('../public/images/hero-image.jpg')] bg-cover" 
			 style={{minHeight: "100vh", position: "relative"}} 
		>
			<div className="flex flex-col items-center justify-center">
				<div className="w-full h-screen bg-gradient-to-b from-black via-transparent to-transparent absolute"></div>
				<h1 className="relative mt-60 pb-8 text-7xl font-bold tracking-normal text-center text-white max-md:mt-10 max-md:max-w-full max-md:text-4xl">
					Hosts Welcoming Hearts
				</h1>
				<div className="relative text-xl font-medium tracking-wide text-center text-white max-md:max-w-full">
			      Find Your Home Away from Home:
			      <br />
			      Connecting Immigrants with Welcoming Host Families.
			    </div>
			    <button className="relative justify-center hover:shadow-neutral-900 shadow-lg hover:scale-105 px-10 py-3.5 mt-8 mb-32 text-3xl font-bold tracking-wide text-center text-white whitespace-nowrap bg-[#c8102f] rounded-[100px] max-md:px-5 max-md:mb-10" style={{ transition: "0.35s ease-in-out" }} >Create Account</button>
				{/*"#c810df"*/}				
			</div>
			<Footer />
		</div>
	)
}
