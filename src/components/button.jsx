

export default function Button({ color, fontSize, type, text, onClick }) {
    const buttonStyle = {
        color : color,
        fontSize : fontSize + "px"

    }

    return (
        <button style={buttonStyle} type = {type} onClick={onClick} >
            {text}
        </button>      
    );
}

Button.defaultProps = {
    color: "blue",
    fontSize: 12,
    type: "submit"
};