import React, {useState} from "react";
import "./Buttons.css"
import ArrowRightIcon from "./ArrowRightIcon";
const LogInButton = ({backgroundColor, handleClick}) => {
    const [color, setColor] = useState(0);
    const handleMouseDown = (e) => {
        setColor("black")
    }
    const handleMouseUp = (e) => {
        setColor("#202020")
    }
    return (
        <button className={"button"} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} style={{backgroundColor: color}} onClick={handleClick}>
            <ArrowRightIcon width={'25'} height={'25'} color={'white'}/>
        </button>
    );
}
export default LogInButton;