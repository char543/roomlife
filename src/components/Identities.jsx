import React from "react";
import { Card, Button } from "react-daisyui";

function Identities() {
  return (
    <>
      <div className="flex justify-start items-center h-[100%] pt-24 flex-col overflow-scroll sm:justify-center">
        <p className="z-20 text-5xl text-white font-bold m-0 p-0 mb-12">
          Identities
        </p>
        <div className="cardContainer flex items-center flex-col flex-wrap mb-16 box-content sm:flex-row sm:justify-center sm:w-full">
          <Card className="w-[256px] m-4 min-w-[256px]">
            <Card.Image
              className="object-fill w-full h-[180px]"
              src="nightsjourney.jpg"
              alt="nightsjourney"
            />
            <Card.Body>
              <Card.Title tag="h2">Nights Journey</Card.Title>
              {/* <p>Check out the amazing Nights Journey now!</p>
              <Card.Actions className="justify-start py-2 mt-4 -mb-4">
                <Button color="primary">View Now</Button>
              </Card.Actions> */}
            </Card.Body>
          </Card>

          <Card className="w-[256px] m-4 min-w-[256px]">
            <Card.Image
              className="px-14 py-20 h-[180px] bg-white bg-opacity-5"
              src="circuit.png"
              alt="Circuit"
            />
            <Card.Body>
              <Card.Title tag="h2">Circuit</Card.Title>
              {/* <p>Check out the amazing circuit.global now!</p>
              <Card.Actions className="justify-start py-2 mt-4 -mb-4">
                <Button color="primary">View Now</Button>
              </Card.Actions> */}
            </Card.Body>
          </Card>

          <Card className="w-[256px] m-4 min-w-[256px]">
            <Card.Image
              className="object-fill w-full h-[180px]"
              src="room.jpg"
              alt="room"
            />
            <Card.Body>
              <Card.Title tag="h2">Room.pm</Card.Title>
              {/* <p>Check out the amazing room.pm now!</p>
              <Card.Actions className="justify-start py-2 mt-4 -mb-4">
                <Button color="primary">View Now</Button>
              </Card.Actions> */}
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}
export default Identities;
