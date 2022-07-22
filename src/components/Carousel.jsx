import React from 'react'

function Carousel() {
  return (
    <>
      <div className="flex justify-center items-end m-24 mx-0 p-0">
        <div className="carousel carousel-center p-0 space-x-6 rounded-box z-10 relative flex overflow-x-hidden">
          <div className="inline-flex mr-6 flex-row space-x-6">
            <div className="carousel-item max-w-[250px] h-48">
              <img
                alt=""
                src="/Ministry_of_Sound_Logo.png"
                className="rounded-box object-fit w-full"
              />
            </div>
            <div className="carousel-item max-w-[250px] h-48">
              <img
                alt=""
                src="/vw.jpg"
                className="rounded-box object-fit w-full h-48"
              />
            </div>
            <div className="carousel-item max-w-[250px] h-48">
              <img
                alt=""
                src="/fabric.jpeg"
                className="rounded-box object-fit w-full"
              />
            </div>
            <div className="carousel-item max-w-[250px] w-[200px] h-48">
              <img
                alt=""
                src="/starbucks.jpg"
                className="rounded-box object-fit w-full"
              />
            </div>
            <div className="carousel-item max-w-[250px] h-48">
              <img
                alt=""
                src="/egg.png"
                className="rounded-box object-fit w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

// export default Carousel;

export default Carousel
