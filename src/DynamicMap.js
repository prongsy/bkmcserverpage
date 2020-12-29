import React from "react";

function DynamicMap() {
    return (
        <div className="">
            <h2>Server Map</h2>
            <iframe src="http://173.46.250.62:8123/" title="dynmap" width='90%' height="900">
                <p>Your browser does not support iFrames</p>
            </iframe>
        </div>
    )
}

export default DynamicMap;