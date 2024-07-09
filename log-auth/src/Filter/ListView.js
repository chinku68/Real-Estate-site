import React from 'react'
import './ListView.css'
const ListView = ({sdata,onChangeClick}) => {
  return (
    <div>
        
           <div className="table-container">
              <table>
        <thead>
          <tr>
            <th>Property</th>
            <th>Posted on</th>
            <th>Facing</th>
            <th>Details</th>
            <th>View Details</th>
          </tr>
        </thead>
        <tbody>
        {sdata.map((item,index)=>(
            <tr key={index}>
              <td>{item.projectname}, ${item.price}</td>
              <td>{item.date}</td>
              <td>{item.facing}</td>
              <td>{item.constructionstatus}</td>
              <td onClick={() => onChangeClick(item)}> <span  className='view-details'>View details...</span> </td>       
            </tr>
          ))}
        </tbody>
      </table>
           </div>
        
    </div>
  )
}

export default ListView