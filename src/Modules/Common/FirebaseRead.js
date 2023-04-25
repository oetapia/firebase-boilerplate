import React, { useEffect, useState } from 'react'
import { collection,getDocs } from "firebase/firestore";
import { db } from '../../firebase';
import { Spinner } from 'react-bootstrap';

function FirebaseRead({db_name}) {


	const [loading, setLoading] = useState(false);
	const [message, setMessage] = useState('Loading');

	const [data, setData] = useState([]);

		useEffect(()=>{
			setLoading(true);
			const fetchPost = async () => {
				try {
				  const querySnapshot = await getDocs(collection(db, db_name));
				  const newData = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
				  setData(newData);
				  setLoading(false);
				  setMessage('');
				} catch (error) {
				  setMessage(`Error: ${error.message}`);
				  console.error("Error fetching data: ", error);
				}
			  }
			  fetchPost();
		}, [db_name])


	

  return (
	<>

		{loading ? 
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            : ''}
           <p className='text-muted'>
				{message}
			</p> 
		{JSON.stringify(data)}
	</>
  )
}





export default FirebaseRead