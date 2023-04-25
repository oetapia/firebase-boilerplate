import React, {useState} from 'react'
import { collection, addDoc, doc,serverTimestamp } from "firebase/firestore";
import { db } from '../../firebase';
import { Spinner, Button } from 'react-bootstrap';

function FirebaseSubmit({ data, db_name, patientId }) {


	const [loading, setLoading] = useState(false);
	const [message, setMessage] = useState('');

	
  const addToDB = async (e) => {
    e.preventDefault();

    try {
		setLoading(true);
		
		const collectionRef = patientId ? collection(doc(db, 'patients', patientId), db_name) : collection(db, db_name);
		const itemDocRef = await addDoc(collectionRef, { ...data, date: serverTimestamp() });
      	console.log('Document written with ID: ', itemDocRef.id);	

				
			console.log("Document written with ID: ", itemDocRef.id);
			setLoading(false);
			setMessage("Document written with ID: " + itemDocRef.id)
			} catch (e) {
			console.error("Error adding document: ", e);
    }
  }

  return (
    <div>
      <Button
        type="submit"
        className="btn"
        onClick={addToDB}
      >
        Save
      </Button>
	  {loading ? 
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            : ''}
           <p className='text-muted'>
				{message}
			</p> 
    </div>
  )
}

export default FirebaseSubmit