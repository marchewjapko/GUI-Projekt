import React, {useState} from "react";
import "./ProductRatingWidget.js.css"
import "./Widget.css"
import {useTranslation} from "react-i18next";
import WidgetHead from "../Molecules/WidgetHead";
import ReactStars from 'react-stars'
import {ProductRatingData} from "../../Data/ProductRatingData.js"

function ProductRatingWidget() {
    const {t} = useTranslation(['productRatingWidget']);
    const [underlinePosStyle, setUnderLinePos] = useState();
    const [tableData, setTableData] = useState(
        ProductRatingData.filter(e => e.rating >= 0).slice(0,4).map(el => {
                return (
                    <tr>
                        <td className="rowProduct">
                            {el.comment}
                        </td>
                        <td className="rowProductRating">
                            <ReactStars
                                count={5}
                                size={20}
                                value={el.rating}
                                edit={false}
                                color2={'#F1C644'} />
                        </td>
                        <td className="rowProduct">
                            {el.date}
                        </td>
                    </tr>
                );
            })
    );

    const handleClickCategory1 = () => {
        setTableData(
            ProductRatingData.filter(e => e.rating >= 0).slice(0,4).map(el => {
                return (
                    <tr>
                        <td className="rowProduct">
                            {el.comment}
                        </td>
                        <td className="rowProductRating">
                            <ReactStars
                                count={5}
                                size={20}
                                value={el.rating}
                                edit={false}
                                color2={'#F1C644'} />
                        </td>
                        <td className="rowProduct">
                            {el.date}
                        </td>
                    </tr>
                );
            })
        );
        setUnderLinePos(
            {
                marginLeft: 0
            }
        );
    }
    const handleClickCategory2 = () => {
        setTableData(
            ProductRatingData.filter(e => e.rating > 2.5).slice(0,4).map(el => {
                return (
                    <tr>
                        <td className="rowProduct">
                            {el.comment}
                        </td>
                        <td className="rowProductRating">
                            <ReactStars
                                count={5}
                                size={20}
                                value={el.rating}
                                edit={false}
                                color2={'#F1C644'} />
                        </td>
                        <td className="rowProduct">
                            {el.date}
                        </td>
                    </tr>
                );
            })
        )
        setUnderLinePos(
            {
                marginLeft: "33.3%"
            }
        );
    }
    const handleClickCategory3 = () => {
        setTableData(
            ProductRatingData.filter(e => e.rating <= 2.5).slice(0,4).map(el => {
                return (
                    <tr>
                        <td className="rowProduct">
                            {el.comment}
                        </td>
                        <td className="rowProductRating">
                            <ReactStars
                                count={5}
                                size={20}
                                value={el.rating}
                                edit={false}
                                color2={'#F1C644'} />
                        </td>
                        <td className="rowProduct">
                            {el.date}
                        </td>
                    </tr>
                );
            })
        )
        setUnderLinePos(
            {
                marginLeft: "66.6%"
            }
        );
    }

    return (
        <div className={"widget"}>
            <WidgetHead widgetTitle={t("productRatingWidgetName")}/>
            <div className={"optionBarProduct"}>
                <ul className={"ulProduct"}>
                    <li className="option"><a className={"aProduct"} onClick={handleClickCategory1}>{t("all")}</a></li>
                    <li className="option"><a className={"aProduct"} onClick={handleClickCategory2}>{t("positive")}</a></li>
                    <li className="option"><a className={"aProduct"} onClick={handleClickCategory3}>{t("negative")}</a></li>
                    <hr style={underlinePosStyle} className={"productRatingUnderline"}/>
                </ul>
            </div>
            <table className="tgProduct">
                <thead>
                <tr>
                    <th className="headTable">{t("comments")}</th>
                    <th className="headTableRating">{t("rating")}</th>
                    <th className="headDate">{t("date")}</th>
                </tr>
                </thead>
                <tbody>
                    {tableData}
                </tbody>
            </table>
        </div>
    );
}

export default ProductRatingWidget