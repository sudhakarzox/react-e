import { useEffect, useState } from 'react';
import { GiWaterBottle } from 'react-icons/gi'
import {LuGlassWater} from 'react-icons/lu'

import '../App.css';
import './ToggleSwitch.css';

//Tracks the amount of water consumed
function Bottle(){
    
    const [rate,setRate]=useState(0.5);

    useEffect(() => {
        
    },[]);


    const filter='drop-shadow(0px 0px 7px rgba(10, 175, 230, 1)';

    return (
        <div className='eyetimer' >
            
                
            <div className='  w3-container w3-padding-small'  >
                
                <GiWaterBottle fill="#daf6ff" style={{'marginTop':'0'}} size={90} filter={filter}></GiWaterBottle>
              {
                [...Array(5)].map((start,index)=>{
                    index+=1;
                    return(
                        <LuGlassWater key={index} 
                        fill={index <= rate?"#daf6ff":"#daf6ff73"} size={50} style={{'marginTop':'20'}} 
                        strokeWidth={0.5} 
                        filter={index <= rate?filter:null}
                        onClick={() => setRate(index)}></LuGlassWater>
                    );
                })
              }
                
            </div>

            <div className=" w3-round w3-small " style={{'width':'100%','backgroundColor': '#001015','borderStyle':'solid'}}>
              <div className="w3-container w3-round " 
                style={{'width':rate *20 + '%',
                          'boxShadow' : '0 0 20px rgba(10, 175, 230, 1),  0 0 20px rgba(10, 175, 230, 0)',
                          'backgroundColor': '#daf6ff',
                          'color':'black',
                         }}>
                {'HYDRATED :'}  {rate*20} {'%'}
              </div>
          </div>
        </div>

      
      
    );
}

export default Bottle;