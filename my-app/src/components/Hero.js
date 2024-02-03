import React from 'react';

export default function Hero() {
	return (
		<div className="bg-[url('../public/images/hero-image.jpg')] bg-cover flex flex-col items-center justify-center" 
			 style={{minHeight: "100vh", position: "relative"}} 
		>
			<div className="w-full h-screen bg-gradient-to-b from-black via-transparent to-transparent absolute"></div>
			<h1 className="relative mt-16 pb-8 text-7xl font-bold tracking-normal text-center text-white max-md:mt-10 max-md:max-w-full max-md:text-4xl">
				Hosts Welcoming Hearts
			</h1>
			<div className="relative text-xl font-medium tracking-wide text-center text-white max-md:max-w-full">
		      Find Your Home Away from Home:
		      <br />
		      Connecting Immigrants with Welcoming Host Families.
		    </div>
		    <button className="relative justify-center px-10 py-3.5 mt-8 mb-32 text-3xl font-bold tracking-wide text-center text-white whitespace-nowrap bg-[#c8102f] rounded-[100px] max-md:px-5 max-md:mb-10">Create Account</button>
			{/*"#c810df"*/}
		</div>
	)
}