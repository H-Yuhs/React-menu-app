import React, { useEffect, useState } from 'react'
import { Tours } from './data'


function Home() {
   const [deets, setDeets] = useState(Tours)
   const [isEmpty, setIsEmpty] = useState(false)
   const remove = (key) => {
      setDeets(deets.filter(deet => deet.key !== key))
   }
   useEffect(() => { deets.length <= 0 && setIsEmpty(true) }, [deets])
   return (
      <div className='main__container'>
         <h1>Our Tours</h1>
         <div className='underline'></div>
         <div className='card__wrapper'>
            {isEmpty ? (
               <>
                  <h2>No Tours Left</h2>
                  <button type='button' className='btnRld' onClick={() => {
                     setDeets(Tours)
                     setIsEmpty(false)

                  }}>
                     Refresh
                  </button>
               </>

            ) : (<>
               {deets.map(deet => {
                  const { img, descr, title, price, key } = deet
                  return (
                     <div key={key} className='tour_card' >
                        <div className='tour_img'> <img src={img} alt={title} /></div>

                        <div className='tour-details'>
                           <div className="tour_info">
                              <div className='tour_title'> <h2>{title}</h2></div>
                              <div className='tour_price'> <h4>{price}</h4></div>
                           </div>

                           <div className='tour_descr'> <p>{descr}</p></div>
                           <button type='button' className='btn' onClick={() => remove(key)}>Not interested</button>
                        </div>

                     </div>

                  )
               })}
            </>)}


         </div>
      </div >
   )
}

export default Home