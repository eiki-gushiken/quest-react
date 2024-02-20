const Button = ({ children, label }) => {
    return <button
        onClick={() => alert(`A label desse botão é ${label}`)}>
        {children}
    </button>
}

export default Button