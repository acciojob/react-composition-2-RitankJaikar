import React from "react";

export default function Modal({setShow}) {
    return (
        <div className="model-overlay">
            <button className="model-close" onClick={() => setShow(false)}>Close</button>
            <p className="model-p">This is content of the modal.</p>
        </div>
    )
}