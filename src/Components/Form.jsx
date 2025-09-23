function Form({ children, ...props }) {
    return (
        <form
            {...props}
            className="
                flex
                flex-col
                gap-3
                border
                rounded-xl
                p-3
                w-[40%]
            "
        >
            {children}
        </form>
    )
}

export const NewProdutoForm = ({ children, className, ...props}) => {
    return (
        <form type='post' {...props}>
            <div className={`
                border-2
                border-blue-500
                rounded-xl
                p-5
                flex
                flex-col
                items-center
                justify-center
                ${className}
            `}>
                {children}
            </div>
        </form>
    )
}

export default Form
