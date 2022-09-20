import React from "react"; /*  */
import { Button } from "react-daisyui";

function Identities() {
	return (
		<>
			<div className="flex justify-start items-center h-[100%] pt-24 flex-col overflow-scroll sm:justify-center">
				<p className="z-20 text-5xl text-white font-bold m-0 p-0 mb-12">
					Identities
				</p>

				<div className="wrapper flex flex-col items-center sm:flex-row">
					<div className="flex flex-col items-center gap-4">
						<div className="flex flex-col basis-[70%] min-h-[150px] justify-center items-center">
							<img
								className="max-w-[200px] basis-[70%] min-w-[200px] min-h-[150px] max-h-[100px] rounded"
								src="nightsjourney.jpg"
								alt="nightsjourney"
							/>
						</div>
						<h1 className="flex basis-[30%]">Nights Journey</h1>
					</div>

					<div className="flex flex-col items-center gap-4">
						<div className="flex flex-col basis-[70%] min-h-[150px] justify-center items-center bg-gray-500 rounded">
							<img
								className="max-w-[200px] min-w-[50px] basis-[70%] max-h-[80px] px-6"
								src="circuit.png"
								alt="Circuit"
							/>
						</div>
						<h1 className="flex basis-[30%]">Circuit</h1>
					</div>

					<div className="flex flex-col items-center gap-4">
						<div className="flex flex-col basis-[70%] min-h-[150px] justify-center items-center">
							<img
								className="max-w-[200px] basis-[70%] min-w-[200px] min-h-[150px] max-h-[100px] rounded bg-white p-4"
								src="room.jpg"
								alt="room"
							/>
						</div>
						<h1 className="basis-[30%]">Room</h1>
					</div>
				</div>
			</div>
		</>
	);
}
export default Identities;
