import React from 'react'

function AuthForm({children, divClassName, formClassName, ...props}) {
    return (
        <div className={`flex flex-col border-2 rounded-xl border-primaryblue ${divClassName}`}>
            <form className={`flex flex-1 flex-col ${formClassName}`} {...props}>
                {children}
            </form>
        </div>
    )
}

export default AuthForm
