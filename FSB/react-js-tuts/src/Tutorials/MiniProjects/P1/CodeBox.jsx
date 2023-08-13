import React from 'react';
import "./CodeBox.css";



const CodeBox = () => {
    return (
        <div style="border: 1px solid gray; padding: 18px 0; width: 100%; height: fit-content; overflow-x: scroll; word-wrap: normal;">
            <div >
                <code style="width: 600px;">
                    const tutorial2 = [];
                    tutorial2[0] = "JavaScript";
                    tutorial2[1] = "Python";
                    tutorial2[2] = "C++";
                </code>
            </div>
        </div>
    )
}

export default CodeBox;