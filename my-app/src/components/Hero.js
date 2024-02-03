import React from 'react';

export default function Hero() {
	return (
		<div className="bg-[url('../public/images/hero-image.jpg')] bg-cover flex items-center justify-center" 
			 style={{minHeight: "100vh", position: "relative"}} 
		>
			<div className="w-full h-screen bg-black bg-opacity-60 absolute"></div>
			<h1 className="text-center text-8xl text-white font-bold z-10 opacity-80">Welcome to Calgary</h1>
		</div>
	)
}