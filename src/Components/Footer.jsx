import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
	return (
		<div className="h-52 flex items-center justify-around shadow-xl">
			<h1 className="text-3xl text-center text-gray-600">
				Microsoft Plytec Sousse
			</h1>
			<div className="flex gap-2">
				<a href="https://picular.co/">
					<FaFacebook size={24} color="red" />
				</a>
				<a href="https://picular.co/">
					<FaInstagram size={24} color="red" />
				</a>
			</div>
		</div>
	);
};

export default Footer;
