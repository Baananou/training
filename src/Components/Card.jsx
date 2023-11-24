import React from "react";

const Card = () => {
	return (
		<div className="flex items-center justify-center">
			<div className="bg-gray-400 h-[220px] w-96 rounded-lg my-20 p-12 flex-col gap-12 ite ">
				<div className="flex justify-between items-start">
					<div>
						<h1>Mohamed Yessine Baananou</h1>
						<h2>Full Stack Developer</h2>
					</div>
					<img src="./logo192.png" alt="logo" className="h-12 w-12" />
				</div>

				<div>
					<h3>Microsoft Plytec Sousse</h3>
					<h4>2020-2021</h4>
				</div>
			</div>
		</div>
	);
};

export default Card;
