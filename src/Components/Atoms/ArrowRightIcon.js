import React from "react";
import { ReactComponent as SVG } from "../../Images/Arrow-Right.svg";
import "./Icon.css"
const ArrowRightIcon = (props) => {
    return (
        <SVG width={props.width} height={props.height} fill={props.color} className={"vector"}/>
    );
}
export default ArrowRightIcon;