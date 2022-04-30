const Button = ({text, altText, className, onclick }) => {
    
    return (
        <button className={className} onClick={onclick}>
            {text} <span className="not-mobile">{altText}</span>
        </button>
    )
}

Button.defaultProps = {
    text: 'button',
    color: 'transparent',
}

export default Button