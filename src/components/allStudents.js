import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function AllStudents(props) {
  return (
    <div>
      <h1>ALL STUDENTS!!!</h1>
    </div>
  );
}

export default AllStudents;

// 1st option
//  {
//    props.students.map((student) => {
//      return (
//        <h1>
//          {student.firstName} {student.lastName}
//        </h1>
//      );
//    });
//  }

// function PracticeLinking(props) {
//   return (
//     <div>
//       <h1>
//         <Students></Students>
//       </h1>
//       <div>
//         {props.students.map((student) => (
//           <div key={student.id}>
//             <Link to={`/students/${student.id}`}>
//               <h2>{student.firstName}</h2>
//               <img src={student.imageUrl} />
//             </Link>
//             <p>{student.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
