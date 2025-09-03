import { useEffect, useState } from 'react';
import { AiFillThunderbolt } from 'react-icons/ai';
import useSound from 'use-sound';
import mp3 from '../resource/aleart.mp3'
import '../App.css';
import './ToggleSwitch.css';
import Popup from 'reactjs-popup';

//Generates an aleart on 20 min pass when ActiveEyeStrainTimer is set to on
function Toggle(){
    
    const [breakT, setBreakT] = useState(false);
    const [ActiveEyeStrainTimer, setActiveEyeStrainTimer] = useState(false);
    const [play, {stop}]=useSound(mp3,{volume:3});
    
    useEffect(() => {
        let interval1;
        if(ActiveEyeStrainTimer){
             interval1 =setTimeout(() =>{setBreakT(true); play();} , 1000*60*20);
             //console.log('timer on');
        }
    //   console.log('UseEffect');
     
      return () => {
      
        if(interval1!==undefined){
            //console.log('cleared');
            //console.log('timer off');
            clearTimeout(interval1);
        }
      };
    },[ActiveEyeStrainTimer, play]);


    const cs={
        padding: '5px',
        'fontSize':'smaller',
        'color': '#daf6ff',
        'textShadow':' 0 0 20px rgba(10, 175, 230, 1),  0 0 20px rgba(10, 175, 230, 0)'
    }


    const test=()=>{

      setActiveEyeStrainTimer(!ActiveEyeStrainTimer); 

    };
  


    return (
        <div className='eyetimer  ' >
            <div style={cs}>EYE BREAK ALEART</div>
            <div className='c'  style={{'display': 'inline-flex',  'height': '100px'}}>                
                 <div className='' style={{'paddingTop':'20%'}}>
                    <label className="switch" >
                            <input type="checkbox" checked={ActiveEyeStrainTimer} readOnly/>
                            <span className="slider round" onClick={test.bind(this)}></span>
                    </label>
                </div>

                <div className='' >
                    <AiFillThunderbolt  
                    style={{ 'height': '60px','paddingTop':'10px'}}
                    size={50}
                        fill={ActiveEyeStrainTimer?"#daf6ff":null}
                        stroke={"#daf6ff"} 
                        strokeWidth={10} filter={ActiveEyeStrainTimer?'drop-shadow(0px 0px 7px rgba(10, 175, 230, 1))':null}>
                    </AiFillThunderbolt>

                </div>
                
            </div>
           
            
            

            <Popup open={ breakT.valueOf() } modal nested>
                    {
                        close => (
                            <div className='modal w3-black w3-border w3-border-blue w3-padding' >
                                <div className='content' style={cs}>
                                    Take 20!!!!!!!!!!!!!!  : )
                                </div>
                                <div>
                                    <button className='w3-button w3-black w3-border w3-border-blue' 
                                    onClick={() => {   
                                        setActiveEyeStrainTimer(!ActiveEyeStrainTimer);
                                            setBreakT(false);
                                            stop();                             
                                            close();
                                            }}>
                                            Close 
                                    </button>
                                </div>
                            </div>
                        )
                    }
            </Popup>
                

            <div className="w3-container" style={cs}>---------------------------------------------</div>
        </div>

      
      
    );
}

export default Toggle;