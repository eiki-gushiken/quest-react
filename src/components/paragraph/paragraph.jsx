const Paragraph = ({children, color}) => {
    return (
        <p style={{color: color}}>{children.toUpperCase()}</p>
    )
}

export default Paragraph