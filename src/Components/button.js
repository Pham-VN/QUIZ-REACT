function Button ({className, children, ...buttonProps}) {
    return (
            <button 
                className={className}
                {...buttonProps}>
                    {children}
            </button>
                
    )
}
export default Button