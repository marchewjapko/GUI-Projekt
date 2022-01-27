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
    const [useCategory, setUseCategory] = useState(1)
    const tableDataAll = (
        ProductRatingData.slice(0, 5).map(el => {
            return (
                <tr>
                    <td className="rowProduct">
                        {el.comment}
                    </td>
                    <td className={"rowProductRating"}>
                        <ReactStars
                            count={5}
                            size={20}
                            value={el.rating}
                            edit={false}
                            color2={'#F1C644'}/>
                        {el.date}
                    </td>
                </tr>
            );
        })
    );

    const tableDataPositive = (
        ProductRatingData.filter(e => e.rating > 2.5).slice(0, 5).map(el => {
            return (
                <tr>
                    <td className="rowProduct">
                        {el.comment}
                    </td>
                    <td className={"rowProductRating"}>
                        <ReactStars
                            count={5}
                            size={20}
                            value={el.rating}
                            edit={false}
                            color2={'#F1C644'}/>
                        {el.date}
                    </td>
                </tr>
            );
        })
    );

    const tableDataNegative = (
        ProductRatingData.filter(e => e.rating <= 2.5).slice(0, 5).map(el => {
            return (
                <tr>
                    <td className="rowProduct">
                        {el.comment}
                    </td>
                    <td className={"rowProductRating"}>
                        <ReactStars
                            count={5}
                            size={20}
                            value={el.rating}
                            edit={false}
                            color2={'#F1C644'}/>
                        {el.date}
                    </td>
                </tr>
            );
        })
    );
    const handleClickCategory1 = () => {
        setUseCategory(1)
        setUnderLinePos(
            {
                marginLeft: 0
            }
        );
    }
    const handleClickCategory2 = () => {
        setUseCategory(2)
        setUnderLinePos(
            {
                marginLeft: "33.3%"
            }
        );
    }
    const handleClickCategory3 = () => {
        setUseCategory(3)
        setUnderLinePos(
            {
                marginLeft: "66.6%"
            }
        );
    }
    return (
        <div className={"productWidget"}>
            <WidgetHead widgetTitle={t("productRatingWidgetName")}/>
            <div className={"productRatingContainer"}>
                <div className={"optionBarProduct"}>
                    <ul className={"ulProduct"}>
                        <li className="option"><a className={"aProduct"}
                          onClick={handleClickCategory1}>{t("all")}</a>
                        </li>
                        <li className="option"><a className={"aProduct"}
                          onClick={handleClickCategory2}>{t("positive")}</a></li>
                        <li className="option"><a className={"aProduct"}
                          onClick={handleClickCategory3}>{t("negative")}</a></li>
                        <hr style={underlinePosStyle} className={"productRatingUnderline"}/>
                    </ul>
                </div>
                <table className="tgProduct">
                    <tbody>
                    {useCategory === 1 ? tableDataAll : useCategory === 2 ? tableDataPositive : tableDataNegative}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ProductRatingWidget