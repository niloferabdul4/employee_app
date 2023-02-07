import React from "react";

import data from './Team Allocation Project/data'
import './Team Allocation Project/styles.css'

import Main from "./Team Allocation Project/main";
import Header from "./Team Allocation Project/header";
import Nav from "./Team Allocation Project/nav";
import Groupteam from "./Team Allocation Project/teams";


import { useState,useEffect } from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";


function App() {


    const[arr,setArr]=useState(JSON.parse(localStorage.getItem('employeeList')) || data)                                // set the array with data from localstorage or data ///
   
    const [selectedteam ,setSelectedTeam]=useState(JSON.parse(localStorage.getItem('selectedteam'))  ||  'Team A')                     //  team A is selected by default  ///
    
    

    /********************* Use Effect ****************/

    useEffect(() => { localStorage.setItem('employeeList',JSON.stringify(arr)) },  [arr])

    useEffect(() => {  localStorage.setItem('selectedteam',JSON.stringify(selectedteam))}, [selectedteam])

    

    /*******************   Team Change Fn here  *****/  

    const handleTeamchange=(event)=>
    {
        setSelectedTeam(event.target.value)                                           // selected team ///
       
    }


    ///  Card Click Fn  ///


     function handlecardClick (event)
     {
        
            const updated_employee=arr.map((n)=> n.id===parseInt(event.currentTarget.id)
                                           ? (n.teamName===selectedteam) ? {...n,teamName:' '} : {...n,teamName:selectedteam} 
                                           : n);                   
            setArr(updated_employee);  
               

    }
                 
          return (
            <BrowserRouter>               

                    <Nav />
                  
                    <Header arr={arr} clickFn={handlecardClick}  selectedteam={selectedteam} teamCount={arr.filter(n=>(n.teamName===selectedteam)).length} />
                 
                  <Routes>  
                       <Route exact path="/" element = {<Main changeFn={handleTeamchange}  clickFn={handlecardClick}  selectedteam={selectedteam} arr={arr}/>} />                       
                  
                       <Route  exact path='/teams' element={<Groupteam changeFn={handleTeamchange}  clickFn={handlecardClick} selectedteam={selectedteam} arr={arr} />}  />
                    
                  </Routes>
                
                             
            </BrowserRouter>
          );
        }

        export default App;