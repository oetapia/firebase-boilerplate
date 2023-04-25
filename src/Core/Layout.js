import React from 'react'
import Header from './Header'

function Layout({children}) {
  return (
	<>
		<Header></Header>
		{children}
	</>
  )
}

export default Layout