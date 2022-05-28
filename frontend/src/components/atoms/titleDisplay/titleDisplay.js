import React from "react";

function TitleDisplay ({title, background}) {
    return (
        <div
            style={{
                minHeight: '200px',
                backgroundColor: background ? 'rgba(234, 234, 234, 0.7)': '',
                display: 'grid',
            }}>
            <div
                style={{
                    marginTop: '55px',
                    marginLeft: '30px'
                }}>
                <h1>{title}</h1>
            </div>
        </div>
    )
}

export default TitleDisplay;