import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function AllCampuses(props) {
  return (
    <div>
      {props.campuses.map((campus) => {
        return (
          <div>
            <h1>{campus.name}</h1>
            <img src={campus.imageUrl} />
          </div>
        );
      })}
    </div>
  );
}

export default AllCampuses;

// return (
//   <div>
//     <h1>Campuses</h1>
//     <div>
//       {props.campuses.map((campus) => (
//         <div key={campus.id}>
//           <Link to={`/campuses/${campus.id}`}>
//             <h2>{campus.name}</h2>
//             <img src={campus.imageUrl} />
//           </Link>
//           <p>{campus.description}</p>
//         </div>
//       ))}
//     </div>
//   </div>
// );
