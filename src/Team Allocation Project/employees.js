

import React from 'react';


export default function Employees ({selectedteam,cardClickFn,img,fullname,designation,teamname,key}) {
  
    return (
        
            <div  id={key} className={(teamname===selectedteam)? 'clickedemployees_card' : 'employees_card' }   onClick={cardClickFn} >
                    <div className='img_container'>
                        <img src={img} alt= '' />  
                 
                     </div>
                        <div className='info_container'>

                            <p><b>Full Name: </b>{fullname}</p>
                            <p><b>Designation: </b>{designation}</p>
                            
                        </div>

            </div>
           
    );
}


