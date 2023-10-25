import React, { useState } from "react";
import "./Ex1EventHandling.css";

const Ex1EventHandling = () => {

    const [xPos, setXPos] = useState(0);
    const [yPos, setYPos] = useState(0);

    const [marker, setMarker] = useState([]);

    const onMouseMoveHandler = (event) => {
        setXPos(event.nativeEvent.offsetX);
        setYPos(event.nativeEvent.offsetY);
    }

    const onClickHandler = (event) => {
        setMarker([...marker, {
            id: new Date().getDate(),
            x: event.nativeEvent.offsetX - 5,
            y: event.nativeEvent.offsetY - 5,
        }]);
    };

    return (
        <div className="container">
            <div className="stats">
                {xPos}, {yPos}
                <button id="clear-btn" onClick={() => setMarker([])}>Clear</button>
            </div>

            <div className="canvas" onMouseMove={onMouseMoveHandler} onClick={onClickHandler}>
                {
                    marker.map(m => <div className="dot" key={m.id} style={{ left: m.x, top: m.y }}></div>)
                }
            </div>
        </div>
    )
}

export default Ex1EventHandling;



// Synthetic event is part of an event system that normalizes browser specific event APIs and enables writing
// applications that work seamlessly across all browsers.

// For special cases where browser native event system access is needed React provide easy and simple access.
