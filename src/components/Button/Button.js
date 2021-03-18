import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn-primary', 'btn-outline'];

const Button = ({
children,
type,
onClick,
buttonStyle
}) => {

const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

return (
    <Link to="/">
        <button className={`btn ${checkButtonStyle}`} onClick={onClick} type={type}>
            {children}
        </button>
    </Link>
)
};

export default Button;