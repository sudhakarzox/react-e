import { useEffect, useState } from 'react';
import '../App.css';
import './ToggleSwitch.css';
import '../App.css';

//Display Time
function Timer(){
    const [value, setValue] = useState(new Date());
  
    
    useEffect(() => {
      const interval = setInterval(() => setValue(new Date()), 1000);
      // console.log('ss');
     
      return () => {
      
        clearInterval(interval);
        
      };
    },[]);

    const cs={
        padding: '5px 0',
        'color': '#daf6ff',
        'textShadow':' 0 0 20px rgba(10, 175, 230, 1),  0 0 20px rgba(10, 175, 230, 0)'
    }


    return (

      <div className='timer '>
    
        <div className='w3-padding '>

          <div className="w3-container" style={cs}>{'>>>>>>>>>>> .'} <span className="blinking"> .</span> {'<<<<<<<<<<<'}</div>

          <div className="w3-container" style={cs}>
            {value.toLocaleTimeString()}
          </div>
        
          <div className="w3-container" style={cs}>-------------------------------------</div>

        </div> 

      </div>

      
      
    );
}

export default Timer;