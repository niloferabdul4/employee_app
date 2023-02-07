import React from 'react';

const Teammembers = ({teammembers}) => {

    const member_details=teammembers.map((item)=> {
        return (
                      <>   
                                <div className='teamgroups_container '  >
                                        <p>Name:  {item.fullName}</p>
                                        <p>Designation:  {item.designation}</p>
                                    </div> 
                                                                              
                             </>                           
                            )
                                 
      })
    return (
        <div>
             {member_details}
                                          
        </div>
    );
}

export default Teammembers;
