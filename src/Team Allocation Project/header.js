import React from 'react';


const Header = ({teamCount,selectedteam}) => {

    return (
        <div className='header'>
            <h2>Team Member Allocation</h2>
            <h3>{selectedteam} have {teamCount} member{teamCount> 1? 's' : '' }</h3>
        </div>
    );
}

export default Header;
