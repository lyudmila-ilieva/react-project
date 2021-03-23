import React from 'react';
import './Button.css';
// import { Link } from 'react-router-dom';

const STYLES = ['btn-primary', 'btn-outline', 'btn-register'];
// const SIZES = ['btn-small', 'btn-medium'];

const Button = ({
children,
type,
onClick,
buttonStyle,
// buttonSize
}) => {

const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
// const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

return (
    // <Link to="/">
        <button className={`btn ${checkButtonStyle}`} onClick={onClick} type={type}>
            {children}
        </button>
    // </Link>
)
};

export default Button;