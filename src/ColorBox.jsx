import {useState} from "react";
import "./ColorBox.css";

function ColorBox(props){
       
    const [bColor, changeColor] = useState(props.boxColor);
    const styles = {backgroundColor: bColor}
    function handleClick(){        
        changeColor(props.colors[Math.floor(Math.random()*props.colors.length)]);       
    }
    return(
        <div className="box" style={styles} onClick={handleClick}>            
        </div>
    )
}

export default ColorBox;