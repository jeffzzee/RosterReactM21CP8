import React from "react";

function Roster(props) {
//   console.log("arrived in roster")
  console.log(props.roster,"props.roster")
   console.log(props.detailed,"props.detailed")
//   const {detailed, roster} = props;
//   const {firstName, lastName, location}=roster
  let falseOL = props.roster.map(({firstName},index)=>(
//     console.log(person,"person")
    <li key={index}>{firstName}</li>
))  
let trueTable = props.roster.map(({firstName,lastName,location},index)=>(<tr>
    <td key={`fnamekey${index}`}>{firstName}</td>
    <td key={`lnamekey${index}`}>{lastName}</td>
    <td key={`locationkey${index}`}>{location}</td>
  </tr>
)) 
if(!props.detailed){return (<ol> {falseOL} </ol>)}  
  else {
    return <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Location</th>
        </tr>
      </thead>
         <tbody>{trueTable}</tbody>
    </table>
  }
}

export default Roster;
