import React from 'react';

function Button({ onClick, children, style }) {
    return (
        <button style={style} onClick={onClick}>
            {children}
        </button>
    );
}

export default Button;