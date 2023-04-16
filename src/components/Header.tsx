import React from "react";

const Header = () => {
    const style = {
        paddingLeft: '5%',
        paddingTop: 0,
        paddingRight: 0,
        paddingBottom: 0,
        margin: "0px",
        border: "1px solid black"
    };
    return (
        <div>
            <header style= {{backgroundColor: "#ADD8e6", color: "white", textAlign: "left", margin: "0px" }}>
                <h1 style={style}>Tetra Fall!!</h1>
            </header>
        </div>
    );
};

export default Header;