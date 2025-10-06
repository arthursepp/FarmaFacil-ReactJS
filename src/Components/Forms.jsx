import React from 'react'

function AuthForm({children, divClassName, formClassName, ...props}) {
    return (
        <div className={`flex flex-col border-2 rounded-xl border-blue-500 ${divClassName}`}>
            <form method='post' className={`flex flex-1 flex-col ${formClassName}`} {...props}>
                {children}
            </form>
        </div>
    )
}

export default AuthForm
