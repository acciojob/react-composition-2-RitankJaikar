import React from "react";

export default function Modal({setShow}) {
    return (
        <div className="model-overlay model" onClick={() => setShow(false)}>
            <button className="model-close" onClick={() => setShow(false)}>Close</button>
            <p className="model-p">This is the content of the modal.</p>
        </div>
    )
}