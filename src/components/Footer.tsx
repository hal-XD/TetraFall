import React from "react";

const Footer = () => {
    const style = {
        margin: "0px",
        border: "1px solid black"
    };
    return (
        <div>
            <footer style= {{backgroundColor: "#ADD8e6", color: "white", textAlign: "center", margin: "0px" }}>
                <h1 style={style}>(c)2023 hal-xd</h1>
            </footer>
        </div>
    );
};

export default Footer;