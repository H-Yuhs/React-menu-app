import React, { useState } from 'react'
import Home from './home'
import { Accords } from './data'

function App() {
   const [questions, setQuestions] = useState(Accords)
   return (
      <div className='wrapper'>


         <div className='container'>
            <div className='main__title'><h3>Questions And Answers About Login</h3></div>
            <div className='info'>
               {
                  questions.map(question => <Home {...question} />)
               }
            </div>
         </div>
      </div>
   )

}

export default App