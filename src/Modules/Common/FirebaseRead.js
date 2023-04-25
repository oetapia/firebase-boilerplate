import React, { useEffect, useState } from 'react'
import { collection,getDocs } from "firebase/firestore";
import { db } from '../../firebase';
import { Spinner, Button } from 'react-bootstrap';

function FirebaseRead({db_name}) {


	const [loading, setLoading] = useState(false);

	const [data, setData] = useState([]);

		useEffect(()=>{

			const fetchPost = async () => {
		
				await getDocs(collection(db, db_name))
					.then((querySnapshot)=>{               
						const newData = querySnapshot.docs
							.map((doc) => ({...doc.data(), id:doc.id }));
						setData(newData);                
					})
			
			}

			
			fetchPost();
		}, [])


	

  return (
	<>
		{JSON.stringify(data)}
	</>
  )
}





export default FirebaseRead