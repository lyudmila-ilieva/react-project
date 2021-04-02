import './Button.css';

const STYLES = ['btn-primary', 'btn-outline', 'btn-register'];

const Button = ({
children,
type,
onClick,
buttonStyle,
}) => {

const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];


return (
        <button className={`btn ${checkButtonStyle}`} onClick={onClick} type={type}>
            {children}
        </button>
)
};

export default Button;