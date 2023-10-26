import { createRef } from "react";
import "./Ex2BuildForm.css"



const Ex2BuildForm = () => {

    const targetRef = createRef();

    const sourceRef = createRef();

    const getMessage = name =>
        name
            ? `${name}, Time is simultaneous, an intricately structured jewel that humans insist on viewing one edge at a time,when the whole design is visible in every facet.`
            : "You still haven't told me your name...";

    const onClickHandler = () => {
        targetRef.current.innerHTML = getMessage(sourceRef.current.value)
    }

    return (
        <>
            <div className="ex2_build_form">
                <input id="user-name" type="text" placeholder="Your name..." ref={sourceRef} />
                <button id="process-btn" onClick={onClickHandler}>
                    Go
                </button>
                <div id="target" ref={targetRef}>Dr.Manhattan says Hello!</div>
            </div>
        </>
    )
}



export default Ex2BuildForm;