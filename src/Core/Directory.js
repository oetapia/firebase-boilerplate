import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home'


function Pages() {
  return (
	<>
		<Routes>
			<Route index="/"  element={<Home/>} />
		</Routes>	
	</>
  )
  
}

export default Pages