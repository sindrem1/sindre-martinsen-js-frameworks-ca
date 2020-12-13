import React from "react";

function Heading(props) {
    return (
        <div className="heading">
            <h1>{props.content}</h1>
        </div>
    );
}
export default Heading;