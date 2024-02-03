const Button = ({children, label, showLabel}) => {
    return (
        <button 
        onClick={() => {
            showLabel(label)
        }}>
            {children}
        </button>
    )
}

export default Button