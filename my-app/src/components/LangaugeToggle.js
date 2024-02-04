import React, { useState } from 'react'

export default function LangaugeToggle() {

	const [ displayStatus, setDisplayStatus ] = useState("none");

	const languages = [
		{
			name: "English",
			abbr: "EN"
		},
		{
			name: "Francais",
			abbr: "FR"
		},
		{
			name: "Español",
			abbr: "ES"
		},
		{
			name: "Україна",
			abbr: "UK"
		},
		{
			name: "ਪੰਜਾਬੀ",
			abbr: "PA"
		},
	];

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
								className="bg-gray-900 hover:bg-[#c8102f] py-[6px] cursor-pointer">
			        			{lang.name}
							</li>
						))
					}
				</ul>
			</div>
		</div>
	)
}