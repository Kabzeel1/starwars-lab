import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getDetails  } from '../services/api-calls';
import { Link } from 'react-router-dom';

const StarshipDetails = (props) => {
  const [starshipDetails, setstarshipDetails] = useState({})
  let location = useLocation()

  useEffect(()=> {
    getDetails(location.state.starShip.url)
    .then(starshipDetails => setstarshipDetails(starshipDetails))
  }, [])

  return (
    <>
      <div id='ship-detail-container'>
        <h3>Ship Details</h3>
        {starshipDetails.name ?
          <>
            <h2>{starshipDetails.name}</h2>
            <h3>{starshipDetails.model}</h3>
            <Link to="/">Return</Link>
          </>
          :
          <>
          <h3>Loading...</h3>
          </>
        }
      </div>
    </> 
  
  );
}
 
export default StarshipDetails;
