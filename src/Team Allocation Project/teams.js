import React from 'react';
import Teammembers from './teammembers';

export default function Groupteam ({arr,selectedteam})
{

  const[groupedteam,setGroupedTeam]=React.useState(getTeamgroups())

  
  

  function getTeamgroups()
  {
                  var teams=[];
                  var teamAgroups=arr.filter(n=>n.teamName==='Team A')
                  var teamA={name:'Team A',teammembers:teamAgroups,collapsed:(selectedteam==='Team A'? false:true)}       // collapsed means opposite of expand  //
                  teams.push(teamA)
                  
                  var teamBgroups=arr.filter(n=>n.teamName==='Team B')
                  var teamB={name:'Team B',teammembers:teamBgroups,collapsed:(selectedteam==='Team B'? false:true)}       // if selected is equal to Team B,then expand (collapsed false)
                  teams.push(teamB)

                  
                  var teamCgroups=arr.filter(n=>n.teamName==='Team C')
                  var teamC={name:'Team C',teammembers:teamCgroups,collapsed:(selectedteam==='Team C' ?  false:true)}
                  teams.push(teamC)

                  
                  var teamDgroups=arr.filter(n=>n.teamName==='Team D')
                  var teamD={name:'Team D',teammembers:teamDgroups,collapsed:(selectedteam==='Team D'? false:true)}
                  teams.push(teamD)

         return teams;

  }

  
function handleTeamclick(event)

{
var newgroup=groupedteam.map(n=>n.name===event.currentTarget.id? {...n,collapsed:!n.collapsed}:n)
setGroupedTeam(newgroup)


}
                                          
  return(
    <div className='team_page'>
    
    {  groupedteam.map((n)=>{
                               return (
                                       <>
                                       <div className='team_container' id='teams' key={n.name}>
                                            <div className='teamname_container'  >
                                                  <span id={n.name}  onClick={handleTeamclick} > <b>Team Name:  {n.name}</b></span>
                                                  
                                            </div>
                                          <hr></hr>
                                          <div  id={'collapse_' + n.name} className={n.collapsed===true? 'collapseditem' :''}> 
                                          <hr/>
                                            <Teammembers  teammembers={n.teammembers}/>
                                           </div>
                                           
                                    </div>
                                        </>
                                      )
                                   
                                   
                                    }
                          )
        }
  
    </div>
  )
}