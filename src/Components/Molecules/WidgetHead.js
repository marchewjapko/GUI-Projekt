import React from "react";
import "./WidgetHead.js.css"

function WidgetHead(props) {
    return (
        <div className={"widgetHead"}>
            <b className={"widgetHeadText"}>
                {props.widgetTitle}
            </b>
        </div>
    );
}

export default WidgetHead