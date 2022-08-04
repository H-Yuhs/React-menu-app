import React from 'react'

function Home({ img, info, price, meal }) {

   return (
      <>
         <div className='single-menu'>
            <div className='meal-img'>
               <img src={img} alt={meal} />
            </div>
            <div className='meal-details'>
               <div className='meal-title'>
                  <h4>{meal}</h4>
                  <h4>{price}</h4>
               </div>
               <div className='meal-description'>
                  <p>{info}</p>
               </div>
            </div>

         </div>
      </>
   )
}

export default Home

