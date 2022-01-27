import React, {useState} from "react";
import "./SalesWidget.js.css"
import "./Widget.css"
import {useTranslation} from "react-i18next";
import WidgetHead from "../Molecules/WidgetHead";
import {ProductSalesData} from "../../Data/ProductSalesData.js"

function ProductSalesWidget() {
    const {t} = useTranslation(['salesWidget']);
    const [underlinePosStyle, setUnderLinePos] = useState();
    const [useFrequent, setUseFrequent] = useState(true)
    function compareAsc(a, b) {
        return a.sales - b.sales;
    }
    function compareDesc(a, b) {
        return b.sales - a.sales;
    }
    const tableHeadFrequent = (
        <tr>
            <th className="headSalesName">{t("name")}</th>
            <th className="headSales">{t("sales")}</th>
            <th className="headRight">{t("turnover")}</th>
        </tr>
    );
    const tableHeadRare = (
        <tr>
            <th className="headSalesName">{t("name")}</th>
            <th className="headSales">{t("sales")}</th>
            <th className="headRight">{t("views")}</th>
        </tr>
    );
    const tableDataFrequent = (
        ProductSalesData.sort(compareDesc).slice(0,5).map(el => {
            return (
                <tr>
                    <td className="rowSales">
                        {el.name}
                    </td>
                    <td className="rowSalesMiddle">
                        {el.sales}
                    </td>
                    <td className="rowSalesRight">
                        {el.turnover}
                    </td>
                </tr>
            );
        })
    );
    const tableDataRare = (
        ProductSalesData.sort(compareAsc).slice(0,5).map(el => {
            return (
                <tr>
                    <td className="rowSales">
                        {el.name}
                    </td>
                    <td className="rowSalesMiddle">
                        {el.sales}
                    </td>
                    <td className="rowSalesRight">
                        {el.views}
                    </td>
                </tr>
            );
        })
    );
    const handleClickCategoryMostFrequent = () => {
        setUseFrequent(true)
        setUnderLinePos(
            {
                marginLeft: 0
            }
        );
    }
    const handleClickCategoryLestFrequent = () => {
        setUseFrequent(false)
        setUnderLinePos(
            {
                marginLeft: "50%"
            }
        );
    }

    return (
        <div className={"widgetSales"}>
            <WidgetHead widgetTitle={t("salesWidgetName")}/>
            <div className={"optionBar"}>
                <ul className={"ulSales"}>
                    <li className="liSales"><a className={"aSales"} onClick={handleClickCategoryMostFrequent}>{t("mostFrequent")}</a></li>
                    <li className="liSales"><a className={"aSales"} onClick={handleClickCategoryLestFrequent}>{t("leastFrequent")}</a></li>
                    <hr style={underlinePosStyle} className={"salesUnderline"}/>
                </ul>
            </div>
            <div className={"salesTableDiv"}>
                <table className="tgSales">
                    <thead>
                        {useFrequent === true ? tableHeadFrequent : tableHeadRare}
                    </thead>
                    <tbody>
                    {useFrequent === true ? tableDataFrequent : tableDataRare}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ProductSalesWidget