import { useEffect, useState } from "react";
import { getAllStarships } from "../services/api-calls";
import { Link } from 'react-router-dom'

const GetAllStarships = (props) => {
  const [starShips, setStarships] = useState([])

  useEffect(()=> {
    getAllStarships()
    .then(shipData => setStarships(shipData.results))
  }, [])

 
  return (
    <>
     {starShips.length ? 
       <>
         <div className='ships-div'>
           {starShips.map(starShip => 
             <Link to='/starship' state={{starShip}} key={starShip.model}>
             <button id='name-button'>{starShip.name}</button>
             </Link>
             )}
         </div>
       </>
       :
       <>
        <h3 id='starships-loading'>Loading...</h3>
       </>
     }
     </>
    
    );
}
 
export default GetAllStarships;