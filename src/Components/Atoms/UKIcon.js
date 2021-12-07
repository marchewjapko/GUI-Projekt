import React from "react";
import { ReactComponent as SVG } from "../../Images/UK-Flag.svg";
import "./Icon.css"
const UKIcon = (props) => {
    return (
        <SVG width={props.width} height={props.height} fill={props.color} className={"vectorHead"}/>
    );
}
export default UKIcon;