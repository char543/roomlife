import React from "react"; /*  */
import { Button } from "react-daisyui";

function Identities() {
	return (
		<>
			<div className="flex justify-start items-center h-[100%] pt-24 flex-col overflow-scroll sm:justify-center">
				<p className="z-20 text-5xl text-white font-bold m-0 p-0 mb-12">
					Identities
				</p>

				<div className="wrapper flex flex-col items-center md2:flex-row">
					<div className="flex flex-col items-center gap-4 m-8">
						<div className="flex flex-col basis-[70%] min-h-[150px] justify-center items-center">
							<a href="https://nightsjourney.com">
								<img
									className="max-w-[200px] basis-[70%] min-w-[200px] min-h-[150px] max-h-[100px] rounded fill-white hover:fill-cyan-700"
									src="nightsjourney.svg"
									alt="nightsjourney"
								/>
							</a>
						</div>
						<h1>
							<a
								className="basis-[30%]"
								href="https://nightsjourney.com"
							>
								Nights Journey
							</a>
						</h1>
					</div>

					<div className="flex flex-col items-center gap-4 m-8">
						<div className="flex flex-col basis-[70%] min-h-[150px] justify-center items-center rounded">
							<a href="https://circuit.global">
								<img
									className="max-w-[200px] min-w-[50px] basis-[70%] max-h-[80px] px-6"
									src="circuit.png"
									alt="Circuit"
								/>
							</a>
						</div>
						<h1>
							<a
								className="basis-[30%]"
								href="https://circuit.global"
							>
								Circuit
							</a>
						</h1>
					</div>

					<div className="flex flex-col items-center gap-4 m-8">
						<div className="flex flex-col basis-[70%] min-h-[150px] justify-center items-center">
							<a href="https://room.pm">
								<img
									className="max-w-[200px] basis-[70%] min-w-[200px] min-h-[150px] max-h-[100px] rounded bg-white p-4 px-8"
									src="room.jpg"
									alt="room"
								/>
							</a>
						</div>
						<h1>
							<a className="basis-[30%]" href="https://room.pm">
								Room
							</a>
						</h1>
					</div>
				</div>
			</div>
		</>
	);
}
export default Identities;
