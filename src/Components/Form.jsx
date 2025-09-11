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

export default Form
