import React from "react";
import {ReactComponent as SVG} from "../../Images/Dark-Light-mode.svg";
import "./Icon.css"

const DarkModeIcon = (props) => {
    return (
        <SVG width={props.width} height={props.height} fill={props.color} style={{
            backgroundColor: props.backgroundColor,
            borderRadius: '100%',
            border: '2px solid #808080'
        }} className={"vectorHead"}/>
    );
}
export default DarkModeIcon;