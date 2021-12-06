import React from "react";
import {ReactComponent as SVG} from "../../Images/Account.svg";
import "./Icon.css"

const AccountIcon = (props) => {
    return (
        <SVG width={props.width} height={props.height} fill={props.color} style={{
            backgroundColor: props.backgroundColor,
            borderRadius: '100%',
            border: props.border + 'px solid #808080',
        }} className={"vector"}/>
    );
}
export default AccountIcon;