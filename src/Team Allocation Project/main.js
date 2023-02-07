import React from 'react';


export default function Main({clickFn,changeFn,selectedteam,arr}) {
    

    return (
        <> 
         <main >
            <select className='select'
                    
                    onChange={changeFn}
                    value={selectedteam}                                                           // selected team value  //
            >
                   <option value='Team A'>Team A</option>
                   <option value='Team B'>Team B</option>
                   <option value='Team C'>Team C</option>
                   <option value='Team D'>Team D</option>
                
            </select>
            
            <div className='employees_container '>
               {arr.map((n)=>( 
                                <div  id={n.id} className={(n.teamName===selectedteam)? 'clickedemployees_card' : 'employees_card' }   onClick={clickFn} >
                                        <div className='img_container'>
                                            <img src={n.img} alt= '' />  
                                    
                                        </div>
                                            <div className='info_container'>

                                                <p><b>Full Name: </b>{n.fullName}</p>
                                                <p><b>Designation: </b>{n.designation}</p>
                                                
                                            </div>

                            </div> 
                           ) 
                       )
               }
                                                          
           </div>
        </main>   
       </>    
        
    );
}



