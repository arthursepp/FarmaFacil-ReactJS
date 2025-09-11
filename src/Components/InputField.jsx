
function InputField({ id, label, type, name, placeholder }) {
    return (
        <div className='flex flex-col gap-2'>
            <label htmlFor={name}>{label}</label>
            <input
                type={type}
                name={name}
                id={id}
                placeholder={placeholder}
                className='border rounded-2xl p-2 outline-0'
            />
        </div>
    )
}

export default InputField
