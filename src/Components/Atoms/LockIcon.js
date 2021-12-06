import React from "react";
import { ReactComponent as SVG } from "../../Images/Lock.svg";
import "./Icon.css"
const LockIcon = (props) => {
    return (
        <SVG width={props.width} height={props.height} fill={props.color} className={"vector"}/>
    );
}
export default LockIcon;