import React from 'react';
import '../styles/Card.module.css'

function Card({ onClick, children, style }) {
    return (
        <div className="card" style={style} onClick={onClick}>
            {children}
        </div>
    );
}

export default Card;