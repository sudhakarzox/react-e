<<<<<<< HEAD
import Timer from "./Timer";
import Bottle from "./Bottle";
import Toggle from "./Toggle";

//Complex Component - main - contains all other components 
function All(){


    return(
        <div className="main  w3-container w3-row w3-padding-large">
            <div className="timer w3-container  "> <Timer/></div>
            <div className="toggle w3-container  w3-row "> <Toggle/></div>
            <div className="bottle w3-container   w3-row " > <Bottle/></div>
        </div>
    );
}

=======
import Timer from "./Timer";
import Bottle from "./Bottle";
import Toggle from "./Toggle";

//Complex Component - main - contains all other components 
function All(){


    return(
        <div className="main  w3-container w3-content w3-row w3-padding-large">
            <div className="timer w3-container  "> <Timer/></div>
            <div className="toggle w3-container  w3-row "> <Toggle/></div>
            <div className="bottle w3-container   w3-row " > <Bottle/></div>
        </div>
    );
}

>>>>>>> master
export default All;