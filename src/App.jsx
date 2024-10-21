import { useState } from 'react'
import Loading from './Loading';

const url=
'https://dummyjson.com/products'
function App() {
const [loading,setLoading]=useState(true);
const [tours,setTours]=useState([]);

if (loading){
  return(
    <main>
      <Loading/>
    </main>
  )
}
  return (
  <>
  
  </>  
  )
}

export default App
