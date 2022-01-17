import React from "react";
import {PieChart, Pie, Legend, Tooltip, Cell} from "recharts";
import "./OrdersWidget.js.css"
import "./Widget.css"
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom";
import WidgetHead from "../Molecules/WidgetHead";

function OrdersWidget() {
    const {t} = useTranslation(['ordersWidget']);
    let navigate = useNavigate();
    const COLORS = ['#0189D3', '#FBC045', '#03C382'];
    const ordersData = [
        {key: "unpaid", name: t('unpaid'), value: 400},
        {key: "not-sent", name: t('notsent'), value: 300},
        {key: "returns", name: t('returns'), value: 200}
    ];
    const renderLegend = (value) => {
        return (
            <span className={"legend"}>{value}</span>
        );
    };
    const handleClick = (e) => {
        navigate("/" + e.payload.key);
    }

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className="tooltip">
                    <p className="label">{t('goto')} <b> {payload[0].name} </b> </p>
                </div>
            );
        }
        return null;
    };

    return (
        <div className={"widget"}>
            <WidgetHead widgetTitle={t("ordersWidgetName")}/>
            <PieChart width={400} height={400} className={"pieChart"}>
                <Legend formatter={renderLegend} />
                <Pie
                    dataKey="value"
                    isAnimationActive={false}
                    data={ordersData}
                    cx="50%"
                    cy="50%"
                    fill="#8884d8"
                    label
                    onClick={handleClick}
                    legendType={"circle"}
                >
                    {ordersData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}  />
                    ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
            </PieChart>
        </div>
    );
}

export default OrdersWidget;