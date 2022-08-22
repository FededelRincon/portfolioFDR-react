import React from "react";
import "./Info.css";

const Info = () => {
    return (
        <div className="container">
            <div>
                <h3>Basicos</h3>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JS</li>
                    <li>TS</li>
                </ul>
            </div>

            <div>
                <h3>Front End</h3>
                <ul>
                    {/* <li>Angular</li> */}
                    <li>React</li>
                    <li>Next</li>
                </ul>
            </div>

            <div className="hide">
                <h3>Frameworks CSS</h3>
                <ul>
                    <li>Boostrap</li>
                    <li>Material</li>
                    <li>TaildWind</li>
                </ul>
            </div>

            <div>
                <h3>Back End</h3>
                <ul>
                    <li>Express</li>
                    <li>Node</li>
                    {/* <li>Nest</li> */}
                </ul>
            </div>            

            <div>
                <h3>Mobile</h3>
                <ul>
                    <li>React-Native</li>
                </ul>
            </div>

            <div className="hide">
                <h3>Otros</h3>
                <ul>
                    <li>PhotoShop</li>
                    <li>Strapi</li>
                    <li>WorkBox</li>
                </ul>
            </div>
        </div>
    );
};

export default Info;