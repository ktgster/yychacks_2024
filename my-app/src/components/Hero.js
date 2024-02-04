import React from 'react';
import Footer from "../components/Footer";
import { useTranslation } from 'react-i18next';

export default function Hero() {
	const { t } = useTranslation();

	return (
		<div className="bg-[url('../public/images/hero-image.jpg')] bg-cover"
			 style={{minHeight: "100vh", position: "relative"}}
		>
			<div className="flex flex-col items-center justify-center">
				<div className="w-full h-screen bg-gradient-to-b from-black via-transparent to-transparent absolute"></div>
				<h1 className="relative mt-60 pb-8 text-7xl font-bold tracking-normal text-center text-white max-md:mt-10 max-md:max-w-full max-md:text-4xl">
					{t('landing.title')}
				</h1>
				<div className="relative text-xl font-medium tracking-wide text-center text-white max-md:max-w-full">
					{t('landing.subtitle_find')}
			      <br />
					{t('landing.subtitle_connect')}
			    </div>
			    <a href={"https://www.figma.com/proto/nwmrnc8SjpiedqwhYADYWi/Design?page-id=33%3A88&type=design&node-id=179-2289&viewport=-262%2C2115%2C0.16&t=tp8R4TUKL4vDwh6v-1&scaling=scale-down&starting-point-node-id=179%3A2289"} target="_blank">
			    	<button className="relative justify-center hover:shadow-neutral-900 shadow-2xl hover:scale-105 px-10 py-3.5 mt-8 mb-32 text-3xl font-bold tracking-wide text-center text-white whitespace-nowrap bg-[#c8102f] rounded-[100px] max-md:px-5 max-md:mb-10" style={{ transition: "0.35s ease-in-out" }} >
							{t('landing.button')}
						</button>
			    </a>
			</div>
			<Footer />
		</div>
	)
}
