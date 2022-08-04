import React, { useState } from 'react'

function Home({ title, info, key }) {
   const [isOpen, setIsOpen] = useState(false)

   return (

      <div className='main__questions' key={key}>
         <div className='question__head'>
            <h4>{title}</h4>
            <button type='button' onClick={() => setIsOpen(!isOpen)}>{isOpen ? <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512" fill='currentColor'><rect y="11" width="24" height="2" rx="1" /></svg> : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="512" height="512" fill='currentColor'><g id="_01_align_center" data-name="01 align center"><polygon points="24 11 13 11 13 0 11 0 11 11 0 11 0 13 11 13 11 24 13 24 13 13 24 13 24 11" /></g></svg>}</button>
         </div>

         {isOpen && <div className='question__answer'>
            <p>{info}</p>
         </div>}

      </div>
   )
}

export default Home

