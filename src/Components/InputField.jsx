
function InputField({label, containerClassName, labelClassName, inputClassName, inputName,...props}){
  return (
    <div className={`flex flex-col gap-2 ${containerClassName}`}>
      <label htmlFor={inputName} className={`${labelClassName}`}>
        {label}
      </label>
      <input {...props} className={`${inputClassName}`} name={inputName} />
    </div>
  )
}

export const TextareaField = ({
    id,
    label,    
    name,
    inputclassName,
    labelclassName,
    placeholder,
    ...props
}) => {
    return (
        <div className='w-full flex flex-col items-center gap-3'>
            <label htmlFor={name} className={`text-left font-bold text-xl ${labelclassName}`}>
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
                    ${inputclassName}
                `}
                placeholder={placeholder}
                {...props}
            />
        </div>
    )
}

export default InputField
