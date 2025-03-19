import React from "react";
import { Quill } from "react-quill";

const CustomToolbar = () => {
    return (
        <div id="toolbar">
            <select className="ql-font" defaultValue="">
                <option value=""></option>
                <option value="serif"></option>
                <option value="monospace"></option>
            </select>

            <select className="ql-size" defaultValue="medium">
                <option value="small"></option>
                <option value="medium"></option>
                <option value="large"></option>
                <option value="huge"></option>
            </select>

            <button className="ql-bold"></button>
            <button className="ql-italic"></button>
            <button className="ql-underline"></button>
            <button className="ql-strike"></button>

            <button className="ql-list" value="ordered"></button>
            <button className="ql-list" value="bullet"></button>

            <button className="ql-link"></button>
            <button className="ql-image"></button>
            <button className="ql-video"></button>

            <button className="ql-clean"></button>
        </div>
    );
};

export default CustomToolbar;
