
function InputField({
    id,
    label,
    type,
    name,
    inputClasses,
    labelClasses,
    placeholder,
    ...props
}) {
    return (
        <div className='w-full flex flex-col items-center gap-3'>
            <label htmlFor={name} className={`text-left font-bold text-xl ${labelClasses}`}>
                {label}
            </label>
            <input
                type={type}
                name={name}
                id={id}
                className={`                    
                    rounded-xl
                    border-2
                    p-2
                    border-blue-500
                    outline-none
                    ${inputClasses}
                `}
                placeholder={placeholder}
                {...props}
            />
        </div>
    )
}

export const TextareaField = ({
    id,
    label,    
    name,
    inputClasses,
    labelClasses,
    placeholder,
    ...props
}) => {
    return (
        <div className='w-full flex flex-col items-center gap-3'>
            <label htmlFor={name} className={`text-left font-bold text-xl ${labelClasses}`}>
                {label}
            </label>
            <textarea                
                name={name}
                id={id}
                className={`                    
                    rounded-xl
                    border-2
                    p-2
                    border-blue-500
                    outline-none
                    ${inputClasses}
                `}
                placeholder={placeholder}
                {...props}
            />
        </div>
    )
}

export default InputField
