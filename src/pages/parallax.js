import React from "react";
import style from "./parallax.module.css"
import { Parallax } from "react-parallax";
import logo from "../images/test.jpg"

const inlineStyle = {
    background: '#fff',
    left: '50%',
    top: '50%',
    position: 'absolute',
    padding: '20px',
    transform: 'translate(-50%, -50%)',
}

function Para () {
    return(
        <div>
            <Parallax bgImage={ logo } strength={500}>
                <div style={{ height: 500 }}>
                    <div style={inlineStyle} >HTML inside parallaz</div>
                </div>
            </Parallax>
            <div style={{height: '100vh' }}></div>
        </div>
    );
}


export default Para
