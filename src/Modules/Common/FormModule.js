import React from 'react'
import FirebaseSubmit from './FirebaseSubmit'

function FormModule() {


	const submit = {'name':'Heather'}
	const db_name = ''

  return (
	<>
		<p>
			Hello this is a module
		</p>
		<FirebaseSubmit 
		data={submit} 
		db_name={db_name? db_name : "testing"} 
		//patientId={patientId} 
		/>

	</>
	
  )
}

export default FormModule