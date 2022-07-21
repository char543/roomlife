import React from 'react'

function Identities() {
  return (
    <>
      <div className="flex justify-start items-center h-[100%] pt-24 flex-col overflow-scroll sm:justify-center">
        <p className="z-20 text-5xl text-white font-bold m-0 p-0 mb-8">Identities</p>
        <div id='idCol' className='flex flex-col justify-center box-content items-center max-w-[200px] mb-12 sm:flex-row'>
          <img className='rounded-box object-fit w-full m-4 h-[200px]' src="nightsjourney.jpg" alt="nightsjourney" />
          <img className='rounded-box object-fit w-full m-4 h-[200px]' src="room.jpg" alt="room" />
          <img className='rounded-box object-cover w-full m-4 h-[200px]' src="circuit.jpg" alt="room" />

          <div className='cardsContainer flex'>
            <div className='card flex'>
              <img src="circuit.png" alt="circuit-png" />
              <a href="/">circuit.global</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Identities
