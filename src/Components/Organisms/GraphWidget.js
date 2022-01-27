import React, {useState} from "react";
import {LineChart, CartesianGrid, Line, XAxis, YAxis, Tooltip, BarChart, Bar, ResponsiveContainer} from "recharts";
import "./Widget.css"
import "./GraphWidget.js.css"
import {useTranslation} from "react-i18next";
import WidgetHead from "../Molecules/WidgetHead";
import {GraphDataToday} from "../../Data/GraphDataToday"
import {GraphDataThisWeek} from "../../Data/GraphDataThisWeek"
import {GraphDataThisYear} from "../../Data/GraphDataThisYear"
import Select from 'react-select'

function OrdersWidget() {
    const {t} = useTranslation(['graphWidget']);
    const [graphType, setGraphType] = useState("LineChart")
    const [graphData, setGraphData] = useState("turnover")
    const [graphTime, setGraphTime] = useState(GraphDataToday)
    const CustomTooltip = (e) => {
        if (e.active && e.payload && e.payload.length) {
            return (
                <div className="custom-tooltip">
                    <p className="label">{e.payload[0].value}</p>
                </div>
            );
        }

        return null;
    };
    const lineGraph = (
        <LineChart
            data={graphTime}
            margin={{
                top: 5,
                right: 35,
                left: 10,
                bottom: 5
            }}
        >
            <CartesianGrid strokeDasharray="3 3"/>
            <XAxis dataKey="name"/>
            <YAxis/>
            <Tooltip content={<CustomTooltip />} />
            <Line type="monotone" strokeWidth={2} dataKey={graphData} stroke="#5675E4"/>
        </LineChart>
    );
    const barGraph = (
        <BarChart
            data={graphTime}
            margin={{
                top: 5,
                right: 35,
                left: 10,
                bottom: 5
            }}
        >
            <CartesianGrid strokeDasharray="3 3"/>
            <XAxis dataKey="name"/>
            <YAxis/>
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey={graphData} fill="#5675E4"/>
        </BarChart>
    );
    const dataOptions = [
        {value: 'turnover', label: t("turnover")},
        {value: 'sales', label: t("sales")}
    ]
    const timeOptions = [
        {value: 'today', label: t("today")},
        {value: 'thisWeek', label: t("thisWeek")},
        {value: 'thisYear', label: t("thisYear")}
    ]
    const graphOptions = [
        {value: 'graphLine', label: t("graphLine")},
        {value: 'graphBar', label: t("graphBar")}
    ]
    const handleChangeData = (e) => {
        setGraphData(e.value)
    }
    const handleChangeTime = (e) => {
        if (e.value === "today") {
            setGraphTime(GraphDataToday)
        } else if (e.value === "thisWeek") {
            setGraphTime(GraphDataThisWeek)
        } else if (e.value === "thisYear") {
            setGraphTime(GraphDataThisYear)
        }
    }
    const handleChangeGraph = (e) => {
        if (e.value === "graphBar") {
            setGraphType("BarChart")
        } else {
            setGraphType("LineChart")
        }
    }
    const customStyles = {
        control: (base) => ({
            ...base,
            background: "#5675E4",
            borderRadius: "10px",
            color: 'white'
        }),
        container: (base) => ({
            ...base,
            background: "rgba(0,0,0,0)"
        }),
        singleValue: (base) => ({
            ...base,
            color: "white"
        }),
    };
    return (
        <div className={"widget"} style={{height: "100%", paddingBottom: "5px"}}>
            <WidgetHead widgetTitle={t("graphWidgetName")}/>
            <div className={"graphOptions"}>
                <Select className={"select1"} defaultValue={dataOptions[0]} options={dataOptions} isSearchable={false}
                        onChange={handleChangeData} styles={customStyles} />
                <Select className={"select2"} defaultValue={timeOptions[0]} options={timeOptions} isSearchable={false}
                        onChange={handleChangeTime} styles={customStyles}/>
                <Select className={"select3"} defaultValue={graphOptions[0]} options={graphOptions} isSearchable={false}
                        onChange={handleChangeGraph} styles={customStyles}/>
            </div>
            <ResponsiveContainer width="100%" height={300} className={"responsiveContainer"}>
                {graphType == "BarChart" ? barGraph : lineGraph}
            </ResponsiveContainer>
        </div>
    );
}

export default OrdersWidget;