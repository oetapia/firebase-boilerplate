import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home'
import InnerPage from '../Pages/InnerPage'


function Pages() {
  return (
	<>
		<Routes>
			<Route index="/"  element={<Home/>} />
			<Route path="/page"  element={<InnerPage/>} />
		</Routes>	
	</>
  )
  
}

export default Pages