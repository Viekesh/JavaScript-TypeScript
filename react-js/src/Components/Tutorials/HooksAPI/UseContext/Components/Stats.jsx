import React, { useContext } from "react";
import StatsCtx from "../Ctx/StatsCtx";


const Stats = () => {

    const { aqi, aqText } = useContext(StatsCtx);

    return (
        <>
            <div className="stats">
                <div className="air_quality_ring">
                    <h5 className="aq_title">Air Quality Ring</h5>
                    <h1 className="aq_num">{aqi}</h1>
                    <h1 className="aq_quality">{aqText}</h1>
                </div>
            </div>
        </>
    )
}



export default Stats;