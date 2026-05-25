import { useState } from 'react'
import Pass_generator from './Pass_generator'
function App ()
{

  return (
    <>
      <div className="bg-[#FCDEBE] w-screen max-h-full justify-center  text-center items-center"> 
        <h1 className="text-2xl"> PassWord Generator</h1>
      </div>
      <Pass_generator />
    </>
  )

}

export default App
