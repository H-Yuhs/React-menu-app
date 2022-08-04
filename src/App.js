import React from 'react'
import { useState } from 'react'
import { Meals } from './data'
import Home from './home'


function App() {
   const [foods, setFoods] = useState(Meals)
   const setType = (type) => {
      setFoods(() => Meals.filter(meal => meal.category.includes(type)))
   }
   return (
      <div className='menu-section'>
         <div className='menu-title'>
            <h2>our menu</h2>
            <div className='underline'></div>
         </div>
         <div className='menu-buttons'>
            <button className='btn' onClick={() => setFoods(Meals)}>All</button>
            <button className='btn' onClick={() => setType('breakfast')}>Breakfast</button>
            <button className='btn' onClick={() => setType('lunch')}>lunch</button>
            <button className='btn' onClick={() => setType('shakes')}>shakes</button>
         </div>
         <div className='meal-container'>
            {
               foods.map(food => <Home key={food.key} {...food} />)
            }
         </div>
      </div>

   )
}

export default App