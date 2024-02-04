import React, { useState, useEffect } from 'react'
import { useTranslation } from "react-i18next";

export default function LangaugeToggle() {

	const [ displayStatus, setDisplayStatus ] = useState("none");

	const { i18n } = useTranslation();

	const languages = [
		{
			name: "English",
			abbr: "en"
		},
		{
			name: "Francais",
			abbr: "fr"
		},
		{
			name: "Español",
			abbr: "es"
		},
		{
			name: "Україна",
			abbr: "uk"
		},
		{
			name: "ਪੰਜਾਬੀ",
			abbr: "pa"
		},
	];

	useEffect(() => {
		window.addEventListener("click", e => setDisplayStatus("none")); 
    	return () => window.removeEventListener("click", e => setDisplayStatus("none"));
	}, [])

	return (
		<div className="relative">
			<div>
				<img
			        loading="lazy"
			        src="https://cdn.builder.io/api/v1/image/assets/TEMP/cfab6d21a3cd0885eb313acdbbe7b6198b4ab077516163d5a8e41ca8232b12d1?"
			        className="hidden md:flex aspect-square w-[50px] cursor-pointer hover:scale-110"
			        style={{ transition: "0.35s ease-in-out" }}
			        onMouseOver={(e) => {setTimeout(() => {
			        	setDisplayStatus("block");
			        	// clearTimeout(hidePopup);
			        }, 250)}}
			    />
			</div>

			<div 
				className="absolute rounded-lg" 
				style={{paddingTop: "16px", marginTop: "-16px", marginLeft: "-24px", display: `${displayStatus}`}}
			>
				<ul 
					style={{ width: "90px", overflow: "hidden"}} 
					className="bg-gray-900 text-center rounded-lg"
				>
					{
						languages.map((lang, index) => (
							<li 
								key={index} 
								style={{ transition: "0.15s ease-in-out" }} 
								className="bg-gray-900 hover:bg-[#c8102f] py-[6px] cursor-pointer"
								onClick={() => {i18n.changeLanguage(lang.abbr)}}
							>
			        			{lang.name}
							</li>
						))
					}
				</ul>
			</div>
		</div>
	)
}