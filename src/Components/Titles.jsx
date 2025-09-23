
export const PrimaryText = ({ className, text }) => {
  return (
    <h1 className={`text-4xl ${className}`}>
        {text}
    </h1>
  )
}

export const SecondaryText = ({ className, text }) => {
  return (
    <h2 className={`text-3xl ${className}`}>
        {text}
    </h2>
  )
}

export const TerciaryText = ({ className, text }) => {
  return (
    <h3 className={`text-2xl ${className}`}>
        {text}
    </h3>
  )
}
