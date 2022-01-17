import React, {useState} from "react";
import "./ProductRatingWidget.js.css"
import "./Widget.css"
import {useTranslation} from "react-i18next";
import WidgetHead from "../Molecules/WidgetHead";
import ReactStars from 'react-stars'
import {ProductRatingDataAll} from "../../Data/ProductRatingDataAll.js"

function ProductRatingWidget() {
    const {t} = useTranslation(['productRatingWidget']);
    const [underlinePosStyle, setUnderLinePos] = useState();
    const [tableData, setTableData] = useState(
        ProductRatingDataAll.filter(e => e.rating >= 0).slice(0,4).map(el => {
                return (
                    <tr>
                        <td className="rowComment">
                            {el.comment}
                        </td>
                        <td className="rowRating">
                            <ReactStars
                                count={5}
                                size={20}
                                value={el.rating}
                                edit={false}
                                color2={'#F1C644'} />
                        </td>
                        <td className="rowDate">
                            {el.date}
                        </td>
                    </tr>
                );
            })
    );

    const handleClickCategory1 = () => {
        setTableData(
            ProductRatingDataAll.filter(e => e.rating >= 0).slice(0,4).map(el => {
                return (
                    <tr>
                        <td className="rowComment">
                            {el.comment}
                        </td>
                        <td className="rowRating">
                            <ReactStars
                                count={5}
                                size={20}
                                value={el.rating}
                                edit={false}
                                color2={'#F1C644'} />
                        </td>
                        <td className="rowDate">
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
            ProductRatingDataAll.filter(e => e.rating > 2.5).slice(0,4).map(el => {
                return (
                    <tr>
                        <td className="rowComment">
                            {el.comment}
                        </td>
                        <td className="rowRating">
                            <ReactStars
                                count={5}
                                size={20}
                                value={el.rating}
                                edit={false}
                                color2={'#F1C644'} />
                        </td>
                        <td className="rowDate">
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
            ProductRatingDataAll.filter(e => e.rating <= 2.5).slice(0,4).map(el => {
                return (
                    <tr>
                        <td className="rowComment">
                            {el.comment}
                        </td>
                        <td className="rowRating">
                            <ReactStars
                                count={5}
                                size={20}
                                value={el.rating}
                                edit={false}
                                color2={'#F1C644'} />
                        </td>
                        <td className="rowDate">
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
            <div className={"optionBar"}>
                <ul>
                    <li className="option"><a onClick={handleClickCategory1}>{t("all")}</a></li>
                    <li className="option"><a onClick={handleClickCategory2}>{t("positive")}</a></li>
                    <li className="option"><a onClick={handleClickCategory3}>{t("negative")}</a></li>
                    <hr style={underlinePosStyle}/>
                </ul>
            </div>
            <table className="tg">
                <thead>
                <tr>
                    <th className="headComments">{t("comments")}</th>
                    <th className="headRating">{t("rating")}</th>
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