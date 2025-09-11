
export const PrimaryText = ({ classes, text }) => {
  return (
    <h1 className={`text-4xl ${classes}`}>
        {text}
    </h1>
  )
}

export const SecondaryText = ({ classes, text }) => {
  return (
    <h2 className={`text-3xl ${classes}`}>
        {text}
    </h2>
  )
}

export const TerciaryText = ({ classes, text }) => {
  return (
    <h3 className={`text-2xl ${classes}`}>
        {text}
    </h3>
  )
}
